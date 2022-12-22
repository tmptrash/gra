import IdleLeftPath from '../img/idle-left-3.png'
import IdleRightPath from '../img/idle-right-3.png'
import WalkLeftPath from '../img/walk-left-6.png'
import WalkRightPath from '../img/walk-right-6.png'
import JumpLeftPath from '../img/jump-left-9.png'
import JumpRightPath from '../img/jump-right-9.png'
import BackPath from '../img/back.png'

export default {
  fpsId: 'fps',
  canvasId: 'canvas',

  width: 2048,
  height: 959,
  zoom: 1.5,
  gravity: 1,
  jumpHeight: 15,
  moveSpeed: 5,

  backColor: 'black',
  fronColor: '#fff',
  frontFont: '16px Tahoma',

  // sprites
  hero: [100, 600, {
    idleLeft:  [IdleLeftPath,  3, 260],
    idleRight: [IdleRightPath, 3, 260],
    walkLeft:  [WalkLeftPath,  6, 60],
    walkRight: [WalkRightPath, 6, 60],
    jumpLeft:  [JumpLeftPath,  9, 110],
    jumpRight: [JumpRightPath, 9, 110]
  }],
  back: [0, 0, BackPath]
}