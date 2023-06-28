import connection from './connection'
import { Item, ItemInfo } from '../../client/models/Items'
import { List } from '../../client/models/Lists'

// Lists

export function getAllLists(db = connection): Promise<List[]> {
  return db('lists').select('*')
}

export function getListById(id: number, db = connection): Promise<List> {
  return db('lists').where('lists.id', id).first()
}

// Items

export function getAllItems(db = connection): Promise<Item[]> {
  return db('items').select('*')
}

export function getItemsByListId(id: number, db = connection): Promise<Item[]> {
  return db('items').select('*').where('items.list_id', id)
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
