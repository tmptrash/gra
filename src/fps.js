import TitlePath from '../img/title.png'
import Shared from './shared'
import { Sprite, draw as drawSprite } from './sprite'

export function Fps() {
  const fps = {
    fTime: Date.now(),
    uTime: Date.now(),
    curFps: 0,
    curUps: 0,
    sprite: Sprite({ x: 2, y: 10 }, TitlePath)
  }
  return fps
}

export function draw(fps) {
  const t = Date.now()
  if (t - fps.fTime > 500) {
    Shared.fps = fps.curFps * 2
    fps.curFps = 0
    fps.fTime = t
  }
  fps.curFps++

  drawSprite(fps.sprite)
  Shared.ctx.fillText(`fps: ${Shared.fps}  ups: ${Shared.ups}`, 10, 30)
}

export function update(fps) {
  const t = Date.now()
  if (t - fps.uTime > 1000) {
    Shared.ups = fps.curUps
    fps.curUps = 0
    fps.uTime = t
  }

  fps.curUps++
}