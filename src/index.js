const express = require('express')
require('dotenv').config()
const cors = require('cors')

const sendMails = require('../routes/send-emails')

const app = express()

app
  
  .use(cors('*'))
  
  .get('/', (req, res) => {
    res.send('Hola mundo!')
  })

  .use('/send-email', sendMails)

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server on port: ${PORT}`)
})

