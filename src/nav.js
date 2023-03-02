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
  on(Shared.obs, 'cfg', onSetCfg)

  return {
    playBtn: el(Config.playQuery),
    menuBtn: el(Config.menuQuery),
    replayBtn: el(Config.replayQuery),
    cfgBtn: el(Config.cfgQuery),
    srcBtn: el(Config.srcQuery),
    spinner: el(Config.spinnerQuery),
    settingsEl: el(Config.settingsQuery),
    contentEl: el(Config.contentQuery),
    vol: el(Config.volumeQuery),
    volLabel: el(Config.volumeLabelQuery),
    game,
    settings
  }
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
  on(n.playBtn, 'click', onPlay.bind(null, n))
  on(n.srcBtn, 'click', onSrc)
  on(n.cfgBtn, 'click', onCfg.bind(null, n))
  hide(n.spinner)
  show(n.playBtn)
  show(n.cfgBtn)
  show(n.srcBtn)
  onPreload()
}

function onMenu(n) {
  pause(n.game)
  logo()
  stopMusic(Shared.music)
  playSound(Config.sounds.menu)
  hide(n.menuBtn)
  hide(n.replayBtn)
  hide(n.settingsEl)
  show(n.contentEl)
  show(n.playBtn)
  show(n.cfgBtn)
  show(n.srcBtn)
  hide(n.vol)
  hide(n.volLabel)
  css(Config.canvasQuery, 'filter', 'none')
}

function onReplay() {
  reset()
  location.reload()
}

function onPlay(n) {
  hide(n.settingsEl)
  show(n.contentEl)
  show(n.menuBtn)
  show(n.replayBtn)
  show(n.vol)
  show(n.volLabel)
  hide(n.playBtn)
  hide(n.cfgBtn)
  hide(n.srcBtn)
  play(n.game)
  stopSound(Config.sounds.menu)
  playMusic(Shared.music)
  Config.fullscreen && fullscreen()
  fire('play')
}

function onCfg(n) {
  show(n.menuBtn)
  hide(n.contentEl)
  hide(n.cfgBtn)
  show(n.settingsEl)
}

function onSrc() {
  location = Config.src
}

function onSetCfg(p) {
  p.detail.f === 'fullscreen' && fullscreen()
}