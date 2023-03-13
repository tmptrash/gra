import Shared from './shared'
import Config, { id } from './config'
import { Sprite, draw as drawSprite, update as updateSprite } from './sprite'
import { play } from './sounds'

export function Water(x0, y0, x1, y1, size, deep, dropCfg) {
  return {
    x0,
    y0,
    x1,
    y1,
    cx0: x0 + (x1 - x0) / 3,
    cy0: y0 - 5,
    cx1: x1 - (x1 - x0) / 3,
    cy1: y1 + 5,
    cy0i: .1,
    cy1i: .1,
    size,
    deep,
    inWater: false,
    dropSprite: Sprite(...dropCfg),
    lastFrame: true,
    id: id()
  }
}

export function draw(w) {
  const c = Shared.ctx
  c.fillStyle = Config.waterColor
  c.globalAlpha = .4
  c.fillRect(w.x0, w.y0 - 1, w.x1 - w.x0, w.y1 - w.y0 + w.deep)
  c.strokeStyle = Config.waterColor
  c.lineWidth = 3
  c.beginPath()
  c.moveTo(w.x0, w.y0)
  c.bezierCurveTo(w.cx0, w.cy0, w.cx1, w.cy1, w.x1, w.y1)
  c.stroke()
  c.globalAlpha = 1
  !w.lastFrame && drawSprite(w.dropSprite)
}

export function update(w) {
  const s = Shared.hero.sprite
  const inWater = s.x > w.x0 && s.x < w.x1 - 5 && s.y + s.height > w.y0 + 2 && s.y + s.height < w.y0 + w.deep
  const frames = w.dropSprite.img.frames
  if (inWater) Shared.hero.inWater = w.id
  else if (Shared.hero.inWater === w.id) Shared.hero.inWater = false
  w.cy0 += w.cy0i
  w.cy1 += w.cy1i
  if (w.cy0 > w.y0 + w.size || w.cy0 < w.y0 - w.size) w.cy0i *= -1
  if (w.cy1 > w.y1 + w.size || w.cy1 < w.y1 - w.size) w.cy1i *= -1
  if (!w.inWater && inWater) {
    w.inWater = true
    w.lastFrame = false
    w.dropSprite.img.frames.frame = 0
    w.dropSprite.x = s.x + s.width / 2 - w.dropSprite.width / 2
    w.dropSprite.y = w.y0 - w.dropSprite.height
    play(Config.sounds.jumpInWater)
  } else if (!inWater) w.inWater = false
  !w.lastFrame && updateSprite(w.dropSprite)
  if (!w.lastFrame && frames.frame === 0) w.lastFrame = true
}