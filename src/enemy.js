import Config from './config'
import Shared from './shared'
import { Sprite, draw as drawSprite, update as updateSprite } from './sprite'
import { rightBlock, leftBlock, topBlock, downBlock, xyBlock } from './blocks'
import { touch, delObj, LEFT, RIGHT, UP, DOWN, enemyId } from './utils'
import { play } from './sounds'

const CHECK_PERIOD = 500

export function Enemy(room, spriteCfg, speed, horizontal, checkBottom = true) {
  const enemy = {
    speed,
    dir: horizontal ? RIGHT : DOWN,
    horizontal,
    sprite: Sprite(...spriteCfg),
    exposionSprite: Sprite(...Config.explosion),
    explosionOn: false,
    stepTime: performance.now(),
    speedTime: performance.now(),
    touchTime: 0,
    checkBottom,
    id: enemyId([spriteCfg], room),
    hits: Config.enemyHits
  }

  enemy.sprite.img = horizontal ? enemy.sprite.imgs.idleRight : enemy.sprite.imgs.idleDown
  return enemy
}

export function draw(e) {
  drawSprite(e.sprite)
  e.explosionOn && drawSprite(e.exposionSprite)
}

export function update(e) {
  const t = performance.now()
  const s = e.sprite

  if (e.horizontal) {
    if (t - e.stepTime > Config.objTickMs) {
      s.x += (e.speed * Shared.speed * e.dir)
      e.stepTime = performance.now()
    }

    if (e.dir === RIGHT && (rightBlock(s) || e.checkBottom && !right(s) || s.x + s.width > Config.width))
      e.dir = LEFT, s.img = s.imgs.idleLeft
    else if (e.dir === LEFT && (leftBlock(s) || e.checkBottom && !left(s) || s.x < 0))
      e.dir = RIGHT, s.img = s.imgs.idleRight
  } else {
    if (t - e.stepTime > Config.objTickMs) {
      s.y += (e.speed * Shared.speed * e.dir)
      e.stepTime = performance.now()
    }

    if (e.dir === DOWN && (downBlock(s) || !down(s) || s.y + s.height > Config.height))
      e.dir = UP, s.img = s.imgs.idleUp
    else if (e.dir === UP && (topBlock(s) || !up(s) || s.y < 0))
      e.dir = DOWN, s.img = s.imgs.idleDown
  }
  // bite Mary
  if (!s.hidden && touch(s, Shared.hero.sprite, Config.intersectionOffs) && (t - e.touchTime > Config.touchDelayMs)) {
    Shared.hero.hit = true
    e.touchTime = t
  }
  // kill enemy
  if (!s.hidden && !Shared.bullet.hidden && touch(s, Shared.bullet.sprite)) {
    if (--e.hits < 1) {
      play(Shared.sounds.bugDie.cloneNode(false))
      s.hidden = e.explosionOn = Shared.killed[e.id] = true
      e.exposionSprite.x = s.x
      e.exposionSprite.y = s.y + s.height / 2 - e.exposionSprite.height / 2 - 10
      e.exposionSprite.img.frames.frame = 0
    } else play(Config.sounds.enemyHit)
    Shared.bullet.hidden = true
  }

  if (e.explosionOn && e.exposionSprite.img.frames.frame >= e.exposionSprite.img.frames.amount - 1) {
    e.explosionOn = false
    delObj(e)
  }

  // update frames speed
  if (t - e.speedTime > CHECK_PERIOD) {
    s.img.frames.speed = Shared.speed
    e.speedTime = t
  }

  updateSprite(s)
  e.explosionOn && updateSprite(e.exposionSprite)
}

function right(sprite) {
  return xyBlock(sprite.x + sprite.width, sprite.y + sprite.height + 1)
}

function left(sprite) {
  return xyBlock(sprite.x, sprite.y + sprite.height + 1)
}

function down(sprite) {
  return xyBlock(sprite.x - 1, sprite.y + sprite.height)
}

function up(sprite) {
  return xyBlock(sprite.x - 1, sprite.y)
}