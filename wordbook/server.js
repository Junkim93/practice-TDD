import express from 'express'
import logger from 'morgan'
import path from 'path'

const app = express()
const PORT = 3000

const handleListening = () => {
  console.log(`http://localhost:${PORT}`)
}

app.use(logger('dev'))

app.use('/', express.static(path.join(__dirname, './')))

app.get('/', (req, res) => {
  res.render('index.html')
})

app.listen(PORT, handleListening)
