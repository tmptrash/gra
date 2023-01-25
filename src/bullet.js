import BulletPath from '../img/bullet.png'
import Config from './config'
import Shared from './shared'
import { RIGHT, LEFT } from './utils'
import { Sprite, draw as drawSprite, update as updateSprite } from './sprite'


export function Bullet() {
  const bullet = {
    sprite: Sprite({ x: 0, y: 0 }, BulletPath),
    time: 0,
    hidden: true,
    dir: RIGHT
  }

  return bullet
}

export function draw(bullet) {
  !bullet.hidden && drawSprite(bullet.sprite)
}

export function update(bullet) {
  if (bullet.hidden) return

  const h = Shared.hero
  if (bullet.time === 0) {
    bullet.time = performance.now()
    if (h.dir === LEFT) {
      bullet.sprite.x = h.sprite.x - 1
      bullet.sprite.y = h.sprite.y + h.sprite.height / 2 + Config.bulletYOffs
    } else {
      bullet.sprite.x = h.sprite.x + h.sprite.width + 1
      bullet.sprite.y = h.sprite.y + h.sprite.height / 2 + Config.bulletYOffs
    }
    bullet.dir = h.dir
    Config.sounds.fire.play()
  } else {
    const t = performance.now()
    bullet.sprite.x += (((t - bullet.time) * Config.bulletSpeed) * bullet.dir)
    bullet.time = t
    // TODO: add barriers check here
    if (bullet.sprite.x < 0 || bullet.sprite.x > Config.width) {
      bullet.time = 0
      bullet.hidden = true
    }
  }

  updateSprite(bullet.sprite)
}