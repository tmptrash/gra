import Shared from './shared'
import Config from './config'
import { Hero, draw as drawHero, update as updateHero } from './hero'
import { Level, draw as drawLevel, update as updateLevel } from './level'
import { updateObjs } from './screens'
import { Debug, draw as drawDebug, update as updateDebug } from './debug'
import { logo } from './utils'
import { Audio, play } from './audio'

const audio = Audio()
const objs = Shared.objs = [
  { draw: drawLevel,  update: updateLevel,  o: Level() },
  { draw: drawHero,   update: updateHero,   o: Hero(), id: Config.heroId }
]

function main() {
  Shared.ctx = document.getElementById(Config.canvasId).getContext('2d')
  Shared.ctx.canvas.width = Config.width
  Shared.ctx.canvas.height = Config.height
  document.body.style.zoom = (1 / window.devicePixelRatio * Config.zoom)
  logo()
  Shared.ctx.fillStyle = Config.frontColor
  Shared.ctx.font = Config.frontFont
  Shared.ctx.imageSmoothingEnabled = false

  Config.debug && objs.push({ draw: drawDebug, update: updateDebug, o: Debug() })
  window.addEventListener('message', e => e.data === 0 && (e.stopPropagation(), update()), true)
  updateObjs(null, 0)
  setTimeout(waitImages, Config.logoTimeout)
}

function draw() {
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
  const playBtn = document.querySelector(Config.playQuery)
  playBtn.addEventListener('click', start)
  playBtn.style.display = ''
}

function start() {
  const playBtn = document.querySelector(Config.playQuery)
  playBtn.style.display = 'none'

  play(audio)
  update()
  draw()
}

main()