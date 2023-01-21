import L1Path from '../img/l1.png'

import IdleLeftPath from '../img/idle-left-3.png'
import IdleRightPath from '../img/idle-right-3.png'
import WalkLeftPath from '../img/walk-left-6.png'
import WalkRightPath from '../img/walk-right-6.png'
import JumpLeftPath from '../img/jump-left-9.png'
import JumpRightPath from '../img/jump-right-9.png'

import BugLeftPath from '../img/bug-left-2.png'
import BugRightPath from '../img/bug-right-2.png'
import BugUpPath from '../img/bug-up-2.png'
import BugDownPath from '../img/bug-down-2.png'
import BugBlackLeftPath from '../img/bug-black-left-5.png'
import BugBlackRightPath from '../img/bug-black-right-5.png'
import BugBlackBlueLeftPath from '../img/bug-black-blue-left-3.png'
import BugBlackBlueRightPath from '../img/bug-black-blue-right-3.png'

import Song0 from '../music/Arterial.mp3'
import Song1 from '../music/1.11.mp3'
import Song2 from '../music/101 clouds.mp3'
import Song3 from '../music/Algo Cion.mp3'
import Song4 from '../music/Beyond The Surface.mp3'
import Song5 from '../music/Exact Random.mp3'
import Song6 from '../music/Example 3.mp3'
import Song7 from '../music/Giant Sunflowers Swaying In The Wind.mp3'
import Song8 from '../music/Human (Mixed).mp3'
import Song9 from '../music/Outside.mp3'
import Song10 from '../music/PanCromatico.mp3'
import Song11 from '../music/Under the Radar.mp3'
import Song12 from '../music/Unfold.mp3'

const WIDTH  = 1024
const HEIGHT = 800

export default {
  canvasId: 'canvas',
  audioId: 'audio',
  heroId: 'hero',
  playQuery: '.play',
  logoX: 256,
  logoY: 50,
  logoTimeout: 1000,

  frontColor: '#fff',
  frontFont: '16px Tahoma',
  
  debug: false,
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

  bugSpeed: 0.05,

  // audio tracks
  tracks: [Song0, Song1, Song2, Song3, Song4, Song5, Song6, Song7, Song8, Song9, Song10, Song11, Song12],

  // sprites
  hero: [{x: 90, y: 150}, {
    idleLeft:  [IdleLeftPath,  3, 260],
    idleRight: [IdleRightPath, 3, 260],
    walkLeft:  [WalkLeftPath,  6, 60],
    walkRight: [WalkRightPath, 6, 60],
    jumpLeft:  [JumpLeftPath,  9, 150],
    jumpRight: [JumpRightPath, 9, 150]
  }],
  l1: [{x: 0, y: 0, width: WIDTH, height: HEIGHT}, L1Path],
  screens: {
    0: [[
      [{ x: 350, y: 396 }, {
        idleLeft:  [BugLeftPath, 2, 300],
        idleRight: [BugRightPath, 2, 300]
      }],
      .05,
      true
    ], [
      [{ x: 32, y: 150 }, {
        idleUp:   [BugUpPath, 2, 300],
        idleDown: [BugDownPath, 2, 300]
      }],
      .05,
      false
    ], [
      [{ x: 950, y: 620 }, {
        idleLeft: [BugLeftPath, 2, 300],
        idleRight: [BugRightPath, 2, 300]
      }],
      .05,
      true
    ], [
      [{ x: 130, y: 361 }, {
        idleLeft: [BugBlackBlueLeftPath, 3, 200],
        idleRight: [BugBlackBlueRightPath, 3, 200]
      }],
      .05,
      true
    ]],
    1: [[
      [{ x: 620, y: 524 }, {
        idleLeft: [BugLeftPath, 2, 300],
        idleRight: [BugRightPath, 2, 300]
      }],
      .05,
      true
    ], [
      [{ x: 90, y: 619 }, {
        idleLeft: [BugBlackLeftPath, 5, 100],
        idleRight: [BugBlackRightPath, 5, 100]
      }],
      .05,
      true
    ]]
  }
}