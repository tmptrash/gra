import { Scene } from './scene'
import { Hero } from './hero'
import { Fps } from './fps'

const scene = new Scene(Hero, Fps)

function animate() {
  window.requestAnimationFrame(animate)
  scene.draw()
}

animate()

window.addEventListener('keydown', e => {
  switch(e.key) {
    case 'd':
      scene.object('Hero').vX = 1
      break
    case 'a':
      scene.object('Hero').vX = -1
      break
  }
})