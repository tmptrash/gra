import Shared from './shared'
import Config from './config'
import { Hero, draw as drawHero } from './hero'
import { Sprite } from './sprite'
import { Fps, draw as drawFps } from './fps'
import { draw as drawSprite } from './sprite'

const back = Sprite(...Config.back)
const hero = Hero()
const fps = Fps()

function init() {
  Shared.ctx = document.getElementById(Config.canvasId).getContext('2d')
  Shared.ctx.canvas.width = Config.width
  Shared.ctx.canvas.height = Config.height
}

function animate() {
  window.requestAnimationFrame(animate)
  drawSprite(back)
  drawHero(hero)
  drawFps(fps)
}

init()
animate()