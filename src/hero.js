import Config from './config'
import { bind } from './keyboard'
import { Sprite, draw as drawSprite } from './sprite'
import HeroIdlePath from '../img/idle.png'
import HeroRightPath from '../img/right.png'
import HeroLeftPath from '../img/left.png'

export function Hero() {
  const hero = {
    vX: 0,
    vY: 1,
    isJumping: false,
    pressed: { a: false, d: false },
    sprite: Sprite(160, 460, {
      idle: [HeroIdlePath, 4],
      right: [HeroRightPath, 4],
      left: [HeroLeftPath, 4]
    })
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
  if (hero.pressed.d) { hero.sprite.img = hero.sprite.imgs.right, hero.vX = Config.moveSpeed }
  if (hero.pressed.a) { hero.sprite.img = hero.sprite.imgs.left, hero.vX = -Config.moveSpeed }

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