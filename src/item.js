import Config from './config'
import Shared from './shared'
import { Sprite, draw as drawSprite, update as updateSprite } from './sprite'
import { delObj, touches, msg, repeat } from './utils'
import { create } from './creator'
import { updateObjs, roomOffs } from './rooms'

const pickFns = {
  'foundBraveMushroom': pickBraveMushroom,
  'foundTeleMushroom': pickTeleMushroom,
  'foundPortMushroom': pickPortMushroom,
  'foundHeart': pickHeart,
  'foundGun': pickGun,
  'foundBullets': pickBullets,
  'foundKey': pickKey
}

export function Item(spriteCfg, sound, msg, room) {
  const item = {
    picked: false,
    room,
    sprite: Sprite(...spriteCfg),
    stepTime: performance.now(),
    sound: Shared.sounds[sound],
    hidden: false,
    msg
  }

  item.sprite.img = item.sprite.imgs.idle
  return item
}

export function draw(item) {
  drawSprite(item.sprite)
}

export function update(i) {
  if (touches(i.sprite, Shared.hero.sprite)) {
    pickFns[i.msg] ? pickFns[i.msg](i) : pick(i)
  }
  updateSprite(i.sprite)
}

function pick(item, show = true) {
  item.hidden = !show
  Shared.picked.items.push(item)
  delObj(item)
  Shared.objs.push(create('Text', {text: [msg(item.msg), 437, 300, 0, 3000, false, 0], id: 0}, item.room))
  item.sound.play()
}

function pickBraveMushroom(i) {
  const el = document.getElementById(Config.canvasId)
  el.style.animation ='mushroomEffect 2s linear infinite'
  Shared.speed = .15
  pick(i, true)
  Config.sounds.breath.play()
  const int = repeat(Config.mushroomDelay, Config.mushroomPlayPeriod, () => {
    Shared.speed = 1
    const idx = Shared.picked.items.findIndex(i => i.msg === 'foundBraveMushroom')
    idx !== -1 && (Shared.picked.items[idx].hidden = true)
    el.style.animation ='none'
  }, () => {
    Shared.stop && clearInterval(int)
    Config.sounds.breath.play()
    Config.sounds.heart.play()
  })
}

function pickTeleMushroom(i) {
  pick(i, false)
  const int = repeat(Config.mushroomDelay, Config.mushroomPlayPeriod, () => {
    const idx = Shared.picked.items.findIndex(i => i.msg === 'foundTeleMushroom')
    idx !== -1 && (Shared.picked.items[idx].hidden = true)
  }, () => {
    Shared.stop && clearInterval(int)
    //Config.sounds.breath.play()
    //Config.sounds.heart.play()
  })
}

function pickPortMushroom(i) {
  pick(i, false)
  const x = Shared.offsX
  const y = Shared.offsY
  Shared.offsX = Config.width * 6
  Shared.offsY = 0
  Shared.hero.sprite.x = 10
  Shared.hero.sprite.y = 100
  updateObjs(roomOffs(x, y), roomOffs(Shared.offsX, Shared.offsY))
  Shared.objs.push(create('Text', {text: [msg(i.msg), 424, 300, 0, 3000, false, 0], id: 0}, i.room))
}

function pickHeart(i) {
  Shared.hero.life++
  pick(i, false)
}

function pickBullets(i) {
  Shared.hero.bullets += Config.bulletsAmount
  pick(i, false)
}

function pickGun(i) {
  Shared.hero.gun = true
  pick(i)
}

function pickKey(i) {
  Shared.hero.key = true
  pick(i)
}