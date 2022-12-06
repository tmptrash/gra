import Config from './config'

export class Hero {
  constructor(c) {
    this.c = c
    this.x = 160
    this.y = 460
    this.vX = 0
    this.vY = 1
    this.width = 60
    this.height = 60
  }

  update() {
    this.x += this.vX
    this.y += this.vY

    if (this.y + this.vY + this.height < Config.height) {
      this.vY += Config.gravity
    } else {
      this.vY = 0
      this.y = Config.height - this.height
    }
  }

  draw() {
    this.c.fillStyle = 'green'
    this.c.fillRect(this.x, this.y, this.width, this.height)

    this.update()
  }
}