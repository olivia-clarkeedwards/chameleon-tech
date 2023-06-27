import connection from './connection'
export interface List {
  id: number
  list: string
}

export interface Item {
  id: number
  item: string
  listId: number
}

export interface ItemInfo {
  item: string
  listId: number
}

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
