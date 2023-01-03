import Config from './config'
import { bind } from './keyboard'
import { Sprite, draw as drawSprite, update as updateSprite } from './sprite'
import Shared from './shared'
import { rightBarrier, leftBarrier, downBarrier } from './barriers'

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
    pressed: { a: false, d: false, w: false },
    sprite: Sprite(...Config.hero)
  }
  bind({
    keydown: {
      a: () => (hero.pressed.a = true, hero.dir = LEFT),
      d: () => (hero.pressed.d = true, hero.dir = RIGHT),
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
    // const s = hero.sprite
    // Shared.ctx.fillStyle = 'green'
    // Shared.ctx.fillRect(s.x, s.y, s.img.frames.width, s.img.height)
    // Shared.ctx.fillStyle = 'red'
    // Shared.ctx.fillRect(s.x + s.cut[0], s.y + s.cut[1], s.cut[2], s.cut[3])
  }

  drawSprite(hero.sprite)
}

// export function update(hero) {
//   const s = hero.sprite
//   updateSprite(s)

//   s.x += hero.vX, (hero.vX > 0 ? rightBarrier(s) : leftBarrier(s)) && (s.x -= hero.vX)
//   s.y += hero.vY, hero.vY > 0 && downBarrier(s) && (s.y -= hero.vY, hero.vY = 0, hero.isJumping = false)
//   hero.vX = 0
//   hero.pressed.w && onJumpKeyDown(hero)

//   // walk left or right
//   if (hero.pressed.d) {
//     !hero.isJumping && (s.img = s.imgs.walkRight)
//     hero.vX = Config.moveSpeed
//     s.dir = RIGHT
//   }
//   if (hero.pressed.a) {
//     !hero.isJumping && (s.img = s.imgs.walkLeft)
//     hero.vX = -Config.moveSpeed
//     s.dir = LEFT
//   }

//   // idle
//   hero.vX === 0 && !hero.isJumping && (s.img = (s.dir === RIGHT) ? s.imgs.idleRight : s.imgs.idleLeft)

//   // stop jumping if it's a ground
//   if (s.y + s.img.height < Config.height) hero.vY += Config.gravity
//   else { hero.vY = 0, s.y = Config.height - s.img.height, hero.isJumping = false }

//   // update jump frames depending on dir
//   if (hero.isJumping) {
//     const dirRight = s.img === s.imgs.jumpRight
//     if (s.dir === RIGHT) {
//       s.img = s.imgs.jumpRight
//       !dirRight && (s.img.frames.frame = s.imgs.jumpLeft.frames.frame)
//     } else {
//       s.img = s.imgs.jumpLeft
//       dirRight && (s.img.frames.frame = s.imgs.jumpRight.frames.frame)
//     }
//   }
// }

export function update(h) {
  const t = performance.now()
  const s = h.sprite
  const left = h.dir === LEFT

  // jump (v0 = sqrt(Config.jumpSize / 2) * 2, tmax = 2 * v0, y = v0 * t - t * t / 2)
  h.pressed.w && onJumpKeyDown(h)
  if (h.isJumping) {
    const time = (t - h.jumpStartTime) / h.jumpTimeDiv
    s.img = left ? s.imgs.jumpLeft : s.imgs.jumpRight
    if (time > h.jumpTime) h.isJumping = false, s.y = h.jumpY
    else s.y = h.jumpY - (h.jumpV0 * time - time * time / 2)
  }

  // walk right or left
  if (h.pressed.d || h.pressed.a) {
    const div = Shared.ups / (1000 / Config.stepTime)
    const stepSize = Config.stepSize / div
    t - h.stepTime >= Config.stepTime / div && (s.x += (stepSize * (left ? -1 : 1)), h.stepTime = t)
    !h.isJumping && (s.img = (left ? s.imgs.walkLeft : s.imgs.walkRight))
  }

  // idle
  if (!h.isJumping && !h.pressed.d && !h.pressed.a) {
    s.img = left ? s.imgs.idleLeft : s.imgs.idleRight
  }

  // // stop jumping if it's a ground
  // if (s.y + s.img.height < Config.height) hero.vY += Config.gravity
  // else { hero.vY = 0, s.y = Config.height - s.img.height, hero.isJumping = false }

  // // update jump frames depending on dir
  // if (hero.isJumping) {
  //   const dirRight = s.img === s.imgs.jumpRight
  //   if (s.dir === RIGHT) {
  //     s.img = s.imgs.jumpRight
  //     !dirRight && (s.img.frames.frame = s.imgs.jumpLeft.frames.frame)
  //   } else {
  //     s.img = s.imgs.jumpLeft
  //     dirRight && (s.img.frames.frame = s.imgs.jumpRight.frames.frame)
  //   }
  // }
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