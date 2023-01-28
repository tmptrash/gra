import Shared from './shared'
import Config from './config'
import { Hero, draw as drawHero, update as updateHero } from './hero'
import { Bullet, draw as drawBullet, update as updateBullet } from './bullet'
import { Level, draw as drawLevel, update as updateLevel } from './level'
import { updateObjs } from './rooms'
import { Debug, draw as drawDebug, update as updateDebug } from './debug'
import { logo, fn, on, off, findObjById } from './utils'
import { Music, play, stop } from './music'
import { Picked, draw as drawPicked } from './picked'
import { Sounds } from './sounds'

let stopped = false

const PICKED_ID = 'picked'
const playBtn = document.querySelector(Config.playQuery)
const doc = document
// Static items. Order is important!
const objs = Shared.objs = [
  { draw: drawLevel,  update: updateLevel,  o: Level() },
  { draw: drawHero,   update: updateHero,   o: Hero(),   id: Config.heroId },
  { draw: drawBullet, update: updateBullet, o: Bullet(), id: Config.bulletId },
  { draw: drawPicked, update: fn,           o: Picked(), id: PICKED_ID }
]

function main() {
  Shared.ctx = doc.getElementById(Config.canvasId).getContext('2d')
  Shared.ctx.canvas.width = Config.width
  Shared.ctx.canvas.height = Config.height
  doc.body.style.zoom = window.innerHeight * .9 / Config.height
  logo()
  Shared.ctx.fillStyle = Config.frontColor
  Shared.ctx.font = Config.frontFont
  Shared.ctx.imageSmoothingEnabled = false

  Shared.music = Music()
  Shared.sounds = Sounds()
  Shared.picked = findObjById(objs, PICKED_ID)
  Shared.hero = findObjById(objs, Config.heroId)
  Shared.bullet = findObjById(objs, Config.bulletId)

  Config.debug && objs.push({ draw: drawDebug, update: updateDebug, o: Debug() })
  on(window, 'message', e => e.data === 0 && (e.stopPropagation(), update()), true)
  updateObjs(null, 0)
  setTimeout(waitAssets, Config.logoTimeout)
}

function draw() {
  Shared.ctx.clearRect(0, 0, Config.width, Config.height)
  objs.forEach(o => o.draw(o.o))
  if (Shared.stop) drawStop()
  Config.useSetTimeout ? setTimeout(draw) : requestAnimationFrame(draw)
}

function update() {
  if (Shared.stop) return
  objs.forEach(o => o.update(o.o))
  setTimeout(() => window.postMessage(0, '*'), Config.upsDelay)
}

function waitAssets() {
  if (Shared.assets > 0) {
    setTimeout(waitAssets, 10)
    return
  }
  on(playBtn, 'click', start)
  playBtn.style.visibility = ''
}

function start() {
  playBtn.style.display = 'none'
  off(playBtn, 'click', start)
  play(Shared.music)
  update()
  draw()
}

function drawStop() {
  Shared.ctx.fillStyle = Config.frontColor
  Shared.ctx.font = Config.fontGameOver
  if (Shared.stop === Config.gameOverId) {
    Shared.ctx.fillText('Game Over!', Config.width / 2 - 55, Config.height / 2)
  } else if (Shared.stop === Config.gameCompletedId) {
    Shared.ctx.fillText('You win!', Config.width / 2 - 45, Config.height / 2)
  }

  if (!stopped) {
    if (Shared.stop === Config.gameOverId) Shared.sounds.gameOver.play()
    else if(Shared.stop === Config.gameCompletedId) Shared.sounds.win.play()
    stop(Shared.music)
    stopped = true
  }
}

main()