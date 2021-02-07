var express = require('express')
var router = express.Router()
const squareConnect = require('square-connect');
var config = require('./config.json')
var sections = config.sections

var jalVersion = (process.env.JAL_VERSION) ? process.env.JAL_VERSION : 'unset'

router.get('/items', function(req, res, next) {
  const merch = sections['merch']
  res.set('x-jalv', jalVersion)
  res.set('Cookie', req.cookies.cart)
  res.cookie('cart', req.cookies.cart).render(merch.template, merch.metadata);
})

router.get('/merch', function(req, res, next) {
  const merch = sections['merch']
  res.set('x-jalv', jalVersion)
  res.set('Cookie', req.cookies.cart)
  res.cookie('cart', req.cookies.cart).render(merch.template, merch.metadata);
})

router.get('/admin', function(req, res, next) {
  const merch = sections['admin']
  res.set('x-jalv', jalVersion)
  res.set('Cookie', req.cookies.cart)
  res.cookie('cart', req.cookies.cart).render(merch.template, merch.metadata);
})

const apiUser = process.env.API_USER
const apiPw = process.env.API_PW
const locationId = process.env.SQUARE_LOCATION_ID
const accessToken = process.env.SQAURE_ACCESS_TOKEN
const defaultClient = squareConnect.ApiClient.instance;
const oauth2 = defaultClient.authentications['oauth2']
oauth2.accessToken = accessToken;

defaultClient.basePath = 'https://connect.squareupsandbox.com'

router.post('/process-payment', async (req, res) => {
  const request_params = req.body;
  // Charge the customer's card
  const payments_api = new squareConnect.PaymentsApi()
  const request_body = {
    source_id: request_params.nonce,
    location_id: locationId,
    amount_money: {
      amount: request_params.total,
      currency: 'USD'
    },
    idempotency_key: request_params.idempotency_key
  }

  try {
    const response = await payments_api.createPayment(request_body);
    res.status(200).json({
      'title': 'Payment Successful',
      'result': response
    });
  } catch(error) {
    res.status(500).json({
      'title': 'Payment Failure',
      'result': error.response.text
    })
  }
})

function sendOrder(data) {
  console.log('Sending DATA')
  var http = require('http')
  var auth = 'Basic ' + Buffer.from(apiUser + ':' + apiPw).toString('base64')

  var options = {
    host: process.env.MERCH_API_HOST,
    path: '/v1/merch/orders',
    port: 5000,
    method: 'POST',
    headers: {'Content-Type': 'application/json', 'Authorization': auth}
  }
  callback = function(response) {
    var str = ''
    response.on('data', function (chunk) {
      str += chunk;
    })

    response.on('end', function () {
      console.log(`END: ${str}`);
    })
  }
  try {
  var req = http.request(options, callback)
  req.write(JSON.stringify(data))
  req.end()
  } catch(err) {
    console.log(err)
  }
}

router.post('/process-order', async (req, res) => {
  console.log(req.body)
  try {
    const response = await sendOrder(req.body);
    res.status(200).json({
      'title': 'Payment Successful',
      'result': response
    });
  } catch(error) {
    res.status(500).json({
      'title': 'Payment Failure',
      'result': error.response.text
    })
  }
})

// TODO fix routing so these routes aren't needed

router.get('/about', function(req, res, next) {
  res.redirect('/about')
})

router.get('/menu', function(req, res, next) {
  res.redirect('/menu')
})

router.get('/parties', function(req, res, next) {
  res.redirect('/parties')
})

router.get('/contact', function(req, res, next) {
  res.redirect('/contact')
})

module.exports = router
