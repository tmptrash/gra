import Config from './config'
import Shared from './shared'

export function Fps() {
  const fps = {
    fTime: Date.now(),
    uTime: Date.now(),
    curFps: 0,
    curUps: 0,
    fpsEl: document.getElementById(Config.fpsId)
  }
  return fps
}

export function draw(fps) {
  const t = Date.now()
  if (t - fps.fTime > 1000) {
    Shared.fps = fps.curFps
    fps.curFps = 0
    fps.fTime = t
  }
  fps.curFps++
  
  Shared.ctx.fillStyle = Config.frontColor
  Shared.ctx.font = Config.frontFont
  Shared.ctx.fillText(`fps: ${Shared.fps}`, 10, 20)
  Shared.ctx.fillText(`ups: ${Shared.ups}`, 100, 20)
}

export function update(fps) {
  const t = Date.now()
  if (t - fps.uTime > 100) {
    Shared.ups = fps.curUps * 10
    fps.curUps = 0
    fps.uTime = t
  }

  fps.curUps++
}