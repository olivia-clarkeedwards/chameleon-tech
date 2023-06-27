import { join } from 'node:path'
import express from 'express'
import lists from './routes/lists'
import items from './routes/items'

/*
 * create the server
 *************************/

const server = express()

/*
 * configure the server
 *************************/

server.use(express.json())
server.use(express.static(join(__dirname, 'public')))

/*
 * api routes
 *************************/

server.use('/api/v1/lists', lists)
server.use('/api/v1/items', items)

/*
 * re-route to client-side
 *************************/

server.get('*', (request, response) => {
  response.sendFile(join(__dirname, '/public/index.html'))
})

export default server
