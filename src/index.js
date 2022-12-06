import { Hero } from './hero.js'
import { Scene } from './scene.js'

let ctx = document.getElementById('canvas').getContext('2d')
const hero = new Hero(ctx)
const scene = new Scene(ctx)

function animate() {
  window.requestAnimationFrame(animate)
  scene.draw()
  hero.draw()
}

scene.draw()
animate()