import Config from './config'

export class Hero {
  constructor(c) {
    this.c = c
    this.x = 60
    this.y = 60
    this.vX = 1
    this.vY = 1
    this.width = 60
    this.height = 60
  }

  update() {
    this.x += this.vX
    this.y += this.vY
    //this.vX += this.g
    this.vY += Config.gravity
  }

  draw() {
    this.c.fillStyle = 'green'
    this.c.fillRect(this.x, this.y, this.width, this.height)

    this.update()
  }
}