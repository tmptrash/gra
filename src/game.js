import Shared from './shared'
import Config, { Msgs } from './config'
import { Hero, draw as drawHero, update as updateHero } from './hero'
import { Bullet, draw as drawBullet, update as updateBullet } from './bullet'
import { Level, draw as drawLevel, update as updateLevel } from './level'
import { updateObjs, room } from './rooms'
import { Debug, draw as drawDebug } from './debug'
import { logo, fn, on, off, el, findObjById, findObjByFn, show, hide, text, delObj, checkDesktop, resize, score } from './utils'
import { Music, play as playMusic, stop } from './music'
import { Picked, draw as drawPicked } from './picked'
import { Timer, draw as drawTimer } from './timer'
import { Effect, draw as drawEffect, update as updateEffect } from './effect'
import { Sounds } from './sounds'
import { preload } from './assets'
import { draw as drawText } from './text'
import { Bullets, draw as drawBullets } from './bullets'
import { Hearts, draw as drawHearts } from './hearts'

export function Game(animateFn) {
  const g = {
    stopped: false,
    playBtn: el(Config.playQuery),
    srcBtn: el(Config.srcQuery),
    spinner: el(Config.spinnerQuery),
    animateFn
  }
  Shared.ctx = el(`#${Config.canvasId}`).getContext('2d', { willReadFrequently: true })
  Shared.ctx.canvas.width = Config.width
  Shared.ctx.canvas.height = Config.height
  Shared.ctx.fillStyle = Config.frontColor
  Shared.ctx.font = Config.frontFont
  Shared.ctx.imageSmoothingEnabled = false

  if (!checkDesktop()) return null

  return g
}

export function start(g) {
  show(g.spinner)
  resize()
  logo()
  on(window, 'resize', resize)
  preload(onAssets.bind(null, g))
}

export function draw(g) {
  Shared.stop && drawStop(g)
}

export function update(g) {
  if (Shared.stop && !g.stopped) delObjs(), g.stopped = true
}

function drawStop(g) {
  const cfg = Config
  const sh = Shared
  const w = cfg.width
  const h = cfg.height

  if (sh.stop === cfg.gameOverId) {
    text(Msgs.gameOver, w / 2 - 80, h / 2, cfg.gameOverFont, cfg.textColor)
  } else if (sh.stop === cfg.gameCompletedId) {
    text(Msgs.youWin, w / 2 - 80, h / 2, cfg.gameOverFont, cfg.textColor)
    text(Msgs.score(score()), w / 2 - 60, h / 2 + 30, cfg.textFont, cfg.textColor)
    text(Msgs.yourTime(sh.timer.val), w / 2 - 60, h / 2 + 60, cfg.textFont, cfg.textColor)
  }

  if (!g.stopped) {
    if (sh.stop === cfg.gameOverId) sh.sounds.gameOver.play()
    else if(sh.stop === cfg.gameCompletedId) sh.sounds.win.play()
    stop(sh.music)
  }
}

function onAssets(g) {
  createObjs()
  updateObjs(null, room())
  on(g.playBtn, 'click', play.bind(null, g))
  on(g.srcBtn, 'click', onSrc)
  show(g.playBtn)
  show(g.srcBtn)
  hide(g.spinner)
}

function onSrc() {
  location = Config.src
}

function play(g) {
  hide(g.playBtn)
  hide(g.srcBtn)
  off(g.playBtn, 'click', play)
  off(g.srcBtn, 'click', onSrc)
  playMusic(Shared.music)
  g.animateFn()
}

function createObjs() {
  // Static items. Order is important!
  Shared.objs = [
    { draw: drawLevel,   update: updateLevel,  o: Level() },
    { draw: drawHero,    update: updateHero,   o: Hero(),   id: Config.heroId },
    { draw: drawBullet,  update: updateBullet, o: Bullet(), id: Config.bulletId },
    { draw: drawEffect,  update: updateEffect, o: Effect(), id: Config.effectId },
    { draw: drawBullets, update: fn,           o: Bullets() },
    { draw: drawHearts,  update: fn,           o: Hearts() },
    { draw: drawTimer,   update: fn,           o: Timer() },
    { draw: drawDebug,   update: fn,           o: Debug() },
    { draw: drawPicked,  update: fn,           o: Picked() }
  ]

  Shared.music  = Music()
  Shared.sounds = Sounds()
  Shared.picked = findObjByFn(drawPicked)
  Shared.hero   = findObjById(Config.heroId)
  Shared.bullet = findObjById(Config.bulletId)
  Shared.timer  = findObjByFn(drawTimer)
}

function delObjs() {
  while (true) {
    const o = findObjByFn(drawText) || findObjById(Config.heroId)
    if (!o) return
    else delObj(o)
  }
}