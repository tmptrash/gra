import Shared from './shared'
import Config from './config'
import { int } from './utils'

const Blocks = Config.blocks

export function rightBlock(sprite, inRoom = true) {
  return xBlock(true, sprite, inRoom)
}

export function leftBlock(sprite, inRoom = true) {
  return xBlock(false, sprite, inRoom)
}

export function topBlock(sprite, inRoom = true) {
  return yBlock(true, sprite, inRoom)
}

export function downBlock(sprite, inRoom = true) {
  return yBlock(false, sprite, inRoom)
}

function xBlock(right, sprite, inRoom) {
  let y = sprite.y
  const x = right ? sprite.x + sprite.width : sprite.x
  if (inRoom) {
    if (x < 0) return [1, y]
    if (x > Config.width) return [Config.width - sprite.width - 1, y]
  }
  const y1 = sprite.y + sprite.height
  const spriteSize = Config.spriteSize
  const xSprite = Math.floor((int(x) + Shared.offsX) / spriteSize)
  const hSprites = Config.hSprites

  while (y <= y1) {
    const ySprite = Math.floor((int(y) + Shared.offsY) / spriteSize)
    const offs = ySprite * hSprites + xSprite
    if (block(offs)) return getSpritePosX(xSprite, ySprite, right)
    y += spriteSize
  }

  const ySprite = Math.floor((int(y1) + Shared.offsY) / spriteSize)
  const offs = ySprite * hSprites + xSprite
  return block(offs) ? getSpritePosX(xSprite, ySprite, right) : false
}

function yBlock(up, sprite, inRoom) {
  let x = sprite.x
  const y = up ? sprite.y : sprite.y + sprite.height
  if (inRoom) {
    if (y < 0) return [x, 1]
    if (y > Config.height) return [x, Config.height - sprite.height - 1]
  }
  const x1 = x + sprite.width
  const spriteSize = Config.spriteSize
  const ySprite = Math.floor((int(y) + Shared.offsY) / spriteSize)
  const hSprites = Config.hSprites

  while (x <= x1) {
    const xSprite = Math.floor((int(x) + Shared.offsX) / spriteSize)
    const offs = ySprite * hSprites + xSprite
    if (block(offs)) return getSpritePosY(xSprite, ySprite, !up)
    x += spriteSize
  }

  const xSprite = Math.floor((int(x1) + Shared.offsX) / spriteSize)
  const offs = ySprite * hSprites + xSprite
  return block(offs) ? getSpritePosY(xSprite, ySprite, !up) : false
}

export function xyBlock(x, y) {
  const spriteSize = Config.spriteSize
  const xSprite = Math.floor((int(x) + Shared.offsX) / spriteSize)
  const ySprite = Math.floor((int(y) + Shared.offsY) / spriteSize)
  return block(ySprite * Config.hSprites + xSprite)
}

function getSpritePosX(xSprite, ySprite, left = true) {
  const spriteSize = Config.spriteSize
  return [xSprite * spriteSize + (left ? 0 : spriteSize) - Shared.offsX, ySprite * spriteSize - Shared.offsY]
}

function getSpritePosY(xSprite, ySprite, up = true) {
  const spriteSize = Config.spriteSize
  return [xSprite * spriteSize - Shared.offsX, ySprite * spriteSize + (up ? 0 : spriteSize) - Shared.offsY]
}

function block(offs) {
  return Blocks[Math.floor(offs / 64)].toString(2).padStart(64, '0')[offs % 64] === '1'
}