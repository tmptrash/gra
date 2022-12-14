import Shared from './shared'
import Config from './config'
import { Hero, draw as drawHero, update as updateHero } from './hero'
import { Fps, draw as drawFps, update as updateFps } from './fps'
import { Level, draw as drawLevel, update as updateLevel } from './level'
//import { Back, draw as drawBack, update as updateBack } from './back'
import { Debug, draw as drawDebug } from './debug'
import { fn } from './utils'

const objs = Shared.objs = [
  //{ draw: drawBack,   update: updateBack,  o: Back()  },
  { draw: drawLevel,  update: updateLevel, o: Level() },
  { draw: drawHero,   update: updateHero,  o: Hero(), id: Config.heroId },
  { draw: drawFps,    update: updateFps,   o: Fps() }
]

function main() {
  Shared.ctx = document.getElementById(Config.canvasId).getContext('2d')
  Shared.ctx.canvas.width = Config.width
  Shared.ctx.canvas.height = Config.height
  Shared.ctx.fillStyle = Config.frontColor
  Shared.ctx.font = Config.frontFont
  Shared.ctx.imageSmoothingEnabled = false
  document.body.style.zoom = (1 / window.devicePixelRatio * Config.zoom);

  Config.debug && objs.push({ draw: drawDebug, update: fn, o: Debug() })
  window.addEventListener('message', e => e.data === 0 && (e.stopPropagation(), update()), true)
  waitImages()
}

function draw() {
  // TODO: should be removed soon
  Shared.ctx.clearRect(0, 0, Config.width, Config.height)
  objs.forEach(o => o.draw(o.o))
  Config.useSetTimeout ? setTimeout(draw) : requestAnimationFrame(draw)
}

function update() {
  objs.forEach(o => o.update(o.o))
  setTimeout(() => window.postMessage(0, '*'), Config.upsDelay)
}

function waitImages() {
  if (Shared.images > 0) {
    setTimeout(waitImages, 10)
    return
  }
  update()
  draw()
}

main()