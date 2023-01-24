import Config from './config'
import LogoPath from '../img/logo.png'
import { Sprite, draw as drawSprite } from './sprite'

export function isArr(v) {
  return Array.isArray(v)
}

export function int(n) {
  const i = Math.trunc(n)
  return (n - i < .502) ? i : i + 1
}

export function bind(handlers) {
  for (const evt in handlers) {
    window.addEventListener(evt, e => handlers[evt] && handlers[evt][e.key] && handlers[evt][e.key]())
  }
}

export function getMousePos(canvas, evt) {
  const rect = canvas.getBoundingClientRect()
  return {
    x: Math.ceil(evt.clientX / document.body.style.zoom - rect.x),
    y: Math.ceil(evt.clientY / document.body.style.zoom - rect.y)
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

export function touches(s, s1) {
  return (
    s.x <= (s1.x + s1.width)  &&
    (s.x + s.width) >= s1.x   &&
    s.y <= (s1.y + s1.height) &&
    (s.y + s.height) >= s1.y
  )
}