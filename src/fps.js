import Config from './config'

export class Fps {
  constructor() {
    this.time = Date.now()
    this.fps = 0
    this.fpsEl = document.getElementById(Config.fpsId)
    this.drawFps()
  }

  draw() {
    const t = Date.now()
    if (t - this.time > 1000) {
      this.drawFps()
      this.fps = 0
      this.time = t
    }

    this.fps++
  }

  drawFps() {
    this.fpsEl.textContent = `fps: ${this.fps}`
  }
}