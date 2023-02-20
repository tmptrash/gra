import Shared from './shared'
import Config, { Msgs } from './config'
import { Hero, draw as drawHero, update as updateHero } from './hero'
import { Bullet, draw as drawBullet, update as updateBullet } from './bullet'
import { Level, draw as drawLevel, update as updateLevel } from './level'
import { updateObjs, room } from './rooms'
import { Debug, draw as drawDebug } from './debug'
import { logo, fn, on, off, findObjById, findObjByFn, show, hide, text, delObj, checkDesktop, resize, score } from './utils'
import { Music, play, stop } from './music'
import { Picked, draw as drawPicked } from './picked'
import { Timer, draw as drawTimer } from './timer'
import { Effect, draw as drawEffect, update as updateEffect } from './effect'
import { Sounds } from './sounds'
import { preload } from './assets'
import { draw as drawText } from './text'

let stopped = false

const playBtn = document.querySelector(Config.playQuery)
const spinner = document.querySelector(Config.spinnerQuery)

function main() {
  Shared.ctx = document.getElementById(Config.canvasId).getContext('2d', { willReadFrequently: true })
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
  draw()
  update()
  Config.useSetTimeout ? setTimeout(animate) : requestAnimationFrame(animate)
}

function draw() {
  Shared.ctx.clearRect(0, 0, Config.width, Config.height)
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
  const cfg = Config
  const w = cfg.width
  const h = cfg.height

  if (Shared.stop === cfg.gameOverId) {
    text(Msgs.gameOver, w / 2 - 80, h / 2, cfg.gameOverFont, cfg.textColor)
  } else if (Shared.stop === cfg.gameCompletedId) {
    text(Msgs.youWin, w / 2 - 80, h / 2, cfg.gameOverFont, cfg.textColor)
    text(Msgs.score(score()), w / 2 - 60, h / 2 + 30, cfg.textFont, cfg.textColor)
    text(Msgs.yourTime(Shared.timer.val), w / 2 - 60, h / 2 + 60, cfg.textFont, cfg.textColor)
  }

  if (!stopped) {
    if (Shared.stop === cfg.gameOverId) Shared.sounds.gameOver.play()
    else if(Shared.stop === cfg.gameCompletedId) Shared.sounds.win.play()
    stop(Shared.music)
  }
}

function createObjs() {
  // Static items. Order is important!
  Shared.objs = [
    { draw: drawLevel,  update: updateLevel,  o: Level() },
    { draw: drawHero,   update: updateHero,   o: Hero(),   id: Config.heroId },
    { draw: drawBullet, update: updateBullet, o: Bullet(), id: Config.bulletId },
    { draw: drawEffect, update: updateEffect, o: Effect(), id: Config.effectId },
    { draw: drawTimer,  update: fn,           o: Timer() },
    { draw: drawDebug,  update: fn,           o: Debug() },
    { draw: drawPicked, update: fn,           o: Picked() }
  ]

  Shared.music  = Music()
  Shared.sounds = Sounds()
  Shared.picked = findObjByFn(drawPicked)
  Shared.hero   = findObjById(Config.heroId)
  Shared.bullet = findObjById(Config.bulletId)
  Shared.timer  = findObjByFn(drawTimer)
}

function removeObjs() {
  while (true) {
    const o = findObjByFn(drawText) || findObjById(Config.heroId)
    if (!o) return
    else delObj(o)
  }
}

main()