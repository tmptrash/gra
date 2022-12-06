import Config from './config'

export class Scene {
  constructor(c) {
    this.c = c
    this.time = Date.now()
    this.fps = 0
    this.fpsEl = document.getElementById('fps')
    this.drawFps()
  }

  draw() {
    this.c.fillStyle = Config.backColor
    this.c.fillRect(0, 0, canvas.width, canvas.height)

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