import connection from './connection'

import { ListWithItems } from '../../client/models/Lists'

import { getItemsByListId } from './db'

export async function getListWithItems(
  id: number,
  db = connection
): Promise<ListWithItems> {
  const items = await getItemsByListId(id)
}

// return { id: 4, list: 'Done', items: ['item1', 'item2', 'item3']}
