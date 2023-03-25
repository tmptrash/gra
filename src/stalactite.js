import Shared from './shared'
import { Sprite, draw as drawSprite, update as updateSprite } from './sprite'
import { touch, arr, picked } from './utils'

export function Stalactite(spriteCfg, amount = 1) {
  return {
    sprites: arr(amount, () => Sprite(...spriteCfg))
  }
}

export function draw(s) {
  const sprite = s.sprites[0]
  s.sprites.forEach((s, i) => {
    s.x = sprite.x + i * sprite.width
    drawSprite(s)
  })
}

export function update(s) {
  const heroSprite = Shared.hero.sprite
  s.sprites.forEach(s => {
    if (touch(s, heroSprite, 6)) {
      !picked('foundBraveMushroom', false) && (Shared.hero.life = 0)
      Shared.hero.hit = true
    } else updateSprite(s)
  })
}