import Shared from './shared'

import L1Path from '../img/l1.png'

import HeartPath from '../img/heart.png'
import GunAnimPath from '../img/gun-9.png'
import BulletsPath from '../img/bullets-9.png'
import HeartAnimPath from '../img/heart-9.png'
import DoorOpenPath from '../img/door-open-5.png'
import KeyPath from '../img/key-6.png'

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
import BugBlueLeftPath from '../img/bug-black-blue-left-3.png'
import BugBlueRightPath from '../img/bug-black-blue-right-3.png'
import BugBigLeftPath from '../img/bug-big-left-3.png'
import BugBigRightPath from '../img/bug-big-right-3.png'

import Cave0 from '../music/cave0.mp3'

import SoundHit from '../sound/hit.mp3'
import SoundKey from '../sound/key.mp3'
import SoundGun from '../sound/gun.mp3'
import SoundWin from '../sound/win.mp3'
import SoundBullets from '../sound/bullets.mp3'
import SoundGameOver from '../sound/game-over.mp3'
import SoundHeart from '../sound/heart.mp3'
import SoundFire from '../sound/fire.mp3'
import SoundBugDie from '../sound/bug-die.mp3'

const WIDTH  = 1024
const HEIGHT = 800
let Config = null

export default Config = {
  // html & css & ids
  canvasId: 'canvas',
  audioId: 'audio',
  heroId: 'hero',
  bulletId: 'bullet',
  playQuery: '.play',
  frontColor: '#ccc',
  frontFont: '16px Cambria, serif',
  fontGameOver: '28px Tahoma',
  bulletsFont: 'bold 13px Cambria, serif',
  gameOverId: 'game-over',
  gameCompletedId: 'completed',

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
  hSprites: 256,
  vSprites: 125,

  // hero related
  jumpTime: 1000,
  jumpSize: 250,
  stepTime: 400,
  stepSize: 100,
  life: 4,
  lifePos: [10, 10],
  touchDelay: 1000,

  bulletsPos: [10, 26],
  bulletSpeed: .8,
  bulletYOffs: 4,
  bulletsAmount: 10,
  bulletsAmountPos: [31, 44],

  // audio
  music: [Cave0], //[Track0, Track1, Track2, Track3, Track4, Track5, Track6, Track7, Track8, Track9, Track10, Track11, Track12],
  sounds: {
    hit: SoundHit,
    key: SoundKey,
    gameOver: SoundGameOver,
    heart: SoundHeart,
    gun: SoundGun,
    win: SoundWin,
    bullets: SoundBullets,
    fire: SoundFire,
    bugDie: SoundBugDie
  },

  // sprites
  heart: [{ x: 0, y: 0 }, HeartPath],
  door: [{ x: 864, y: 32, run: false }, {idle: [DoorOpenPath, 5, 300]}],
  bullets: [{ x: 0, y: 0 }, {idle: [BulletsPath, 9, 150]}],
  hero: [{x: 200, y: 90}, {
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

  // enemy(140, 725, {idleLeft: [BugBigLeftPath,       3, 200], idleRight: [BugBigRightPath,       3, 200]}),
  // enemies and items per screen
  screens: {
    enemies: {
      0: [
        [[{x: 350, y: 377}, {idleLeft: [BugLeftPath,    2, 300], idleRight: [BugRightPath,    2, 300]}], .08, true],
        [[{x: 32,  y: 150}, {idleUp:   [BugUpPath,      2, 300], idleDown:  [BugDownPath,     2, 300]}], .08, false],
        [[{x: 950, y: 601}, {idleLeft: [BugLeftPath,    2, 300], idleRight: [BugRightPath,    2, 300]}], .08, true],
        [[{x: 140, y: 729}, {idleLeft: [BugLeftPath,    2, 300], idleRight: [BugRightPath,    2, 300]}], .08, true]
      ],
      1: [
        [[{x: 620, y: 505}, {idleLeft: [BugLeftPath,    2, 300], idleRight: [BugRightPath,    2, 300]}], .08, true],
        [[{x: 200, y: 599}, {idleLeft: [BugBlkLeftPath, 5, 100], idleRight: [BugBlkRightPath, 5, 100]}], .08, true]
      ],
      2: [
        [[{x: 150, y: 281}, {idleLeft: [BugLeftPath,    2, 300], idleRight: [BugRightPath,    2, 300]}], .09, true],
        [[{x: 790, y: 377}, {idleLeft: [BugLeftPath,    2, 300], idleRight: [BugRightPath,    2, 300]}], .09, true]
      ],
      3: [
        [[{x: 300, y: 281}, {idleLeft: [BugLeftPath,    2, 300], idleRight: [BugRightPath,    2, 300]}], .1,  true]
      ],
      4: [
        [[{x: 500, y: 313}, {idleLeft: [BugLeftPath,    2, 300], idleRight: [BugRightPath,    2, 300]}], .2,  true],
        [[{x: 860, y: 313}, {idleLeft: [BugLeftPath,    2, 300], idleRight: [BugRightPath,    2, 300]}], .2,  true]
      ],
      8: [
        [[{x: 650, y: 217}, {idleLeft: [BugLeftPath,    2, 300], idleRight: [BugRightPath,    2, 300]}], .1,  true],
        [[{x: 270, y: 345}, {idleLeft: [BugLeftPath,    2, 300], idleRight: [BugRightPath,    2, 300]}], .1,  true],
        [[{x: 350, y: 729}, {idleLeft: [BugLeftPath,    2, 300], idleRight: [BugRightPath,    2, 300]}], .2,  true]
      ],
      9: [
        [[{x: 150, y: 697}, {idleLeft: [BugLeftPath,    2, 300], idleRight: [BugRightPath,    2, 300]}], .2,  true],
        [[{x: 200, y: 697}, {idleLeft: [BugLeftPath,    2, 300], idleRight: [BugRightPath,    2, 300]}], .1,  true],
        [[{x: 270, y: 697}, {idleLeft: [BugLeftPath,    2, 300], idleRight: [BugRightPath,    2, 300]}], .2,  true],
        [[{x: 890, y: 377}, {idleLeft: [BugLeftPath,    2, 300], idleRight: [BugRightPath,    2, 300]}], .1,  true],
      ],
      10: [
        [[{x: 150, y: 727}, {idleLeft: [BugBlkLeftPath, 5, 100], idleRight: [BugBlkRightPath, 5, 100]}], .2,  true]
      ],
      11: [
        [[{x: 150, y: 727}, {idleLeft: [BugBlkLeftPath, 5, 100], idleRight: [BugBlkRightPath, 5, 100]}], .2,  true],
        [[{x: 450, y: 727}, {idleLeft: [BugBlkLeftPath, 5, 100], idleRight: [BugBlkRightPath, 5, 100]}], .25, true]
      ],
      12: [
        [[{x: 150, y: 727}, {idleLeft: [BugBlkLeftPath, 5, 100], idleRight: [BugBlkRightPath, 5, 100]}], .27, true],
        [[{x: 650, y: 727}, {idleLeft: [BugBlkLeftPath, 5, 100], idleRight: [BugBlkRightPath, 5, 100]}], .27, true],
        [[{x: 350, y: 727}, {idleLeft: [BugBlkLeftPath, 5, 100], idleRight: [BugBlkRightPath, 5, 100]}], .27, true]
      ],
      13: [
        [[{x: 150, y: 183}, {idleLeft: [BugBlkLeftPath, 5, 100], idleRight: [BugBlkRightPath, 5, 100]}], .27, true],
        [[{x: 350, y: 727}, {idleLeft: [BugBlkLeftPath, 5, 100], idleRight: [BugBlkRightPath, 5, 100]}], .27, true],
        [[{x: 550, y: 727}, {idleLeft: [BugBlkLeftPath, 5, 100], idleRight: [BugBlkRightPath, 5, 100]}], .27, true]
      ],
      16: [
        [[{x: 800, y: 729}, {idleLeft: [BugLeftPath,    2, 300], idleRight: [BugRightPath,    2, 300]}], .2,  true],
      ],
      17: [
        [[{x: 150, y: 729}, {idleLeft: [BugLeftPath,    2, 300], idleRight: [BugRightPath,    2, 300]}], .2,  true],
      ],
      18: [
        [[{x: 800, y: 723}, {idleLeft: [BugBlueLeftPath,3, 200], idleRight: [BugBlueRightPath,3, 200]}], .29, true],
        [[{x: 192, y: 627}, {idleLeft: [BugBlueLeftPath,3, 200], idleRight: [BugBlueRightPath,3, 200]}], .29, true],
        [[{x: 352, y: 691}, {idleLeft: [BugBlueLeftPath,3, 200], idleRight: [BugBlueRightPath,3, 200]}], .29, true]
      ],
      19: [
        [[{x: 384, y: 727}, {idleLeft: [BugBlkLeftPath, 5, 100], idleRight: [BugBlkRightPath, 5, 100]}], .29, true],
        [[{x: 640, y: 727}, {idleLeft: [BugBlkLeftPath, 5, 100], idleRight: [BugBlkRightPath, 5, 100]}], .29, true]
      ],
      21: [
        [[{x: 250, y: 727}, {idleLeft: [BugBlkLeftPath, 5, 100], idleRight: [BugBlkRightPath, 5, 100]}], .29, true],
        [[{x: 500, y: 727}, {idleLeft: [BugBlkLeftPath, 5, 100], idleRight: [BugBlkRightPath, 5, 100]}], .29, true]
      ],
      25: [
        [[{x: 768, y: 599}, {idleLeft: [BugBlkLeftPath, 5, 100], idleRight: [BugBlkRightPath, 5, 100]}], .29, true],
        [[{x: 200, y: 727}, {idleLeft: [BugBlkLeftPath, 5, 100], idleRight: [BugBlkRightPath, 5, 100]}], .29, true]
      ],
      29: [
        [[{x: 500, y: 147}, {idleLeft: [BugBlueLeftPath,3, 200], idleRight: [BugBlueRightPath,3, 200]}], .3,  true],
        [[{x: 200, y: 243}, {idleLeft: [BugBlueLeftPath,3, 200], idleRight: [BugBlueRightPath,3, 200]}], .3,  true],
      ],
      30: [
        [[{x: 150, y: 211}, {idleLeft: [BugBlueLeftPath,3, 200], idleRight: [BugBlueRightPath,3, 200]}], .33, true],
        [[{x: 780, y: 307}, {idleLeft: [BugBlueLeftPath,3, 200], idleRight: [BugBlueRightPath,3, 200]}], .33, true],
      ]
    },
    items: {
      0: [
        //[[{x: 100, y: 200}, {idle: [GunAnimPath,   9,  150]}], 'gun',     (i, pick) => {Shared.hero.gun = true, pick(i)}],
        //[[{x: 200, y: 300}, {idle: [BulletsPath,   9,  150]}], 'bullets', (i, pick) => {Shared.hero.bullets += Config.bulletsAmount, pick(i, false)}]
      ],
      2: [
        [[{x: 128, y: 700}, {idle: [HeartAnimPath, 9,  100]}], 'heart',   (i, pick) => {Shared.hero.life++, pick(i, false)}]
      ],
      4: [
        [[{x: 770, y: 200}, {idle: [HeartAnimPath, 9,  100]}], 'heart',   (i, pick) => {Shared.hero.life++, pick(i, false)}]
      ],
      5: [
        [[{x: 958, y: 288}, {idle: [GunAnimPath,   9,  150]}], 'gun',     (i, pick) => {Shared.hero.gun = true, pick(i)}]
      ],
      8: [
        [[{x: 330, y: 260}, {idle: [HeartAnimPath, 9,  100]}], 'heart',   (i, pick) => {Shared.hero.life++, pick(i, false)}],
        [[{x: 350, y: 650}, {idle: [BulletsPath,   9,  150]}], 'bullets', (i, pick) => {Shared.hero.bullets += Config.bulletsAmount, pick(i, false) }]
      ],
      10: [
        [[{x: 550, y: 128}, {idle: [BulletsPath,   9,  150]}], 'bullets', (i, pick) => {Shared.hero.bullets += Config.bulletsAmount, pick(i, false) }]
      ],
      11: [
        [[{x: 832, y: 224}, {idle: [HeartAnimPath, 9,  100]}], 'heart',   (i, pick) => {Shared.hero.life++, pick(i, false)}],
      ],
      13: [
        [[{x: 800, y: 600}, {idle: [HeartAnimPath, 9,  100]}], 'heart',   (i, pick) => {Shared.hero.life++, pick(i, false)}]
      ],
      18: [
        [[{x: 700, y: 128}, {idle: [HeartAnimPath, 9,  100]}], 'heart',   (i, pick) => {Shared.hero.life++, pick(i, false)}]
      ],
      21: [
        [[{x: 530, y: 100}, {idle: [BulletsPath,   9,  150]}], 'bullets', (i, pick) => {Shared.hero.bullets += Config.bulletsAmount, pick(i, false) }]
      ],
      23: [
        [[{x: 820, y: 100}, {idle: [BulletsPath,   9,  150]}], 'bullets', (i, pick) => {Shared.hero.bullets += Config.bulletsAmount, pick(i, false) }]
      ],
      39: [
        [[{x: 830, y: 580}, {idle: [KeyPath,       7,  200]}], 'key',     (i, pick) => {Shared.hero.key = true, pick(i) }]
      ]
    },
    scripts: {
      24: [
        ['Door']
      ]
    }
  }
}