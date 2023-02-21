import Shared from './shared'
import Config from './config'
import { Game, start, draw as drawGame, update as updateGame } from './game'

function animate() {
  draw()
  update()
  Config.useSetTimeout ? setTimeout(animate, Config.setTimeoutDelay) : requestAnimationFrame(animate)
}

function draw() {
  Shared.ctx.clearRect(0, 0, Config.width, Config.height)
  Shared.objs.forEach(o => o.draw(o.o))
  drawGame(game)
}

function update() {
  !Shared.stop && Shared.objs.forEach(o => o.update(o.o))
  updateGame(game)
}

const game = Game(animate)
start(game)