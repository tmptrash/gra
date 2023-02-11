import Config from './config'
import Shared from './shared'
import { bind, LEFT, RIGHT } from './utils'
import { rightBarrier, leftBarrier, topBarrier, downBarrier } from './barriers'
import { Sprite, draw as drawSprite, update as updateSprite, stop, setImg } from './sprite'
import { updateObjs, room } from './rooms'

export function Hero() {
  const hero = {
    t: 0,
    dir: RIGHT,
    jumpV0: Math.sqrt(Config.jumpSize / 2) * 2,
    jumpTimeDiv: 0,
    jumpStartTime: 0,
    jumpTime: 0,
    jumpY: 0,
    jumpBarrier: false,
    isJumping: false,
    fallTime: (Config.jumpTime / 2) / Config.jumpSize,
    pressed: { a: false, d: false, w: false },
    sprite: Sprite(...Config.hero),
    bulletsSprite: Sprite(...Config.bullets),
    lifeSprite: Sprite(...Config.heart),
    life: Config.startLifes,
    bullets: 0,
    hit: false,
    hitTime: performance.now(),
    gun: false,
    fire: false,
    key: false,
    lendBefore: false
  }
  const keyCfg = { keydown: {}, keyup: {} }
  keyCfg.keydown[Config.leftKey]  = () => (hero.pressed.a = true, hero.dir = LEFT)
  keyCfg.keydown[Config.rightKey] = () => (hero.pressed.d = true, hero.dir = RIGHT),
  keyCfg.keydown[Config.jumpKey]  = onJumpKeyDown.bind(null, hero),
  keyCfg.keydown[Config.fireKey]  = () => (hero.gun && hero.bullets > 0 && (hero.fire = true))
  keyCfg.keyup[Config.leftKey]    = () => (hero.pressed.a = false, hero.pressed.d && (hero.dir = RIGHT)),
  keyCfg.keyup[Config.rightKey]   = () => (hero.pressed.d = false, hero.pressed.a && (hero.dir = LEFT)),
  keyCfg.keyup[Config.jumpKey]    = () => (hero.pressed.w = false)
  bind(keyCfg)
  stop(hero.lifeSprite)

  return hero
}

export function draw(hero) {
  drawSprite(hero.sprite)
  drawLife(hero)
  drawBullets(hero)
}

export function update(h) {
  const t = performance.now()
  const s = h.sprite
  h.t === 0 && (h.t = t)

  // jump: v0 = sqrt(Config.jumpSize / 2) * 2, tmax = 2 * v0, y = v0 * t - t * t / 2
  if (h.isJumping) {
    const time = (t - h.jumpStartTime) / h.jumpTimeDiv
    s.img = s.imgs[`jump${h.gun ? 'Gun' : ''}${side(h)}`]
    updateY(h, h.jumpY - (h.jumpV0 * time - time * time / 2))
  }

  // walk: x += (t - h.t) * Config.stepSpeed * h.dir
  if (h.pressed.d || h.pressed.a) {
    updateX(h, s.x + (t - h.t) * Config.stepSpeed * h.dir)
    if (!h.isJumping) {
      s.img = s.imgs[`walk${h.gun ? 'Gun' : ''}${side(h)}`]
      h.lendBefore && Config.sounds.steps.play()
    }
  }

  // idle
  if (!h.isJumping && !h.pressed.d && !h.pressed.a) {
    s.img = s.imgs[`idle${h.gun ? 'Gun' : ''}${side(h)}`]
  }

  // fall
  if (!h.isJumping) {
    updateY(h, s.y + (t - h.t) / h.fallTime)
  }

  // hit
  if (h.hit) {
    if (underMushroom()) {
      Shared.sounds.hitMushroom.play()
      h.hit = false
    } else {
      Shared.sounds.hit.play()
      if (--h.life < 1) Shared.stop = Config.gameOverId
      h.hit = false
      h.hitTime = t
    }
  }

  // hit flashing
  h.hitTime && t - h.hitTime < 150 ? setImg(h.sprite, `idleHit${side(h)}`) : h.hitTime = 0

  // fire
  if (h.fire) {
    Shared.bullet.hidden = false
    h.fire = false
    h.bullets--
  }

  updateScreen(h)
  updateSprite(s)
  h.t = t
}

function onJumpKeyDown(hero) {
  if (hero.isJumping) {
    hero.pressed.w = true
    return
  }
  hero.sprite.y++
  const pos = downBarrier(hero.sprite)
  hero.sprite.y--
  if (pos && !hero.pressed.w) {
    hero.isJumping = true
    hero.jumpStartTime = performance.now()
    hero.jumpTime = 2 * hero.jumpV0
    hero.jumpTimeDiv = Config.jumpTime / hero.jumpTime
    hero.jumpY = hero.sprite.y
    hero.sprite.imgs.jumpLeft.frames.frame = hero.sprite.imgs.jumpRight.frames.frame = 0
  }
  hero.pressed.w = true
}

function updateX(hero, newX) {
  const s = hero.sprite
  let diff = newX - s.x
  Math.abs(diff) > Config.spriteSize && (diff = (Config.spriteSize - 1) * Math.sign(diff))
  const left = diff < 0
  s.x += diff
  const pos = left ? leftBarrier(s) : rightBarrier(s)
  if (pos) {
    s.x = left ? pos[0] + 1 : pos[0] - s.width - 1
  }
}

function updateY(h, newY) {
  const s = h.sprite
  let diff = newY - s.y
  Math.abs(diff) > Config.spriteSize && (diff = (Config.spriteSize - 1) * Math.sign(diff))
  const down = diff > 0
  s.y += diff
  const pos = down ? downBarrier(s) : topBarrier(s)
  if (pos) {
    if (down) s.y = pos[1] - s.height - 1
    else s.y = pos[1] + 1
    if (h.isJumping) {
      if (!down) {
        if (!h.jumpBarrier) {
          h.jumpStartTime -= ((Config.jumpTime / 2 - (performance.now() - h.jumpStartTime)) * 2)
          h.jumpBarrier = true
        }
      } else h.isJumping = h.jumpBarrier = false
    }
    !h.lendBefore && down && Config.sounds.lending.play()
  }
  h.lendBefore = !!pos
}

function updateScreen(h) {
  const s = h.sprite

  if (s.x > Config.width) {
    updateObjs(room(), room(Shared.offsX + Config.width))
    Shared.offsX += Config.width
    s.x = 1
  } else if (s.x + s.width < 0) {
    updateObjs(room(), room(Shared.offsX - Config.width))
    Shared.offsX -= Config.width
    s.x = Config.width - s.width - 1
  } else if (s.y > Config.height) {
    updateObjs(room(), room(Shared.offsX, Shared.offsY + Config.height))
    Shared.offsY += Config.height
    s.y = 1
  } else if (s.y + s.height < 0) {
    updateObjs(room(), room(Shared.offsX, Shared.offsY - Config.height))
    Shared.offsY -= Config.height
    h.jumpY = Config.height + h.jumpY
    s.y = Config.height - 1
  }
}

function drawLife(hero) {
  const s = hero.lifeSprite
  for (let i = 0; i < hero.life; i++) {
    s.x = Config.lifePos[0] + i * (s.width + 4)
    s.y = Config.lifePos[1]
    drawSprite(s)
  }
}

function drawBullets(hero) {
  if (hero.bullets <= 0) return

  const s = hero.bulletsSprite
  s.x = Config.bulletsPos[0]
  s.y = Config.bulletsPos[1]
  stop(s)
  drawSprite(s)

  Shared.ctx.fillStyle = Config.frontColor
  Shared.ctx.font = Config.bulletsFont
  Shared.ctx.fillText(`${hero.bullets}`, ...Config.bulletsAmountPos)
}

function underMushroom() {
  return Shared.picked.items.findIndex(i => i.msg === 'foundBraveMushroom' && !i.hidden) !== -1
}

function side(hero) {
  return hero.dir === LEFT ? 'Left' : 'Right'
}