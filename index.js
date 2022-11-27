const express = require('express')
const bodyParser = require('body-parser')
const text2image = require('./text2image')
const app = express()
const port = 9000

app.use(bodyParser())

app.post('/', async (req, res) => {
  const { prompt } = req.body

  try {
    if ( !prompt ) throw new Error('Request parameter error.')

    const data = await text2image(prompt)
    res.send({
      code: 1,
      message: '',
      data
    })
  } catch (error) {
    res.send({
      code: -1,
      message: error.message,
      data: []
    })
  }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})