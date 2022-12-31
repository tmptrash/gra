import Shared from './shared'
import Config from './config'
import { Hero, draw as drawHero, update as updateHero } from './hero'
import { Sprite, update as updateSprite } from './sprite'
import { Fps, draw as drawFps } from './fps'
import { draw as drawSprite } from './sprite'
//import { rightBarrier, leftBarrier, downBarrier } from './barriers'
import { Debug, draw as drawDebug } from './debug'

const objs = [
  { draw: drawSprite, update: updateSprite, o: Sprite(...Config.back, onLevelLoad) },
  { draw: drawHero,   update: updateHero,   o: Hero() },
  { draw: drawFps,    update: ()=>{},       o: Fps() }
]

function init() {
  Shared.ctx = document.getElementById(Config.canvasId).getContext('2d')
  Shared.ctx.canvas.width = Config.width
  Shared.ctx.canvas.height = Config.height
  Shared.ctx.imageSmoothingEnabled = true
  document.body.style.zoom = (1 / window.devicePixelRatio * Config.zoom);
  Config.debug && objs.push({ draw: drawDebug, update: () => { }, o: Debug(objs) })
}

function onLevelLoad(img) {
  Config.hSprites = img.width / Config.spriteSize
  Config.vSprites = img.height / Config.spriteSize
}

function animate() {
  objs.forEach(o => o.draw(o.o))
  objs.forEach(o => o.update(o.o))
  const s = objs[1].o.sprite
  //if (rightBarrier(s)) console.log(rightBarrier(s))
  //if (leftBarrier((s)) console.log(leftBarrier(s))
  //if (downBarrier(s)) console.log(downBarrier(s))
  Config.useSetTimeout ? setTimeout(animate) : window.requestAnimationFrame(animate)
}

init()
animate()