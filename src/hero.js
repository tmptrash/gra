import Config from './config'
import Shared from './shared'
import { bind } from './keyboard'
import { Sprite, putLeftSide, putRightSide, putUpSide, putDownSide, draw as drawSprite, update as updateSprite } from './sprite'
import { rightBarrier, leftBarrier, topBarrier, downBarrier } from './barriers'
import { isArr } from './utils'

const RIGHT = 0
const LEFT  = 1

export function Hero() {
  const hero = {
    dir: RIGHT,
    jumpV0: Math.sqrt(Config.jumpSize / 2) * 2,
    jumpTimeDiv: 0,
    jumpStartTime: 0,
    jumpTime: 0,
    jumpY: 0,
    isJumping: false,
    fallTime: (Config.jumpTime / 2) / Config.jumpSize,
    stepTime: performance.now(),
    stepX: 0,
    pressed: { a: false, d: false, w: false },
    sprite: Sprite(...Config.hero)
  }
  bind({
    keydown: {
      a: () => (hero.pressed.a = true, hero.stepTime = performance.now(), hero.stepX = hero.sprite.x, hero.dir = LEFT ),
      d: () => (hero.pressed.d = true, hero.stepTime = performance.now(), hero.stepX = hero.sprite.x, hero.dir = RIGHT),
      w: onJumpKeyDown.bind(null, hero)
    },
    keyup: {
      a: () => (hero.pressed.a = false, hero.pressed.d && (hero.dir = RIGHT)),
      d: () => (hero.pressed.d = false, hero.pressed.a && (hero.dir = LEFT)),
      w: () => hero.pressed.w = false
    }
  })

  return hero
}

export function draw(hero) {
  // const s = hero.sprite
  // const img = s.img
  // if (img && img.frames) {
  //   Shared.ctx.fillStyle = 'red'
  //   Shared.ctx.fillRect(s.x, s.y, img.frames.width, img.height)
  //   Shared.ctx.fillStyle = '#3a3'
  //   Shared.ctx.fillRect(s.x + s.cut[0], s.y + s.cut[1], s.cut[2], s.cut[3])
  // }

  drawSprite(hero.sprite)
}

export function update(h) {
  const t = performance.now()
  const s = h.sprite
  const left = h.dir === LEFT

  // jump: v0 = sqrt(Config.jumpSize / 2) * 2, tmax = 2 * v0, y = v0 * t - t * t / 2
  h.pressed.w && onJumpKeyDown(h)
  if (h.isJumping) {
    const time = (t - h.jumpStartTime) / h.jumpTimeDiv
    s.img = left ? s.imgs.jumpLeft : s.imgs.jumpRight
    if (time > h.jumpTime) updateY(h, h.jumpY), h.isJumping = false, h.jumpTime = 0
    else updateY(h, h.jumpY - (h.jumpV0 * time - time * time / 2))
  }

  // walk: incX = Config.stepSize / (Config.stepTime / (t1 - t0))
  if (h.pressed.d || h.pressed.a) {
    updateX(h, h.stepX + (Config.stepSize / (Config.stepTime / (t - h.stepTime))) * (left ? -1 : 1))
    !h.isJumping && (s.img = (left ? s.imgs.walkLeft : s.imgs.walkRight))
  }
  
  // idle
  if (!h.isJumping && !h.pressed.d && !h.pressed.a) {
    s.img = left ? s.imgs.idleLeft : s.imgs.idleRight
  }

  // fall
  if (!h.isJumping) {
    if (h.jumpTime === 0) h.jumpTime = t
    else updateY(h, s.y + (t - h.jumpTime) / h.fallTime), h.jumpTime = t
  }

  updateSprite(s)
}

function onJumpKeyDown(hero) {
  if (hero.isJumping) return
  hero.sprite.y++
  const pos = downBarrier(hero.sprite)
  hero.sprite.y--
  if (!pos) return
  hero.pressed.w = hero.isJumping = true
  hero.jumpStartTime = performance.now()
  hero.jumpTime = 2 * hero.jumpV0
  hero.jumpTimeDiv = Config.jumpTime / hero.jumpTime
  hero.jumpY = hero.sprite.y
  hero.sprite.imgs.jumpLeft.frames.frame = hero.sprite.imgs.jumpRight.frames.frame = 0
}

function updateX(hero, newX) {
  const s = hero.sprite
  const left = hero.dir === LEFT
  s.x = newX
  const pos = left ? leftBarrier(s) : rightBarrier(s)
  if (isArr(pos)) {
    left ? putRightSide(s, pos[0]) : putLeftSide(s, pos[0])
    hero.stepTime = performance.now()
    hero.stepX = hero.sprite.x
  }
}

function updateY(hero, newY) {
  const s = hero.sprite
  let diff = newY - s.y
  Math.abs(diff) > Config.spriteSize && (diff = Config.spriteSize * Math.sign(diff))
  const down = diff > 0
  s.y += diff
  const pos = down ? downBarrier(s) : topBarrier(s)
  if (isArr(pos)) {
    if (down) putUpSide(s, pos[1]), hero.jumpTime = 0
    else putDownSide(s, pos[1])
    hero.pressed.w = hero.isJumping = false
  }
}