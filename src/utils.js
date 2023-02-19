import Config, { Msgs } from './config'
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

export function mousePos(canvas, { clientX, clientY }) {
  const rect = canvas.getBoundingClientRect()
  return {
    x: Math.ceil(clientX / document.body.style.zoom - rect.x),
    y: Math.ceil(clientY / document.body.style.zoom - rect.y)
  }
}

export function findObjById(id) {
  const obj = Shared.objs.find(o => o.id === id)
  return obj ? obj.o : null
}

export function findObjByFn(drawFn) {
  const obj = Shared.objs.find(o => o.draw === drawFn)
  return obj ? obj.o : null
}

export function delObj(obj) {
  const idx = findObjIdx(obj)
  idx !== -1 && Shared.objs.splice(idx, 1)
}

export function findObjIdx(obj) {
  return Shared.objs.findIndex(o => o.o === obj)
}

export function fn() {}

export function logo(show = true) {
  if (show) {
    const logo = Sprite({ x: Config.logoPos[0], y: Config.logoPos[1] }, LogoPath, onLoadLogo)

    function onLoadLogo() {
      drawSprite(logo)
      text(Config.ver, ...Config.verPos, Config.verFont, Config.verColor)
    }
  }
}

export function touch(s, s1, offs = 0) {
  return (
    s.x + offs <= (s1.x + s1.width - offs)  &&
    (s.x + s.width - offs) >= s1.x + offs   &&
    s.y + offs <= (s1.y + s1.height - offs) &&
    (s.y + s.height - offs) >= s1.y + offs
  )
}

export function msg(msgId) {
  const m = Msgs[msgId]
  if (m) {
    return typeof m === 'function' ? m() : m
  }

  return ''
}

export function repeat(timeout, every, timeoutCb, everyCb) {
  const int = setInterval(everyCb, every)
  setTimeout(() => {
    clearInterval(int)
    timeoutCb()
  }, timeout)
  return int
}

export function show(el) {
  el.style.display = ''
}

export function hide(el) {
  el.style.display = 'none'
}

export function text(t, x, y, font, style = '#ccc') {
  Shared.ctx.fillStyle = style
  Shared.ctx.font = font
  Shared.ctx.fillText(t, x, y)
}

export function checkDesktop() {
  const isDesktop = !isMobile()
  if (!isDesktop) {
    Shared.ctx.font = Config.gameOverFont
    Shared.ctx.fillText(Msgs.noMobileSupport, 130, 300)
  }
  return isDesktop
}

export function resize() {
  document.body.style.zoom = window.innerHeight * .9 / Config.height
}

export function score() {
  let s = 0
  s += Shared.hero.life
  s += Shared.hero.bullets
  s += Shared.picked.items.length
  return s
}

function isMobile() {
  const a = navigator.userAgent || navigator.vendor || window.opera
  return /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))
}