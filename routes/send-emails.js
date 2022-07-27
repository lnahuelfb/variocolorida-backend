const express = require('express')
const mail = require('../utils/mail')

const router = express.Router()

router
  .get('/', (req, res) => {
    res.send('<h1>Hola Mundo!</h1>')
  })

  .post('/', (req, res) => {
    const { name, email, message } = req.body

    const telephone = parseInt(req.body.telephone)

    if (!name || !email || !message) {
      return res.status(403).send('No ingresaron todos los datos')
    }

    if (!telephone || typeof telephone === NaN) {

      mail(name, email, message)

      return res.status(201).send('Email envíado!')
    }

    mail(name, email, message, telephone)

    return res.status(201).send('Email envíado!')
  })



module.exports = router