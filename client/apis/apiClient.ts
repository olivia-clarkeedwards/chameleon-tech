import request from 'superagent'
import { ItemInfo } from '../models/Lists'

// Routes

const listRoute = '/api/v1/lists/'
const itemRoute = '/api/v1/items/'

// Lists

export function APIGetAllLists() {
  return request.get(listRoute).then((res) => {
    return res.body
  })
}

// Items

export function APIGetAllItems() {
  return request.get(itemRoute).then((res) => {
    return res.body
  })
}

export function APIAddItem(item: ItemInfo) {
  return request
    .post(itemRoute)
    .send(item)
    .then((res) => res.body)
}

export function APIDelItem(id: number) {
  return request.del(itemRoute + id).then((res) => res.body)
}
