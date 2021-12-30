var express = require('express')
var router = express.Router()
var config = require('./config.json')
const request = require('../utils/requests')

const HOST = process.env.MENU_API_HOST
const PROTOCOL = process.env.MENU_API_PROTOCOL

function makeRequest(apiUrl, method, res) {
  try {
    request(apiUrl, method, res)
  } catch(error) {
    console.log('Request Error: ' + error)
    res.status(500).json({
      'title': 'Request Failure',
      'status': 500
    })
  }
}

router.get('/dashboard', function (req, res, next) {
  var sections = config.sections
  console.log('DASHBOARD | GET | Session Keys: ' + Object.keys(req.session))
  console.log('DASHBOARD | GET | Logged In: ' + req.session.loggedin)
	if (req.session.loggedin) {
    const dashboard = sections.dashboard
    res.render(dashboard.template, dashboard.metadata)
    res.end()
	} else {
    console.log('DASHBOARD | GET | Not logged in')
		const home = sections.home
    res.render(home.template, home.metadata)
  }
})

// router.delete('/items/:location', function (req, res, next) {
//   const location = req.params['location']
//   const apiUrl = `${PROTOCOL}://${HOST}/v3/menu/products?location=${location}&sku=${req.body['sku']}`
//   console.log(`ITEMS | DELETE | Location: ${location} | Path: ${req.path}`)
//   const options = {
//     url: apiUrl,
//     method: 'delete'
//   }
//   makeRequest(options, res)
// })

// router.put('/items/:location', function (req, res, next) {
//   const location = req.params['location']
//   const apiUrl = `${PROTOCOL}://${HOST}/v3/menu/products?location=${location}`
//   console.log(`ITEMS | PUT | Body: ${req.body} | Path: ${req.path}`)
//   const options = {
//     url: apiUrl,
//     method: 'put',
//     data: req.body
//   }
//   makeRequest(options, res)
// })

router.post('/items/:location', function (req, res, next) {
  const location = req.params['location']
  const apiUrl = `${PROTOCOL}://${HOST}/v3/menu/products?location=${location}`
  console.log(`ITEMS | POST | Location: ${location} | Path: ${req.path}`)
  const options = {
    url: apiUrl,
    method: 'post',
    data: req.body
  }
  makeRequest(options, res)
})

router.delete('/:table/:location', function (req, res, next) {
  const table = req.params['table']
  const slug = req.params['slug']
  const location = req.params['location']
  const apiUrl = `${PROTOCOL}://${HOST}/v3/menu/${table}?location=${location}&sku=${req.body['sku']}`
  console.log(`CATEGORIES | DELETE | Location: ${location} | Slug: ${slug} | Path: ${req.path} | Sku: ${req.body['sku']}`)
  const options = {
    url: apiUrl,
    method: 'delete'
  }
  makeRequest(options, res)
})

router.put('/:table/:location', function (req, res, next) {
  const table = req.params['table']
  const location = req.params['location']
  const apiUrl = `${PROTOCOL}://${HOST}/v3/menu/${table}?location=${location}`
  console.log(`CATEGORIES | UPDATE | Table: ${table} | Location: ${location} | Path: ${req.path}`)
  const options = {
    url: apiUrl,
    method: 'put',
    data: req.body
  }
  makeRequest(options, res)
})

router.get('/:table/:location', function (req, res, next) {
  const location = req.params['location']
  const table = req.params['table']
  const apiUrl = `${PROTOCOL}://${HOST}/v3/menu/${table}?location=${location}&with_items=true`
  console.log(`CATEGORIES | GET | Table: ${table} | Location: ${location} | Path: ${req.path}`)
  const options = {
    url: apiUrl,
    method: 'get'
  }
  makeRequest(options, res)
})

router.post('/categories/:location', function (req, res, next) {
  const location = req.params['location']
  const apiUrl = `${PROTOCOL}://${HOST}/v3/menu/categories?location=${location}`
  console.log(`CATEGORIES | POST | Location: ${location} | Path: ${req.path}`)
  const options = {
    url: apiUrl,
    method: 'post',
    data: req.body
  }
  makeRequest(options, res)
})

router.get('/logout', function(req, res, next) {
  console.log(`LOGOUT | User: ${req.session.username} | Path: ${req.path}`)
  // destroy session data
  req.session.loggedin = false
  // req.session = null
  // redirect to homepage
  res.redirect('/')
})

router.get('/:page', function(req, res, next) {
  const page = req.params['page']
  console.log(`CATCHALL | GET | Page: ${page} | Path: ${req.path}`)
  res.redirect(`/${page}`)
})

module.exports = router
