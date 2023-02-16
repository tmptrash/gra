import L1Path from '../img/l1.png'
import StalactiteUp1Path from '../img/stalactite-up-1.png'
import StalactiteUp2Path from '../img/stalactite-up-2.png'
import StalactiteDown1Path from '../img/stalactite-down-1.png'
// items
import HeartAnimPath from '../img/heart-9.png'
import GunAnimPath from '../img/gun-9.png'
import BulletsPath from '../img/bullets-9.png'
import DoorOpenPath from '../img/door-open-5.png'
import KeyPath from '../img/key-6.png'
import Mushroom9Path from '../img/mushroom-9.png'
// hero
import IdleLeftPath from '../img/idle-left-3.png'
import IdleHitLeftPath from '../img/idle-hit-left-1.png'
import IdleHitRightPath from '../img/idle-hit-right-1.png'
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
// enemies
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
// scripts
import DropPath from '../img/drop-1.png'
import DropDownPath from '../img/drop-down-12.png'
import PortalPath from '../img/portal-9.png'
// music
import Cave0 from '../music/cave0.mp3'
// sounds
import SoundHit from '../sound/hit.mp3'
import SoundKey from '../sound/key.mp3'
import SoundGun from '../sound/gun.mp3'
import SoundWin from '../sound/win.mp3'
import SoundLending from '../sound/lending.mp3'
import SoundSteps from '../sound/steps.mp3'
import SoundBite from '../sound/bite.mp3'
import SoundHitMushroom from '../sound/hit-mushroom.mp3'
import SoundBreath from '../sound/breath.mp3'
import SoundBullets from '../sound/bullets.mp3'
import SoundGameOver from '../sound/game-over.mp3'
import SoundHeart from '../sound/heart.mp3'
import SoundFire from '../sound/fire.mp3'
import SoundBugDie from '../sound/bug-die.mp3'
import SoundDrop1 from '../sound/drop1.mp3'
import SoundDrop2 from '../sound/drop2.mp3'
import SoundDrop3 from '../sound/drop3.mp3'
import SoundDrop4 from '../sound/drop4.mp3'

const WIDTH  = 1024
const HEIGHT = 800
let Config = null
let uniqueId = 0

function id() {
  return ++uniqueId
}

export default Config = {
  // html & css & ids
  ver: 'v0.1-beta',
  canvasId: 'canvas',
  audioId: 'audio',
  heroId: 'hero',
  bulletId: 'bullet',
  playQuery: '.play',
  spinnerQuery: '.spin',
  volumeQuery: 'input[type=range]',
  volumeLabelQuery: '.vol',
  frontColor: '#ccc',
  verColor: '#000',
  textColor: '#fff',
  textFont: '20px Cambria, serif',
  frontFont: '16px Cambria, serif',
  verFont: 'bold 11px Cambria, serif',
  fontGameOver: '42px Tahoma',
  bulletsFont: 'bold 13px Cambria, serif',
  gameOverId: 'game-over',
  gameCompletedId: 'completed',

  // logo
  logoX: 256,
  logoY: 50,

  // game related
  debug: false,
  useSetTimeout: true,
  musicVolume: .6,
  width: WIDTH,
  height: HEIGHT,
  spriteSize: 32,
  hSprites: 256,
  vSprites: 125,
  objTick: 17,
  intersectionOffs: 5,
  textDist: 5,
  textSpeed: .009,
  mushroomDelay: 1000 * 60 * 1,
  mushroomPlayPeriod: 2000,

  // hero related
  jumpTime: 1000,
  jumpSize: 250,
  stepSpeed: .31,
  fallSpeed: .6,
  startLifes: 4,
  lifePos: [10, 10],
  countdownPos: [800, 20],
  verPos: [534, 110],
  pickedY: 6,
  touchDelay: 1500,
  coyoteDelay: 80,
  // keys: tinyurl.com/5n8deccv
  leftKey: 'KeyA',
  rightKey: 'KeyD',
  jumpKey: 'KeyW',
  fireKey: 'Space',

  // bullet
  bulletsPos: [10, 26],
  bulletSpeed: .8,
  bulletYOffs: 4,
  bulletsAmount: 10,
  bulletsAmountPos: [31, 44],

  // audio
  music: [Cave0],
  sounds: {
    hit: SoundHit,
    hitMushroom: SoundHitMushroom,
    key: SoundKey,
    gameOver: SoundGameOver,
    heart: SoundHeart,
    gun: SoundGun,
    win: SoundWin,
    mushroom: SoundBite,
    breath: SoundBreath,
    lending: SoundLending,
    steps: SoundSteps,
    bullets: SoundBullets,
    fire: SoundFire,
    bugDie: SoundBugDie,
    drop1: SoundDrop1,
    drop2: SoundDrop2,
    drop3: SoundDrop3,
    drop4: SoundDrop4
  },

  // sprites
  heart: [{ x: 0, y: 0 }, {idle: [HeartAnimPath, 9, 100]}],
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
    jumpGunRight: [JumpGunRightPath, 9, 150],

    idleHitLeft:  [IdleHitLeftPath,  1, 100],
    idleHitRight: [IdleHitRightPath, 1, 100]
  }],
  l1: [{x: 0, y: 0, width: WIDTH, height: HEIGHT}, L1Path],

  // enemies, items and scripts per rooms
  rooms: {
    enemies: {
      0: [
        [[{x: 350, y: 377}, {idleLeft: [BugLeftPath,    2, 300], idleRight: [BugRightPath,    2, 300]}], .5,  true],
        [[{x: 32,  y: 150}, {idleUp:   [BugUpPath,      2, 300], idleDown:  [BugDownPath,     2, 300]}], .5,  false],
        [[{x: 140, y: 729}, {idleLeft: [BugLeftPath,    2, 300], idleRight: [BugRightPath,    2, 300]}], .5,  true]
      ],
      1: [
        [[{x: 620, y: 505}, {idleLeft: [BugLeftPath,    2, 300], idleRight: [BugRightPath,    2, 300]}], .8,  true],
        [[{x: 200, y: 599}, {idleLeft: [BugBlkLeftPath, 5, 100], idleRight: [BugBlkRightPath, 5, 100]}], .8,  true]
      ],
      2: [
        [[{x: 150, y: 281}, {idleLeft: [BugLeftPath,    2, 300], idleRight: [BugRightPath,    2, 300]}], .9,  true],
        [[{x: 790, y: 377}, {idleLeft: [BugLeftPath,    2, 300], idleRight: [BugRightPath,    2, 300]}], .9,  true]
      ],
      3: [
        [[{x: 300, y: 281}, {idleLeft: [BugLeftPath,    2, 300], idleRight: [BugRightPath,    2, 300]}], 1,   true],
        [[{x: 150, y: 631}, {idleLeft: [BugBlkLeftPath, 5, 100], idleRight: [BugBlkRightPath, 5, 100]}], 2,   true],
        [[{x: 700, y: 727}, {idleLeft: [BugBlkLeftPath, 5, 100], idleRight: [BugBlkRightPath, 5, 100]}], 2,   true]
      ],
      4: [
        [[{x: 500, y: 313}, {idleLeft: [BugLeftPath,    2, 300], idleRight: [BugRightPath,    2, 300]}], 2,   true],
        [[{x: 760, y: 313}, {idleLeft: [BugLeftPath,    2, 300], idleRight: [BugRightPath,    2, 300]}], 2,   true],
        [[{x: 600, y: 631}, {idleLeft: [BugBlkLeftPath, 5, 100], idleRight: [BugBlkRightPath, 5, 100]}], 2,   true]
      ],
      5: [
        [[{x: 500, y: 473}, {idleLeft: [BugLeftPath,    2, 300], idleRight: [BugRightPath,    2, 300]}], 2,   true],
        [[{x: 850, y: 569}, {idleLeft: [BugLeftPath,    2, 300], idleRight: [BugRightPath,    2, 300]}], 1,   true]
      ],
      6: [
        [[{x: 200, y: 375}, {idleLeft: [BugBlkLeftPath, 5, 100], idleRight: [BugBlkRightPath, 5, 100]}], 2,   true],
        [[{x: 830, y: 599}, {idleLeft: [BugBlkLeftPath, 5, 100], idleRight: [BugBlkRightPath, 5, 100]}], 2,   true]
      ],
      7:[
        [[{x: 800, y: 695}, {idleLeft: [BugBlkLeftPath, 5, 100], idleRight: [BugBlkRightPath, 5, 100]}], 5,   true]
      ],
      8: [
        [[{x: 560, y: 217}, {idleLeft: [BugLeftPath,    2, 300], idleRight: [BugRightPath,    2, 300]}], 1,   true],
        [[{x: 270, y: 345}, {idleLeft: [BugLeftPath,    2, 300], idleRight: [BugRightPath,    2, 300]}], 1,   true],
        [[{x: 350, y: 729}, {idleLeft: [BugLeftPath,    2, 300], idleRight: [BugRightPath,    2, 300]}], 2,   true]
      ],
      9: [
        [[{x: 150, y: 697}, {idleLeft: [BugLeftPath,    2, 300], idleRight: [BugRightPath,    2, 300]}], 2,   true],
        [[{x: 200, y: 697}, {idleLeft: [BugLeftPath,    2, 300], idleRight: [BugRightPath,    2, 300]}], 1,   true],
        [[{x: 270, y: 697}, {idleLeft: [BugLeftPath,    2, 300], idleRight: [BugRightPath,    2, 300]}], 2,   true],
        [[{x: 890, y: 377}, {idleLeft: [BugLeftPath,    2, 300], idleRight: [BugRightPath,    2, 300]}], 1,   true]
      ],
      10: [
        [[{x: 150, y: 727}, {idleLeft: [BugBlkLeftPath, 5, 100], idleRight: [BugBlkRightPath, 5, 100]}], 2,   true]
      ],
      11: [
        [[{x: 150, y: 727}, {idleLeft: [BugBlkLeftPath, 5, 100], idleRight: [BugBlkRightPath, 5, 100]}], 2,   true],
        [[{x: 450, y: 727}, {idleLeft: [BugBlkLeftPath, 5, 100], idleRight: [BugBlkRightPath, 5, 100]}], 2.5, true]
      ],
      12: [
        [[{x: 150, y: 727}, {idleLeft: [BugBlkLeftPath, 5, 100], idleRight: [BugBlkRightPath, 5, 100]}], 2.7, true],
        [[{x: 650, y: 727}, {idleLeft: [BugBlkLeftPath, 5, 100], idleRight: [BugBlkRightPath, 5, 100]}], 2.7, true],
        [[{x: 350, y: 727}, {idleLeft: [BugBlkLeftPath, 5, 100], idleRight: [BugBlkRightPath, 5, 100]}], 2.7, true]
      ],
      13: [
        [[{x: 150, y: 183}, {idleLeft: [BugBlkLeftPath, 5, 100], idleRight: [BugBlkRightPath, 5, 100]}], 2.7, true],
        [[{x: 350, y: 727}, {idleLeft: [BugBlkLeftPath, 5, 100], idleRight: [BugBlkRightPath, 5, 100]}], 2.7, true],
        [[{x: 550, y: 727}, {idleLeft: [BugBlkLeftPath, 5, 100], idleRight: [BugBlkRightPath, 5, 100]}], 2.7, true]
      ],
      14: [
        [[{x: 150, y: 727}, {idleLeft: [BugBlkLeftPath, 5, 100], idleRight: [BugBlkRightPath, 5, 100]}], 3,   true],
        [[{x: 350, y: 727}, {idleLeft: [BugBlkLeftPath, 5, 100], idleRight: [BugBlkRightPath, 5, 100]}], 3,   true],
        [[{x: 550, y: 727}, {idleLeft: [BugBlkLeftPath, 5, 100], idleRight: [BugBlkRightPath, 5, 100]}], 3,   true],
        [[{x: 750, y: 727}, {idleLeft: [BugBlkLeftPath, 5, 100], idleRight: [BugBlkRightPath, 5, 100]}], 3,   true]
      ],
      15: [
        [[{x: 680, y: 727}, {idleLeft: [BugBlkLeftPath, 5, 100], idleRight: [BugBlkRightPath, 5, 100]}], 3,   true],
        [[{x: 450, y: 727}, {idleLeft: [BugBlkLeftPath, 5, 100], idleRight: [BugBlkRightPath, 5, 100]}], 3,   true],
        [[{x: 330, y: 727}, {idleLeft: [BugBlkLeftPath, 5, 100], idleRight: [BugBlkRightPath, 5, 100]}], 3,   true]
      ],
      16: [
        [[{x: 800, y: 729}, {idleLeft: [BugLeftPath,    2, 300], idleRight: [BugRightPath,    2, 300]}], 2,   true],
        [[{x: 200, y: 729}, {idleLeft: [BugLeftPath,    2, 300], idleRight: [BugRightPath,    2, 300]}], 2,   true]
      ],
      17: [
        [[{x: 150, y: 729}, {idleLeft: [BugLeftPath,    2, 300], idleRight: [BugRightPath,    2, 300]}], 2,   true],
      ],
      18: [
        [[{x: 800, y: 723}, {idleLeft: [BugBlueLeftPath,3, 200], idleRight: [BugBlueRightPath,3, 200]}], 2.9, true],
        [[{x: 192, y: 627}, {idleLeft: [BugBlueLeftPath,3, 200], idleRight: [BugBlueRightPath,3, 200]}], 2.9, true],
        [[{x: 352, y: 691}, {idleLeft: [BugBlueLeftPath,3, 200], idleRight: [BugBlueRightPath,3, 200]}], 2.9, true]
      ],
      19: [
        [[{x: 384, y: 727}, {idleLeft: [BugBlkLeftPath, 5, 100], idleRight: [BugBlkRightPath, 5, 100]}], 2.9, true],
        [[{x: 640, y: 727}, {idleLeft: [BugBlkLeftPath, 5, 100], idleRight: [BugBlkRightPath, 5, 100]}], 2.9, true]
      ],
      20: [
        [[{x: 384, y: 727}, {idleLeft: [BugBlkLeftPath, 5, 100], idleRight: [BugBlkRightPath, 5, 100]}], 2.9, true],
        [[{x: 600, y: 727}, {idleLeft: [BugBlkLeftPath, 5, 100], idleRight: [BugBlkRightPath, 5, 100]}], 2.9, true],
        [[{x: 800, y: 727}, {idleLeft: [BugBlkLeftPath, 5, 100], idleRight: [BugBlkRightPath, 5, 100]}], 2.3, true]
      ],
      21: [
        [[{x: 250, y: 727}, {idleLeft: [BugBlkLeftPath, 5, 100], idleRight: [BugBlkRightPath, 5, 100]}], 2.9, true],
        [[{x: 500, y: 727}, {idleLeft: [BugBlkLeftPath, 5, 100], idleRight: [BugBlkRightPath, 5, 100]}], 2.9, true]
      ],
      24: [
        [[{x: 400, y: 725}, {idleLeft: [BugBigLeftPath, 3, 200], idleRight: [BugBigRightPath, 3, 200]}], 3.3, true],
        [[{x: 600, y: 727}, {idleLeft: [BugBlkLeftPath, 5, 100], idleRight: [BugBlkRightPath, 5, 100]}], 3.5, true],
        [[{x: 100, y: 727}, {idleLeft: [BugBlkLeftPath, 5, 100], idleRight: [BugBlkRightPath, 5, 100]}], 3,   true]
      ],
      25: [
        [[{x: 768, y: 599}, {idleLeft: [BugBlkLeftPath, 5, 100], idleRight: [BugBlkRightPath, 5, 100]}], 2.9, true],
        [[{x: 200, y: 727}, {idleLeft: [BugBlkLeftPath, 5, 100], idleRight: [BugBlkRightPath, 5, 100]}], 2.9, true]
      ],
      27: [
        [[{x: 500, y: 659}, {idleLeft: [BugBlueLeftPath,3, 200], idleRight: [BugBlueRightPath,3, 200]}], 3.3, true],
        [[{x: 700, y: 691}, {idleLeft: [BugBlueLeftPath,3, 200], idleRight: [BugBlueRightPath,3, 200]}], 3.3, true]
      ],
      28: [
        [[{x: 736, y: 727}, {idleLeft: [BugBlkLeftPath, 5, 100], idleRight: [BugBlkRightPath, 5, 100]}], 3,   true],
        [[{x: 860, y: 247}, {idleLeft: [BugBlkLeftPath, 5, 100], idleRight: [BugBlkRightPath, 5, 100]}], 2,   true],
        [[{x: 500, y: 627}, {idleLeft: [BugBlueLeftPath,3, 200], idleRight: [BugBlueRightPath,3, 200]}], 3.3, true],
      ],
      29: [
        [[{x: 500, y: 147}, {idleLeft: [BugBlueLeftPath,3, 200], idleRight: [BugBlueRightPath,3, 200]}], 3,   true],
        [[{x: 200, y: 243}, {idleLeft: [BugBlueLeftPath,3, 200], idleRight: [BugBlueRightPath,3, 200]}], 3,   true],
        [[{x: 340, y: 729}, {idleLeft: [BugLeftPath,    2, 300], idleRight: [BugRightPath,    2, 300]}], 8,   true]
      ],
      30: [
        [[{x: 150, y: 211}, {idleLeft: [BugBlueLeftPath,3, 200], idleRight: [BugBlueRightPath,3, 200]}], 3.3, true],
        [[{x: 680, y: 307}, {idleLeft: [BugBlueLeftPath,3, 200], idleRight: [BugBlueRightPath,3, 200]}], 3.3, true],
        [[{x: 700, y: 723}, {idleLeft: [BugBlueLeftPath,3, 200], idleRight: [BugBlueRightPath,3, 200]}], 3.3, true]
      ],
      31: [
        [[{x: 400, y: 691}, {idleLeft: [BugBlueLeftPath,3, 200], idleRight: [BugBlueRightPath,3, 200]}], 3.3, true]
      ],
      32: [
        [[{x: 400, y: 695}, {idleLeft: [BugBlkLeftPath, 5, 100], idleRight: [BugBlkRightPath, 5, 100]}], 3.5, true],
        [[{x: 250, y: 627}, {idleLeft: [BugBlueLeftPath,3, 200], idleRight: [BugBlueRightPath,3, 200]}], 3.4, true]
      ],
      33: [
        [[{x: 400, y: 695}, {idleLeft: [BugBlkLeftPath, 5, 100], idleRight: [BugBlkRightPath, 5, 100]}], 3.5, true],
        [[{x: 200, y: 691}, {idleLeft: [BugBlueLeftPath,3, 200], idleRight: [BugBlueRightPath,3, 200]}], 3.3, true]
      ],
      34: [
        [[{x: 400, y: 693}, {idleLeft: [BugBigLeftPath, 3, 200], idleRight: [BugBigRightPath, 3, 200]}], 4,   true],
        [[{x: 600, y: 693}, {idleLeft: [BugBigLeftPath, 3, 200], idleRight: [BugBigRightPath, 3, 200]}], 5,   true],
        [[{x: 200, y: 693}, {idleLeft: [BugBigLeftPath, 3, 200], idleRight: [BugBigRightPath, 3, 200]}], 5,   true],
        [[{x: 650, y: 693}, {idleLeft: [BugBigLeftPath, 3, 200], idleRight: [BugBigRightPath, 3, 200]}], 4,   true]
      ],
      35: [
        [[{x: 400, y: 693}, {idleLeft: [BugBigLeftPath, 3, 200], idleRight: [BugBigRightPath, 3, 200]}], 4,   true],
        [[{x: 600, y: 693}, {idleLeft: [BugBigLeftPath, 3, 200], idleRight: [BugBigRightPath, 3, 200]}], 5,   true],
        [[{x: 350, y: 661}, {idleLeft: [BugBigLeftPath, 3, 200], idleRight: [BugBigRightPath, 3, 200]}], 5,   true],
        [[{x: 750, y: 693}, {idleLeft: [BugBigLeftPath, 3, 200], idleRight: [BugBigRightPath, 3, 200]}], 4,   true]
      ],
      36: [
        [[{x: 400, y: 693}, {idleLeft: [BugBigLeftPath, 3, 200], idleRight: [BugBigRightPath, 3, 200]}], 4,   true],
        [[{x: 300, y: 693}, {idleLeft: [BugBigLeftPath, 3, 200], idleRight: [BugBigRightPath, 3, 200]}], 5,   true],
        [[{x: 200, y: 693}, {idleLeft: [BugBigLeftPath, 3, 200], idleRight: [BugBigRightPath, 3, 200]}], 5,   true],
        [[{x: 250, y: 693}, {idleLeft: [BugBigLeftPath, 3, 200], idleRight: [BugBigRightPath, 3, 200]}], 4,   true]
      ],
      37: [
        [[{x: 600, y: 693}, {idleLeft: [BugBigLeftPath, 3, 200], idleRight: [BugBigRightPath, 3, 200]}], 5,   true],
        [[{x: 250, y: 629}, {idleLeft: [BugBigLeftPath, 3, 200], idleRight: [BugBigRightPath, 3, 200]}], 5,   true]
      ],
      38: [
        [[{x: 700, y: 693}, {idleLeft: [BugBigLeftPath, 3, 200], idleRight: [BugBigRightPath, 3, 200]}], 5,   true],
        [[{x: 500, y: 693}, {idleLeft: [BugBigLeftPath, 3, 200], idleRight: [BugBigRightPath, 3, 200]}], 5,   true],
        [[{x: 800, y: 693}, {idleLeft: [BugBigLeftPath, 3, 200], idleRight: [BugBigRightPath, 3, 200]}], 5,   true],
        [[{x: 300, y: 437}, {idleLeft: [BugBigLeftPath, 3, 200], idleRight: [BugBigRightPath, 3, 200]}], 5,   true],
        [[{x: 650, y: 437}, {idleLeft: [BugBigLeftPath, 3, 200], idleRight: [BugBigRightPath, 3, 200]}], 5,   true],
        [[{x: 750, y: 437}, {idleLeft: [BugBigLeftPath, 3, 200], idleRight: [BugBigRightPath, 3, 200]}], 5,   true]
      ],
      39: [
        [[{x: 200, y: 693}, {idleLeft: [BugBigLeftPath, 3, 200], idleRight: [BugBigRightPath, 3, 200]}], 5,   true],
        [[{x: 400, y: 693}, {idleLeft: [BugBigLeftPath, 3, 200], idleRight: [BugBigRightPath, 3, 200]}], 5,   true],
        [[{x: 600, y: 693}, {idleLeft: [BugBigLeftPath, 3, 200], idleRight: [BugBigRightPath, 3, 200]}], 5,   true],
        [[{x: 750, y: 661}, {idleLeft: [BugBigLeftPath, 3, 200], idleRight: [BugBigRightPath, 3, 200]}], 5,   true]
      ]
    },
    items: {
      0: [
        //[[{x: 100, y: 200}, {idle: [GunAnimPath,   9,  150]}], 'gun',      'foundGun'],
        //[[{x: 200, y: 300}, {idle: [BulletsPath,   9,  150]}], 'bullets',  'foundBullets'],
        //[[{x: 830, y: 580}, {idle: [KeyPath,       7,  200]}], 'key',     'foundKey']
        //[[{x: 400, y: 300}, {idle: [Mushroom1Path, 1,  100]}], 'mushroom', 'foundTeleMushroom'],
        //[[{x: 600, y: 200}, {idle: [PortalPath,    9,  111]}], 'portal', 'foundBraveMushroom']
      ],
      2: [
        [[{x: 128, y: 700}, {idle: [HeartAnimPath, 9,  100]}], 'heart',   'foundHeart']
      ],
      4: [
        [[{x: 770, y: 200}, {idle: [HeartAnimPath, 9,  100]}], 'heart',   'foundHeart']
      ],
      5: [
        [[{x: 958, y: 288}, {idle: [GunAnimPath,   9,  150]}], 'gun',     'foundGun']
      ],
      7: [
        [[{x: 880, y: 600}, {idle: [BulletsPath,   9,  150]}], 'bullets', 'foundBullets']
      ],
      8: [
        [[{x: 80,  y: 230}, {idle: [HeartAnimPath, 9,  100]}], 'heart',   'foundHeart'],
        [[{x: 350, y: 650}, {idle: [BulletsPath,   9,  150]}], 'bullets', 'foundBullets']
      ],
      10: [
        [[{x: 550, y: 128}, {idle: [BulletsPath,   9,  150]}], 'bullets', 'foundBullets']
      ],
      11: [
        [[{x: 832, y: 224}, {idle: [HeartAnimPath, 9,  100]}], 'heart',   'foundHeart'],
      ],
      13: [
        [[{x: 800, y: 600}, {idle: [HeartAnimPath, 9,  100]}], 'heart',   'foundHeart']
      ],
      14: [
        [[{x: 900, y: 600}, {idle: [HeartAnimPath, 9,  100]}], 'heart',   'foundHeart']
      ],
      15: [
        [[{x: 900, y: 600}, {idle: [HeartAnimPath, 9,  100]}], 'heart',   'foundHeart']
      ],
      18: [
        [[{x: 655, y: 140}, {idle: [Mushroom9Path, 9,  100]}], 'mushroom','foundBraveMushroom']
      ],
      20: [
        [[{x: 860, y: 138}, {idle: [HeartAnimPath, 9,  100]}], 'heart',   'foundHeart']
      ],
      21: [
        [[{x: 530, y: 100}, {idle: [BulletsPath,   9,  150]}], 'bullets', 'foundBullets']
      ],
      22: [
        [[{x: 288, y: 168}, {idle: [HeartAnimPath, 9,  100]}], 'heart',   'foundHeart']
      ],
      23: [
        [[{x: 820, y: 100}, {idle: [BulletsPath,   9,  150]}], 'bullets', 'foundBullets']
      ],
      25: [
        [[{x: 880, y: 704}, {idle: [HeartAnimPath, 9,  100]}], 'heart',   'foundHeart']
      ],
      29: [
        [[{x: 880, y: 704}, {idle: [HeartAnimPath, 9,  100]}], 'heart',   'foundHeart']
      ],
      39: [
        [[{x: 830, y: 580}, {idle: [KeyPath,       7,  200]}], 'key',     'foundKey'],
        [[{x: 576, y: 160}, {idle: [BulletsPath,   9,  150]}], 'bullets', 'foundBullets']
      ]
    },
    scripts: {
      0: [
        ['Drop',   {sprite1: [{x: 173, y: 164}, DropPath], sprite2: [{x: 151, y:  64}, {idle: [DropDownPath, 12, 80]}], pos: 1, sound: 'drop1', speed: 10, delay: 2000}],
        ['Drop',   {sprite1: [{x: 619, y: 172}, DropPath], sprite2: [{x: 632, y:  64}, {idle: [DropDownPath, 12, 80]}], pos: 1, sound: 'drop3', speed:  9, delay: 4000}],
        ['Text',   {text: ['Welcome Mary Brave!',           419, 300,     0, 3000, true], id: id()}],
        ['Text',   {text: ['a - left, d - right, w - jump', 386, 300,  3500, 4000, true], id: id()}],
        ['Text',   {text: ['Find a key and open the door',  380, 300,  8000, 3000, true], id: id()}],
        ['Text',   {text: ['And don\'t touch these bugs',   380, 300, 11500, 4000, true], id: id()}],
        ['Text',   {text: ['Good luck!',                    467, 300, 16000, 4000, true], id: id()}],
        ['Sprite', {sprite: [{x: 150, y:  64}, StalactiteUp1Path]}],
        ['Sprite', {sprite: [{x: 580, y:  64}, StalactiteUp2Path]}]
      ],
      1: [
        ['Drop',   {sprite1: [{x: 112, y: 159}, DropPath], sprite2: [{x: 112, y: 159}, {idle: [DropDownPath, 12, 80]}], pos: 1, sound: 'drop2', speed: 10, delay: 2000}],
        ['Sprite', {sprite:  [{x:  75, y: 530}, StalactiteDown1Path]}]
      ],
      2: [
        ['Drop',   {sprite1: [{x: 537, y: 140}, DropPath], sprite2: [{x: 537, y: 140}, {idle: [DropDownPath, 12, 80]}], pos: 1, sound: 'drop2', speed: 10, delay: 2000}],
        ['Sprite', {sprite:  [{x: 500, y:  64}, StalactiteUp1Path]}]
      ],
      3: [
        ['Drop',   {sprite1: [{x:   7, y:  64}, DropPath], sprite2: [{x:   7, y:  64}, {idle: [DropDownPath, 12, 80]}], pos: 1, sound: 'drop4', speed: 10, delay: 3000}],
        ['Drop',   {sprite1: [{x: 631, y:  64}, DropPath], sprite2: [{x: 631, y:  64}, {idle: [DropDownPath, 12, 80]}], pos: 1, sound: 'drop3', speed:  8, delay: 2500}]
      ],
      4: [
        ['Drop',   {sprite1: [{x: 739, y: 170}, DropPath], sprite2: [{x: 739, y: 170}, {idle: [DropDownPath, 12, 80]}], pos: 1, sound: 'drop1', speed: 10, delay: 1000}],
        ['Drop',   {sprite1: [{x: 998, y: 448}, DropPath], sprite2: [{x: 998, y: 448}, {idle: [DropDownPath, 12, 80]}], pos: 1, sound: 'drop3', speed:  8, delay: 2500}],
        ['Sprite', {sprite:  [{x: 700, y:  64}, StalactiteUp2Path]}]
      ],
      5: [
        ['Drop',   {sprite1: [{x: 120, y: 535}, DropPath], sprite2: [{x: 120, y: 535}, {idle: [DropDownPath, 12, 80]}], pos: 1, sound: 'drop1', speed: 10, delay: 1000}],
        ['Drop',   {sprite1: [{x:1007, y: 128}, DropPath], sprite2: [{x:1007, y: 128}, {idle: [DropDownPath, 12, 80]}], pos: 1, sound: 'drop2', speed: 20, delay:  500}],
        ['Sprite', {sprite:  [{x:  69, y: 448}, StalactiteUp1Path]}]
      ],
      6: [
        ['Drop',   {sprite1: [{x: 654, y:  64}, DropPath], sprite2: [{x: 654, y:  64}, {idle: [DropDownPath, 12, 80]}], pos: 1, sound: 'drop3', speed:  5, delay: 1000}],
        ['Drop',   {sprite1: [{x: 525, y: 208}, DropPath], sprite2: [{x: 525, y: 208}, {idle: [DropDownPath, 12, 80]}], pos: 1, sound: 'drop4', speed: 30, delay:  200}],
        ['Drop',   {sprite1: [{x: 108, y: 479}, DropPath], sprite2: [{x: 108, y: 479}, {idle: [DropDownPath, 12, 80]}], pos: 1, sound: 'drop2', speed: 40, delay:  100}],
        ['Sprite', {sprite:  [{x: 487, y: 128}, StalactiteUp1Path]}]
      ],
      7: [
        ['Drop',   {sprite1: [{x: 605, y: 395}, DropPath], sprite2: [{x: 605, y: 395}, {idle: [DropDownPath, 12, 80]}], pos: 1, sound: 'drop1', speed:  5, delay: 2000}],
        ['Sprite', {sprite:  [{x: 565, y: 288}, StalactiteUp2Path]}]
      ],
      8: [
        ['Drop',   {sprite1: [{x: 422, y:  64}, DropPath], sprite2: [{x: 422, y:  64}, {idle: [DropDownPath, 12, 80]}], pos: 1, sound: 'drop2', speed: 10, delay:  500}],
        ['Drop',   {sprite1: [{x:  84, y: 128}, DropPath], sprite2: [{x:  84, y: 128}, {idle: [DropDownPath, 12, 80]}], pos: 1, sound: 'drop3', speed: 10, delay:  200}],
        ['Drop',   {sprite1: [{x: 460, y: 652}, DropPath], sprite2: [{x: 460, y: 652}, {idle: [DropDownPath, 12, 80]}], pos: 1, sound: 'drop1', speed: 10, delay: 1000}],
        ['Sprite', {sprite:  [{x: 420, y: 544}, StalactiteUp2Path]}]
      ],
      10: [
        ['Drop',   {sprite1: [{x: 590, y: 288}, DropPath], sprite2: [{x: 590, y: 288}, {idle: [DropDownPath, 12, 80]}], pos: 1, sound: 'drop1', speed:  9, delay: 1000}],
        ['Drop',   {sprite1: [{x: 985, y: 512}, DropPath], sprite2: [{x: 985, y: 512}, {idle: [DropDownPath, 12, 80]}], pos: 1, sound: 'drop2', speed: 10, delay: 1000}]
      ],
      13: [
        ['Drop',   {sprite1: [{x:  46, y: 288}, DropPath], sprite2: [{x:  46, y: 288}, {idle: [DropDownPath, 12, 80]}], pos: 1, sound: 'drop4', speed:  8, delay: 4000}],
        ['Drop',   {sprite1: [{x: 384, y: 395}, DropPath], sprite2: [{x: 384, y: 395}, {idle: [DropDownPath, 12, 80]}], pos: 1, sound: 'drop2', speed: 10, delay: 1000}],
        ['Sprite', {sprite:  [{x: 345, y: 288}, StalactiteUp2Path]}]
      ],
      14: [
        ['Drop',   {sprite1: [{x: 536, y: 527}, DropPath], sprite2: [{x: 536, y: 527}, {idle: [DropDownPath, 12, 80]}], pos: 1, sound: 'drop1', speed:  5, delay: 2000}],
        ['Drop',   {sprite1: [{x: 333, y: 640}, DropPath], sprite2: [{x: 333, y: 640}, {idle: [DropDownPath, 12, 80]}], pos: 1, sound: 'drop2', speed: 10, delay: 1000}],
        ['Sprite', {sprite:  [{x: 498, y: 448}, StalactiteUp1Path]}]
      ],
      16: [
        ['Drop',   {sprite1: [{x: 219, y: 567}, DropPath], sprite2: [{x: 219, y: 567}, {idle: [DropDownPath, 12, 80]}], pos: 1, sound: 'drop1', speed:  5, delay: 2000}],
        ['Drop',   {sprite1: [{x: 658, y: 140}, DropPath], sprite2: [{x: 658, y: 140}, {idle: [DropDownPath, 12, 80]}], pos: 1, sound: 'drop2', speed: 10, delay: 1000}],
        ['Sprite', {sprite:  [{x: 168, y: 480}, StalactiteUp1Path]}],
        ['Sprite', {sprite:  [{x: 618, y:  32}, StalactiteUp2Path]}],
        ['Portal', {sprite:  [{x: 300, y:  96}, {idle: [PortalPath, 9, 80]}], pos: 1}]
      ],
      17: [
        ['Drop',   {sprite1: [{x: 271, y:  32}, DropPath], sprite2: [{x: 271, y:  32}, {idle: [DropDownPath, 12, 80]}], pos: 1, sound: 'drop1', speed:  5, delay: 2000}],
        ['Drop',   {sprite1: [{x: 108, y: 256}, DropPath], sprite2: [{x: 108, y: 256}, {idle: [DropDownPath, 12, 80]}], pos: 1, sound: 'drop2', speed: 10, delay: 1000}]
      ],
      19: [
        ['Drop',   {sprite1: [{x: 397, y: 416}, DropPath], sprite2: [{x: 397, y: 416}, {idle: [DropDownPath, 12, 80]}], pos: 1, sound: 'drop3', speed: 10, delay: 2000}],
        ['Drop',   {sprite1: [{x: 688, y: 544}, DropPath], sprite2: [{x: 688, y: 544}, {idle: [DropDownPath, 12, 80]}], pos: 1, sound: 'drop2', speed: 10, delay: 1000}]
      ],
      20: [
        ['Drop',   {sprite1: [{x: 157, y:  85}, DropPath], sprite2: [{x: 157, y:  85}, {idle: [DropDownPath, 12, 80]}], pos: 1, sound: 'drop3', speed: 10, delay: 2000}],
        ['Sprite', {sprite:  [{x: 134, y:  32}, StalactiteUp2Path]}]
      ],
      22: [
        ['Drop',   {sprite1: [{x: 471, y: 544}, DropPath], sprite2: [{x: 471, y: 544}, {idle: [DropDownPath, 12, 80]}], pos: 1, sound: 'drop3', speed: 10, delay: 2000}],
        ['Drop',   {sprite1: [{x: 609, y: 653}, DropPath], sprite2: [{x: 609, y: 653}, {idle: [DropDownPath, 12, 80]}], pos: 1, sound: 'drop1', speed: 10, delay: 1000}],
        ['Drop',   {sprite1: [{x: 801, y: 631}, DropPath], sprite2: [{x: 801, y: 631}, {idle: [DropDownPath, 12, 80]}], pos: 1, sound: 'drop2', speed:  7, delay: 3000}],
        ['Sprite', {sprite:  [{x: 569, y: 544}, StalactiteUp2Path]}],
        ['Sprite', {sprite:  [{x: 750, y: 544}, StalactiteUp1Path]}]
      ],
      23: [
        ['Drop',   {sprite1: [{x: 272, y: 640}, DropPath], sprite2: [{x: 272, y: 640}, {idle: [DropDownPath, 12, 80]}], pos: 1, sound: 'drop2', speed: 10, delay: 2000}],
        ['Drop',   {sprite1: [{x: 551, y: 135}, DropPath], sprite2: [{x: 551, y: 135}, {idle: [DropDownPath, 12, 80]}], pos: 1, sound: 'drop1', speed: 10, delay: 1000}],
        ['Sprite', {sprite:  [{x: 527, y:  32}, StalactiteUp1Path]}]
      ],
      24: [
        ['Drop',  {sprite1: [{x: 432, y: 416}, DropPath], sprite2: [{x: 432, y: 416}, {idle: [DropDownPath, 12, 80]}], pos: 1, sound: 'drop2', speed: 10, delay: 2000}],
        ['Drop',  {sprite1: [{x: 627, y: 416}, DropPath], sprite2: [{x: 627, y: 416}, {idle: [DropDownPath, 12, 80]}], pos: 1, sound: 'drop1', speed: 10, delay: 1000}],
        ['Door',  {pos: 1}]
      ],
      25: [
        ['Drop',   {sprite1: [{x: 312, y: 133}, DropPath], sprite2: [{x: 312, y: 133}, {idle: [DropDownPath, 12, 80]}], pos: 1, sound: 'drop1', speed: 10, delay: 1000}],
        ['Sprite', {sprite:  [{x: 288, y:  32}, StalactiteUp1Path]}]
      ],
      27: [
        ['Drop', {sprite1: [{x: 300, y: 320}, DropPath], sprite2: [{x: 300, y: 320}, {idle: [DropDownPath, 12, 80]}], pos: 1, sound: 'drop3', speed:  8, delay: 2000}],
        ['Drop', {sprite1: [{x: 908, y:  96}, DropPath], sprite2: [{x: 908, y:  96}, {idle: [DropDownPath, 12, 80]}], pos: 1, sound: 'drop1', speed:  7, delay: 1000}]
      ],
      32: [
        ['Drop', {sprite1: [{x: 642, y: 576}, DropPath], sprite2: [{x: 642, y: 576}, {idle: [DropDownPath, 12, 80]}], pos: 1, sound: 'drop2', speed:  8, delay: 2000}]
      ],
      34: [
        ['Drop', {sprite1: [{x: 400, y: 256}, DropPath], sprite2: [{x: 400, y: 256}, {idle: [DropDownPath, 12, 80]}], pos: 1, sound: 'drop2', speed:  8, delay: 2000}]
      ],
      35: [
        ['Drop', {sprite1: [{x: 627, y: 608}, DropPath], sprite2: [{x: 627, y: 608}, {idle: [DropDownPath, 12, 80]}], pos: 1, sound: 'drop3', speed:  8, delay: 2000}]
      ],
      38: [
        ['Drop', {sprite1: [{x: 400, y: 576}, DropPath], sprite2: [{x: 400, y: 576}, {idle: [DropDownPath, 12, 80]}], pos: 1, sound: 'drop1', speed:  8, delay: 2000}],
        ['Drop', {sprite1: [{x: 627, y: 576}, DropPath], sprite2: [{x: 627, y: 576}, {idle: [DropDownPath, 12, 80]}], pos: 1, sound: 'drop3', speed:  8, delay: 1000}],
        ['Drop', {sprite1: [{x: 800, y: 576}, DropPath], sprite2: [{x: 800, y: 576}, {idle: [DropDownPath, 12, 80]}], pos: 1, sound: 'drop2', speed:  8, delay: 3000}]
      ],
      39: [
        ['Drop', {sprite1: [{x: 544, y: 544}, DropPath], sprite2: [{x: 544, y: 544}, {idle: [DropDownPath, 12, 80]}], pos: 1, sound: 'drop1', speed:  8, delay: 2000}],
        ['Drop', {sprite1: [{x: 769, y: 447}, DropPath], sprite2: [{x: 769, y: 447}, {idle: [DropDownPath, 12, 80]}], pos: 1, sound: 'drop3', speed:  8, delay: 1000}],
        ['Drop', {sprite1: [{x: 621, y: 319}, DropPath], sprite2: [{x: 621, y: 319}, {idle: [DropDownPath, 12, 80]}], pos: 1, sound: 'drop2', speed:  8, delay: 3000}]
      ]
    }
  },
  msgs: {
    gameOver:           'Game Over!',
    youWin:             'You win!',
    foundBullets: () => `You found ${Config.bulletsAmount} bullets`,
    foundHeart:         'You found one life',
    foundGun:           'You found a gun',
    foundKey:           'You found a key',
    foundBraveMushroom: 'You found brave mushroom',
    foundTeleMushroom:  'You found tele mushroom',
    foundTeleport:      'You found teleport',
    noMobileSupport:    'We support only Chrome under desktop for this game. Sorry :(',
    score:         s => `Your Score: ${s}`,
    yourTime:      t => `Your time: ${t}`,
    time:          s => `time: ${s}s`
  },
  barriers: new BigUint64Array([18446744073709551615n,18446744073709551615n,18446744073709551615n,18446744073709551615n,18446744073709551615n,16158915463005339647n,18446744073709551615n,18446744073709551615n,13853002359925366784n,16769024n,2147221631n,18446726549974679551n,9225483167899574272n,8372224n,1073217599n,18446708923160395775n,9224357200346996736n,8372224n,536346680n,33822932991n,9223372036921876480n,8372351n,18374686479673196592n,33822932991n,9223372036888322048n,511n,18410715276692160560n,32767n,9223372036888322079n,13835058055282164216n,4575657221409996848n,32767n,9223372036888322079n,13835058055282165696n,2269814212194730032n,32767n,9223372036854775839n,13835058055282165632n,48n,255n,13835058055282163743n,18444492274164301568n,48n,127n,13889101250810609695n,18444492274164301312n,4503599358935088n,63n,18428729675200069759n,18444492274164300800n,4503599493152824n,31n,18446603336221196415n,18444501061398953984n,4503599493152831n,18442240475122368543n,18446739675663040639n,18444501061398953984n,33n,18442240475122368543n,18446739675663040639n,18444712167631486976n,0n,1040187423n,10376012066484912380n,33785784708366336n,2095104n,30786325577759n,9258837883920383996n,33785784708366339n,16140901064495857664n,30786325577731n,9223372036854841340n,33785784708366339n,16140901064495857664n,30786333704195n,9223372036854775808n,33785789003333635n,16140901064495857785n,18428729675208196099n,9223372174289534976n,33785791150817283n,16140901081541509120n,141012105953283n,9223372174289534976n,33777065922658307n,9232378703399354368n,274609471491n,9223372174289534976n,33777031563968515n,9232378693869895680n,1126174516314115n,9223372043297226752n,33777014384197639n,9232378693869895680n,16383n,18445757811779436544n,33777005794295807n,9232378693869895680n,16383n,18445644562081775616n,3758227455n,9223372044370968576n,16383n,18445618173802708992n,3n,9223372044370968576n,255n,17573045745999675392n,2017612633061982209n,9223372044370968576n,917535n,16267424066527297536n,1n,9223372044370968576n,7n,13943566658804121600n,1n,9223372044370972160n,3n,9223794249319841792n,1n,9223372044370972167n,18374686479671623683n,9223794249319841806n,246290604621825n,11240984677969829383n,13835058055282163715n,9223794249319841792n,246840360435713n,11241000071669480963n,9223372036854775811n,9224497387005804544n,246290604621825n,11241000071669480963n,9223380832939438083n,9224497387005804544n,1n,9223387430017564675n,9223380832939409411n,17871408671557156864n,117440625n,9225342361691750403n,9223380832939409411n,17874786371277684736n,229377n,9225342361691750403n,9223372052960903171n,18446743798831644672n,1n,9225342361691750403n,9223372043297226759n,18446744071562070015n,30064771073n,9223372036854775811n,9223864624506470415n,18446744071830374399n,30064771073n,9349472826421149699n,9223372043297227263n,18446744071830374399n,30064771073n,9349472826421149699n,9223372043297227263n,18446744071830372352n,1n,9349472826421149699n,9223372043297227263n,13835198790757122048n,1n,9223372036854775811n,9223372043297226759n,9223442403518316544n,1n,9223372036854775811n,9223372043297226755n,9223407219079380992n,1n,9223372036854775811n,9254897240688877571n,9223407219079380992n,61572651155456n,3n,9223372044370968583n,9223407220153122816n,0n,3n,9223372045436321807n,9223407220153122816n,32212254720n,68451041283n,9223372045436321855n,9223442405598953344n,33285996544n,137170518023n,13835058072457838847n,9367487224930631619n,18442240508441919487n,18446744073449504767n,18446744073709551615n,9367487224922259201n,18442240480524632067n,18446744072644198399n,18446744073709551615n,9223372311715913217n,17361376563513262081n,13835058070321889280n,4611686017353646087n,9223372174276959233n,17361376563513262081n,9223372043303518208n,2305843007066210307n,9223372174226623488n,1n,9223372043303518208n,2017612648094367747n,9223372174159514624n,6442450945n,9223372043303518208n,1729382263352721411n,9223372174025293824n,6442450945n,9223372043304566784n,1729382263352721411n,9727775332290789383n,17870283327848579073n,9223372043305615328n,1729382263352721411n,9223372105305817095n,17870289925320998913n,9223372249464045536n,2017612639504433267n,9223372070677643271n,17870283327848579073n,9223372043304566784n,2305842740778237955n,9223372052960903169n,13943144452781506561n,9223372043303518208n,4611685749991931907n,9223372052960903169n,13835058061749780481n,9223372043303518208n,4539628430831910915n,9223372044370968577n,13835058061724614657n,9223372043303518208n,4467570836793982979n,10340264750885109985n,16140901070939881473n,9223372043303518208n,9079256855221370883n,10340264750885109763n,16140901070938308609n,9223424819855491071n,18302628892076204035n,10340264744442658819n,16154411869820469249n,9223372051887292415n,18302628900666081283n,9223372036854775811n,16140901072012050433n,9223372051887292415n,18304880683299897347n,9223372036854775815n,16140901072012051969n,9223372043297357823n,18304880683299897347n,9223372036854775815n,17293822576618897409n,9223372043297882111n,18302628952205688835n,9241316066620094471n,17293822577155768321n,13835058055282294783n,18311636117100691459n,9241316073062531079n,17293822577424203779n,16154411863377969152n,32241614851n,9241316073062531087n,17870283329861844999n,17293822569102704640n,32212254723n,9241316073062531103n,18410715285213413391n,18374686479671623680n,32212254723n,9241316073062531135n,18428729683756450047n,18410715276690587648n,32212254727n,13853037285525684287n,18446462607314387455n,18428729675200069632n,67645734927n,18446744073709027391n,18446744073709502463n,18446735552494434335n,18446744073709486095n,18446743532543148095n,18446744073709502463n,18446735552494434335n,18446744073709486095n,13835058055282163775n,9223934985734455807n,18428729675200069632n,70368739983363n,9223372036854775871n,9223372172146245887n,18410715276690587648n,2199014866945n,9223372036854906943n,9223372103426768903n,18374686479671623680n,1099503239169n,9223372172146376719n,9223372103426768899n,17293822569102704640n,549739037697n,9223372051887161351n,9223372069067046913n,16140901064495857664n,549722259457n,9223372043297226753n,9223372051887161345n,13835058055282687872n,549487378433n,9223372043297226753n,9223372043297226753n,9223372036855299968n,67645734915n,9223372043297259520n,6442450945n,9223372036855824383n,18445618173802708999n,9367487506251022336n,6446743553n,9223372174293729279n,18446181123756130431n,9367487506250989568n,6442450945n,9223372174293729279n,18446462598732841085n,9224515535390113792n,6442450945n,9223372174293729279n,18446744073575334129n,9224515535390113792n,6442451713n,9223372037928517631n,18446744073642443201n,9223372043297226755n,16140901070938308609n,9223372037391646719n,18445618174272471937n,11529215052510924807n,17293822575545155585n,9223372037123211263n,18444492274130751233n,9223372043297230855n,17870283327848579073n,13835061903841296355n,16140901064764292609n,9223372043297226759n,17996384118488694785n,16140904913054990273n,9223372036921883649n,9223372043297226759n,18005391318280306689n,17293826417527619457n,9223372036854775809n,9367487231373082631n,16283890361221251103n,18374686479738732417n,9223372036854775809n,9223372043297226767n,13906552707939827743n,18410715276724141953n,9223372173219987457n,9223372044370972671n,9231816303333867551n,18428729675200069633n,9223372173219987457n,9223372044907841537n,9227312720886366239n,18446462598732840961n,9223372173219987463n,9223372045176276993n,9227313236284522559n,18446603336221196289n,9223372311195812095n,9223372045176276993n,3941749185570815n,18446673704965373955n,13835058605037912575n,18014398509481982207n,1733885856537634815n,18446744012539822079n,18379190079298994175n,18014398509481982206n,4037477065937643519n,18446744012539822079n,18379190079298994175n,17870283871161417740n,3458768911867045887n,18446743531469930511n,18304880685443186815n,17293822843972222976n,6917531226664321279n,18446742980640374791n,18159639597456293951n,16140901201918033920n,13835058124001607807n,18446741881128747011n,17870846271342772255n,16140901133181779969n,9223372071212417151n,18446739682105491459n,17325382950832832543n,16140901132678465025n,9223372054030454847n,18446673720467521536n,31542789544083487n,16285016320217448688n,9231253344524173343n,18446603368903213056n,31525472235946015n,13835058121854157040n,7881307400962063n,18446462631414857728n,137371844623n,13835058087494418672n,7516192783n,18428729707412324352n,1008806453835755527n,13835058087494418672n,6442450959n,18410715308902842368n,1008806453835755521n,9223372051887259888n,6442452751n,18374686546243616768n,1008806453835726849n,9230127451328217328n,6442452743n,16140901199802007552n,1008806453835726849n,9230127436295831793n,9223372043297226755n,13835058190588313600n,2161727821137838081n,9223372036854776049n,9349472832863600641n,9223372173234700287n,18302628885633696129n,9223372036854776049n,9349472832863600641n,9223372173756891135n,18374686479677915137n,9223372036861067505n,9223372043297226753n,9223372173756891135n,18446744073707454465n,9223398432650035441n,9223372043297226753n,9223372311464280063n,18446744073707503617n,13835084451614294257n,9223372036854790144n,4397912326143n,18446744073707454467n,16140901072817357296n,14336n,8795958804480n,65011719n,17293822586014139376n,0n,17592118935552n,15n,17870283355497433080n,25165824n,140737454800896n,31n,18442240542667444223n,17870283321469042688n,281474976186368n,63n,18444492411267719167n,18158513697691795456n,562949953159168n,2305561534236985343n,18446744073709551615n,18446744073709551615n,18446744073709551615n,18446744073709551615n,18446744073709551615n,18446744073709551615n,18446744073709551615n,18446744073709551615n])
}