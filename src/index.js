import { Scene } from './scene'
import { Hero } from './hero'
import { Fps } from './fps'
import { Sprite } from './sprite'
import BackPath from '../img/back.png'

const scene = new Scene([Sprite, 0, 0, BackPath], Hero, Fps)

function animate() {
  window.requestAnimationFrame(animate)
  scene.draw()
}

animate()