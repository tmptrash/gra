import Config from './config'
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
  hero.sprite.x += hero.vX
  hero.sprite.y += hero.vY
  hero.vX = 0
  if (hero.pressed.d) { hero.sprite.img = hero.sprite.imgs.walkRight, hero.vX = Config.moveSpeed, hero.sprite.dir = RIGHT }
  if (hero.pressed.a) { hero.sprite.img = hero.sprite.imgs.walkLeft, hero.vX = -Config.moveSpeed, hero.sprite.dir = LEFT }
  if (hero.vX === 0) {
    if (hero.sprite.dir === RIGHT) hero.sprite.img = hero.sprite.imgs.idleRight
    else hero.sprite.img = hero.sprite.imgs.idleLeft
  }

  if (hero.sprite.y + hero.vY + hero.sprite.img.height < Config.height) {
    hero.vY += Config.gravity
  } else {
    hero.vY = 0
    hero.sprite.y = Config.height - hero.sprite.img.height
    hero.isJumping = false
  }
}

function onJumpKeyDown(hero) {
  if (hero.isJumping) return
  hero.vY = -Config.jumpHeight
  hero.isJumping = true
}