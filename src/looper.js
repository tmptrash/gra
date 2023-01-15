import { Sprite, draw as drawSprite, update as updateSprite } from './sprite'
import { rightBarrier, leftBarrier, xyBarrier } from './barriers'

const STEP_TIME = 17
const RIGHT = 1
const LEFT = -1

export function Looper(spriteCfg, speed, horizontal = true) {
  const looper = {
    speed,
    dir: RIGHT,
    horizontal,
    sprite: Sprite(...spriteCfg),
    stepTime: performance.now()
  }

  looper.sprite.img = looper.sprite.imgs.idleRight
  return looper
}

export function draw(l) {
  drawSprite(l.sprite)
}

export function update(l) {
  if (l.horizontal) {
    performance.now() - l.stepTime > STEP_TIME && (l.sprite.x += (l.speed * l.dir))

    if (l.dir === RIGHT && (rightBarrier(l.sprite) || !checkRightBelow(l.sprite)))
      l.dir = LEFT, l.sprite.img = l.sprite.imgs.idleLeft
    else if (l.dir === LEFT && (leftBarrier(l.sprite) || !checkLeftBelow(l.sprite)))
      l.dir = RIGHT, l.sprite.img = l.sprite.imgs.idleRight
  }

  updateSprite(l.sprite)
}

function checkRightBelow(sprite) {
  return xyBarrier(sprite.x + sprite.width, sprite.y + sprite.height + 1)
}

function checkLeftBelow(sprite) {
  return xyBarrier(sprite.x, sprite.y + sprite.height + 1)
}