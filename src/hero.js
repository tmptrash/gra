import Config from './config'
import Shared from './shared'
import { bind } from './keyboard'
import { Sprite, draw as drawSprite } from './sprite'

const RIGHT = 0
const LEFT = 1

export function Hero() {
  const hero = {
    vX: 0,
    vY: 1,
    dir: RIGHT,
    isJumping: false,
    pressed: { a: false, d: false },
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
      d: () => hero.pressed.d = false
    }
  })

  return hero
}
  
export function draw(hero) {
  drawSprite(hero.sprite)
  update(hero)
}

function update(hero) {
  const sprite = hero.sprite
  sprite.x += hero.vX
  sprite.y += hero.vY
  hero.vX = 0

  // walk left or right
  if (hero.pressed.d) { sprite.img = sprite.imgs.walkRight, hero.vX = Config.moveSpeed, sprite.dir = RIGHT }
  if (hero.pressed.a) { sprite.img = sprite.imgs.walkLeft, hero.vX = -Config.moveSpeed, sprite.dir = LEFT }

  // idle
  hero.vX === 0 && (sprite.img = (sprite.dir === RIGHT) ? sprite.imgs.idleRight : sprite.imgs.idleLeft)

  // jump
  if (sprite.y + hero.vY + sprite.img.height < Config.height) hero.vY += Config.gravity
  else { hero.vY = 0, sprite.y = Config.height - sprite.img.height, hero.isJumping = false }
  hero.isJumping && (sprite.img = (sprite.dir === RIGHT) ? sprite.imgs.jumpRight : sprite.imgs.jumpLeft)
}

function onJumpKeyDown(hero) {
  if (hero.isJumping) return
  hero.vY = -Config.jumpHeight
  hero.isJumping = true
  hero.sprite.imgs.jumpLeft.frames.frame = hero.sprite.imgs.jumpRight.frames.frame = 0
}