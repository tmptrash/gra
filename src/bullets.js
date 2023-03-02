import Shared from './shared'
import Config from './config'
import { Sprite, stop, draw as drawSprite } from './sprite'

export function Bullets() {
  return {
    sprite: Sprite(...Config.bullets)
  }
}

export function draw(b) {
  if (Shared.hero.bullets <= 0) return

  const s = b.sprite
  s.x = Config.bulletsPos[0]
  s.y = Config.bulletsPos[1]
  stop(s)
  drawSprite(s)

  Shared.ctx.fillStyle = Config.frontColor
  Shared.ctx.font = Config.bulletsFont
  Shared.ctx.fillText(`${Shared.hero.bullets}`, ...Config.bulletsAmountPos)
}