import { Door, draw as drawDoor, update as updateDoor } from './door'
import { Item, draw as drawItem, update as updateItem } from './item'
import { Enemy, draw as drawEnemy, update as updateEnemy } from './enemy'

export function create(ctor, cfg, scr) {
  switch (ctor) {
    case 'Door' : return { draw: drawDoor, update: updateDoor, o: Door(), scr }
    case 'Item' : return { draw: drawItem, update: updateItem, o: Item(...cfg, scr), scr }
    case 'Enemy': return { draw: drawEnemy, update: updateEnemy, o: Enemy(...cfg), scr }
  }

  return null
}