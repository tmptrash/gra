import Shared from './shared'
import Config from './config'
import { Hero, draw as drawHero, update as updateHero } from './hero'
import { Sprite, update as updateSprite } from './sprite'
import { Fps, draw as drawFps } from './fps'
import { draw as drawSprite } from './sprite'

const objs = [
  { draw: drawSprite, update: updateSprite, o: Sprite(...Config.back) },
  { draw: drawHero,   update: updateHero,   o: Hero() },
  { draw: drawFps,    update: ()=>{},       o: Fps() }
]

function init() {
  Shared.ctx = document.getElementById(Config.canvasId).getContext('2d')
  Shared.ctx.canvas.width = Config.width
  Shared.ctx.canvas.height = Config.height
  Shared.ctx.imageSmoothingEnabled = true
  document.body.style.zoom = (1 / window.devicePixelRatio * Config.zoom);
}

function animate() {
  window.requestAnimationFrame(animate)
  objs.forEach(o => o.draw(o.o))
  objs.forEach(o => o.update(o.o))
}

init()
animate()