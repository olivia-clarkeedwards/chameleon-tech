import * as db from '../db/db'

import { ListWithItems } from '../../client/models/Lists'

export async function getListWithItems(id: number): Promise<ListWithItems> {
  const list = await db.getListById(id)
  const items = await db.getItemsByListId(id)

  const listWithItems = { ...list, items: [...items] }

  return listWithItems
}
