import Config from './config'
import { bind } from './keyboard'
import { Sprite, draw as drawSprite } from './sprite'
import DinoPath from '../img/dino-right.png'

export function Hero() {
  const hero = {
    vX: 0,
    vY: 1,
    isJumping: false,
    pressed: { a: false, d: false },
    sprite: Sprite(160, 460, DinoPath, 4)
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
  if (hero.pressed.d) hero.vX = Config.moveSpeed
  if (hero.pressed.a) hero.vX = -Config.moveSpeed

  if (hero.sprite.y + hero.vY + hero.sprite.height < Config.height) {
    hero.vY += Config.gravity
  } else {
    hero.vY = 0
    hero.sprite.y = Config.height - hero.sprite.height
    hero.isJumping = false
  }
}

function onJumpKeyDown(hero) {
  if (hero.isJumping) return
  hero.vY = -Config.jumpHeight
  hero.isJumping = true
}