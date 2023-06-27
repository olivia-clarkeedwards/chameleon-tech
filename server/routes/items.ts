import express from 'express'
import * as db from '../db/db'

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

export default router
