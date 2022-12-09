import Config from './config'
import { KeyHandler } from './keyHandler'
import { Sprite } from './sprite'
import DinoPath from '../img/dino.png'

export class Hero extends Sprite {
  constructor() {
    super(160, 460, DinoPath, 4)
    this.vX = 0
    this.vY = 1
    this.isJumping = false
    this.pressed = { a: false, d: false }

    KeyHandler.bind({
      keydown: {
        a: this.#onLeftKeyDown.bind(this),
        d: this.#onRightKeyDown.bind(this),
        w: this.#onJumpKeyDown.bind(this)
      },
      keyup: {
        a: this.#onLeftKeyUp.bind(this),
        d: this.#onRightKeyUp.bind(this)
      }
    })
  }
  
  draw() {
    super.draw()
    this.#update()
  }

  #update() {
    this.x += this.vX
    this.y += this.vY
    this.vX = 0
    if (this.pressed.d) this.vX = Config.moveSpeed
    if (this.pressed.a) this.vX = -Config.moveSpeed

    if (this.y + this.vY + this.height < Config.height) {
      this.vY += Config.gravity
    } else {
      this.vY = 0
      this.y = Config.height - this.height
      this.isJumping = false
    }
  }

  #onLeftKeyDown() {
    this.pressed.a = true
  }
  #onLeftKeyUp() {
    this.pressed.a = false
  }

  #onRightKeyDown() {
    this.pressed.d = true
  }
  #onRightKeyUp() {
    this.pressed.d = false
  }

  #onJumpKeyDown() {
    if (this.isJumping) return
    this.vY = -Config.jumpHeight
    this.isJumping = true
  }
}