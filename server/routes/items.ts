import express from 'express'
import * as db from '../db/db'
import { getListWithItems } from '../db/utils'

const router = express.Router()

router.get('/', (req, res) => {
  db.getAllItems()
    .then((itemsData) => {
      res.json(itemsData)
    })
    .catch((err) => {
      res.status(500).send(err.message)
    })
})

router.get('/list/:id', (req, res) => {
  const id = +req.params.id

  getListWithItems(id)
    .then((itemsData) => {
      res.json(itemsData)
    })
    .catch((err) => {
      res.status(500).send(err.message)
    })
})

router.post('/', (req, res) => {
  db.addItem(req.body)
    .then((itemData) => {
      res.json(itemData)
    })
    .catch((err) => {
      res.status(500).send(err.message)
    })
})

router.patch('/', (req, res) => {
  db.updateItemsListId(req.body)
    .then((itemData) => {
      res.json(itemData)
    })
    .catch((err) => {
      res.status(500).send(err.message)
    })
})

router.delete('/:id', (req, res) => {
  db.delItem(+req.params.id)
    .then(() => {
      res.sendStatus(200)
    })
    .catch((err) => {
      res.status(500).send(err.message)
    })
})

export default router
