import Config from './config'
import Shared from './shared'
import { Sprite, draw as drawSprite, update as updateSprite } from './sprite'
import { delObj, touch, msg, repeat, el, css, fire, pickedIdx, picked } from './utils'
import { create } from './creator'
import { play } from './sounds'

const pickFns = {
  'foundBraveMushroom': pickBraveMushroom,
  'foundTeleMushroom': pickTeleMushroom,
  'foundHeart': pickHeart,
  'foundGun': pickGun,
  'foundBullets': pickBullets,
  'foundKey': pickKey,
  'foundFlashlight': pickFlashlight
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
  if (touch(i.sprite, Shared.hero.sprite)) {
    pickFns[i.msg] ? pickFns[i.msg](i) : pick(i)
  }
  updateSprite(i.sprite)
}

function pick(item, show = true) {
  item.hidden = !show
  Shared.picked.items.push(item)
  delObj(item)
  Shared.objs.push(create('Text', {text: [msg(item.msg), 437, 300, 0, 2000, false, 0], id: 0}, item.room))
  play(item.sound)
}

function pickBraveMushroom(i) {
  const e = el(`#${Config.canvasId}`)
  const timer = create('Countdown', [Config.mushroomDelayMs, ...Config.countdownPos])
  css(e, 'animation', 'mushroomEffect 2s linear infinite')
  css(e, 'filter', 'none')
  Shared.speed = .15
  pick(i)
  play(Config.sounds.breath)
  Shared.objs.push(timer)

  const int = repeat(Config.mushroomDelayMs, Config.braveMushroomPlayPeriosMs, () => {
    Shared.speed = 1
    const idx = pickedIdx('foundBraveMushroom')
    idx !== -1 && (Shared.picked.items[idx].hidden = true)
    css(e, 'animation', 'none')
    delObj(timer)
    fire('after-brave')
  }, () => {
    Shared.stop && clearInterval(int)
    play(Config.sounds.breath)
    play(Config.sounds.heart)
    css(e, 'filter', 'none')
    css(e, 'animation', 'mushroomEffect 2s linear infinite')
  })
}

function pickTeleMushroom(i) {
  pick(i)
  const timer = create('Countdown', [Config.mushroomDelayMs, ...Config.countdownPos])
  Shared.objs.push(timer)
  const int = repeat(Config.mushroomDelayMs, Config.teleMushroomPlayPeriosMs, () => {
    const idx = pickedIdx('foundTeleMushroom')
    idx !== -1 && (Shared.picked.items[idx].hidden = true)
    delObj(timer)
  }, () => {
    Shared.stop && clearInterval(int)
    // first we have to find a key and after that - a door
    sayDir(Shared.hero.key ? Config.doorRoom : Config.keyRoom)
  })
}

function sayDir(itemPos) {
  const roomX = Shared.offsX / Config.width
  const roomY = Shared.offsY / Config.height

  itemPos[0] < roomX && play(Config.sounds.goLeft)
  itemPos[0] > roomX && play(Config.sounds.goRight)
  setTimeout(() => {
    itemPos[1] < roomY && play(Config.sounds.goUp)
    itemPos[1] > roomY && play(Config.sounds.goDown)
  }, 1500)
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

function pickFlashlight(i) {
  pick(i, !picked('foundFlashlight'))
}