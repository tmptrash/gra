import { Sprite, draw as drawSprite, update as updateSprite } from './sprite'
import { rightBarrier, leftBarrier, topBarrier, downBarrier, xyBarrier } from './barriers'

const STEP_TIME = 17
const RIGHT = 1
const LEFT  = -1
const UP    = -1
const DOWN  = 1

export function Looper(spriteCfg, speed, horizontal = true) {
  const looper = {
    speed,
    dir: horizontal ? RIGHT : DOWN,
    horizontal,
    sprite: Sprite(...spriteCfg),
    stepTime: performance.now()
  }

  looper.sprite.img = horizontal ? looper.sprite.imgs.idleRight : looper.sprite.imgs.idleDown
  return looper
}

export function draw(l) {
  drawSprite(l.sprite)
}

export function update(l) {
  if (l.horizontal) {
    performance.now() - l.stepTime > STEP_TIME && (l.sprite.x += (l.speed * l.dir))

    if (l.dir === RIGHT && (rightBarrier(l.sprite) || !barrierRightBelow(l.sprite)))
      l.dir = LEFT, l.sprite.img = l.sprite.imgs.idleLeft
    else if (l.dir === LEFT && (leftBarrier(l.sprite) || !barrierLeftBelow(l.sprite)))
      l.dir = RIGHT, l.sprite.img = l.sprite.imgs.idleRight
  } else {
    performance.now() - l.stepTime > STEP_TIME && (l.sprite.y += (l.speed * l.dir))

    if (l.dir === DOWN && (downBarrier(l.sprite) || !barrierBelowLeft(l.sprite)))
      l.dir = UP, l.sprite.img = l.sprite.imgs.idleUp
    else if (l.dir === UP && (topBarrier(l.sprite) || !barrierAboveLeft(l.sprite)))
      l.dir = DOWN, l.sprite.img = l.sprite.imgs.idleDown
  }

  updateSprite(l.sprite)
}

function barrierRightBelow(sprite) {
  return xyBarrier(sprite.x + sprite.width, sprite.y + sprite.height + 1)
}

function barrierLeftBelow(sprite) {
  return xyBarrier(sprite.x, sprite.y + sprite.height + 1)
}

function barrierBelowLeft(sprite) {
  return xyBarrier(sprite.x - 1, sprite.y + sprite.height)
}

function barrierAboveLeft(sprite) {
  return xyBarrier(sprite.x - 1, sprite.y)
}