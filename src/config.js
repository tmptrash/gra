import Shared from './shared'
import L1Path from '../img/l1.png'

import HeartPath from '../img/heart.png'
import GunAnimPath from '../img/gun-9.png'
import BulletsPath from '../img/bullets-9.png'
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
import BugBlkLeftPath from '../img/bug-black-left-5.png'
import BugBlkRightPath from '../img/bug-black-right-5.png'
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

import Cave0 from '../music/cave0.mp3'

import SoundHit from '../sound/hit.mp3'
import SoundKey from '../sound/key.mp3'
import SoundGun from '../sound/gun.mp3'
import SoundBullets from '../sound/bullets.mp3'
import SoundGameOver from '../sound/game-over.mp3'
import SoundHeart from '../sound/heart.mp3'
import SoundFire from '../sound/fire.mp3'
import SoundBugDie from '../sound/bug-die.mp3'

const WIDTH  = 1024
const HEIGHT = 800
let Config = null

export default Config = {
  // html & css
  canvasId: 'canvas',
  audioId: 'audio',
  heroId: 'hero',
  bulletId: 'bullet',
  playQuery: '.play',
  frontColor: '#ccc',
  frontFont: '16px Cambria',
  bulletsFont: 'bold 11px Cambria, serif',

  // logo
  logoX: 256,
  logoY: 50,
  logoTimeout: 100,

  // game related
  debug: true,
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

  bulletSpeed: .8,
  bulletYOffs: 4,
  bulletsAmount: 10,

  // audio
  music: [Cave0], //[Track0, Track1, Track2, Track3, Track4, Track5, Track6, Track7, Track8, Track9, Track10, Track11, Track12],
  sounds: {
    hit: SoundHit,
    key: SoundKey,
    gameOver: SoundGameOver,
    heart: SoundHeart,
    gun: SoundGun,
    bullets: SoundBullets,
    fire: SoundFire,
    bugDie: SoundBugDie
  },

  // sprites
  heart: [{ x: 0, y: 0 }, HeartPath],
  bullets: [{ x: 0, y: 0 }, {idle: [BulletsPath, 9, 150]}],
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

  // enemy(130, 361, {idleLeft: [BugBlackBlueLeftPath, 3, 200], idleRight: [BugBlackBlueRightPath, 3, 200]}),
  // enemy(140, 725, {idleLeft: [BugBigLeftPath,       3, 200], idleRight: [BugBigRightPath,       3, 200]}),
  // enemies and items per screen
  screens: {
    enemies: {
      0: [
        enemy(350, 377, {idleLeft: [BugLeftPath,    2, 300], idleRight: [BugRightPath,    2, 300]}),
        enemy(32,  150, {idleUp:   [BugUpPath,      2, 300], idleDown:  [BugDownPath,     2, 300]}, .08, false),
        enemy(950, 601, {idleLeft: [BugLeftPath,    2, 300], idleRight: [BugRightPath,    2, 300]}),
        enemy(140, 729, {idleLeft: [BugLeftPath,    2, 300], idleRight: [BugRightPath,    2, 300] })
      ],
      1: [
        enemy(620, 505, {idleLeft: [BugLeftPath,    2, 300], idleRight: [BugRightPath,    2, 300]}),
        enemy(90,  599, {idleLeft: [BugBlkLeftPath, 5, 100], idleRight: [BugBlkRightPath, 5, 100]})
      ],
      2: [
        enemy(150, 281, {idleLeft: [BugLeftPath,    2, 300], idleRight: [BugRightPath,    2, 300]}, .09),
        enemy(790, 377, {idleLeft: [BugLeftPath,    2, 300], idleRight: [BugRightPath,    2, 300]}, .09)
      ],
      3: [
        enemy(300, 281, {idleLeft: [BugLeftPath,    2, 300], idleRight: [BugRightPath,    2, 300]}, .1)
      ],
      4: [
        enemy(500, 313, {idleLeft: [BugLeftPath,    2, 300], idleRight: [BugRightPath,    2, 300]}, .2),
        enemy(860, 313, {idleLeft: [BugLeftPath,    2, 300], idleRight: [BugRightPath,    2, 300]}, .2)
      ],
      8: [
        enemy(650, 217, {idleLeft: [BugLeftPath,    2, 300], idleRight: [BugRightPath,    2, 300]}, .1),
        enemy(270, 345, {idleLeft: [BugLeftPath,    2, 300], idleRight: [BugRightPath,    2, 300]}, .1),
        enemy(350, 729, {idleLeft: [BugLeftPath,    2, 300], idleRight: [BugRightPath,    2, 300]}, .2)
      ],
      9: [
        enemy(150, 697, {idleLeft: [BugLeftPath,    2, 300], idleRight: [BugRightPath,    2, 300]}, .2),
        enemy(200, 697, {idleLeft: [BugLeftPath,    2, 300], idleRight: [BugRightPath,    2, 300]}, .1),
        enemy(270, 697, {idleLeft: [BugLeftPath,    2, 300], idleRight: [BugRightPath,    2, 300]}, .2),
        enemy(890, 377, {idleLeft: [BugLeftPath,    2, 300], idleRight: [BugRightPath,    2, 300]}, .1),
      ],
      10: [
        enemy(150, 727, {idleLeft: [BugBlkLeftPath, 5, 100], idleRight: [BugBlkRightPath, 5, 100]}, .2)
      ],
      11: [
        enemy(150, 727, {idleLeft: [BugBlkLeftPath, 5, 100], idleRight: [BugBlkRightPath, 5, 100]}, .25),
        enemy(450, 727, {idleLeft: [BugBlkLeftPath, 5, 100], idleRight: [BugBlkRightPath, 5, 100]}, .25)
      ],
      12: [
        enemy(150, 727, {idleLeft: [BugBlkLeftPath, 5, 100], idleRight: [BugBlkRightPath, 5, 100]}, .27),
        enemy(650, 727, {idleLeft: [BugBlkLeftPath, 5, 100], idleRight: [BugBlkRightPath, 5, 100]}, .27),
        enemy(350, 727, {idleLeft: [BugBlkLeftPath, 5, 100], idleRight: [BugBlkRightPath, 5, 100]}, .27)
      ],
      13: [
        enemy(150, 183, {idleLeft: [BugBlkLeftPath, 5, 100], idleRight: [BugBlkRightPath, 5, 100]}, .27),
        enemy(350, 727, {idleLeft: [BugBlkLeftPath, 5, 100], idleRight: [BugBlkRightPath, 5, 100]}, .27),
        enemy(550, 727, {idleLeft: [BugBlkLeftPath, 5, 100], idleRight: [BugBlkRightPath, 5, 100]}, .27)
      ],
      16: [
        enemy(800, 729, {idleLeft: [BugLeftPath,    2, 300], idleRight: [BugRightPath,    2, 300]}, .2),
      ],
      17: [
        enemy(150, 729, {idleLeft: [BugLeftPath,    2, 300], idleRight: [BugRightPath,    2, 300]}, .2),
      ],
      21: [
        enemy(250, 727, {idleLeft: [BugBlkLeftPath, 5, 100], idleRight: [BugBlkRightPath, 5, 100]}, .29),
        enemy(500, 727, {idleLeft: [BugBlkLeftPath, 5, 100], idleRight: [BugBlkRightPath, 5, 100]}, .29)
      ]
    },
    items: {
      0: [
        //item(100, 200, {idle: [GunAnimPath,   9, 150]}, 'gun', (i, pick) => { Shared.hero.gun = true, pick(i) }),
        //item(200, 300, {idle: [BulletsPath,   9, 150]}, 'bullets', (i, pick) => { Shared.hero.bullets += Config.bulletsAmount, pick(i, false) })
      ],
      4: [
        item(770, 200, {idle: [HeartAnimPath, 9,  100]}, 'heart',   (i, pick) => {Shared.hero.life++, pick(i, false)})
      ],
      5: [
        item(958, 288, {idle: [GunAnimPath,   9,  150]}, 'gun',     (i, pick) => {Shared.hero.gun = true, pick(i)})
      ],
      8: [
        item(330, 260, {idle: [HeartAnimPath, 9,  100]}, 'heart',   (i, pick) => {Shared.hero.life++, pick(i, false)}),
        item(350, 650, {idle: [BulletsPath,   9,  150]}, 'bullets', (i, pick) => {Shared.hero.bullets += Config.bulletsAmount, pick(i, false) })
      ],
      13: [
        item(800, 600, {idle: [HeartAnimPath, 9,  100]}, 'heart',   (i, pick) => {Shared.hero.life++, pick(i, false)})
      ],
      21: [
        item(530, 100, {idle: [BulletsPath,   9,  150]}, 'bullets', (i, pick) => {Shared.hero.bullets += Config.bulletsAmount, pick(i, false) })
      ],
      23: [
        item(820, 100, {idle: [BulletsPath,   9,  150]}, 'bullets', (i, pick) => {Shared.hero.bullets += Config.bulletsAmount, pick(i, false) })
      ],
      39: [
        item(830, 580, {idle: [KeyPath,       7,  200]}, 'key')
      ]
    }
  }
}

function enemy(x, y, imgs, speed = .08, horizontal = true) {
  return [[{ x, y }, imgs], speed, horizontal]
}

function item(x, y, imgs, sound, pickFn = null) {
  return [[{ x, y }, imgs], sound, pickFn]
}