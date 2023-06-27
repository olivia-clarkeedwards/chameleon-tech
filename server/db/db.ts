import connection from './connection'
import { Item, ItemInfo } from '../../client/models/Lists'
import { List } from '../../client/models/Items'

// Lists

export function getAllLists(db = connection): Promise<List[]> {
  return db('lists').select('*')
}

// Items

export function getAllItems(db = connection): Promise<Item[]> {
  return db('items').select('*')
}

export function addItem(item: ItemInfo, db = connection): Promise<Item> {
  return db('items')
    .insert(item)
    .returning(['*'])
    .then((data) => data[0])
}

export function delItem(id: number, db = connection): Promise<number> {
  return db('items').where({ id }).del()
}

// getItemsByList_id
