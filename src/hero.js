import Config from './config'
import Shared from './shared'
import { bind, unbind, LEFT, RIGHT, picked, on, fire } from './utils'
import { rightBarrier, leftBarrier, topBarrier, downBarrier } from './barriers'
import { Sprite, draw as drawSprite, update as updateSprite, setImg } from './sprite'
import { updateObjs, room } from './rooms'
import { play } from './sounds'

const HIT_DELAY = 150

export function Hero() {
  const hero = {
    t: 0,
    v: 0,
    dir: RIGHT,
    jumpStartTime: 0,
    isJumping: false,
    coyoteTime: 0,
    pressed: { a: false, d: false, w: false },
    sprite: Sprite(...Config.hero),
    life: Config.startLifes,
    bullets: Config.startBullets,
    gun: Config.hasGun,
    key: Config.hasKey,
    fire: false,
    hit: false,
    hitTime: performance.now(),
    lendBefore: false,
    handlers: []
  }
  rebind(hero)
  on(Shared.obs, 'rebind', rebind.bind(null, hero))

  return hero
}

export function draw(hero) {
  drawSprite(hero.sprite)
}

export function update(h) {
  const t = performance.now()
  const s = h.sprite
  const dt = (t - (h.t || (h.t = t))) / (Config.jumpSpeed * 100)

  if (h.isJumping) {
    // this is how we track if user press jump key longer to jump higher
    h.pressed.w && t - h.jumpStartTime < Config.jumpPressTimeMs && (h.v += dt * (Config.jumpVelocity / Config.gravity))
    s.img = s.imgs[`jump${h.gun ? 'Gun' : ''}${side(h)}`]
    updateY(h, s.y + dt * h.v, dt)
  }

  // walk: x += (t - h.t) * Config.stepSpeed * h.dir
  if (h.pressed.d || h.pressed.a) {
    updateX(h, s.x + (t - h.t) * Config.stepSpeed * h.dir)
    if (!h.isJumping) {
      s.img = s.imgs[`walk${h.gun ? 'Gun' : ''}${side(h)}`]
      h.lendBefore && play(Config.sounds.steps)
    }
  }

  // idle
  !h.isJumping && !h.pressed.d && !h.pressed.a && (s.img = s.imgs[`idle${h.gun ? 'Gun' : ''}${side(h)}`])

  // fall
  !h.isJumping && updateY(h, s.y + Config.fallSpeed * dt, dt)

  // hit
  if (h.hit) {
    if (picked('foundBraveMushroom', false)) play(Shared.sounds.hitMushroom), h.hit = false
    else {
      play(Shared.sounds.hit)
      if (--h.life < 1) Shared.stop = Config.gameOverId
      h.hit = false
      h.hitTime = t
    }
  }

  // hit flashing
  h.hitTime && t - h.hitTime < HIT_DELAY ? setImg(h.sprite, `idleHit${side(h)}`) : h.hitTime = 0

  // fire
  h.fire && (Shared.bullet.hidden = false, h.fire = false, h.bullets--)

  updateScreen(h)
  updateSprite(s)
  h.t = t
}

function rebind(h) {
  unbind(h.handlers)
  h.pressed = { a: false, d: false, w: false }
  const keyCfg = { keydown: {}, keyup: {} }
  keyCfg.keydown[Config.leftKey]  = () => (h.pressed.a = true, h.dir = LEFT)
  keyCfg.keydown[Config.rightKey] = () => (h.pressed.d = true, h.dir = RIGHT),
  keyCfg.keydown[Config.jumpKey]  = onJumpKeyDown.bind(null, h),
  keyCfg.keydown[Config.fireKey]  = () => (h.gun && h.bullets > 0 && (h.fire = true))
  keyCfg.keyup[Config.leftKey]    = () => (h.pressed.a = false, h.pressed.d && (h.dir = RIGHT)),
  keyCfg.keyup[Config.rightKey]   = () => (h.pressed.d = false, h.pressed.a && (h.dir = LEFT)),
  keyCfg.keyup[Config.jumpKey]    = () => h.pressed.w = false
  h.handlers = bind(keyCfg)
}

function onJumpKeyDown(h) {
  if (h.isJumping) { h.pressed.w = true; return }
  h.sprite.y++
  const pos = downBarrier(h.sprite)
  const now = performance.now()
  h.sprite.y--
  if (!h.pressed.w && (pos || (!pos && now - h.coyoteTime < Config.coyoteDelayMs))) {
    h.v = Config.jumpVelocity
    h.isJumping = true
    h.jumpY = h.sprite.y
    h.jumpStartTime = now
    h.sprite.imgs.jumpLeft.frames.frame = h.sprite.imgs.jumpRight.frames.frame = 0
  }
  h.pressed.w = true
}

function updateX(hero, newX) {
  const s = hero.sprite
  let diff = newX - s.x
  Math.abs(diff) > Config.spriteSize && (diff = (Config.spriteSize - 1) * Math.sign(diff))
  const left = diff < 0
  s.x += diff
  const pos = left ? leftBarrier(s, false) : rightBarrier(s, false)
  pos && (s.x = left ? pos[0] + 1 : pos[0] - s.width - 1)
}

function updateY(h, newY, dt) {
  const s = h.sprite
  let diff = newY - s.y
  Math.abs(diff) > Config.spriteSize && (diff = (Config.spriteSize - 1) * Math.sign(diff))
  const down = diff > 0
  s.y += diff
  const pos = down ? downBarrier(s, false) : topBarrier(s, false)
  if (pos) {
    if (down) s.y = pos[1] - s.height - 1, h.coyoteTime = performance.now(), h.v = 0
    else { // hitting the ceiling      
      h.v = h.jumpStartTime = 0
      s.y = pos[1] + 1
    }
    h.isJumping && down && (h.isJumping = false)
    !h.lendBefore && down && play(Config.sounds.lending)
  } else h.isJumping && h.jumpY < newY && (h.isJumping = false)

  h.v += Config.gravity * dt
  h.lendBefore = !!pos
}

function updateScreen(h) {
  const s = h.sprite

  if (s.x > Config.width) {
    updateObjs(room(), room(Shared.offsX + Config.width))
    Shared.offsX += Config.width
    s.x = -s.width / 2
    fire('change-room')
  } else if (s.x + s.width < 0) {
    updateObjs(room(), room(Shared.offsX - Config.width))
    Shared.offsX -= Config.width
    s.x = Config.width - s.width / 2
    fire('change-room')
  } else if (s.y > Config.height) {
    updateObjs(room(), room(Shared.offsX, Shared.offsY + Config.height))
    Shared.offsY += Config.height
    s.y = -s.height / 2
    h.isJumping = false
    fire('change-room')
  } else if (s.y + s.height < 0) {
    updateObjs(room(), room(Shared.offsX, Shared.offsY - Config.height))
    Shared.offsY -= Config.height
    h.jumpY = Config.height + h.jumpY
    s.y = Config.height - s.height / 2
    fire('change-room')
  }
}

function side(hero) {
  return hero.dir === LEFT ? 'Left' : 'Right'
}