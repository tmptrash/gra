import { Door, draw as drawDoor, update as updateDoor } from './door'
import { Item, draw as drawItem, update as updateItem } from './item'
import { Enemy, draw as drawEnemy, update as updateEnemy } from './enemy'
import { Drop, draw as drawDrop, update as updateDrop } from './drop'
import { Text, draw as drawText, update as updateText } from './text'
import { Sprite, draw as drawSprite, update as updateSprite } from './sprite'
import { Portal, draw as drawPortal, update as updatePortal } from './portal'
import { Countdown, draw as drawCountdown } from './countdown'
import { fn } from './utils'

export function create(ctor, cfg, room) {
  switch (ctor) {
    case 'Door'     : return { draw: drawDoor,      update: updateDoor,   o: Door(), room }
    case 'Item'     : return { draw: drawItem,      update: updateItem,   o: Item(...cfg, room), room }
    case 'Enemy'    : return { draw: drawEnemy,     update: updateEnemy,  o: Enemy(...cfg), room }
    case 'Drop'     : return { draw: drawDrop,      update: updateDrop,   o: Drop(cfg), room }
    case 'Text'     : return { draw: drawText,      update: updateText,   o: Text(...cfg.text, cfg.id), room, id: cfg.id }
    case 'Sprite'   : return { draw: drawSprite,    update: updateSprite, o: Sprite(...cfg.sprite), room }
    case 'Portal'   : return { draw: drawPortal,    update: updatePortal, o: Portal(cfg.sprite), room }
    case 'Countdown': return { draw: drawCountdown, update: fn,           o: Countdown(...cfg), room }
  }

  return null
}