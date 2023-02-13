import Config from './config'
import Shared from './shared'
import { Sprite, draw as drawSprite, update as updateSprite } from './sprite'
import { rightBarrier, leftBarrier, topBarrier, downBarrier, xyBarrier } from './barriers'
import { touch, delObj, LEFT, RIGHT, UP, DOWN } from './utils'

const CHECK_PERIOD = 500

export function Enemy(spriteCfg, speed, horizontal) {
  const enemy = {
    speed,
    dir: horizontal ? RIGHT : DOWN,
    horizontal,
    sprite: Sprite(...spriteCfg),
    stepTime: performance.now(),
    speedTime: performance.now(),
    touchTime: 0
  }

  enemy.sprite.img = horizontal ? enemy.sprite.imgs.idleRight : enemy.sprite.imgs.idleDown
  return enemy
}

export function draw(e) {
  drawSprite(e.sprite)
}

export function update(e) {
  const t = performance.now()
  const s = e.sprite

  if (e.horizontal) {
    if (t - e.stepTime > Config.objTick) {
      s.x += (e.speed * Shared.speed * e.dir)
      e.stepTime = performance.now()
    }

    if (e.dir === RIGHT && (rightBarrier(s) || !right(s) || s.x + s.width > Config.width))
      e.dir = LEFT, s.img = s.imgs.idleLeft
    else if (e.dir === LEFT && (leftBarrier(s) || !left(s) || s.x < 0))
      e.dir = RIGHT, s.img = s.imgs.idleRight
  } else {
    if (t - e.stepTime > Config.objTick) {
      s.y += (e.speed * Shared.speed * e.dir)
      e.stepTime = performance.now()
    }

    if (e.dir === DOWN && (downBarrier(s) || !down(s) || s.y + s.height > Config.height))
      e.dir = UP, s.img = s.imgs.idleUp
    else if (e.dir === UP && (topBarrier(s) || !up(s) || s.y < 0))
      e.dir = DOWN, s.img = s.imgs.idleDown
  }

  if (touch(s, Shared.hero.sprite, Config.intersectionOffs) && (t - e.touchTime > Config.touchDelay)) {
    Shared.hero.hit = true
    e.touchTime = t
  }

  if (!Shared.bullet.hidden && touch(s, Shared.bullet.sprite)) {
    delObj(e)
    Shared.sounds.bugDie.play()
    Shared.bullet.hidden = true
  }

  // update frames speed
  if (t - e.speedTime > CHECK_PERIOD) {
    s.img.frames.speed = Shared.speed
    e.speedTime = t
  }

  updateSprite(s)
}

function right(sprite) {
  return xyBarrier(sprite.x + sprite.width, sprite.y + sprite.height + 1)
}

function left(sprite) {
  return xyBarrier(sprite.x, sprite.y + sprite.height + 1)
}

function down(sprite) {
  return xyBarrier(sprite.x - 1, sprite.y + sprite.height)
}

function up(sprite) {
  return xyBarrier(sprite.x - 1, sprite.y)
}