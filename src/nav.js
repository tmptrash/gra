import Shared from './shared'
import Config from './config'
import { logo, on, fire, el, css, show, hide, resize, fullscreen } from './utils'
import { preload } from './assets'
import { play, pause, onPreload } from './game'
import { play as playSound, stop as stopSound } from './sounds'
import { play as playMusic, stop as stopMusic } from './music'
import { reset } from './store'

export function Nav(game, settings) {
  if (!game) return null
  const n = {
    playBtn: el(Config.playQuery),
    menuBtn: el(Config.menuQuery),
    replayBtn: el(Config.replayQuery),
    helpBtn: el(Config.helpQuery),
    cfgBtn: el(Config.cfgQuery),
    srcBtn: el(Config.srcQuery),
    helpWnd: el(Config.helpWndQuery),
    helpClose: el(Config.helpCloseQuery),
    spinner: el(Config.spinnerQuery),
    settingsEl: el(Config.settingsQuery),
    contentEl: el(Config.contentQuery),
    vol: el(Config.volumeQuery),
    volLabel: el(Config.volumeLabelQuery),
    game,
    settings
  }
  on(Shared.obs, 'cfg', onSetCfg)
  on(Shared.obs, 'change-room', onHelpClose.bind(null, n))

  return n
}

export function start(n) {
  resize()
  show(n.spinner)
  logo()
  on(window, 'resize', resize)
  preload(onAssets.bind(null, n))
}

function onAssets(n) {
  on(n.menuBtn, 'click', onMenu.bind(null, n))
  on(n.replayBtn, 'click', onReplay)
  on(n.helpBtn, 'click', onHelp.bind(null, n))
  on(n.helpClose, 'click', onHelpClose.bind(null, n))
  on(n.playBtn, 'click', onPlay.bind(null, n))
  on(n.srcBtn, 'click', onSrc)
  on(n.cfgBtn, 'click', onCfg.bind(null, n))
  hide(n.spinner)
  show([n.playBtn, n.cfgBtn, n.srcBtn])
  onPreload()
}

function onMenu(n) {
  pause(n.game)
  logo()
  stopMusic(Shared.music)
  playSound(Config.sounds.menu)
  hide([n.menuBtn, n.replayBtn, n.helpBtn, n.settingsEl, n.vol, n.volLabel])
  show([n.contentEl, n.playBtn, n.cfgBtn, n.srcBtn])
  css(Config.canvasQuery, 'filter', 'none')
}

function onReplay() {
  reset()
  location.reload()
}

function onHelp(n) {
  hide(n.helpBtn)
  show(n.helpWnd)
}

function onHelpClose(n) {
  hide(n.helpWnd)
  show(n.helpBtn)
}

function onPlay(n) {
  show([n.contentEl, n.menuBtn, n.replayBtn, n.helpBtn, n.vol, n.volLabel])
  hide([n.settingsEl, n.playBtn, n.cfgBtn, n.srcBtn])
  play(n.game)
  stopSound(Config.sounds.menu)
  playMusic(Shared.music)
  Config.fullscreen && fullscreen()
  fire('play')
}

function onCfg(n) {
  show([n.menuBtn, n.settingsEl])
  hide([n.contentEl, n.cfgBtn])
}

function onSrc() {
  location = Config.src
}

function onSetCfg(p) {
  p.detail.f === 'fullscreen' && fullscreen()
}