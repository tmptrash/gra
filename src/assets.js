import Shared from './shared'

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
import MushroomT9Path from '../img/mushroom-medium-9.png'
import BulletPath from '../img/bullet-1.png'
import FlashlightPath from '../img/flashlight-9.png'
// hero
import IdleLeftPath from '../img/idle-left-3.png'
import IdleRightPath from '../img/idle-right-3.png'
import ClimbLeftPath from '../img/climb-left-1.png'
import ClimbRightPath from '../img/climb-right-1.png'
import IdleHitLeftPath from '../img/idle-hit-left-1.png'
import IdleHitRightPath from '../img/idle-hit-right-1.png'
import IdleGunLeftPath from '../img/idle-gun-left-3.png'
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
import FishLeftPath from '../img/fish-left-4.png'
import FishRightPath from '../img/fish-right-4.png'
import ExplosionPath from '../img/explosion-25.png'
// scripts
import DropPath from '../img/drop-1.png'
import DropDownPath from '../img/drop-down-12.png'
import PortalPath from '../img/portal-9.png'
import Plant1Path from '../img/plant1.png'
import Plant2Path from '../img/plant2.png'
import Plant3Path from '../img/plant3.png'
import Plant4Path from '../img/plant4.png'
import Plant5Path from '../img/plant5.png'
import Plant6Path from '../img/plant6.png'
import Plant7Path from '../img/plant7.png'
import Plant8Path from '../img/plant8.png'
import FireflySPath from '../img/firefly-small-4.png'
import FireflyMPath from '../img/firefly-mid-4.png'
import FireflyBPath from '../img/firefly-big-5.png'
import DustPath from '../img/dust-12.png'
import StalactiteUpRowPath from '../img/stalactite-up-row.png'
import StalactiteDownRowPath from '../img/stalactite-down-row.png'
import StalactiteDownSmallRowPath from '../img/stalactite-down-small-row.png'
import StalactiteRightSmallRowPath from '../img/stalactite-right-small-row.png'
import SignClimbPath from '../img/sign-climb.png'
// music
import Cave0 from '../music/cave0.mp3'
// sounds
import SoundHit from '../sound/hit.mp3'
import SoundJump from '../sound/jump.mp3'
import SoundHitMushroom from '../sound/hit-mushroom.mp3'
import SoundKey from '../sound/key.mp3'
import SoundGun from '../sound/gun.mp3'
import SoundWin from '../sound/win.mp3'
import SoundLending from '../sound/lending.mp3'
import SoundSteps from '../sound/steps.mp3'
import SoundWaterSteps from '../sound/water-steps.mp3'
import SoundJumpInWater from '../sound/jump-in-water.mp3'
import SoundBite from '../sound/bite.mp3'
import SoundBreath from '../sound/breath.mp3'
import SoundBullets from '../sound/bullets.mp3'
import SoundGameOver from '../sound/game-over.mp3'
import SoundHeart from '../sound/heart.mp3'
import SoundFire from '../sound/fire.mp3'
import SoundMissfire from '../sound/missfire.mp3'
import SoundBugDie from '../sound/bug-die.mp3'
import SoundDrop1 from '../sound/drop1.mp3'
import SoundDrop2 from '../sound/drop2.mp3'
import SoundDrop3 from '../sound/drop3.mp3'
import SoundDrop4 from '../sound/drop4.mp3'
import SoundGoUp from '../sound/go-up.mp3'
import SoundGoDown from '../sound/go-down.mp3'
import SoundGoLeft from '../sound/go-left.mp3'
import SoundGoRight from '../sound/go-right.mp3'
import SoundPick from '../sound/pick.mp3'
import SoundPortal from '../sound/portal.mp3'
import SoundFriction from '../sound/friction.mp3'
import Menu from '../sound/menu.mp3'

export const ASSET_NAMES = {
  'L1Path': L1Path,
  'StalactiteUp1Path': StalactiteUp1Path,
  'StalactiteUp2Path': StalactiteUp2Path,
  'StalactiteDown1Path': StalactiteDown1Path,
  'HeartAnimPath': HeartAnimPath,
  'GunAnimPath': GunAnimPath,
  'BulletsPath': BulletsPath,
  'DoorOpenPath': DoorOpenPath,
  'KeyPath': KeyPath,
  'Mushroom9Path': Mushroom9Path,
  'MushroomT9Path': MushroomT9Path,
  'BulletPath': BulletPath,
  'FlashlightPath': FlashlightPath,
  'IdleLeftPath': IdleLeftPath,
  'IdleRightPath': IdleRightPath,
  'ClimbLeftPath': ClimbLeftPath,
  'ClimbRightPath': ClimbRightPath,
  'IdleHitLeftPath': IdleHitLeftPath,
  'IdleHitRightPath': IdleHitRightPath,
  'IdleGunLeftPath': IdleGunLeftPath,
  'IdleGunRightPath': IdleGunRightPath,
  'WalkLeftPath': WalkLeftPath,
  'WalkGunLeftPath': WalkGunLeftPath,
  'WalkRightPath': WalkRightPath,
  'WalkGunRightPath': WalkGunRightPath,
  'JumpLeftPath': JumpLeftPath,
  'JumpGunLeftPath': JumpGunLeftPath,
  'JumpRightPath': JumpRightPath,
  'JumpGunRightPath': JumpGunRightPath,
  'BugLeftPath': BugLeftPath,
  'BugRightPath': BugRightPath,
  'BugUpPath': BugUpPath,
  'BugDownPath': BugDownPath,
  'BugBlkLeftPath': BugBlkLeftPath,
  'BugBlkRightPath': BugBlkRightPath,
  'BugBlueLeftPath': BugBlueLeftPath,
  'BugBlueRightPath': BugBlueRightPath,
  'BugBigLeftPath': BugBigLeftPath,
  'BugBigRightPath': BugBigRightPath,
  'FishLeftPath': FishLeftPath,
  'FishRightPath': FishRightPath,
  'ExplosionPath': ExplosionPath,
  'DropPath': DropPath,
  'DropDownPath': DropDownPath,
  'PortalPath': PortalPath,
  'Plant1Path': Plant1Path,
  'Plant2Path': Plant2Path,
  'Plant3Path': Plant3Path,
  'Plant4Path': Plant4Path,
  'Plant5Path': Plant5Path,
  'Plant6Path': Plant6Path,
  'Plant7Path': Plant7Path,
  'Plant8Path': Plant8Path,
  'FireflySPath': FireflySPath,
  'FireflyMPath': FireflyMPath,
  'FireflyBPath': FireflyBPath,
  'DustPath': DustPath,
  'StalactiteUpRowPath': StalactiteUpRowPath,
  'StalactiteDownRowPath': StalactiteDownRowPath,
  'StalactiteDownSmallRowPath': StalactiteDownSmallRowPath,
  'StalactiteRightSmallRowPath': StalactiteRightSmallRowPath,
  'SignClimbPath': SignClimbPath,
  'Cave0': Cave0,
  'SoundHit': SoundHit,
  'SoundJump': SoundJump,
  'SoundKey': SoundKey,
  'SoundGun': SoundGun,
  'SoundWin': SoundWin,
  'SoundLending': SoundLending,
  'SoundSteps': SoundSteps,
  'SoundWaterSteps': SoundWaterSteps,
  'SoundJumpInWater': SoundJumpInWater,
  'SoundBite': SoundBite,
  'SoundHitMushroom': SoundHitMushroom,
  'SoundBreath': SoundBreath,
  'SoundBullets': SoundBullets,
  'SoundGameOver': SoundGameOver,
  'SoundHeart': SoundHeart,
  'SoundFire': SoundFire,
  'SoundMissfire': SoundMissfire,
  'SoundBugDie': SoundBugDie,
  'SoundDrop1': SoundDrop1,
  'SoundDrop2': SoundDrop2,
  'SoundDrop3': SoundDrop3,
  'SoundDrop4': SoundDrop4,
  'SoundGoUp': SoundGoUp,
  'SoundGoDown': SoundGoDown,
  'SoundGoLeft': SoundGoLeft,
  'SoundGoRight': SoundGoRight,
  'SoundPick': SoundPick,
  'SoundPortal': SoundPortal,
  'SoundFriction': SoundFriction,
  'Menu': Menu
}

export const ASSETS = {}

export function preload(cb) {
  const onLoad = () => Shared.assets--
  for (let i in ASSET_NAMES) {
    const asset = ASSET_NAMES[i]
    if (asset.endsWith('.mp3')) {
      ASSETS[asset] = new Audio()
      ASSETS[asset].oncanplaythrough = onLoad
    } else if (asset.endsWith('.png')) {
      ASSETS[asset] = new Image()
      ASSETS[asset].onload = onLoad
    }
    Shared.assets++
    ASSETS[asset].src = asset
  }
  wait(cb)
}

function wait(cb) {
  if (Shared.assets > 0) {
    setTimeout(wait.bind(null, cb), 30)
    return
  }
  cb()
}