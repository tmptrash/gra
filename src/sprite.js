import { Frames } from './frames'
import Shared from './shared'

export class Sprite extends Frames {
  constructor(x, y, src, frames = 1) {
    super(frames)
    this.x = x
    this.y = y
    this.img = new Image()
    this.img.src = src
    this.img.onload = () => this.#onLoad()
  }

  draw() {
    this.img && Shared.ctx.drawImage(
      this.img,
      this.frame * this.frameWidth,
      0,
      this.frameWidth,
      this.height,
      this.x,
      this.y,
      this.frameWidth,
      this.height
    )

    this.update()
  }

  #onLoad() {
    this.width = this.img.width
    this.height = this.img.height
    super.setWidth(this.width)
  }
}