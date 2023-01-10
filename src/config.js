import IdleLeftPath from '../img/idle-left-3.png'
import IdleRightPath from '../img/idle-right-3.png'
import WalkLeftPath from '../img/walk-left-6.png'
import WalkRightPath from '../img/walk-right-6.png'
import JumpLeftPath from '../img/jump-left-9.png'
import JumpRightPath from '../img/jump-right-9.png'
import L1Path from '../img/l1.png'
import L1BackPath from '../img/l1-back.jpg'

const WIDTH  = 1184
const HEIGHT = 800

export default {
  canvasId: 'canvas',
  heroId: 'hero',

  frontColor: '#fff',
  frontFont: '16px Tahoma',
  
  debug: true,
  upsDelay: 2,
  useSetTimeout: false,

  zoom: 2.5,
  width: WIDTH,
  height: HEIGHT,
  spriteSize: 32,
  hSprites: null,
  vSprites: null,

  jumpTime: 1000,
  jumpSize: 250,
  stepTime: 400,
  stepSize: 100,

  // sprites
  hero: [{x: 50, y: 150}, {
    idleLeft:  [IdleLeftPath,  3, 260],
    idleRight: [IdleRightPath, 3, 260],
    walkLeft:  [WalkLeftPath,  6, 60],
    walkRight: [WalkRightPath, 6, 60],
    jumpLeft:  [JumpLeftPath,  9, 150],
    jumpRight: [JumpRightPath, 9, 150]
  }],
  l1: [{x: 0, y: 0, width: WIDTH, height: HEIGHT}, L1Path],
  l1Back: [{x: 0, y: 0, width: WIDTH, height: HEIGHT}, L1BackPath]
}