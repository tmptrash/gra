import Shared from './shared'
import L1Path from '../img/l1.png'

import HeartPath from '../img/heart.png'
import GunAnimPath from '../img/gun-9.png'
import HeartAnimPath from '../img/heart-9.png'
import IdleLeftPath from '../img/idle-left-3.png'
import IdleGunLeftPath from '../img/idle-gun-left-3.png'
import IdleRightPath from '../img/idle-right-3.png'
import IdleGunRightPath from '../img/idle-gun-right-3.png'

import WalkLeftPath from '../img/walk-left-6.png'
import WalkGunLeftPath from '../img/walk-gun-left-6.png'
import WalkRightPath from '../img/walk-right-6.png'
import WalkGunRightPath from '../img/walk-gun-right-6.png'
import JumpLeftPath from '../img/jump-left-9.png'
import JumpGunLeftPath from '../img/jump-gun-left-9.png'
import JumpRightPath from '../img/jump-right-9.png'
import JumpGunRightPath from '../img/jump-gun-right-9.png'

import BugLeftPath from '../img/bug-left-2.png'
import BugRightPath from '../img/bug-right-2.png'
import BugUpPath from '../img/bug-up-2.png'
import BugDownPath from '../img/bug-down-2.png'
import BugBlackLeftPath from '../img/bug-black-left-5.png'
import BugBlackRightPath from '../img/bug-black-right-5.png'
import BugBlackBlueLeftPath from '../img/bug-black-blue-left-3.png'
import BugBlackBlueRightPath from '../img/bug-black-blue-right-3.png'
import BugBigLeftPath from '../img/bug-big-left-3.png'
import BugBigRightPath from '../img/bug-big-right-3.png'

import KeyPath from '../img/key-6.png'

import Track0 from '../music/Beyond The Surface.mp3'
import Track1 from '../music/1.11.mp3'
import Track2 from '../music/101 clouds.mp3'
import Track3 from '../music/Algo Cion.mp3'
import Track4 from '../music/Arterial.mp3'
import Track5 from '../music/Exact Random.mp3'
import Track6 from '../music/Example 3.mp3'
import Track7 from '../music/Giant Sunflowers Swaying In The Wind.mp3'
import Track8 from '../music/Human (Mixed).mp3'
import Track9 from '../music/Outside.mp3'
import Track10 from '../music/PanCromatico.mp3'
import Track11 from '../music/Under the Radar.mp3'
import Track12 from '../music/Unfold.mp3'

import SoundHit from '../sound/hit.mp3'
import SoundKey from '../sound/key.mp3'
import SoundGun from '../sound/gun.mp3'
import SoundGameOver from '../sound/game-over.mp3'
import SoundHeart from '../sound/heart.mp3'

const WIDTH  = 1024
const HEIGHT = 800

export default {
  // html & css
  canvasId: 'canvas',
  audioId: 'audio',
  heroId: 'hero',
  playQuery: '.play',
  frontColor: '#fff',
  frontFont: '16px Tahoma',

  // logo
  logoX: 256,
  logoY: 50,
  logoTimeout: 100,

  // game related
  debug: false,
  upsDelay: 2,
  useSetTimeout: false,
  musicVolume: .6,
  width: WIDTH,
  height: HEIGHT,
  spriteSize: 32,
  hSprites: null,
  vSprites: null,

  // hero related
  jumpTime: 1000,
  jumpSize: 250,
  stepTime: 400,
  stepSize: 100,
  life: 4,
  touchDelay: 1000,

  // audio
  music: [Track0, Track1, Track2, Track3, Track4, Track5, Track6, Track7, Track8, Track9, Track10, Track11, Track12],
  sounds: {
    hit: SoundHit,
    key: SoundKey,
    gameOver: SoundGameOver,
    heart: SoundHeart,
    gun: SoundGun
  },

  // sprites
  heart: [{ x: 0, y: 0 }, HeartPath],
  hero: [{x: 150, y: 90}, {
    idleLeft:     [IdleLeftPath,     3, 260],
    idleRight:    [IdleRightPath,    3, 260],
    walkLeft:     [WalkLeftPath,     6, 60 ],
    walkRight:    [WalkRightPath,    6, 60 ],
    jumpLeft:     [JumpLeftPath,     9, 150],
    jumpRight:    [JumpRightPath,    9, 150],

    idleGunLeft:  [IdleGunLeftPath,  3, 260],
    idleGunRight: [IdleGunRightPath, 3, 260],
    walkGunLeft:  [WalkGunLeftPath,  6, 60 ],
    walkGunRight: [WalkGunRightPath, 6, 60 ],
    jumpGunLeft:  [JumpGunLeftPath,  9, 150],
    jumpGunRight: [JumpGunRightPath, 9, 150]
  }],
  l1: [{x: 0, y: 0, width: WIDTH, height: HEIGHT}, L1Path],

  // enemies and items per screen
  screens: {
    enemies: {
      0: [
        enemy(350, 396, {idleLeft: [BugLeftPath,          2, 300], idleRight: [BugRightPath,          2, 300]}),
        enemy(32,  150, {idleUp:   [BugUpPath,            2, 300], idleDown:  [BugDownPath,           2, 300]}, .05, false),
        enemy(950, 620, {idleLeft: [BugLeftPath,          2, 300], idleRight: [BugRightPath,          2, 300]}),
        //enemy(130, 361, {idleLeft: [BugBlackBlueLeftPath, 3, 200], idleRight: [BugBlackBlueRightPath, 3, 200]}),
        //enemy(140, 725, {idleLeft: [BugBigLeftPath,       3, 200], idleRight: [BugBigRightPath,       3, 200]}),
        enemy(140, 748, {idleLeft: [BugLeftPath,          2, 300], idleRight: [BugRightPath, 2, 300] })
      ],
      1: [
        enemy(620, 524, {idleLeft: [BugLeftPath,          2, 300], idleRight: [BugRightPath,          2, 300]}),
        enemy(90,  619, {idleLeft: [BugBlackLeftPath,     5, 100], idleRight: [BugBlackRightPath,     5, 100]})
      ],
      2: [
        enemy(150, 236, {idleLeft: [BugLeftPath,          2, 300], idleRight: [BugRightPath,          2, 300]}, .06),
        enemy(790, 396, {idleLeft: [BugLeftPath,          2, 300], idleRight: [BugRightPath,          2, 300]}, .06)
      ],
      3: [
        enemy(300, 300, {idleLeft: [BugLeftPath,          2, 300], idleRight: [BugRightPath,          2, 300]}, .07)
      ],
      8: [
        enemy(650, 236, {idleLeft: [BugLeftPath,          2, 300], idleRight: [BugRightPath,          2, 300]}, .07),
        enemy(270, 364, {idleLeft: [BugLeftPath,          2, 300], idleRight: [BugRightPath,          2, 300]}, .07),
      ],
      9: [
        enemy(150, 716, {idleLeft: [BugLeftPath,          2, 300], idleRight: [BugRightPath,          2, 300]}, .07),
        enemy(200, 716, {idleLeft: [BugLeftPath,          2, 300], idleRight: [BugRightPath,          2, 300]}, .07),
        enemy(270, 716, {idleLeft: [BugLeftPath,          2, 300], idleRight: [BugRightPath,          2, 300]}, .07),
        enemy(890, 396, {idleLeft: [BugLeftPath,          2, 300], idleRight: [BugRightPath,          2, 300]}, .07),
      ]
    },
    items: {
      0: [
        item(80,  580, {idle: [GunAnimPath,   9,  150]}, 'gun',   (i, pick) => {Shared.hero.gun = true, pick(i)}),
        item(830, 580, {idle: [KeyPath,       7,  200] }, 'key')
      ],
      4: [
        item(770, 200, {idle: [HeartAnimPath, 9,  100]}, 'heart', (i, pick) => { Shared.hero.life++, pick(i, false)})
      ],
      8: [
        item(300, 260, {idle: [HeartAnimPath, 9,  100]}, 'heart', (i, pick) => { Shared.hero.life++, pick(i, false)})
      ],
      39: [
        item(830, 580, {idle: [KeyPath,       7,  200]}, 'key')
      ]
    }
  }
}

function enemy(x, y, imgs, speed = .05, horizontal = true) {
  return [[{ x, y }, imgs], speed, horizontal]
}

function item(x, y, imgs, sound, pickFn = null) {
  return [[{ x, y }, imgs], sound, pickFn]
}