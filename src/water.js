import Shared from './shared'
import Config from './config'

export function Water(x0, y0, x1, y1, size, deep) {
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
    deep
  }
}

export function draw(w) {
  const c = Shared.ctx
  c.fillStyle = Config.waterColor
  c.globalAlpha = .4
  c.fillRect(w.x0, w.y0 - 1, w.x1 - w.x0, w.y1 - w.y0 + w.deep)
  c.strokeStyle = Config.waterColor
  c.lineWidth = 3;
  c.beginPath()
  c.moveTo(w.x0, w.y0)
  c.bezierCurveTo(w.cx0, w.cy0, w.cx1, w.cy1, w.x1, w.y1)
  c.stroke()
  c.globalAlpha = 1
}

export function update(w) {
  const s = Shared.hero.sprite
  const inWater = s.x > w.x0 + 5 && s.x < w.x1 - 5 && s.y + s.height > w.y0 + 2 && s.y + s.height < w.y0 + w.deep
  Shared.hero.stepSound = inWater ? Config.sounds.waterSteps : Config.sounds.steps
  Shared.hero.stepSpeed = inWater ? Config.stepSpeed / 2 : Config.stepSpeed
  w.cy0 += w.cy0i
  w.cy1 += w.cy1i
  if (w.cy0 > w.y0 + w.size || w.cy0 < w.y0 - w.size) w.cy0i *= -1
  if (w.cy1 > w.y1 + w.size || w.cy1 < w.y1 - w.size) w.cy1i *= -1
}