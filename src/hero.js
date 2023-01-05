import Config from './config'
import Shared from './shared'
import { bind } from './keyboard'
import { Sprite, putLeftSide, putRightSide,  draw as drawSprite, update as updateSprite } from './sprite'
import { rightBarrier, leftBarrier, downBarrier } from './barriers'
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
  if (hero.sprite.img && hero.sprite.img.frames) {
    //const s = hero.sprite
    //Shared.ctx.fillStyle = 'green'
    //Shared.ctx.fillRect(0.5, 0, 1, 1)
    //Shared.ctx.fillStyle = '#3a3'
    //Shared.ctx.fillRect(s.x + s.cut[0], s.y + s.cut[1], s.cut[2], s.cut[3])
  }

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
    if (time > h.jumpTime) h.isJumping = false, s.y = h.jumpY
    else s.y = h.jumpY - (h.jumpV0 * time - time * time / 2)
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

  updateSprite(s)
}

function onJumpKeyDown(hero) {
  if (hero.isJumping) return
  hero.pressed.w = hero.isJumping = true
  hero.jumpStartTime = performance.now()
  hero.jumpTime = 2 * hero.jumpV0
  hero.jumpTimeDiv = Config.jumpTime / hero.jumpTime
  hero.jumpY = hero.sprite.y
  hero.sprite.imgs.jumpLeft.frames.frame = hero.sprite.imgs.jumpRight.frames.frame = 0
}

function updateX(hero, newX) {
  const s = hero.sprite
  const oldX = s.x
  const right = newX - oldX > 0
  s.x = newX
  const pos = right ? rightBarrier(s) : leftBarrier(s)
  if (isArr(pos)) {
    if (right) putLeftSide(s, pos[0])
    else putRightSide(s, pos[0])
    hero.stepTime = performance.now()
    hero.stepX = hero.sprite.x
  }
}