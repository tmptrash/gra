import Config from './config'
import Shared from './shared'

export function Fps() {
  const fps = {
    time: Date.now(),
    fps: 0,
    curFps: 0,
    fpsEl: document.getElementById(Config.fpsId)
  }
  return fps
}

export function draw(fps) {
  const t = Date.now()
  if (t - fps.time > 1000) {
    fps.fps = fps.curFps
    fps.curFps = 0
    fps.time = t
  }
  Shared.ctx.fillStyle = Config.frontColor
  Shared.ctx.font = Config.frontFont
  Shared.ctx.fillText(`fps: ${fps.fps}`, 10, 20)

  fps.curFps++
}