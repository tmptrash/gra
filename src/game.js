import Shared from './shared'
import Config, { Msgs } from './config'
import { Hero, draw as drawHero, update as updateHero } from './hero'
import { Bullet, draw as drawBullet, update as updateBullet } from './bullet'
import { Level, draw as drawLevel, update as updateLevel } from './level'
import { updateObjs, room } from './rooms'
import { Debug, draw as drawDebug } from './debug'
import { fn, el, ons, findObjById, findObjByFn, text, delObj, checkDesktop, score, loadText, addObj, isChrome } from './utils'
import { Music, play as playMusic, stop } from './music'
import { Picked, draw as drawPicked } from './picked'
import { Timer, draw as drawTimer } from './timer'
import { Effects, draw as drawEffect, update as updateEffects } from './effects'
import { Sounds, play as playSound } from './sounds'
import { draw as drawText } from './text'
import { Bullets, draw as drawBullets } from './bullets'
import { Hearts, draw as drawHearts } from './hearts'
import { saveShared, loadShared } from './store'

export function Game() {
  const g = {
    stopped: false,
    pause: false,
    animateFn: null,
    listeners: Array(1)
  }
  const fn = animate.bind(null, g)
  g.animateFn = Config.useSetTimeout ? () => setTimeout(fn, Config.setTimeoutDelay) : () => requestAnimationFrame(fn)
  Shared.ctx = el(Config.canvasQuery).getContext('2d', { willReadFrequently: true })
  Shared.ctx.canvas.width = Config.width
  Shared.ctx.canvas.height = Config.height
  Shared.ctx.fillStyle = Config.frontColor
  Shared.ctx.font = Config.frontFont
  Shared.ctx.imageSmoothingEnabled = false
  if (!checkDesktop() || !isChrome()) return null
  loadText()
  g.listeners[0] = [Shared.obs, 'change-room', saveShared]
  ons(g.listeners)

  return g
}

export function play(g) {
  playMusic(Shared.music)
  pause(g, false)
}

export function pause(g, p = true) {
  g.pause = p
  !p && animate(g)
}

export function onPreload() {
  createObjs()
  loadShared()
  updateObjs(null, room())
  playSound(Config.sounds.menu)
}

function createObjs() {
  Shared.music  = Music()
  Shared.sounds = Sounds()

  // Static items. Order is important!
  Shared.objs = []
  addObj({ draw: drawLevel,   update: updateLevel,   o: Level() })
  addObj({ draw: drawHero,    update: updateHero,    o: Hero(),    id: Config.heroId })
  addObj({ draw: drawBullet,  update: updateBullet,  o: Bullet(),  id: Config.bulletId })
  addObj({ draw: fn,          update: fn,            o: {},        id: Config.beforeEffectsId }) // we need it only for insertion of scripts in this position
  addObj({ draw: drawEffect,  update: updateEffects, o: Effects(), id: Config.effectsId })
  addObj({ draw: drawBullets, update: fn,            o: Bullets(), id: Config.bulletsId })
  addObj({ draw: drawHearts,  update: fn,            o: Hearts() })
  addObj({ draw: drawTimer,   update: fn,            o: Timer() })
  addObj({ draw: drawDebug,   update: fn,            o: Debug() })
  addObj({ draw: drawPicked,  update: fn,            o: Picked() })

  Shared.hero   = findObjById(Config.heroId)
  Shared.bullet = findObjById(Config.bulletId)
  Shared.timer  = findObjByFn(drawTimer)
}

function animate(g) {
  if (g.pause) return
  draw(g)
  update(g)
  g.animateFn()
}

function draw(g) {
  Shared.ctx.clearRect(0, 0, Config.width, Config.height)
  Shared.objs.forEach(o => o.draw(o.o))
  Shared.stop && drawStop(g)
}

function update(g) {
  if (!Shared.stop) Shared.objs.forEach(o => o.update(o.o))
  else if (!g.stopped) delObjs(), g.stopped = true
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
    if (sh.stop === cfg.gameOverId) playSound(sh.sounds.gameOver)
    else if(sh.stop === cfg.gameCompletedId) playSound(sh.sounds.win)
    stop(sh.music)
  }
}

function delObjs() {
  while (true) {
    const o = findObjByFn(drawText) || findObjById(Config.heroId)
    if (!o) return
    else delObj(o)
  }
}