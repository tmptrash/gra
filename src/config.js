import { ASSET_NAMES as A } from './assets'

const WIDTH  = 1024
const HEIGHT = 800
const EFFECT_ID = 'effectsId'
let Config = null
let uniqueId = 0

export function id() {
  return ++uniqueId
}

export const Msgs = {
  welcome:              'Welcome Mary Brave!',
  keys:           () => `left - ${fmt(Config.leftKey)}, right - ${fmt(Config.rightKey)}, jump - ${fmt(Config.jumpKey)}, climb - ${fmt(Config.climbKey)}`,
  climb:          () => `Jump to the wall and press ${fmt(Config.climbKey)} to climb`,
  findTheKey:           'Find a key and open the door',
  dontTouchBugs:        'And don\'t touch these bugs',
  goodLuck:             'Good luck!',
  gameOver:             'You died!',
  youWin:               'You win!',
  foundBullets:   () => `You found ${Config.bulletsAmount} bullets`,
  foundHeart:           'You found one life',
  foundGun:       () => `Gun! Use ${fmt(Config.fireKey)} to activate`,
  foundKey:             'You found a key',
  foundBraveMushroom:   'You found brave mushroom',
  foundTeleMushroom:    'You found tele mushroom',
  foundTeleport:        'You found teleport',
  foundFlashlight:() => `Flashlight! Use ${fmt(Config.useKey)} to fire`,
  flashlightOn:         'Flashlight is On',
  flashlightOff:        'Flashlight is Off',
  noMobileSupport:      'We support only Desktop Chrome. Sorry :(',
  loading:              'Loading. Please wait...',
  score:           s => `Your Score: ${s}`,
  yourTime:        t => `Your time: ${t}`,
  time:            s => `time: ${s}s`,
  alreadyUsed:          'this key is already used'
}

export default Config = {
  // html & css & ids
  ver: 'v0.1',
  src: 'https://github.com/tmptrash/gra',
  canvasQuery: '#canvas',
  audioId: 'audio',
  heroId: 'hero',
  bulletId: 'bullet',
  bulletsId: 'bullets',
  beforeEffectsId: 'beforeEffects',
  effectsId: EFFECT_ID,
  gameOverId: 'game-over',
  gameCompletedId: 'completed',
  playQuery: '.play',
  menuQuery: '.menu',
  replayQuery: '.replay',
  helpQuery: 'button.help',
  helpWndQuery: 'div.help',
  helpCloseQuery: 'div.help .close',
  srcQuery: '.src',
  cfgQuery: '.cfg',
  settingsQuery: '.settings',
  contentQuery: '.content',
  spinnerQuery: '.spin',
  volumeQuery: 'input[type=range]',
  volumeLabelQuery: '.vol',
  fullscreenQuery: '#fullscreen',
  frontColor: '#ccc',
  verColor: '#000',
  textColor: '#fff',
  waterColor: '#3fabcc',
  oxigenColor: 'green',
  ropeColor: '#3F6840',
  textFont: '20px Cambria, serif',
  frontFont: '16px Cambria, serif',
  verFont: 'bold 11px Cambria, serif',
  gameOverFont: '42px Tahoma',
  bulletsFont: 'bold 13px Cambria, serif',

  // game related
  fullscreen: false,
  useSetTimeout: false,
  setTimeoutDelay: 7,
  replayPeriod: 2000,
  debug: false,
  debugPos: [300, 40],
  fpsPos: [WIDTH / 2 - 100, 20],
  logoPos: [256, 50],
  musicVolume: .6,
  width: WIDTH,
  height: HEIGHT,
  spriteSize: 32,
  hSprites: 256,
  vSprites: 125,
  objTickMs: 30,
  intersectionOffs: 5,
  textDist: 5,
  textSpeed: .009,
  mushroomDelayMs: 1000 * 60 * 1,
  braveMushroomPlayPeriosMs: 2000,
  teleMushroomPlayPeriosMs: 6000,
  keyRoom: [5, 4],
  doorRoom: [0, 3],
  enemiesPos: 3,
  itemsPos: 3,
  scriptsPos: 3,
  darknessLevel: 3,
  brighnessDec: .2,
  flashLightRadius: 250,
  fireflyAmount: 50,
  fireflySpeed: .8,

  // hero related
  jumpSpeed: .5,
  jumpPressTimeMs: 340,
  jumpVelocity: -40,
  gravity: 8.2,
  fallSpeed: 30,
  stepSpeed: .31,
  startLifes: 4,
  startBullets: 0,
  hasGun: false,
  hasKey: false,
  lifePos: [10, 10],
  countdownPos: [800, 20],
  verPos: [561, 110],
  pickedY: 6,
  touchDelayMs: 1500,
  coyoteDelayMs: 100,
  underWaterTime: 10000,
  climbFallSpeed: 2,
  climbSize: 6,

  // keys
  jumpQuery: '#jump',
  leftQuery: '#left',
  rightQuery: '#right',
  fireQuery: '#fire',
  climbQuery: '#climb',
  useQuery: '#use',
  // keys: tinyurl.com/5n8deccv
  leftKey: 'KeyA',
  rightKey: 'KeyD',
  jumpKey: 'KeyW',
  fireKey: 'Space',
  climbKey: 'ShiftRight',
  useKey: 'KeyZ',

  // bullet
  bulletsPos: [10, 26],
  bulletSpeed: .8,
  bulletYOffs: 4,
  bulletsAmount: 10,
  bulletsAmountPos: [31, 44],

  // audio
  music: [A.Cave0],
  sounds: {
    hit: A.SoundHit,
    jump: A.SoundJump,
    hitMushroom: A.SoundHitMushroom,
    key: A.SoundKey,
    gameOver: A.SoundGameOver,
    heart: A.SoundHeart,
    gun: A.SoundGun,
    win: A.SoundWin,
    mushroom: A.SoundBite,
    breath: A.SoundBreath,
    lending: A.SoundLending,
    steps: A.SoundSteps,
    waterSteps: A.SoundWaterSteps,
    jumpInWater: A.SoundJumpInWater,
    bullets: A.SoundBullets,
    fire: A.SoundFire,
    missfire: A.SoundMissfire,
    bugDie: A.SoundBugDie,
    drop1: A.SoundDrop1,
    drop2: A.SoundDrop2,
    drop3: A.SoundDrop3,
    drop4: A.SoundDrop4,
    goUp: A.SoundGoUp,
    goDown: A.SoundGoDown,
    goLeft: A.SoundGoLeft,
    goRight: A.SoundGoRight,
    pick: A.SoundPick,
    portal: A.SoundPortal,
    friction: A.SoundFriction,
    menu: A.Menu
  },

  // sprites
  heart: [{ x: 0, y: 0 }, {idle: [A.HeartAnimPath, 9, 100]}],
  door: [{ x: 864, y: 32, run: false }, {idle: [A.DoorOpenPath, 5, 300]}],
  bullets: [{ x: 0, y: 0 }, {idle: [A.BulletsPath, 9, 150]}],
  fireflySmall: [{ x: 0, y: 0 }, {idle: [A.FireflySPath, 4, 300]}],
  fireflyMid: [{ x: 0, y: 0 }, {idle: [A.FireflyMPath, 4, 300]}],
  fireflyBig: [{ x: 0, y: 0 }, {idle: [A.FireflyBPath, 5, 250]}],
  explosion: [{x: 100, y: 100}, {idle: [A.ExplosionPath, 25, 20]}],
  dust: [{x: 0, y: 0}, {idle: [A.DustPath, 12, 15]}],
  hero: [{x: 230, y: 0}, {
    idleLeft:     [A.IdleLeftPath,     3, 260],
    idleRight:    [A.IdleRightPath,    3, 260],
    walkLeft:     [A.WalkLeftPath,     6, 60 ],
    walkRight:    [A.WalkRightPath,    6, 60 ],
    jumpLeft:     [A.JumpLeftPath,     9, 150],
    jumpRight:    [A.JumpRightPath,    9, 150],

    idleGunLeft:  [A.IdleGunLeftPath,  3, 260],
    idleGunRight: [A.IdleGunRightPath, 3, 260],
    walkGunLeft:  [A.WalkGunLeftPath,  6, 60 ],
    walkGunRight: [A.WalkGunRightPath, 6, 60 ],
    jumpGunLeft:  [A.JumpGunLeftPath,  9, 150],
    jumpGunRight: [A.JumpGunRightPath, 9, 150],

    idleHitLeft:  [A.IdleHitLeftPath,  1, 100],
    idleHitRight: [A.IdleHitRightPath, 1, 100],

    climbLeft:    [A.ClimbLeftPath,    1, 500],
    climbRight:   [A.ClimbRightPath,   1, 500]
  }],
  l1: [{x: 0, y: 0, width: WIDTH, height: HEIGHT}, A.L1Path],

  // enemies, items and scripts per rooms
  rooms: {
    enemies: {
      0: [
        //[[{x: 32,  y: 150}, {idleUp:   [A.BugUpPath,      2, 300], idleDown:  [A.BugDownPath,     2, 300]}], .5,  false],
        [[{x: 340, y: 697}, {idleLeft: [A.BugLeftPath,    2, 300], idleRight: [A.BugRightPath,    2, 300]}], .5,  true]
      ],
      1: [
        [[{x: 620, y: 505}, {idleLeft: [A.BugLeftPath,    2, 300], idleRight: [A.BugRightPath,    2, 300]}], .8,  true],
        [[{x: 180, y: 599}, {idleLeft: [A.BugBlkLeftPath, 5, 100], idleRight: [A.BugBlkRightPath, 5, 100]}], .8,  true]
      ],
      2: [
        [[{x: 270, y: 281}, {idleLeft: [A.BugLeftPath,    2, 300], idleRight: [A.BugRightPath,    2, 300]}], .9,  true],
        [[{x: 790, y: 377}, {idleLeft: [A.BugLeftPath,    2, 300], idleRight: [A.BugRightPath,    2, 300]}], .9,  true]
      ],
      3: [
        [[{x: 300, y: 281}, {idleLeft: [A.BugLeftPath,    2, 300], idleRight: [A.BugRightPath,    2, 300]}], 1,   true],
        [[{x: 150, y: 631}, {idleLeft: [A.BugBlkLeftPath, 5, 100], idleRight: [A.BugBlkRightPath, 5, 100]}], 2,   true],
        [[{x: 700, y: 727}, {idleLeft: [A.BugBlkLeftPath, 5, 100], idleRight: [A.BugBlkRightPath, 5, 100]}], 2,   true]
      ],
      4: [
        [[{x: 500, y: 313}, {idleLeft: [A.BugLeftPath,    2, 300], idleRight: [A.BugRightPath,    2, 300]}], 2,   true],
        [[{x: 760, y: 313}, {idleLeft: [A.BugLeftPath,    2, 300], idleRight: [A.BugRightPath,    2, 300]}], 2,   true],
        [[{x: 600, y: 631}, {idleLeft: [A.BugBlkLeftPath, 5, 100], idleRight: [A.BugBlkRightPath, 5, 100]}], 2,   true]
      ],
      5: [
        [[{x: 500, y: 473}, {idleLeft: [A.BugLeftPath,    2, 300], idleRight: [A.BugRightPath,    2, 300]}], 2,   true],
        [[{x: 850, y: 569}, {idleLeft: [A.BugLeftPath,    2, 300], idleRight: [A.BugRightPath,    2, 300]}], 1,   true]
      ],
      6: [
        [[{x: 200, y: 375}, {idleLeft: [A.BugBlkLeftPath, 5, 100], idleRight: [A.BugBlkRightPath, 5, 100]}], 2,   true],
        [[{x: 830, y: 599}, {idleLeft: [A.BugBlkLeftPath, 5, 100], idleRight: [A.BugBlkRightPath, 5, 100]}], 2,   true]
      ],
      7:[
        [[{x: 800, y: 695}, {idleLeft: [A.BugBlkLeftPath, 5, 100], idleRight: [A.BugBlkRightPath, 5, 100]}], 5,   true]
      ],
      8: [
        [[{x: 270, y: 345}, {idleLeft: [A.BugLeftPath,    2, 300], idleRight: [A.BugRightPath,    2, 300]}], 1,   true],
        [[{x: 350, y: 729}, {idleLeft: [A.BugLeftPath,    2, 300], idleRight: [A.BugRightPath,    2, 300]}], 2,   true]
      ],
      9: [
        [[{x: 150, y: 697}, {idleLeft: [A.BugLeftPath,    2, 300], idleRight: [A.BugRightPath,    2, 300]}], 2,   true],
        [[{x: 200, y: 697}, {idleLeft: [A.BugLeftPath,    2, 300], idleRight: [A.BugRightPath,    2, 300]}], 1,   true],
        [[{x: 690, y: 377}, {idleLeft: [A.BugLeftPath,    2, 300], idleRight: [A.BugRightPath,    2, 300]}], 1,   true]
      ],
      10: [
        [[{x: 150, y: 727}, {idleLeft: [A.BugBlkLeftPath, 5, 100], idleRight: [A.BugBlkRightPath, 5, 100]}], 2,   true]
      ],
      11: [
        [[{x: 150, y: 727}, {idleLeft: [A.BugBlkLeftPath, 5, 100], idleRight: [A.BugBlkRightPath, 5, 100]}], 2,   true],
        [[{x: 450, y: 727}, {idleLeft: [A.BugBlkLeftPath, 5, 100], idleRight: [A.BugBlkRightPath, 5, 100]}], 2.5, true]
      ],
      12: [
        [[{x: 150, y: 727}, {idleLeft: [A.BugBlkLeftPath, 5, 100], idleRight: [A.BugBlkRightPath, 5, 100]}], 2.7, true],
        [[{x: 650, y: 727}, {idleLeft: [A.BugBlkLeftPath, 5, 100], idleRight: [A.BugBlkRightPath, 5, 100]}], 2.7, true],
        [[{x: 350, y: 727}, {idleLeft: [A.BugBlkLeftPath, 5, 100], idleRight: [A.BugBlkRightPath, 5, 100]}], 2.7, true]
      ],
      13: [
        [[{x: 150, y: 183}, {idleLeft: [A.BugBlkLeftPath, 5, 100], idleRight: [A.BugBlkRightPath, 5, 100]}], 2.7, true],
        [[{x: 350, y: 727}, {idleLeft: [A.BugBlkLeftPath, 5, 100], idleRight: [A.BugBlkRightPath, 5, 100]}], 2.7, true],
        [[{x: 550, y: 727}, {idleLeft: [A.BugBlkLeftPath, 5, 100], idleRight: [A.BugBlkRightPath, 5, 100]}], 2.7, true]
      ],
      14: [
        [[{x: 100, y: 715}, {idleLeft: [A.FishLeftPath,   4, 150], idleRight: [A.FishRightPath,   4, 150]}], 1.5, true, false],
        [[{x: 300, y: 685}, {idleLeft: [A.FishLeftPath,   4, 150], idleRight: [A.FishRightPath,   4, 150]}], 1.8, true, false],
        [[{x: 600, y: 700}, {idleLeft: [A.FishLeftPath,   4, 150], idleRight: [A.FishRightPath,   4, 150]}],   2, true, false],
        [[{x: 400, y: 710}, {idleLeft: [A.FishLeftPath,   4, 150], idleRight: [A.FishRightPath,   4, 150]}], 2.4, true, false]
      ],
      15: [
        [[{x: 680, y: 727}, {idleLeft: [A.BugBlkLeftPath, 5, 100], idleRight: [A.BugBlkRightPath, 5, 100]}], 3,   true],
        [[{x: 450, y: 727}, {idleLeft: [A.BugBlkLeftPath, 5, 100], idleRight: [A.BugBlkRightPath, 5, 100]}], 3,   true],
        [[{x: 330, y: 727}, {idleLeft: [A.BugBlkLeftPath, 5, 100], idleRight: [A.BugBlkRightPath, 5, 100]}], 3,   true]
      ],
      16: [
        [[{x: 800, y: 729}, {idleLeft: [A.BugLeftPath,    2, 300], idleRight: [A.BugRightPath,    2, 300]}], 2,   true],
        [[{x: 100, y: 700}, {idleLeft: [A.FishLeftPath,   4, 150], idleRight: [A.FishRightPath,   4, 150]}], 1.5, true, false]
      ],
      17: [
        [[{x: 150, y: 729}, {idleLeft: [A.BugLeftPath,    2, 300], idleRight: [A.BugRightPath,    2, 300]}], 2,   true],
      ],
      18: [
        [[{x: 800, y: 723}, {idleLeft: [A.BugBlueLeftPath,3, 200], idleRight: [A.BugBlueRightPath,3, 200]}], 2.9, true],
        [[{x: 192, y: 627}, {idleLeft: [A.BugBlueLeftPath,3, 200], idleRight: [A.BugBlueRightPath,3, 200]}], 2.9, true],
        [[{x: 352, y: 691}, {idleLeft: [A.BugBlueLeftPath,3, 200], idleRight: [A.BugBlueRightPath,3, 200]}], 2.9, true]
      ],
      19: [
        [[{x: 384, y: 727}, {idleLeft: [A.BugBlkLeftPath, 5, 100], idleRight: [A.BugBlkRightPath, 5, 100]}], 2.9, true],
        [[{x: 640, y: 727}, {idleLeft: [A.BugBlkLeftPath, 5, 100], idleRight: [A.BugBlkRightPath, 5, 100]}], 2.9, true]
      ],
      20: [
        [[{x: 384, y: 727}, {idleLeft: [A.BugBlkLeftPath, 5, 100], idleRight: [A.BugBlkRightPath, 5, 100]}], 2.9, true],
        [[{x: 600, y: 727}, {idleLeft: [A.BugBlkLeftPath, 5, 100], idleRight: [A.BugBlkRightPath, 5, 100]}], 2.9, true],
        [[{x: 800, y: 727}, {idleLeft: [A.BugBlkLeftPath, 5, 100], idleRight: [A.BugBlkRightPath, 5, 100]}], 2.3, true]
      ],
      21: [
        [[{x: 250, y: 727}, {idleLeft: [A.BugBlkLeftPath, 5, 100], idleRight: [A.BugBlkRightPath, 5, 100]}], 2.9, true],
        [[{x: 500, y: 727}, {idleLeft: [A.BugBlkLeftPath, 5, 100], idleRight: [A.BugBlkRightPath, 5, 100]}], 2.9, true],
        //[[{x:  32, y:  43}, {idleUp:   [A.BugUpPath,      2, 300], idleDown:  [A.BugDownPath,     2, 300]}], .5,  false]
      ],
      24: [
        [[{x: 100, y: 727}, {idleLeft: [A.BugBlkLeftPath, 5, 100], idleRight: [A.BugBlkRightPath, 5, 100]}], 3,   true]
      ],
      25: [
        [[{x: 768, y: 535}, {idleLeft: [A.BugBlkLeftPath, 5, 100], idleRight: [A.BugBlkRightPath, 5, 100]}], 2.9, true],
        [[{x: 100, y: 710}, {idleLeft: [A.FishLeftPath,   4, 150], idleRight: [A.FishRightPath,   4, 150]}], 1.5, true, false],
        [[{x: 300, y: 680}, {idleLeft: [A.FishLeftPath,   4, 150], idleRight: [A.FishRightPath,   4, 150]}], 1.7, true, false]
      ],
      27: [
        [[{x: 100, y: 691}, {idleLeft: [A.BugBlueLeftPath,3, 200], idleRight: [A.BugBlueRightPath,3, 200]}], 3.3, true],
        [[{x: 200, y: 691}, {idleLeft: [A.BugBlueLeftPath,3, 200], idleRight: [A.BugBlueRightPath,3, 200]}], 3.3, true],
        [[{x: 400, y: 691}, {idleLeft: [A.BugBlueLeftPath,3, 200], idleRight: [A.BugBlueRightPath,3, 200]}], 3.3, true]
      ],
      28: [
        [[{x: 736, y: 727}, {idleLeft: [A.BugBlkLeftPath, 5, 100], idleRight: [A.BugBlkRightPath, 5, 100]}], 3,   true],
        [[{x: 840, y: 247}, {idleLeft: [A.BugBlkLeftPath, 5, 100], idleRight: [A.BugBlkRightPath, 5, 100]}], 2,   true],
        [[{x: 500, y: 627}, {idleLeft: [A.BugBlueLeftPath,3, 200], idleRight: [A.BugBlueRightPath,3, 200]}], 3.3, true],
      ],
      29: [
        [[{x: 500, y: 147}, {idleLeft: [A.BugBlueLeftPath,3, 200], idleRight: [A.BugBlueRightPath,3, 200]}], 3,   true],
        [[{x: 200, y: 243}, {idleLeft: [A.BugBlueLeftPath,3, 200], idleRight: [A.BugBlueRightPath,3, 200]}], 3,   true],
        [[{x: 340, y: 729}, {idleLeft: [A.BugLeftPath,    2, 300], idleRight: [A.BugRightPath,    2, 300]}], 8,   true]
      ],
      30: [
        [[{x: 150, y: 211}, {idleLeft: [A.BugBlueLeftPath,3, 200], idleRight: [A.BugBlueRightPath,3, 200]}], 3.3, true],
        [[{x: 580, y: 307}, {idleLeft: [A.BugBlueLeftPath,3, 200], idleRight: [A.BugBlueRightPath,3, 200]}], 3.3, true],
        [[{x: 700, y: 723}, {idleLeft: [A.BugBlueLeftPath,3, 200], idleRight: [A.BugBlueRightPath,3, 200]}], 3.3, true]
      ],
      31: [
        [[{x: 400, y: 691}, {idleLeft: [A.BugBlueLeftPath,3, 200], idleRight: [A.BugBlueRightPath,3, 200]}], 3.3, true]
      ],
      32: [
        [[{x: 400, y: 695}, {idleLeft: [A.BugBlkLeftPath, 5, 100], idleRight: [A.BugBlkRightPath, 5, 100]}], 3.5, true, true, 'hero'],
        [[{x: 250, y: 627}, {idleLeft: [A.BugBlueLeftPath,3, 200], idleRight: [A.BugBlueRightPath,3, 200]}], 3.4, true, true, 'hero']
      ],
      33: [
        [[{x: 400, y: 695}, {idleLeft: [A.BugBlkLeftPath, 5, 100], idleRight: [A.BugBlkRightPath, 5, 100]}],   5, true],
        [[{x: 450, y: 695}, {idleLeft: [A.BugBlkLeftPath, 5, 100], idleRight: [A.BugBlkRightPath, 5, 100]}],   3, true],
        [[{x: 200, y: 691}, {idleLeft: [A.BugBlueLeftPath,3, 200], idleRight: [A.BugBlueRightPath,3, 200]}],   6, true]
      ],
      34: [
        [[{x: 200, y: 675}, {idleLeft: [A.FishLeftPath,   4, 150], idleRight: [A.FishRightPath,   4, 150]}], 1.9, true, false],
        [[{x: 300, y: 660}, {idleLeft: [A.FishLeftPath,   4, 150], idleRight: [A.FishRightPath,   4, 150]}], 1.6, true, false],
        [[{x: 600, y: 690}, {idleLeft: [A.FishLeftPath,   4, 150], idleRight: [A.FishRightPath,   4, 150]}], 1.3, true, false],
        [[{x: 700, y: 680}, {idleLeft: [A.FishLeftPath,   4, 150], idleRight: [A.FishRightPath,   4, 150]}], 1.7, true, false],
        [[{x: 500, y: 670}, {idleLeft: [A.FishLeftPath,   4, 150], idleRight: [A.FishRightPath,   4, 150]}], 2.1, true, false]
      ],
      35: [
        [[{x: 200, y: 115}, {idleLeft: [A.BugBlueLeftPath,3, 200], idleRight: [A.BugBlueRightPath,3, 200]}], 3.3, true, true, 'hero'],
        [[{x: 400, y: 115}, {idleLeft: [A.BugBlueLeftPath,3, 200], idleRight: [A.BugBlueRightPath,3, 200]}],   4, true, true, 'hero'],
        [[{x: 100, y: 680}, {idleLeft: [A.FishLeftPath,   4, 150], idleRight: [A.FishRightPath,   4, 150]}], 1.9, true, false],
        [[{x: 400, y: 660}, {idleLeft: [A.FishLeftPath,   4, 150], idleRight: [A.FishRightPath,   4, 150]}], 1.6, true, false],
        [[{x: 600, y: 690}, {idleLeft: [A.FishLeftPath,   4, 150], idleRight: [A.FishRightPath,   4, 150]}], 1.3, true, false],
        [[{x: 200, y: 670}, {idleLeft: [A.FishLeftPath,   4, 150], idleRight: [A.FishRightPath,   4, 150]}], 1.7, true, false],
        [[{x: 500, y: 685}, {idleLeft: [A.FishLeftPath,   4, 150], idleRight: [A.FishRightPath,   4, 150]}], 2.1, true, false],
        [[{x: 736, y: 375}, {idleLeft: [A.BugBlkLeftPath, 5, 100], idleRight: [A.BugBlkRightPath, 5, 100]}], 3,   true],
        [[{x: 536, y: 375}, {idleLeft: [A.BugBlkLeftPath, 5, 100], idleRight: [A.BugBlkRightPath, 5, 100]}], 4,   true]
      ],
      36: [
        [[{x: 200, y: 670}, {idleLeft: [A.FishLeftPath,   4, 150], idleRight: [A.FishRightPath,   4, 150]}], 1.7, true, false],
        [[{x: 450, y: 660}, {idleLeft: [A.FishLeftPath,   4, 150], idleRight: [A.FishRightPath,   4, 150]}], 1.3, true, false],
        [[{x: 100, y: 690}, {idleLeft: [A.FishLeftPath,   4, 150], idleRight: [A.FishRightPath,   4, 150]}], 1.3, true, false]
      ],
      37: [
        [[{x: 546, y: 373}, {idleLeft: [A.BugBigLeftPath, 3, 200], idleRight: [A.BugBigRightPath, 3, 200]}], 6,   true],
        [[{x: 600, y: 693}, {idleLeft: [A.BugBigLeftPath, 3, 200], idleRight: [A.BugBigRightPath, 3, 200]}], 6,   true],
        [[{x: 250, y: 629}, {idleLeft: [A.BugBigLeftPath, 3, 200], idleRight: [A.BugBigRightPath, 3, 200]}], 6,   true]
      ],
      38: [
        [[{x: 600, y: 693}, {idleLeft: [A.BugBigLeftPath, 3, 200], idleRight: [A.BugBigRightPath, 3, 200]}], 5,   true, true, 'hero'],
        [[{x: 480, y: 693}, {idleLeft: [A.BugBigLeftPath, 3, 200], idleRight: [A.BugBigRightPath, 3, 200]}], 4.5, true, true, 'hero'],
        [[{x: 200, y: 693}, {idleLeft: [A.BugBigLeftPath, 3, 200], idleRight: [A.BugBigRightPath, 3, 200]}], 5,   true, true, 'hero'],
        [[{x: 300, y: 437}, {idleLeft: [A.BugBigLeftPath, 3, 200], idleRight: [A.BugBigRightPath, 3, 200]}], 5,   true, true, 'hero'],
        [[{x: 450, y: 437}, {idleLeft: [A.BugBigLeftPath, 3, 200], idleRight: [A.BugBigRightPath, 3, 200]}], 4.5, true, true, 'hero'],
        [[{x: 400, y: 437}, {idleLeft: [A.BugBigLeftPath, 3, 200], idleRight: [A.BugBigRightPath, 3, 200]}], 5,   true, true, 'hero']
      ],
      39: [
        [[{x: 100, y: 437}, {idleLeft: [A.BugBigLeftPath, 3, 200], idleRight: [A.BugBigRightPath, 3, 200]}], 5,   true, true, 'hero'],
        [[{x: 200, y: 693}, {idleLeft: [A.BugBigLeftPath, 3, 200], idleRight: [A.BugBigRightPath, 3, 200]}], 5,   true, true, 'hero'],
        [[{x: 600, y: 693}, {idleLeft: [A.BugBigLeftPath, 3, 200], idleRight: [A.BugBigRightPath, 3, 200]}], 5,   true, true, 'hero'],
        [[{x: 750, y: 661}, {idleLeft: [A.BugBigLeftPath, 3, 200], idleRight: [A.BugBigRightPath, 3, 200]}], 5,   true, true, 'hero']
      ]
    },
    items: {
      0: [
        //[[{x: 220, y: 300}, {idle: [A.BulletsPath,   9,  150]}], 'bullets',  'foundBullets'],
        //[[{x: 830, y: 580}, {idle: [A.KeyPath,       7,  200]}], 'key',      'foundKey']
      ],
      2: [
        [[{x: 128, y: 700}, {idle: [A.HeartAnimPath, 9,  100]}], 'heart',   'foundHeart']
      ],
      4: [
        [[{x: 770, y: 200}, {idle: [A.HeartAnimPath, 9,  100]}], 'heart',   'foundHeart']
      ],
      5: [
        [[{x: 958, y: 288}, {idle: [A.GunAnimPath,   9,  150]}], 'gun',     'foundGun'],
        [[{x: 121, y: 604}, {idle: [A.BulletsPath,   9,  150]}], 'bullets', 'foundBullets']
      ],
      7: [
        [[{x: 870, y: 600}, {idle: [A.BulletsPath,   9,  150]}], 'bullets', 'foundBullets']
      ],
      8: [
        [[{x: 560, y: 140}, {idle: [A.HeartAnimPath, 9,  100]}], 'heart',   'foundHeart'],
        [[{x: 330, y: 650}, {idle: [A.BulletsPath,   9,  150]}], 'bullets', 'foundBullets']
      ],
      10: [
        [[{x: 550, y: 128}, {idle: [A.BulletsPath,   9,  150]}], 'bullets', 'foundBullets']
      ],
      11: [
        [[{x: 220, y: 250}, {idle: [A.HeartAnimPath, 9,  100]}], 'heart',   'foundHeart']
      ],
      12: [
        [[{x: 631, y: 124}, {idle: [A.HeartAnimPath, 9,  100]}], 'heart',   'foundHeart']
      ],
      13: [
        [[{x: 800, y: 600}, {idle: [A.HeartAnimPath, 9,  100]}], 'heart',   'foundHeart']
      ],
      14: [
        [[{x: 900, y: 600}, {idle: [A.HeartAnimPath, 9,  100]}], 'heart',   'foundHeart']
      ],
      15: [
        [[{x: 900, y: 600}, {idle: [A.HeartAnimPath, 9,  100]}], 'heart',   'foundHeart']
      ],
      18: [
        [[{x: 655, y: 140}, {idle: [A.Mushroom9Path, 9,  100]}], 'mushroom','foundBraveMushroom'],
        [[{x: 800, y: 650}, {idle: [A.FlashlightPath,9,  100]}], 'pick',    'foundFlashlight']
      ],
      20: [
        [[{x: 860, y: 138}, {idle: [A.HeartAnimPath, 9,  100]}], 'heart',   'foundHeart']
      ],
      21: [
        [[{x: 630, y: 230}, {idle: [A.BulletsPath,   9,  150]}], 'bullets', 'foundBullets'],
        [[{x: 440, y: 230}, {idle: [A.FlashlightPath,9,  100]}], 'pick',    'foundFlashlight']
      ],
      22: [
        [[{x: 288, y: 168}, {idle: [A.HeartAnimPath, 9,  100]}], 'heart',   'foundHeart']
      ],
      23: [
        [[{x: 450, y: 230}, {idle: [A.HeartAnimPath, 9,  100]}], 'heart',   'foundHeart'],
        [[{x: 200, y: 266}, {idle: [A.BulletsPath,   9,  150]}], 'bullets', 'foundBullets']
      ],
      25: [
        [[{x: 880, y: 704}, {idle: [A.HeartAnimPath, 9,  100]}], 'heart',   'foundHeart']
      ],
      28: [
        [[{x: 200, y: 300}, {idle: [A.MushroomT9Path,9,  100]}], 'mushroom', 'foundTeleMushroom']
      ],
      29: [
        [[{x: 880, y: 704}, {idle: [A.HeartAnimPath, 9,  100]}], 'heart',   'foundHeart']
      ],
      37: [
        [[{x: 700, y: 625}, {idle: [A.KeyPath,       7,  200]}], 'key',     'foundKey']
      ],
      39: [
        [[{x: 615, y: 120}, {idle: [A.BulletsPath,   9,  150]}], 'bullets', 'foundBullets']
      ]
    },
    scripts: {
      0: [
        ['Drop',       {sprite1: [{x: 133, y: 164}, A.DropPath], sprite2: [{x: 133, y: 164}, {idle: [A.DropDownPath, 12, 80]}], pos: 1, before: 16, sound: 'drop1', speed: 10, delay: 2000}],
        ['Drop',       {sprite1: [{x: 619, y: 172}, A.DropPath], sprite2: [{x: 632, y:  64}, {idle: [A.DropDownPath, 12, 80]}], pos: 1, sound: 'drop3', speed:  9, delay: 4000}],
        ['Text',       {text:    [Msgs.welcome,       419, 300,     0, 3000, true], id: id(), after: EFFECT_ID}],
        ['Text',       {text:    [Msgs.keys,          336, 300,  3500, 4000, true], id: id(), after: EFFECT_ID}],
        ['Text',       {text:    [Msgs.findTheKey,    380, 300,  8000, 3000, true], id: id(), after: EFFECT_ID}],
        ['Text',       {text:    [Msgs.dontTouchBugs, 380, 300, 11500, 4000, true], id: id(), after: EFFECT_ID}],
        ['Text',       {text:    [Msgs.goodLuck,      467, 300, 16000, 4000, true], id: id(), after: EFFECT_ID}],
        ['Stalactite', {sprite:  [{x: 110, y:  63}, A.StalactiteUp1Path]}],
        ['Stalactite', {sprite:  [{x: 580, y:  63}, A.StalactiteUp2Path]}],
        ['Sprite',     {sprite:  [{x: 730, y: 630}, A.Plant1Path], pos: 'end'}],
        ['Sprite',     {sprite:  [{x: 570, y: 390}, A.Plant3Path], pos: 'end'}],
        ['Sprite',     {sprite:  [{x: 350, y: 680}, A.Plant4Path], pos: 'end'}],
        ['Water',      {params:  [63, 370, 321, 370, 6, 16], drop: [{x: 0, y:0}, {idle: [A.DropDownPath, 12, 40]}], pos: 'end' }]
        //['Rope',       {params:  [205, 0, 524, 159, 400, 20, 4, .7, 3]}]
      ],
      1: [
        ['Drop',       {sprite1: [{x: 120, y: 222}, A.DropPath], sprite2: [{x: 120, y: 222}, {idle: [A.DropDownPath, 12, 80]}], pos: 1, sound: 'drop2', speed: 10, delay: 2000}],
        ['Sprite',     {sprite:  [{x: 650, y: 490}, A.Plant5Path], pos: 'end'}],
        ['Sprite',     {sprite:  [{x: 170, y: 590}, A.Plant4Path], pos: 'end'}],
        ['Sprite',     {sprite:  [{x: 894, y: 135}, A.Plant7Path], pos: 'end'}],
        ['Stalactite', {sprite:  [{x: 620, y:  63}, A.StalactiteUpRowPath], amount: 3}],
        ['Stalactite', {sprite:  [{x: 339, y: 287}, A.StalactiteUpRowPath], amount: 3}],
        ['Stalactite', {sprite:  [{x:  93, y: 159}, A.StalactiteUpRowPath]}]
      ],
      2: [
        ['Drop',       {sprite1: [{x: 537, y: 140}, A.DropPath], sprite2: [{x: 537, y: 140}, {idle: [A.DropDownPath, 12, 80]}], pos: 1, sound: 'drop2', speed: 10, delay: 2000}],
        ['Stalactite', {sprite:  [{x: 500, y:  64}, A.StalactiteUp1Path], amount: 5}],
        ['Sprite',     {sprite:  [{x: 490, y: 428}, A.Plant6Path], pos: 'end'}],
        ['Sprite',     {sprite:  [{x:  60, y: 133}, A.Plant7Path], pos: 'end'}]
      ],
      3: [
        ['Drop',       {sprite1: [{x: 380, y: 191}, A.DropPath], sprite2: [{x: 380, y: 191}, {idle: [A.DropDownPath, 12, 80]}], pos: 1, sound: 'drop4', speed: 10, delay: 3000}],
        ['Drop',       {sprite1: [{x: 914, y:  64}, A.DropPath], sprite2: [{x: 631, y:  64}, {idle: [A.DropDownPath, 12, 80]}], pos: 1, sound: 'drop3', speed:  8, delay: 2500}],
        ['Sprite',     {sprite:  [{x: 332, y: 225}, A.Plant7Path], pos: 'end'}],
        ['Sprite',     {sprite:  [{x: 910, y: 110}, A.Plant2Path], pos: 'end'}],
        ['Stalactite', {sprite:  [{x: 380, y: 416}, A.StalactiteUpRowPath], amount: 2}],
        ['Stalactite', {sprite:  [{x:   0, y:  63}, A.StalactiteUpRowPath]}]
      ],
      4: [
        ['Drop',       {sprite1: [{x: 739, y: 170}, A.DropPath], sprite2: [{x: 739, y: 170}, {idle: [A.DropDownPath, 12, 80]}], pos: 1, sound: 'drop1', speed: 10, delay: 1000}],
        ['Drop',       {sprite1: [{x: 484, y: 448}, A.DropPath], sprite2: [{x: 484, y: 448}, {idle: [A.DropDownPath, 12, 80]}], pos: 1, sound: 'drop3', speed:  8, delay: 2500}],
        ['Stalactite', {sprite:  [{x: 700, y:  64}, A.StalactiteUp2Path]}],
        ['Stalactite', {sprite:  [{x: 364, y:  63}, A.StalactiteUpRowPath]}],
        ['Sprite',     {sprite:  [{x: 740, y: 295}, A.Plant3Path], pos: 'end'}],
        ['Sprite',     {sprite:  [{x: 420, y: 617}, A.Plant4Path], pos: 'end'}],
        ['Stalactite', {sprite:  [{x: 576, y: 449}, A.StalactiteUpRowPath], amount: 2}],
      ],
      5: [
        ['Drop',       {sprite1: [{x: 120, y: 535}, A.DropPath], sprite2: [{x: 120, y: 535}, {idle: [A.DropDownPath, 12, 80]}], pos: 1, sound: 'drop1', speed: 10, delay: 1000}],
        ['Drop',       {sprite1: [{x:1007, y: 128}, A.DropPath], sprite2: [{x:1007, y: 128}, {idle: [A.DropDownPath, 12, 80]}], pos: 1, sound: 'drop2', speed: 20, delay:  500}],
        ['Stalactite', {sprite:  [{x:  69, y: 448}, A.StalactiteUp1Path]}],
        ['Sprite',     {sprite:  [{x:  90, y: 560}, A.Plant5Path], pos: 'end'}],
        ['Sprite',     {sprite:  [{x: 930, y: 330}, A.Plant5Path], pos: 'end'}]
      ],
      6: [
        ['Drop',       {sprite1: [{x: 654, y:  64}, A.DropPath], sprite2: [{x: 654, y:  64}, {idle: [A.DropDownPath, 12, 80]}], pos: 1, sound: 'drop3', speed:  5, delay: 1000}],
        ['Drop',       {sprite1: [{x: 525, y: 208}, A.DropPath], sprite2: [{x: 525, y: 208}, {idle: [A.DropDownPath, 12, 80]}], pos: 1, sound: 'drop4', speed: 30, delay:  200}],
        ['Drop',       {sprite1: [{x: 108, y: 479}, A.DropPath], sprite2: [{x: 108, y: 479}, {idle: [A.DropDownPath, 12, 80]}], pos: 1, sound: 'drop2', speed: 40, delay:  100}],
        ['Stalactite', {sprite:  [{x: 530, y: 128}, A.StalactiteUpRowPath]}],
        ['Stalactite', {sprite:  [{x: 740, y:  63}, A.StalactiteUp1Path], amount: 2}],
        ['Stalactite', {sprite:  [{x: 938, y: 191}, A.StalactiteUp1Path], amount: 2}],
        ['Sprite',     {sprite:  [{x: 649, y: 458}, A.Plant6Path], pos: 'end'}],
        ['Sprite',     {sprite:  [{x: 500, y: 550}, A.Plant7Path], pos: 'end'}],
        ['Sprite',     {sprite:  [{x: 112, y: 537}, A.Plant8Path], pos: 'end'}]
      ],
      7: [
        ['Drop',       {sprite1: [{x: 590, y: 395}, A.DropPath], sprite2: [{x: 590, y: 395}, {idle: [A.DropDownPath, 12, 80]}], pos: 1, sound: 'drop1', speed:  5, delay: 2000}],
        ['Stalactite', {sprite:  [{x: 540, y: 288}, A.StalactiteUp2Path], amount: 2}],
        ['Sprite',     {sprite:  [{x: 610, y: 665}, A.Plant8Path], pos: 'end'}],
        ['Sprite',     {sprite:  [{x: 104, y: 302}, A.Plant1Path], pos: 'end'}],
        ['Stalactite', {sprite:  [{x:  17, y: 191}, A.StalactiteUpRowPath]}],
        ['Stalactite', {sprite:  [{x: 131, y:  63}, A.StalactiteUp1Path], amount: 3}],
        ['Stalactite', {sprite:  [{x: 888, y: 544}, A.StalactiteUpRowPath]}]
      ],
      8: [
        ['Drop',       {sprite1: [{x: 408, y:  79}, A.DropPath], sprite2: [{x: 419, y: 115}, {idle: [A.DropDownPath, 12, 80]}], pos: 1, before: 21, sound: 'drop2', speed: 10, delay:  500}],
        ['Drop',       {sprite1: [{x: 165, y:  94}, A.DropPath], sprite2: [{x:  80, y: 109}, {idle: [A.DropDownPath, 12, 80]}], pos: 1, before: 21, sound: 'drop3', speed: 10, delay:  200}],
        ['Drop',       {sprite1: [{x: 445, y: 652}, A.DropPath], sprite2: [{x: 445, y: 652}, {idle: [A.DropDownPath, 12, 80]}], pos: 1, sound: 'drop1', speed: 10, delay: 1000}],
        ['Stalactite', {sprite:  [{x: 325, y: 544}, A.StalactiteUp2Path], amount: 2}],
        ['Sprite',     {sprite:  [{x: 884, y: 296}, A.SignClimbPath]}],
        ['Water',      {params:  [127, 365, 450, 365, 7, 21], drop: [{x: 0, y:0}, {idle: [A.DropDownPath, 12, 80]}], pos: 'end' }],
        ['Stalactite', {sprite:  [{x: 353, y:  31}, A.StalactiteUpRowPath]}],
        ['Stalactite', {sprite:  [{x: 103, y: 545}, A.StalactiteUp1Path], amount: 2, pos: 'end'}],
        ['Stalactite', {sprite:  [{x: 552, y: 193}, A.StalactiteDownRowPath], amount: 2, pos: 'end'}],
        ['Stalactite', {sprite:  [{x: 138, y:  31}, A.StalactiteUpRowPath], amount: 1, pos: 'end'}],
        ['Sprite',     {sprite:  [{x: 453, y: 145}, A.Plant1Path], pos: 'end'}],
        ['Text',       {text:    [Msgs.climb, 330, 160, 0, 6000, true], id: id(), after: EFFECT_ID}]
      ],
      10: [
        ['Drop',       {sprite1: [{x: 590, y: 288}, A.DropPath], sprite2: [{x: 590, y: 288}, {idle: [A.DropDownPath, 12, 80]}], pos: 1, sound: 'drop1', speed:  9, delay: 1000}],
        ['Drop',       {sprite1: [{x: 985, y: 512}, A.DropPath], sprite2: [{x: 985, y: 512}, {idle: [A.DropDownPath, 12, 80]}], pos: 1, sound: 'drop2', speed: 10, delay: 1000}],
        ['Sprite',     {sprite:  [{x: 530, y: 120}, A.Plant5Path], pos: 'end'}]
      ],
      13: [
        ['Drop',       {sprite1: [{x:  46, y: 288}, A.DropPath], sprite2: [{x:  46, y: 288}, {idle: [A.DropDownPath, 12, 80]}], pos: 1, sound: 'drop4', speed:  8, delay: 4000}],
        ['Drop',       {sprite1: [{x: 384, y: 395}, A.DropPath], sprite2: [{x: 384, y: 395}, {idle: [A.DropDownPath, 12, 80]}], pos: 1, sound: 'drop2', speed: 10, delay: 1000}],
        ['Sprite',     {sprite:  [{x: 345, y: 287}, A.StalactiteUp2Path]}],
        ['Sprite',     {sprite:  [{x: 300, y: 720}, A.Plant2Path], pos: 'end'}],
        ['Stalactite', {sprite:  [{x: 795, y: 705}, A.StalactiteDownRowPath], amount: 2, pos: 'end'}]
      ],
      14: [
        ['Drop',       {sprite1: [{x: 536, y: 527}, A.DropPath], sprite2: [{x: 536, y: 527}, {idle: [A.DropDownPath, 12, 80]}], pos: 1, before: 90, sound: 'drop1', speed:  5, delay: 2000}],
        ['Drop',       {sprite1: [{x: 333, y: 640}, A.DropPath], sprite2: [{x: 333, y: 640}, {idle: [A.DropDownPath, 12, 80]}], pos: 1, before: 90, sound: 'drop2', speed: 10, delay: 1000}],
        ['Stalactite', {sprite:  [{x: 498, y: 448}, A.StalactiteUp1Path]}],
        ['Water',      {params:  [31, 680, 993, 680, 6, 91], drop: [{x: 0, y:0}, {idle: [A.DropDownPath, 12, 40]}], pos: 'end' }]
      ],
      16: [
        ['Drop',       {sprite1: [{x: 215, y: 507}, A.DropPath], sprite2: [{x: 215, y: 507}, {idle: [A.DropDownPath, 12, 80]}], pos: 1, before: 90, sound: 'drop1', speed:  5, delay: 2000}],
        ['Water',      {params:  [31, 680, 321, 680, 7, 92], drop: [{x: 0, y:0}, {idle: [A.DropDownPath, 12, 80]}], pos: 'end' }],
        ['Stalactite', {sprite:  [{x: 450, y: 705}, A.StalactiteDownRowPath], amount: 3, pos: 'end'}],
        ['Stalactite', {sprite:  [{x: 750, y: 705}, A.StalactiteDownRowPath], amount: 3, pos: 'end'}],
        ['Stalactite', {sprite:  [{x: 193, y: 479}, A.StalactiteUpSmallRowPath], pos: 'end'}]
      ],
      17: [
        ['Drop',       {sprite1: [{x: 711, y: 260}, A.DropPath], sprite2: [{x: 711, y: 260}, {idle: [A.DropDownPath, 12, 80]}], pos: 1, sound: 'drop1', speed:  5, delay: 2000}],
        ['Stalactite', {sprite:  [{x: 230, y: 705}, A.StalactiteDownRowPath], amount: 3, pos: 'end'}],
        ['Stalactite', {sprite:  [{x: 688, y: 159}, A.StalactiteUp1Path], pos: 'end'}],
        ['Portal',     {sprite:  [{x: 200, y:  30}, {idle: [A.PortalPath, 9, 80]}], pos: 1}]
      ],
      19: [
        ['Drop',       {sprite1: [{x: 397, y: 416}, A.DropPath], sprite2: [{x: 397, y: 416}, {idle: [A.DropDownPath, 12, 80]}], pos: 1, sound: 'drop3', speed: 10, delay: 2000}],
        ['Drop',       {sprite1: [{x: 688, y: 544}, A.DropPath], sprite2: [{x: 688, y: 544}, {idle: [A.DropDownPath, 12, 80]}], pos: 1, sound: 'drop2', speed: 10, delay: 1000}],
        ['Stalactite', {sprite:  [{x:  70, y: 705}, A.StalactiteDownRowPath], amount: 13, pos: 'end'}]
      ],
      20: [
        ['Drop',       {sprite1: [{x: 157, y:  85}, A.DropPath], sprite2: [{x: 157, y:  85}, {idle: [A.DropDownPath, 12, 80]}], pos: 1, sound: 'drop3', speed: 10, delay: 2000}],
        ['Stalactite', {sprite:  [{x: 134, y:  32}, A.StalactiteUp2Path]}],
        ['Stalactite', {sprite:  [{x: 500, y:  31}, A.StalactiteUpRowPath]}],
        ['Stalactite', {sprite:  [{x:  80, y: 705}, A.StalactiteDownRowPath], amount: 4, pos: 'end'}],
        ['Stalactite', {sprite:  [{x: 390, y: 705}, A.StalactiteDownRowPath], amount: 3, pos: 'end'}],
        ['Stalactite', {sprite:  [{x: 670, y: 705}, A.StalactiteDownRowPath], amount: 5, pos: 'end'}]
      ],
      21: [
        ['Stalactite', {sprite:  [{x: 400, y: 705}, A.StalactiteDownRowPath], amount: 4, pos: 'end'}],
        ['Stalactite', {sprite:  [{x: 800, y: 705}, A.StalactiteDownRowPath], amount: 3, pos: 'end'}],
        ['Stalactite', {sprite:  [{x:  20, y: 705}, A.StalactiteDownRowPath], amount: 3, pos: 'end'}]
      ],
      22: [
        ['Stalactite', {sprite:  [{x:  20, y: 705}, A.StalactiteDownRowPath], amount: 3, pos: 'end'}],
        ['Stalactite', {sprite:  [{x: 300, y: 705}, A.StalactiteDownRowPath], amount: 3, pos: 'end'}],
        ['Stalactite', {sprite:  [{x: 620, y: 705}, A.StalactiteDownRowPath], amount: 3, pos: 'end'}]
      ],
      23: [
        ['Stalactite', {sprite:  [{x:  20, y: 705}, A.StalactiteDownRowPath], amount: 15, pos: 'end'}]
      ],
      24: [
        ['Drop',       {sprite1: [{x: 432, y: 416}, A.DropPath], sprite2: [{x: 432, y: 416}, {idle: [A.DropDownPath, 12, 80]}], pos: 1, sound: 'drop2', speed: 10, delay: 2000}],
        ['Drop',       {sprite1: [{x: 627, y: 416}, A.DropPath], sprite2: [{x: 627, y: 416}, {idle: [A.DropDownPath, 12, 80]}], pos: 1, sound: 'drop1', speed: 10, delay: 1000}],
        ['Door',       {pos: 1}],
        ['Stalactite', {sprite:  [{x: 410, y: 31}, A.StalactiteUpRowPath], amount: 5}],
        ['Stalactite', {sprite:  [{x:  40, y: 31}, A.StalactiteUpRowPath], amount: 4}]
      ],
      25: [
        ['Drop',       {sprite1: [{x: 304, y: 253}, A.DropPath], sprite2: [{x: 304, y: 253}, {idle: [A.DropDownPath, 12, 80]}], pos: 1, before: 139, sound: 'drop1', speed: 10, delay: 1000}],
        ['Water',      {params:  [31, 630, 641, 630, 6, 140], drop: [{x: 0, y:0}, {idle: [A.DropDownPath, 12, 40]}], after: 'hero'}],
        ['Stalactite', {sprite:  [{x: 282, y: 224}, A.StalactiteUpSmallRowPath], amount: 1}],
        ['Stalactite', {sprite:  [{x:  32, y: 411}, A.StalactiteRightSmallRowPath]}],
        ['Stalactite', {sprite:  [{x:  32, y: 443}, A.StalactiteRightSmallRowPath]}],
        ['Stalactite', {sprite:  [{x: 266, y: 164}, A.StalactiteDownSmallRowPath], amount: 2}],
        ['Stalactite', {sprite:  [{x: 376, y: 164}, A.StalactiteDownSmallRowPath], amount: 2}],
        ['Stalactite', {sprite:  [{x: 486, y: 164}, A.StalactiteDownSmallRowPath], amount: 2}],
        ['Stalactite', {sprite:  [{x: 796, y: 164}, A.StalactiteDownSmallRowPath], amount: 2}],
        ['Stalactite', {sprite:  [{x: 896, y: 164}, A.StalactiteDownSmallRowPath], amount: 2}],
      ],
      26: [
        ['Stalactite', {sprite:  [{x: 639, y: 680}, A.StalactiteRightSmallRowPath], after: 'beforeEffects'}],
        ['Stalactite', {sprite:  [{x: 639, y: 700}, A.StalactiteRightSmallRowPath], after: 'beforeEffects'}],
        ['Stalactite', {sprite:  [{x: 639, y: 732}, A.StalactiteRightSmallRowPath], after: 'beforeEffects'}],
        ['Stalactite', {sprite:  [{x: 609, y: 643}, A.StalactiteDownSmallRowPath], after: 'beforeEffects'}],
        ['Stalactite', {sprite:  [{x: 422, y: 319}, A.StalactiteUpSmallRowPath], amount: 8}],
        ['Stalactite', {sprite:  [{x: 425, y: 260}, A.StalactiteDownSmallRowPath], amount: 8}],
        ['Stalactite', {sprite:  [{x: 321, y: 708}, A.StalactiteDownSmallRowPath], amount: 4}],
        ['Stalactite', {sprite:  [{x: 449, y: 515}, A.StalactiteDownSmallRowPath]}],
        ['Stalactite', {sprite:  [{x: 737, y: 515}, A.StalactiteDownSmallRowPath], after: 'beforeEffects'}],
        ['Stalactite', {sprite:  [{x: 281, y: 164}, A.StalactiteDownSmallRowPath], after: 'beforeEffects'}],
        ['Stalactite', {sprite:  [{x: 146, y: 164}, A.StalactiteDownSmallRowPath], amount: 2, after: 'beforeEffects'}],
        ['Stalactite', {sprite:  [{x: 60, y: 164}, A.StalactiteDownSmallRowPath], after: 'beforeEffects'}]
      ],
      27: [
        ['Drop',       {sprite1: [{x: 300, y:  32}, A.DropPath], sprite2: [{x: 300, y:  32}, {idle: [A.DropDownPath, 12, 80]}], pos: 1, sound: 'drop3', speed:  8, delay: 2000}],
        ['Drop',       {sprite1: [{x: 908, y:  32}, A.DropPath], sprite2: [{x: 908, y:  32}, {idle: [A.DropDownPath, 12, 80]}], pos: 1, sound: 'drop1', speed:  7, delay: 1000}],
        ['Stalactite', {sprite:  [{x:  80, y: 356}, A.StalactiteDownSmallRowPath], amount: 11}],
        ['Stalactite', {sprite:  [{x: 575, y: 290}, A.StalactiteRightSmallRowPath]}],
        ['Stalactite', {sprite:  [{x: 575, y: 315}, A.StalactiteRightSmallRowPath]}],
        ['Stalactite', {sprite:  [{x: 545, y: 260}, A.StalactiteDownSmallRowPath]}],
        ['Stalactite', {sprite:  [{x: 647, y: 356}, A.StalactiteDownSmallRowPath], amount: 12}],
        ['Stalactite', {sprite:  [{x:  85, y: 414}, A.StalactiteUp1Path], amount: 12}]
      ],
      28: [
        ['Stalactite', {sprite:  [{x: 700, y: 31}, A.StalactiteUp2Path], amount: 4}]
      ],
      29: [
        ['Stalactite', {sprite:  [{x:  60, y: 31}, A.StalactiteUp1Path], amount: 4}],
        ['Stalactite', {sprite:  [{x: 415, y: 31}, A.StalactiteUpRowPath], amount: 4}]
      ],
      30: [
        ['Stalactite', {sprite:  [{x:  40, y: 31}, A.StalactiteUpRowPath], amount: 8}],
        ['Stalactite', {sprite:  [{x: 570, y: 64}, A.StalactiteUp2Path], amount: 2}]
      ],
      32: [
        ['Drop',       {sprite1: [{x: 642, y: 576}, A.DropPath], sprite2: [{x: 642, y: 576}, {idle: [A.DropDownPath, 12, 80]}], pos: 1, sound: 'drop2', speed:  8, delay: 2000}],
        ['Stalactite', {sprite:  [{x: 421, y: 673}, A.StalactiteDownRowPath], amount: 7}],
        ['Stalactite', {sprite:  [{x: 164, y: 609}, A.StalactiteDownRowPath], amount: 3}]
      ],
      33: [
        ['Stalactite', {sprite:  [{x: 120, y: 160}, A.StalactiteUpRowPath]}],
        ['Stalactite', {sprite:  [{x: 416, y: 31}, A.StalactiteUpRowPath], amount: 3}]
      ],
      34: [
        //['Drop',       {sprite1: [{x: 400, y: 256}, A.DropPath], sprite2: [{x: 400, y: 256}, {idle: [A.DropDownPath, 12, 80]}], pos: 1, before: 88, sound: 'drop2', speed:  8, delay: 2000}],
        ['Water',      {params:  [159, 650, 1023, 650, 6, 89], drop: [{x: 0, y:0}, {idle: [A.DropDownPath, 12, 40]}], after: 'hero' }],
        ['Stalactite', {sprite:  [{x:  20, y: 354}, A.StalactiteDownRowPath], amount: 3}],
        ['Stalactite', {sprite:  [{x: 320, y: 354}, A.StalactiteDownRowPath], amount: 2}],
        ['Stalactite', {sprite:  [{x: 620, y: 354}, A.StalactiteDownRowPath], amount: 2}],
        ['Stalactite', {sprite:  [{x: 860, y: 354}, A.StalactiteDownRowPath]}]
      ],
      35: [
        ['Drop',       {sprite1: [{x: 627, y: 608}, A.DropPath], sprite2: [{x: 627, y: 608}, {idle: [A.DropDownPath, 12, 80]}], pos: 1, before: 88, sound: 'drop3', speed:  8, delay: 2000}],
        ['Water',      {params:  [0, 650, 1023, 650, 6, 89], drop: [{x: 0, y:0}, {idle: [A.DropDownPath, 12, 40]}], after: 'hero' }],
        ['Stalactite', {sprite:  [{x: 850, y: 132}, A.StalactiteDownSmallRowPath], after: 'beforeEffects'}],
        ['Stalactite', {sprite:  [{x: 650, y: 132}, A.StalactiteDownSmallRowPath], amount: 2, after: 'beforeEffects'}],
        ['Stalactite', {sprite:  [{x: 450, y: 132}, A.StalactiteDownSmallRowPath], amount: 3, after: 'beforeEffects'}],
        ['Stalactite', {sprite:  [{x: 290, y: 132}, A.StalactiteDownSmallRowPath], amount: 3, after: 'beforeEffects'}],
        ['Stalactite', {sprite:  [{x:  90, y: 132}, A.StalactiteDownSmallRowPath], amount: 3, after: 'beforeEffects'}],
        ['Stalactite', {sprite:  [{x: 100, y: 353}, A.StalactiteDownRowPath], amount: 2, after: 'beforeEffects'}],
        ['Stalactite', {sprite:  [{x: 300, y: 353}, A.StalactiteDownRowPath], amount: 2, after: 'beforeEffects'}],
        ['Stalactite', {sprite:  [{x: 600, y: 353}, A.StalactiteDownRowPath], amount: 2, after: 'beforeEffects'}],
        ['Stalactite', {sprite:  [{x: 800, y: 353}, A.StalactiteDownRowPath], amount: 2, after: 'beforeEffects'}]
      ],
      36: [
        ['Water',      {params:  [0, 650, 545, 650, 6, 89], drop: [{x: 0, y:0}, {idle: [A.DropDownPath, 12, 40]}], after: 'hero' }],
        ['Stalactite', {sprite:  [{x: 156, y: 388}, A.StalactiteDownSmallRowPath], amount: 6}],
        ['Stalactite', {sprite:  [{x: 196, y: 258}, A.StalactiteLeftSmallRowPath]}],
        ['Stalactite', {sprite:  [{x: 196, y: 290}, A.StalactiteLeftSmallRowPath]}],
        ['Stalactite', {sprite:  [{x: 196, y: 312}, A.StalactiteLeftSmallRowPath]}],
        ['Stalactite', {sprite:  [{x: 225, y: 227}, A.StalactiteDownSmallRowPath]}],
        ['Stalactite', {sprite:  [{x: 576, y: 227}, A.StalactiteDownSmallRowPath]}],
        ['Stalactite', {sprite:  [{x: 548, y: 257}, A.StalactiteLeftSmallRowPath]}],
        ['Stalactite', {sprite:  [{x: 548, y: 289}, A.StalactiteLeftSmallRowPath]}],
        ['Stalactite', {sprite:  [{x: 548, y: 322}, A.StalactiteLeftSmallRowPath]}],
        ['Stalactite', {sprite:  [{x: 548, y: 354}, A.StalactiteLeftSmallRowPath]}],

        ['Stalactite', {sprite:  [{x: 607, y: 354}, A.StalactiteRightSmallRowPath]}],
        ['Stalactite', {sprite:  [{x: 607, y: 322}, A.StalactiteRightSmallRowPath]}],
        ['Stalactite', {sprite:  [{x: 607, y: 289}, A.StalactiteRightSmallRowPath]}],
        ['Stalactite', {sprite:  [{x: 607, y: 257}, A.StalactiteRightSmallRowPath]}],

        ['Stalactite', {sprite:  [{x: 708, y: 257}, A.StalactiteLeftSmallRowPath]}],
        ['Stalactite', {sprite:  [{x: 708, y: 289}, A.StalactiteLeftSmallRowPath]}],
        ['Stalactite', {sprite:  [{x: 708, y: 322}, A.StalactiteLeftSmallRowPath]}],
        ['Stalactite', {sprite:  [{x: 708, y: 354}, A.StalactiteLeftSmallRowPath]}],
        ['Stalactite', {sprite:  [{x: 737, y: 227}, A.StalactiteDownSmallRowPath]}],

        ['Stalactite', {sprite:  [{x: 767, y: 354}, A.StalactiteRightSmallRowPath]}],
        ['Stalactite', {sprite:  [{x: 767, y: 322}, A.StalactiteRightSmallRowPath]}],
        ['Stalactite', {sprite:  [{x: 767, y: 289}, A.StalactiteRightSmallRowPath]}],
        ['Stalactite', {sprite:  [{x: 767, y: 257}, A.StalactiteRightSmallRowPath]}],

        ['Stalactite', {sprite:  [{x: 496, y: 388}, A.StalactiteDownSmallRowPath], amount: 2}]
      ],
      37: [
        ['Water',      {params:  [607, 712, 1023, 712, 6, 27], drop: [{x: 0, y:0}, {idle: [A.DropDownPath, 12, 40]}], after: 'beforeEffects' }],
        ['Stalactite', {sprite:  [{x: 610, y: 543}, A.StalactiteUpRowPath], amount: 2}],
      ],
      38: [
        ['Drop',       {sprite1: [{x: 400, y: 576}, A.DropPath], sprite2: [{x: 400, y: 576}, {idle: [A.DropDownPath, 12, 80]}], pos: 1, before: 26, sound: 'drop1', speed: 8, delay: 2000}],
        ['Drop',       {sprite1: [{x: 627, y: 576}, A.DropPath], sprite2: [{x: 627, y: 576}, {idle: [A.DropDownPath, 12, 80]}], pos: 1, before: 26, sound: 'drop3', speed: 8, delay: 1000}],
        ['Drop',       {sprite1: [{x: 800, y: 576}, A.DropPath], sprite2: [{x: 800, y: 576}, {idle: [A.DropDownPath, 12, 80]}], pos: 1, before: 26, sound: 'drop2', speed: 8, delay: 3000}],
        ['Water',      {params:  [0, 712, 1023, 712, 6, 27], drop: [{x: 0, y:0}, {idle: [A.DropDownPath, 12, 40]}], after: 'beforeEffects' }],
        ['Stalactite', {sprite:  [{x: 610, y: 543}, A.StalactiteUpRowPath], amount: 2}],
        ['Stalactite', {sprite:  [{x: 200, y: 543}, A.StalactiteUpRowPath], amount: 3}],
      ],
      39: [
        ['Drop',   {sprite1: [{x: 621, y: 351}, A.DropPath], sprite2: [{x: 621, y: 319}, {idle: [A.DropDownPath, 12, 80]}], pos: 1, before: 23, sound: 'drop2', speed:  8, delay: 3000}],
        ['Water',  {params:  [0, 715, 673, 715, 6, 24], drop: [{x: 0, y:0}, {idle: [A.DropDownPath, 12, 40]}], after: 'beforeEffects' }]
      ]
    }
  },
  blocks: new BigUint64Array([18446744073709551615n,18446744073709551615n,18446744073709551615n,18446744073709551615n,18194542494576803839n,13853072453791645695n,18446744073709551615n,18446744073709551615n,13853002359925366784n,16769024n,2147221631n,18446726549974679551n,9225483374058004480n,8372224n,1073217599n,18446708923160395775n,9224357406505426944n,8372224n,536346680n,33822932991n,9223372243080306688n,8372351n,18374686479673196592n,33822932991n,9223372243046752256n,511n,18410715276692160560n,32767n,9223372243046752287n,17293822569102705144n,4575657221409996848n,32767n,9223372243046752287n,17293822569102706624n,2269814212194730032n,32767n,9223372243013206047n,17293822569102706560n,48n,255n,13835058261440593951n,17327599566375091968n,48n,127n,13848569060322705439n,17309585167865609728n,4503599358935088n,63n,18442240680240611455n,17309585167865609216n,4503599493152824n,31n,18446603548822077567n,17309593955301588992n,4503599493152831n,18442240475122368543n,18446739888263921791n,17309593955301588992n,33n,18442240475122368543n,18446739888263921791n,17309805061534121984n,0n,1040187423n,10376012279085793532n,3474535900019425280n,2095104n,30786325577759n,9258838096521265148n,3474535900019425283n,16140901064495857664n,30786325577731n,9223372249455722492n,15771386198884355n,16140901064495857664n,30786333704195n,9223372249455656960n,15771390493851651n,16140901064495857785n,18428729675208196099n,9223372251598946304n,15771392641335299n,16140901081541509120n,141012105953283n,9223372251598946304n,15762667413176323n,9232378703399354368n,274609471491n,9223372251598946304n,15762633054486531n,9232378693869895680n,1126174516314115n,10376293479188791296n,15762615874715655n,9232378144114081792n,16383n,10375730597954846720n,15762607284813823n,9232377044602454016n,16383n,10375730597954846720n,3758227455n,9223372044370968576n,16383n,9225060893161684992n,3n,9223372044370968576n,255n,9223372043301421056n,1n,9223372044370968576n,31n,9223372043301421056n,2017612633061982209n,9223372044370968576n,917511n,9223372043301421056n,65537n,9223653519347682816n,3n,9223372043301421056n,65537n,9223653519347682823n,18374686479671623683n,9223372043301421062n,246290604688257n,9223653519884557831n,13835058055282163715n,9223372043297226752n,246290604687361n,9223372045444709891n,9223372036854775811n,9224495744180813824n,246290604687361n,9223372045444709891n,9223380832939438083n,9224495744180813824n,65537n,9223372043297226755n,9223380832939409411n,17294946276428742656n,65537n,9223372043297226755n,9223380832939409411n,17294946276428742656n,65537n,9223372043297226755n,9223372052960903171n,18446741881128747008n,1n,9223372043297226755n,9223372043297226759n,18446744071562069984n,1n,9223372043297226755n,9223864624506470415n,18446744071830374368n,1n,9232379242551967747n,9223372043297227263n,18446744071830374368n,1n,9232379242551967747n,9223372043297227263n,18446744071830372352n,1n,9232379242551967747n,9223372043297227263n,13835198790757122048n,1n,9223372043297226755n,9223372043297226759n,9223442403518316544n,1n,9223372043297226755n,9223372043297226753n,9223407219079380992n,1n,9223372043297226755n,9254897240688877569n,9223407219079380992n,1n,9223372043297226755n,9223372044370968577n,9223407220153122816n,1n,9223372036854775811n,9223372045436321793n,9223407220153122816n,32212254721n,9223372036854775811n,9223372045436321853n,9223442405598953471n,16140901097781854209n,9223372036854775815n,9223372045440516349n,9367487224930631679n,18442240508441919487n,18446744073709551615n,18446744073709551613n,9223372036854783745n,18442240480524632067n,18446744073709551615n,18446744073709551613n,9223372036854783745n,17361376563513262081n,13835058055282163712n,1n,9223372036854783745n,17361376563513262081n,9223372036854775808n,1n,9225624936180092672n,1n,9223372036854775808n,1n,9225695322372574976n,6442582017n,9223372586610622496n,577032567610408961n,9369810510448427008n,6459360257n,9223372588758106144n,577032567610417279n,9369810510448427015n,17870283327865488385n,9223513326263238688n,577032567610417153n,9369810510448427015n,17870289924935255041n,9259542123282202656n,577032567610417153n,9369810510448427015n,17870283327865488417n,9259542123282202656n,577032567610417153n,9369810510448427009n,13943144452798415905n,9259542123282202656n,577032567610417153n,9367557611123113985n,13835058061741392929n,9259541573526388768n,577023771517394945n,9367487225199067137n,13835058061724614689n,9259541571378905120n,577023771517394945n,9367487224930631681n,16140901070938308609n,9259400833890549792n,577023702256852993n,9367487224930631683n,16140901070938308609n,9223372036854808608n,577023702256852993n,9367487224930631683n,16154411869820420097n,9223372036854808608n,577023702256844801n,9223372036854775811n,16140901070938308609n,9223372036854808576n,562949953421313n,9223372036854775815n,16140901070938308609n,9223372036854808576n,1n,9223372036854775815n,17293822575545155585n,9223372036854775808n,1n,9223372036854775815n,17293822575545155585n,9223372036854775808n,1n,9223372036854775815n,17293822575545155585n,9223372036854775808n,1n,9223372036854775823n,17870283327848579073n,9223372036854775808n,1n,9236882835736887327n,18410715283133038593n,9223372036854775808n,1n,9236882840031854655n,18428729681642520577n,9223372036854775808n,1n,9236882848621789247n,18446462605175291905n,9223372036854775808n,1n,18446744073709551615n,18446744073709551609n,13835058055282163711n,18446744073709551615n,18446743532543672319n,18446744073709551609n,13835058055282163711n,18446744073709551615n,9223372039002259456n,562948879679489n,9223372036854775808n,70366596694017n,9223372039002259456n,135291469825n,9223372036854775808n,2196875771905n,9223372039002259456n,66571993089n,9223372036854775808n,1097364144129n,9223372172146245632n,66605547521n,9223372036854775808n,547608330241n,9223372051887161344n,32245809153n,9223372036854775808n,547608330241n,9223372039539130367n,18428729690266009857n,9223372036855299968n,547608330241n,9223372039002259456n,18014404951933185n,9223372036855299968n,66571993089n,9223372039002259456n,18014404951933185n,9223372036855824383n,18445618173802708997n,9367487501956022272n,20257408672612353n,9223372174293729279n,18446181123756130429n,9367487501956022272n,18014404951949313n,9223372174293729279n,18446462598732841085n,9224515531095162880n,18014404951932929n,9223372174293729279n,18446744073575334129n,9224515531163320448n,18014406025674751n,9223372141007732735n,18446744073642443201n,9223372039070433408n,18014404951932929n,9223372140470861823n,18445618174272471937n,9223372039070417024n,18014404951932929n,9223372140202426367n,18444492274130751233n,9223372039002259456n,18014404951932929n,13835058158629814243n,16140901064764292609n,9223372039002259456n,18014404951932929n,16140901167843508161n,9223372036921883649n,9223372039002259471n,9241950491271757825n,17293822672316137345n,9223372036854775809n,9223372039002263551n,9241950491271757825n,18374686582817947521n,9223372036854775809n,9223372039002261505n,9241950491271757825n,18410715379803357057n,9223372173219987457n,9223372039002261505n,9241950491271757825n,18428729778279284736n,136365211649n,9223372039002261505n,9241405133504380929n,18446462701812056064n,136365211655n,9223372039002261505n,9241405133504380929n,18446603439300411392n,274341036287n,9223372039002261505n,36011213422854141n,18446673808044589059n,13835058605037912575n,17901808793675627775n,18014407099416573n,18446744072669364223n,18446744073709551615n,17901808793675626750n,18014398509481985n,18446744072669364223n,18446744073709551615n,17870283596283510832n,18014398509481985n,18446743531469930511n,18160765497367330943n,17293822843972223024n,18014398509481985n,18446742980640374791n,18159639597456293951n,16140901201918033968n,18014398509481985n,6442450947n,17870846271342772255n,16140901133181780016n,18014398509481985n,6442450947n,17293857753441239071n,16140901132678463536n,36028797018963967n,15032385536n,17592152490015n,16285016320217448688n,0n,1125932119097344n,274844352543n,13835058121854157040n,0n,2306968941332791296n,137371844623n,13835058087494418672n,0n,2379062819254435840n,137304735751n,13835058087494418672n,0n,2379062819254435840n,137304750081n,9223372051887161584n,0n,2379062853614174208n,137304750081n,9230127451328217328n,0n,2307005328295723008n,137304735745n,9230127436295831792n,0n,1162319082029056n,2161727821137838081n,9223372036854776063n,18446744073709551615n,18446743660318982143n,18302628885633695745n,9223372036854776048n,0n,136902115327n,18374686479677915137n,9223372036854776048n,0n,136902115327n,18446744073707454465n,9223398432650035440n,0n,274609504255n,18446744073707454465n,13835084451614294016n,0n,4397912317952n,14680067n,16140901072817356800n,0n,8795958829056n,14680071n,17293822586014138368n,0n,17592118960128n,15n,17870283355497431040n,1729382256910270464n,140737454825472n,31n,18442240542667444223n,17870283321406128128n,140737487855616n,63n,18444492411267719167n,17870283321406128128n,140737487855616n,2047n,18446744073709551615n,18446744073709551615n,18446744073709551615n,18446744073709551615n,18446744073709551615n,18446744073709551615n,18446744073709551615n,18446744073709551615n])
}

function fmt(msg) {
  if (msg.startsWith('Key')) return msg.substring(3)
  return msg
}