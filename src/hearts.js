import Shared from './shared'
import Config from './config'
import { Sprite, stop, draw as drawSprite } from './sprite'

export function Hearts() {
  const h = {
    sprite: Sprite(...Config.heart)
  }
  stop(h.sprite)

  return h
}

export function draw(h) {
  const s = h.sprite
  for (let i = 0; i < Shared.hero.life; i++) {
    s.x = Config.lifePos[0] + i * (s.width + 4)
    s.y = Config.lifePos[1]
    drawSprite(s)
  }
}