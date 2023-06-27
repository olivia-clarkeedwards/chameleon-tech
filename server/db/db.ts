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

export function getAllLists(db = connection): Promise<List[]> {
  // NOT THIS
  return db('list').select('*')
}
