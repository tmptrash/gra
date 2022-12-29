import Shared from './shared'
import Config from './config'
import { Hero, draw as drawHero, update as updateHero } from './hero'
import { Sprite, left, right, down, update as updateSprite } from './sprite'
import { Fps, draw as drawFps } from './fps'
import { draw as drawSprite } from './sprite'
import { rightBarrier, leftBarrier } from './barriers'
import { Debug, draw as drawDebug } from './debug'

const objs = Shared.objs = [
  { draw: drawSprite, update: updateSprite, o: Sprite(...Config.back, onLevelLoad) },
  { draw: drawHero,   update: updateHero,   o: Hero() },
  { draw: drawFps,    update: ()=>{},       o: Fps() },
  { draw: drawDebug,  update: ()=>{},       o: Debug() }
]

function init() {
  Shared.ctx = document.getElementById(Config.canvasId).getContext('2d')
  Shared.ctx.canvas.width = Config.width
  Shared.ctx.canvas.height = Config.height
  Shared.ctx.imageSmoothingEnabled = true
  document.body.style.zoom = (1 / window.devicePixelRatio * Config.zoom);
}

function onLevelLoad(img) {
  Config.hSprites = img.width / Config.spriteSize
  Config.vSprites = img.height / Config.spriteSize
}

function animate() {
  objs.forEach(o => o.draw(o.o))
  objs.forEach(o => o.update(o.o))
  //const s = objs[1].o.sprite
  //if (rightBarrier(right(s), down(s))) console.log(rightBarrier(right(s), down(s)))
  //if (leftBarrier(left(s), down(s))) console.log(leftBarrier(left(s), down(s)))
  Config.useSetTimeout ? setTimeout(animate) : window.requestAnimationFrame(animate)
}

init()
animate()