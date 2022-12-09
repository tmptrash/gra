import Config from './config'

export function Fps() {
  const fps = {
    time: Date.now(),
    fps: 0,
    fpsEl: document.getElementById(Config.fpsId),
    draw: draw
  }
  return fps
}

export function draw(fps) {
  const t = Date.now()
  if (t - fps.time > 1000) {
    fps.fpsEl.textContent = `fps: ${fps.fps}`
    fps.fps = 0
    fps.time = t
  }

  fps.fps++
}