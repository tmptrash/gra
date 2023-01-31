import Shared from './shared'
import Config from './config'
import { Hero, draw as drawHero, update as updateHero } from './hero'
import { Bullet, draw as drawBullet, update as updateBullet } from './bullet'
import { Level, draw as drawLevel, update as updateLevel } from './level'
import { updateObjs, roomOffs } from './rooms'
import { Debug, draw as drawDebug, update as updateDebug } from './debug'
import { logo, fn, on, off, findObjById } from './utils'
import { Music, play, stop } from './music'
import { Picked, draw as drawPicked } from './picked'
import { Sounds } from './sounds'

let stopped = false

const PICKED_ID = 'picked'
const playBtn = document.querySelector(Config.playQuery)
const doc = document
// Static items. Order is important!
const objs = Shared.objs = [
  { draw: drawLevel,  update: updateLevel,  o: Level() },
  { draw: drawHero,   update: updateHero,   o: Hero(),   id: Config.heroId },
  { draw: drawBullet, update: updateBullet, o: Bullet(), id: Config.bulletId },
  { draw: drawPicked, update: fn,           o: Picked(), id: PICKED_ID }
]

function main() {
  Shared.ctx = doc.getElementById(Config.canvasId).getContext('2d')
  Shared.ctx.canvas.width = Config.width
  Shared.ctx.canvas.height = Config.height
  Shared.ctx.fillStyle = Config.frontColor
  Shared.ctx.font = Config.frontFont
  Shared.ctx.imageSmoothingEnabled = false

  Shared.music = Music()
  Shared.sounds = Sounds()
  Shared.picked = findObjById(objs, PICKED_ID)
  Shared.hero = findObjById(objs, Config.heroId)
  Shared.bullet = findObjById(objs, Config.bulletId)

  Config.debug && objs.push({ draw: drawDebug, update: fn, o: Debug() })

  resize()
  logo()
  on(window, 'resize', resize)
  loadAssets()
  updateObjs(null, roomOffs(Shared.offsX, Shared.offsY))
  setTimeout(waitAssets, Config.logoTimeout)
}

function animate() {
  Shared.ctx.clearRect(0, 0, Config.width, Config.height)
  draw()
  update()
  Config.useSetTimeout ? setTimeout(animate) : requestAnimationFrame(animate)
}

function draw() {
  objs.forEach(o => o.draw(o.o))
  Shared.stop && drawStop()
}

function update() {
  !Shared.stop && objs.forEach(o => o.update(o.o))
}

function waitAssets() {
  if (Shared.assets > 0) {
    setTimeout(waitAssets, 10)
    return
  }
  on(playBtn, 'click', start)
  playBtn.style.visibility = ''
}

function start() {
  // TODO: remove in production
  on(window, 'keyup', onPrompt)

  playBtn.style.display = 'none'
  off(playBtn, 'click', start)
  play(Shared.music)
  animate()
}

function drawStop() {
  Shared.ctx.fillStyle = Config.frontColor
  Shared.ctx.font = Config.fontGameOver
  if (Shared.stop === Config.gameOverId) {
    Shared.ctx.fillText('Game Over!', Config.width / 2 - 55, Config.height / 2)
  } else if (Shared.stop === Config.gameCompletedId) {
    Shared.ctx.fillText('You win!', Config.width / 2 - 45, Config.height / 2)
  }

  if (!stopped) {
    if (Shared.stop === Config.gameOverId) Shared.sounds.gameOver.play()
    else if(Shared.stop === Config.gameCompletedId) Shared.sounds.win.play()
    stop(Shared.music)
    stopped = true
  }
}

function onPrompt(e) {
  if (e.key !== '+' && e.key !== '=') return
  const v = prompt('Type room coordinates (like 1,2)')
  const offs = v.split(',')
  const x = Shared.offsX
  const y = Shared.offsY
  Shared.offsX = Config.width * offs[0].trim()
  Shared.offsY = Config.height * offs[1].trim()
  updateObjs(roomOffs(x, y), roomOffs(Shared.offsX, Shared.offsY))
}

function resize() {
  doc.body.style.zoom = window.innerHeight * .9 / Config.height
}

function loadAssets() {
  for (let i = 0; i < Config.hSprites * Config.vSprites; i++) {
    updateObjs(null, i, [])
  }
}

main()