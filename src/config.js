import HeroIdlePath from '../img/idle.png'
import HeroRightPath from '../img/right.png'
import HeroLeftPath from '../img/left.png'
import BackPath from '../img/back.png'

export default {
  fpsId: 'fps',
  canvasId: 'canvas',

  width: 1024,
  height: 512,
  gravity: 1,
  jumpHeight: 15,
  moveSpeed: 5,
  frameSpeed: 60, // ms

  backColor: 'black',

  // sprites
  hero: [160, 460, {
    idle: [HeroIdlePath, 4],
    right: [HeroRightPath, 4],
    left: [HeroLeftPath, 4]
  }],
  back: [0, 0, BackPath]
}