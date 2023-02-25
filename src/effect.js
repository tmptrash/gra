import Shared from './shared'
import Config, { Msgs } from './config'
import { bind, el, css, on, picked, unbind } from './utils'
import { addAfter, room } from './rooms'
import { create } from './creator'

export function Effect() {
  const e = {
    light: false,
    room: room(),
    el: el(`#${Config.canvasId}`),
    handlers: []
  }
  rebind(e)
  on(Shared.obs, 'after-brave', updateBrightness.bind(null, e))
  on(Shared.obs, 'rebind', rebind.bind(null, e))

  return e
}

export function draw(e) {
  const roomY = Shared.offsY / Config.height
  if (roomY < Config.darknessLevel) return

  const w = Config.width
  const id = Shared.ctx.getImageData(0, 0, w, Config.height)
  const d = id.data
  const l = d.length
  const s = Shared.hero.sprite
  const sx = s.x
  const sy = s.y
  const diameter = e.light ? Config.lightRadius : 150

  for (let i = 3, offs = 0; i < l; i += 4, offs++) {
    const y = Math.floor(offs / w)
    const x = offs % w
    const dist = Math.sqrt((x - sx) ** 2 + (y - sy) ** 2)
    d[i] = dist > diameter ? 0 : diameter - dist
  }

  Shared.ctx.putImageData(id, 0, 0)
}

export function update(e) {
  const r = room()
  if (r !== e.room && !picked('foundBraveMushroom', false)) {
    updateBrightness(e)
    e.room = r
  }
}

function rebind(e) {
  unbind(e.handlers)
  const keyCfg = { keydown: {}, keyup: {} }
  keyCfg.keyup[Config.useKey] = onFlashlight.bind(null, e)
  e.handlers = bind(keyCfg)
}

function onFlashlight(e) {
  if (!picked('foundFlashlight')) return
  e.light = !e.light
  updateBrightness(e)
  const msg = e.light ? Msgs.flashlightOn : Msgs.flashlightOff
  addAfter(Config.effectId, create('Text', {text: [msg, 437, 300, 0, 1000, false, 0], id: 0}, room()))
}

function brightness(e, b) {
  css(e.el, 'filter', `brightness(${b})`)
}

function updateBrightness(e) {
  const roomY = Shared.offsY / Config.height
  if (roomY === 0) brightness(e, 1)
  else if (roomY < Config.darknessLevel) brightness(e, 1 - (Shared.offsY / Config.height) * Config.brighnessDec)
  else {
    if (e.light) brightness(e, 1)
    else brightness(e, 1 - (Shared.offsY / Config.height) * Config.brighnessDec)
  }
}