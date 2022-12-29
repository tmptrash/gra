import Config from './config'
import { bind } from './keyboard'
import { Sprite, draw as drawSprite, update as updateSprite } from './sprite'
import Shared from './shared'

const RIGHT = 0
const LEFT = 1

export function Hero() {
  const hero = {
    vX: 0,
    vY: 1,
    dir: RIGHT,
    isJumping: false,
    pressed: { a: false, d: false, w: false },
    sprite: Sprite(...Config.hero)
  }
  bind({
    keydown: {
      a: () => hero.pressed.a = true,
      d: () => hero.pressed.d = true,
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
    const s = hero.sprite
    Shared.ctx.fillStyle = 'red'
    Shared.ctx.fillRect(s.x + s.cut[0], s.y + s.cut[1], s.cut[2], s.cut[3])
  }

  drawSprite(hero.sprite)
}

export function update(hero) {
  const sprite = hero.sprite
  updateSprite(sprite)
  sprite.x += hero.vX
  sprite.y += hero.vY
  hero.vX = 0
  hero.pressed.w && onJumpKeyDown(hero)

  // walk left or right
  if (hero.pressed.d) {
    !hero.isJumping && (sprite.img = sprite.imgs.walkRight)
    hero.vX = Config.moveSpeed
    sprite.dir = RIGHT
  }
  if (hero.pressed.a) {
    !hero.isJumping && (sprite.img = sprite.imgs.walkLeft)
    hero.vX = -Config.moveSpeed
    sprite.dir = LEFT
  }

  // idle
  hero.vX === 0 && !hero.isJumping && (sprite.img = (sprite.dir === RIGHT) ? sprite.imgs.idleRight : sprite.imgs.idleLeft)

  // stop jumping if it's a ground
  if (sprite.y + hero.vY + sprite.img.height < Config.height) hero.vY += Config.gravity
  else { hero.vY = 0, sprite.y = Config.height - sprite.img.height, hero.isJumping = false }

  // update jump frames depending on dir
  if (hero.isJumping) {
    const dirRight = sprite.img === sprite.imgs.jumpRight
    if (sprite.dir === RIGHT) {
      sprite.img = sprite.imgs.jumpRight
      !dirRight && (sprite.img.frames.frame = sprite.imgs.jumpLeft.frames.frame)
    } else {
      sprite.img = sprite.imgs.jumpLeft
      dirRight && (sprite.img.frames.frame = sprite.imgs.jumpRight.frames.frame)
    }
  }
}

function onJumpKeyDown(hero) {
  if (hero.isJumping) return
  hero.pressed.w = hero.isJumping = true
  hero.vY = -Config.jumpHeight
  hero.sprite.imgs.jumpLeft.frames.frame = hero.sprite.imgs.jumpRight.frames.frame = 0
}