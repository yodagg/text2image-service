const express = require('express')
const log4js = require('log4js')
const _ = require('lodash')
const text2image = require('./text2image')
const app = express()
const port = 9000

app.use(express.json())

log4js.addLayout('json', function (config) {
  return function (logEvent) {
    return JSON.stringify(logEvent) + config.separator
  }
})

log4js.configure({
  appenders: {
    normal: {
      type: 'dateFile',
      filename: '/home/app/text2image/logs/search',
      // filename: './logs/search',
      alwaysIncludePattern: true,
      pattern: 'yyyy-MM-dd.log',
      layout: { type: 'json', separator: ',' }
    },
  },
  categories: {
    default: { appenders: ['normal'], level: 'info' },
  },
})


app.post('/', async (req, res) => {
  const logger = log4js.getLogger('normal')

  const { prompt } = req.body
  const ip = _.get(res.headers, 'x-forwarded-for', req.ip)

  logger.info(ip, prompt)

  try {
    if ( !prompt ) throw new Error('Request parameter error.')
    const data = await text2image(prompt)
    res.send({
      code: 1,
      message: '',
      data
    })
  } catch (error) {
    const message = error.message
  
    logger.error(ip, message)
    res.send({
      code: -1,
      message: message,
      data: []
    })
  }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})