const Subscriptions = require("../models/Subscription");
const Streams = require("../models/Stream")
const Users = require("../models/Users");
const fetch = require('node-fetch')

const createSub = async (id) => {
  const response = await fetch(`https://api.mercadopago.com/v1/payments/${id}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${process.env.ACCESS_TOKEN_MP}`
    }
  })
  const result = await response.json()
  const idU = result.additional_info.items[0].id
  const date = new Date()
  const newBuy = await Subscriptions.create({
    title: result.additional_info.items[0].title,
    user: idU,
    currency: result.currency_id,
    paymentMethod: result.payment_type_id,
    createdDate: new Date(date),
    expireDate: new Date(date.setMonth(date.getMonth() + parseInt(result.additional_info.items[0].description))),
    totalAmount: result.transaction_amount,
  })
  const userFound = await Users.findOne({_id: idU})
  userFound.Subscriptions.push(newBuy._id)
  const saved = await userFound.save();
  return { newBuy }
}
const PagarProducto = async (req, res, next) => {
    console.log(req.body)
    console.log(req.query['data.id'])
  
    if (req.query['data.id'] !== undefined) {
      try {
        await createSub(req.query['data.id'])
        res.status(200).send('OK')
      } catch (error) {
        console.log(error.message)
        res.status(400).send('ERROR')
      }
    } else {
      next()
    }
  }
module.exports = { PagarProducto }
