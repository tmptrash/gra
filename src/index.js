import Shared from './shared'
import Config from './config'
import { Hero, draw as drawHero, update as updateHero } from './hero'
import { Fps, draw as drawFps, update as updateFps } from './fps'
import { Level, draw as drawLevel, update as updateLevel } from './level'
//import { rightBarrier, leftBarrier, downBarrier } from './barriers'
import { Debug, draw as drawDebug } from './debug'

const objs = [
  { draw: drawLevel,  update: updateLevel, o: Level() },
  { draw: drawHero,   update: updateHero,  o: Hero()  },
  { draw: drawFps,    update: updateFps,   o: Fps()   }
]

function init() {
  Shared.ctx = document.getElementById(Config.canvasId).getContext('2d')
  Shared.ctx.canvas.width = Config.width
  Shared.ctx.canvas.height = Config.height
  Shared.ctx.fillStyle = Config.frontColor
  Shared.ctx.font = Config.frontFont
  Shared.ctx.imageSmoothingEnabled = false
  document.body.style.zoom = (1 / window.devicePixelRatio * Config.zoom);
  Config.debug && objs.push({ draw: drawDebug, update: () => { }, o: Debug(objs) })

  window.addEventListener('message', e => e.data === 0 && (e.stopPropagation(), update()), true)
}

function draw() {
  Shared.ctx.clearRect(0, 0, Config.width, Config.height)
  objs.forEach(o => o.draw(o.o))
  //const s = objs[1].o.sprite
  //if (rightBarrier(s)) console.log(rightBarrier(s))
  //if (leftBarrier((s)) console.log(leftBarrier(s))
  //if (downBarrier(s)) console.log(downBarrier(s))
  Config.useSetTimeout ? setTimeout(draw) : requestAnimationFrame(draw)
}

function update() {
  objs.forEach(o => o.update(o.o))
  setTimeout(() => window.postMessage(0, '*'), Config.upsDelay)
}

init()
update()
draw()