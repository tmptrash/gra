import Shared from './shared'
import Config from './config'
import { Sprite } from './sprite'

const LS = localStorage
const CFG = 'cfg'
const SHARE = 'share'
const CFG_FIELDS = [ 'leftKey', 'rightKey', 'jumpKey', 'fireKey', 'useKey', 'fullscreen' ]
const SHARE_FIELDS = [
  // common fields
  'offsX', 'offsY', 'showed', 'flashlightOn', 'killed',
  // special fields
  ['volume', v => v, loadVolume], ['picked', savePicked, loadPicked], ['timer', saveTimer, loadTimer], ['hero', saveHero, loadHero]
]

export function saveCfg() {
  toStore(CFG_FIELDS, CFG, Config)
}

export function loadCfg() {
  fromStore(CFG_FIELDS, CFG, Config)
}

export function saveShared() {
  toStore(SHARE_FIELDS, SHARE, Shared)
}

export function loadShared() {
  fromStore(SHARE_FIELDS, SHARE, Shared)
}

export function reset() {
  delete LS[SHARE]
}

function toStore(fields, name, from) {
  const o = {}
  fields.forEach(f => {
    const str = typeof f === 'string'
    o[str ? f : f[0]] = (str ? from[f] : f[1](from[f[0]]))
  })
  LS[name] = JSON.stringify(o)
}

function fromStore(fields, name, to) {
  try {
    const val = LS[name] && JSON.parse(LS[name])
    val && fields.forEach(f => {
      const str = typeof f === 'string'
      const v = str ? val[f] : f[2](val[f[0]])
      v !== undefined && v !== null && (to[str ? f : f[0]] = v)
    })
  } catch (e) { console.error(e) }
}

function savePicked(picked) {
  return picked && picked.map(i => {const {sprite, ...p} = i; return p})
}

function loadPicked(picked) {
  return picked && picked.map(i => ({sprite: Sprite(...i.spriteCfg), ...i}))
}

function saveTimer(timer) {
  return timer && performance.now() - timer.t
}

function loadTimer(timer) {
  if (!timer) return null
  Shared.timer.t = performance.now() - timer
  return null
}

function saveHero(h) {
  if (!h) return null
  return {
    life: h.life,
    bullets: h.bullets,
    gun: h.gun,
    key: h.key,
    pos: [h.sprite.x, h.sprite.y]
  }
}

function loadHero(h) {
  if (!h) return null
  const hero = Shared.hero
  const {pos, ...heroCfg} = h
  Object.assign(hero, heroCfg)
  hero.sprite.x = pos[0]
  hero.sprite.y = pos[1]
  return null
}

function loadVolume(v) {
  if (!v) return null
  Shared.music.el.volume = v
  Shared.music.vol.value = v * 100
  return v
}