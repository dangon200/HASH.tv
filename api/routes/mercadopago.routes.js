// const express = require('express')
// const router = express.Router()
const router = require('express').Router()
const { createSub } = require('../controllers/webhooksMP')
// SDK de Mercado Pago
const mercadopago = require('mercadopago')

// middleware
// app.use(bodyParser.urlencoded({ extended: false }))

// Agrega credenciales
mercadopago.configure({
  access_token: process.env.ACCESS_TOKEN_MP
})

// routes
// TODO back_urls MODIICAR
router.post('/', (req, res) => {
// Crea un objeto de preferencia
  const preference = {

    items: [{
        title: req.body.title,
        description: req.body.description,
        unit_price: req.body.unit_price,
        quantity: 1,
        category_id: req.body.category_id,
        id: req.body.id
    }],
    back_urls: {
      success: 'hash-tv.vercel.app/user/subscriptions/',
      failure: 'hash-tv.vercel.app/',
      pending: 'hash-tv.vercel.app/'
    },
    notification_url: 'hash-tv.vercel.app/api/subscriptions'
  }
  mercadopago.preferences.create(preference)
    .then(function (response) {
      res.status(200).json({ data: response.body.init_point })
    }).catch(function (error) {
      console.log(error)
    })
})
router.post('/hashcash', (req, res) => {
  // Crea un objeto de preferencia
    const preference = {
      items: [{
          title: req.body.title,
          description: req.body.description,
          unit_price: req.body.unit_price,
          quantity: 1,
          id: req.body.id
      }],
      back_urls: {
        success: 'hash-tv.vercel.app/user/',
        failure: 'hash-tv.vercel.app/',
        pending: 'hash-tv.vercel.app/'
      },
      notification_url: 'hash-tv.vercel.app/api/hashcash'
    }
    mercadopago.preferences.create(preference)
      .then(function (response) {
        res.status(200).json({ data: response.body.init_point })
      }).catch(function (error) {
        console.log(error)
      })
  })
module.exports = router