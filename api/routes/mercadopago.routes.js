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
      success: 'http://localhost:3000/user/subscriptions/',
      failure: 'http://localhost:3000/',
      pending: 'http://localhost:3000/'
    },
    notification_url: 'https://8710-2803-9800-9447-8622-2463-f4d1-b71-4719.sa.ngrok.io/api/notifications'
  }
  mercadopago.preferences.create(preference)
    .then(function (response) {
      res.status(200).json({ data: response.body.init_point })
    }).catch(function (error) {
      console.log(error)
    })
})

module.exports = router