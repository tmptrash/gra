import Shared from './shared'
import Config from './config'
import { Hero, draw as drawHero, update as updateHero } from './hero'
import { Bullet, draw as drawBullet, update as updateBullet } from './bullet'
import { Level, draw as drawLevel, update as updateLevel } from './level'
import { updateObjs, room } from './rooms'
import { Debug, draw as drawDebug } from './debug'
import { logo, fn, on, off, findObjById, findObjByDrawFn, isMobile, show, hide, text, delObj, checkDesktop, resize, score } from './utils'
import { Music, play, stop } from './music'
import { Picked, draw as drawPicked } from './picked'
import { Timer, draw as drawTimer } from './timer'
import { Sounds } from './sounds'
import { preload } from './assets'
import { draw as drawText } from './text'

let stopped = false

const playBtn = document.querySelector(Config.playQuery)
const spinner = document.querySelector(Config.spinnerQuery)

function main() {
  Shared.ctx = document.getElementById(Config.canvasId).getContext('2d')
  Shared.ctx.canvas.width = Config.width
  Shared.ctx.canvas.height = Config.height
  Shared.ctx.fillStyle = Config.frontColor
  Shared.ctx.font = Config.frontFont
  Shared.ctx.imageSmoothingEnabled = false

  if (!checkDesktop()) return
  show(spinner)
  resize()
  logo()
  on(window, 'resize', resize)
  preload(onAssets)
}

function animate() {
  Shared.ctx.clearRect(0, 0, Config.width, Config.height)
  draw()
  update()
  Config.useSetTimeout ? setTimeout(animate) : requestAnimationFrame(animate)
}

function draw() {
  Shared.objs.forEach(o => o.draw(o.o))
  Shared.stop && drawStop()
}

function update() {
  if (!Shared.stop) Shared.objs.forEach(o => o.update(o.o))
  else !stopped && removeObjs(), stopped = true
}

function onAssets() {
  createObjs()
  updateObjs(null, room())
  on(playBtn, 'click', start)
  show(playBtn)
  hide(spinner)
}

function start() {
  hide(playBtn)
  off(playBtn, 'click', start)
  play(Shared.music)
  animate()
}

function drawStop() {
  if (Shared.stop === Config.gameOverId) {
    text(Config.msgs.gameOver, Config.width / 2 - 80, Config.height / 2, Config.fontGameOver, Config.textColor)
  } else if (Shared.stop === Config.gameCompletedId) {
    text(Config.msgs.youWin, Config.width / 2 - 80, Config.height / 2, Config.fontGameOver, Config.textColor)
    text(Config.msgs.score(score()), Config.width / 2 - 60, Config.height / 2 + 30, Config.textFont, Config.textColor)
    text(Config.msgs.time(Shared.timer.val), Config.width / 2 - 55, Config.height / 2 + 60, Config.textFont, Config.textColor)
  }

  if (!stopped) {
    if (Shared.stop === Config.gameOverId) Shared.sounds.gameOver.play()
    else if(Shared.stop === Config.gameCompletedId) Shared.sounds.win.play()
    stop(Shared.music)
  }
}

function createObjs() {
  // Static items. Order is important!
  Shared.objs = [
    { draw: drawLevel,  update: updateLevel,  o: Level() },
    { draw: drawTimer,  update: fn,           o: Timer() },
    { draw: drawHero,   update: updateHero,   o: Hero(),   id: Config.heroId },
    { draw: drawBullet, update: updateBullet, o: Bullet(), id: Config.bulletId },
    { draw: drawPicked, update: fn,           o: Picked() }
  ]
  Config.debug && Shared.objs.push({ draw: drawDebug, update: fn, o: Debug() })

  Shared.music  = Music()
  Shared.sounds = Sounds()
  Shared.picked = findObjByDrawFn(drawPicked)
  Shared.hero   = findObjById(Config.heroId)
  Shared.bullet = findObjById(Config.bulletId)
  Shared.timer  = findObjByDrawFn(drawTimer)
}

function removeObjs() {
  while (true) {
    const o = findObjByDrawFn(drawText) || findObjById(Config.heroId)
    if (!o) return
    else delObj(o)
  }
}

main()