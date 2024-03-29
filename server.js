const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const endpoints = require('./endpoints')
const path = require('path')
require('dotenv').config()
const app = express()
const port = process.env.PORT || 5001

/** Connect to the database */
mongoose
  .connect(process.env.DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then((res) => console.log(`Database connected successfully`))
  .catch((err) => console.log(err))

mongoose.Promise = global.Promise
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  )
  next()
})
app.use(bodyParser.json())
app.use('/api', endpoints)
app.use(express.static(path.join(__dirname, 'client/build')))
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/build/index.html'))
})
app.use((err, req, res, next) => {
  console.log(err)
  next()
})
app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})
