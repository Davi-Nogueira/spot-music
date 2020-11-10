import express from 'express'

const port = process.env.port || 5500
const app = express()

app
  .use(express.static('public'))
  .use(express.urlencoded({ extended: true }))

  .get('/', (req, res) => res.sendFile(__dirname + '/views/index.html'))

  .listen(5500, () => {
    console.log(`Running Server on http://localhost:${port}`)
  })