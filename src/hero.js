import Config from './config'
import { bind } from './keyboard'
import { Sprite, draw as drawSprite, update as updateSprite } from './sprite'
import Shared from './shared'
import { rightBarrier, leftBarrier, downBarrier } from './barriers'

const RIGHT = 0
const LEFT = 1

export function Hero() {
  const hero = {
    vY: Config.gravity,
    dir: RIGHT,
    frameTime: 0,
    stepTime: performance.now(),
    stepSize: Config.stepTime / Config.stepSize,
    isJumping: false,
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
      a: () => hero.pressed.a = false,
      d: () => hero.pressed.d = false,
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

export function update(hero) {
  const s = hero.sprite
  const t = performance.now()
  updateSprite(s)
  hero.frameTime = Config.stepTime / Shared.ups
  hero.stepSize = Config.stepSize / Shared.ups

  // walk left or right
  if (hero.pressed.d) {
    t - hero.stepTime >= hero.frameTime && (hero.sprite.x += hero.stepSize, hero.stepTime = t)
    !hero.isJumping && (s.img = s.imgs.walkRight)
  }
  if (hero.pressed.a) {
    t - hero.stepTime >= hero.frameTime && (hero.sprite.x -= hero.stepSize, hero.stepTime = t)
    !hero.isJumping && (s.img = s.imgs.walkLeft)
  }

  // idle
  // hero.vX === 0 && !hero.isJumping && (s.img = (s.dir === RIGHT) ? s.imgs.idleRight : s.imgs.idleLeft)

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
}

function onJumpKeyDown(hero) {
  if (hero.isJumping) return
  hero.pressed.w = hero.isJumping = true
  hero.vY = -Config.jumpHeight
  hero.sprite.imgs.jumpLeft.frames.frame = hero.sprite.imgs.jumpRight.frames.frame = 0
}