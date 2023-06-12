import { join } from 'node:path'
import express from 'express'

const server = express()

server.use(express.static(join(__dirname, 'public')))

server.get('*', (request, response) => {
  response.sendFile(join(__dirname, '/public/index.html'))
})

export default server
