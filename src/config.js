import IdleLeftPath from '../img/idle-left-3.png'
import IdleRightPath from '../img/idle-right-3.png'
import WalkLeftPath from '../img/walk-left-6.png'
import WalkRightPath from '../img/walk-right-6.png'
import BackPath from '../img/back.png'

export default {
  fpsId: 'fps',
  canvasId: 'canvas',

  width: 1024,
  height: 512,
  gravity: 1,
  jumpHeight: 15,
  moveSpeed: 5,
  frameSpeed: 120, // ms

  backColor: 'black',

  // sprites
  hero: [160, 460, {
    idleLeft:  [IdleLeftPath,  3],
    idleRight: [IdleRightPath, 3],
    walkLeft:  [WalkLeftPath,  6],
    walkRight: [WalkRightPath, 6]
  }],
  back: [0, 0, BackPath]
}