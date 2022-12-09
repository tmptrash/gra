import Config from './config'

export class Frames {
  constructor(frames = 1) {
    this.frame = 0
    this.frames = frames
    this.frameWidth = 0
    this.time = Date.now()
  }

  update() {
    const t = Date.now()
    if (t - this.time > Config.frameSpeed) {
      ++this.frame >= this.frames && (this.frame = 0)
      this.time = t
    }
  }

  setWidth(width) {
    this.frameWidth = width / this.frames
  }
}