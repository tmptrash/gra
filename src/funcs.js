import Config from './config'
import Shared from './shared'

let uniqueId = 0

export function id() {
  return ++uniqueId
}

export function pickMushroom(i, pick) {
  const el = document.getElementById(Config.canvasId)
  el.style.animation ='colorRotate 2s linear infinite'
  Shared.speed = .15
  pick(i, true)
  Config.sounds.breath.play()
  const int = setInterval(() => {
    Shared.stop && clearInterval(int)
    Config.sounds.breath.play()
    Config.sounds.heart.play()
  }, Config.mushroomPlayPeriod)
  setTimeout(() => {
    clearInterval(int)
    Shared.speed = 1
    const idx = Shared.picked.items.findIndex(i => i.msg === 'foundMushroom')
    idx !== -1 && (Shared.picked.items[idx].hidden = true)
    el.style.animation ='none'
  }, Config.mushroomDelay)
}

export function pickLife(i, pick) {
  Shared.hero.life++
  pick(i, false)
}

export function pickBullets(i, pick) {
  Shared.hero.bullets += Config.bulletsAmount
  pick(i, false)
}

export function pickGun(i, pick) {
  Shared.hero.gun = true
  pick(i)
}

export function pickKey(i, pick) {
  Shared.hero.key = true
  pick(i)
}