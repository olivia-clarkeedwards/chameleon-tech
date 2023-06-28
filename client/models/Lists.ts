import { Item } from './Items'

export interface List {
  id: number
  list: string
}

export interface ListWithItems extends List {
  items: Item[]
}
