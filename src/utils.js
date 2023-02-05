import Config from './config'
import Shared from './shared'
import LogoPath from '../img/logo.png'
import { Sprite, draw as drawSprite } from './sprite'

export const RIGHT =  1
export const LEFT  = -1
export const UP    = -1
export const DOWN  = 1

export function isArr(v) {
  return Array.isArray(v)
}

export function int(n) {
  const i = Math.trunc(n)
  return (n - i < .502) ? i : i + 1
}

export function bind(handlers) {
  for (const evt in handlers) {
    on(window, evt, e => handlers[evt] && handlers[evt][e.code] && handlers[evt][e.code]())
  }
}

export function on(el, event, handler) {
  el.addEventListener(event, handler)
}

export function off(el, event, handler) {
  el.removeEventListener(event, handler)
}

export function getMousePos(canvas, { clientX, clientY }) {
  const rect = canvas.getBoundingClientRect()
  return {
    x: Math.ceil(clientX / document.body.style.zoom - rect.x),
    y: Math.ceil(clientY / document.body.style.zoom - rect.y)
  }
}

export function findObjById(objs, id) {
  const obj = objs.find(o => o.id === id)
  return obj ? obj.o : null
}

export function findObjIdx(objs, obj) {
  return objs.findIndex(o => o.o === obj)
}

export function fn() {}

export function logo(show = true) {
  if (show) {
    const logo = Sprite({ x: Config.logoX, y: Config.logoY }, LogoPath, onLoadLogo)

    function onLoadLogo() {
      drawSprite(logo)
    }
  }
}

export function touches(s, s1, offs = 0) {
  return (
    s.x + offs <= (s1.x + s1.width - offs)  &&
    (s.x + s.width - offs) >= s1.x + offs   &&
    s.y + offs <= (s1.y + s1.height - offs) &&
    (s.y + s.height - offs) >= s1.y + offs
  )
}

export function delObj(obj) {
  const idx = findObjIdx(Shared.objs, obj)
  idx !== -1 && Shared.objs.splice(idx, 1)
}

export function msg(msgId) {
  const msg = Config.msgs[msgId]
  if (msg) {
    return typeof msg === 'function' ? msg() : msg
  }

  return ''
}