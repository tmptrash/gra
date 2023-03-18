import Shared from './shared'
import Config, { Msgs } from './config'
import { bind, el, css, on, picked, unbind, addAfter } from './utils'
import { room } from './rooms'
import { create } from './creator'

export function Flashlight() {
  const fl = {
    room: room(),
    el: el(Config.canvasQuery),
    handlers: [],
    listeners: Array(3)
  }
  rebind(fl)
  fl.listeners[0] = [Shared.obs, 'after-brave', updateBrightness.bind(null, fl)]
  fl.listeners[1] = [Shared.obs, 'rebind', rebind.bind(null, fl)]
  fl.listeners[2] = [Shared.obs, 'play', updateBrightness.bind(null, fl)]

  return fl
}

export function draw() {
  const roomY = Shared.offsY / Config.height
  if (roomY < Config.darknessLevel) return

  const w = Config.width
  const id = Shared.ctx.getImageData(0, 0, w, Config.height)
  const d = id.data
  const l = d.length
  const s = Shared.hero.sprite
  const sx = s.x
  const sy = s.y
  const diameter = Shared.flashlightOn ? Config.flashLightRadius : 150

  for (let i = 3, offs = 0; i < l; i += 4, offs++) {
    const y = Math.floor(offs / w)
    const x = offs % w
    const dist = Math.sqrt((x - sx) ** 2 + (y - sy) ** 2)
    d[i] = dist > diameter ? 0 : diameter - dist
  }

  Shared.ctx.putImageData(id, 0, 0)
}

export function update(fl) {
  const r = room()
  if (r !== fl.room && !picked('foundBraveMushroom', false)) {
    updateBrightness(fl)
    fl.room = r
  }
}

function rebind(fl) {
  unbind(fl.handlers)
  const keyCfg = { keydown: {}, keyup: {} }
  keyCfg.keyup[Config.useKey] = onFlashlight.bind(null, fl)
  fl.handlers = bind(keyCfg)
}

function onFlashlight(fl) {
  if (!picked('foundFlashlight')) return
  Shared.flashlightOn = !Shared.flashlightOn
  updateBrightness(fl)
  const msg = Shared.flashlightOn ? Msgs.flashlightOn : Msgs.flashlightOff
  addAfter(Config.effectsId, create('Text', {text: [msg, 437, 300, 0, 1000, false, 0], id: 0}, room()))
}

function brightness(fl, b) {
  css(fl.el, 'filter', `brightness(${b})`)
}

function updateBrightness(fl) {
  const roomY = Shared.offsY / Config.height
  if (roomY === 0) brightness(fl, 1)
  else if (roomY < Config.darknessLevel) brightness(fl, 1 - (Shared.offsY / Config.height) * Config.brighnessDec)
  else {
    if (Shared.flashlightOn) brightness(fl, 1)
    else brightness(fl, 1 - (Shared.offsY / Config.height) * Config.brighnessDec)
  }
}