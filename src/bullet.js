import BulletPath from '../img/bullet-1.png'
import Config from './config'
import Shared from './shared'
import { RIGHT, LEFT } from './utils'
import { Sprite, draw as drawSprite, update as updateSprite } from './sprite'
import { leftBarrier, rightBarrier } from './barriers'
import { play } from './sounds'

export function Bullet() {
  return {
    sprite: Sprite({ x: 0, y: 0 }, BulletPath),
    time: 0,
    hidden: true,
    dir: RIGHT
  }
}

export function draw(bullet) {
  !bullet.hidden && drawSprite(bullet.sprite)
}

export function update(b) {
  if (b.hidden) {
    b.time = 0
    return
  }

  const h = Shared.hero
  if (b.time === 0) {
    b.time = performance.now()
    if (h.dir === LEFT) {
      b.sprite.x = h.sprite.x - 1
      b.sprite.y = h.sprite.y + h.sprite.height / 2 + Config.bulletYOffs
    } else {
      b.sprite.x = h.sprite.x + h.sprite.width + 1
      b.sprite.y = h.sprite.y + h.sprite.height / 2 + Config.bulletYOffs
    }
    b.dir = h.dir
    play(Config.sounds.fire)
  } else {
    const d = b.dir
    const t = performance.now()
    b.sprite.x += (((t - b.time) * Config.bulletSpeed) * d)
    b.time = t
    if ((d === LEFT ? leftBarrier(b.sprite) : rightBarrier(b.sprite)) || b.sprite.x < 0 || b.sprite.x > Config.width) {
      b.time = 0
      b.hidden = true
    }
  }

  updateSprite(b.sprite)
}