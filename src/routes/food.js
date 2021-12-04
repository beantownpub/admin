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
  console.log('SESSION: ' + Object.keys(req.session))
  console.log('Logged In: ' + req.session.loggedin)
	if (req.session.loggedin) {
    console.log('LOGGED IN')
    const dashboard = sections.dashboard
    res.render(dashboard.template, dashboard.metadata)
    res.end()
	} else {
    console.log('NOT LOGGED IN')
		const home = sections.home
    res.render(home.template, home.metadata)
  }
})

router.get('/categories', function (req, res, next) {
  const apiUrl = `${PROTOCOL}://${HOST}/v1/categories`
  const options = {
    url: apiUrl,
    method: 'get'
  }
  makeRequest(options, res)
})

router.delete('/categories/:slug', function (req, res, next) {
  const slug = req.params['slug']
  const apiUrl = `${PROTOCOL}://${HOST}/v1/categories/${slug}`
  const options = {
    url: apiUrl,
    method: 'delete'
  }
  makeRequest(options, res)
})

router.delete('/items/:slug', function (req, res, next) {
  const slug = req.params['slug']
  const apiUrl = `${PROTOCOL}://${HOST}/v1/menu/${slug}`
  const options = {
    url: apiUrl,
    method: 'delete'
  }
  makeRequest(options, res)
})

router.put('/items/:slug', function (req, res, next) {
  const slug = req.params['slug']
  const apiUrl = `${PROTOCOL}://${HOST}/v1/menu/${slug}`
  const options = {
    url: apiUrl,
    method: 'put',
    data: req.body
  }
  makeRequest(options, res)
})

router.post('/items/:slug', function (req, res, next) {
  const slug = req.params['slug']
  const apiUrl = `${PROTOCOL}://${HOST}/v1/menu/${slug}`
  const options = {
    url: apiUrl,
    method: 'post',
    data: req.body
  }
  makeRequest(options, res)
})

router.post('/categories/:slug', function (req, res, next) {
  const slug = req.params['slug']
  const apiUrl = `${PROTOCOL}://${HOST}/v1/categories/${slug}`
  const options = {
    url: apiUrl,
    method: 'post',
    data: req.body
  }
  makeRequest(options, res)
})

router.post('/:menuObjectType', function (req, res, next) {
  const apiUrl = `${PROTOCOL}://${HOST}/v1/menu/${req.params['menuObjectType']}`
  const options = {
    url: apiUrl,
    method: 'post',
    data: req.body
  }
  makeRequest(options, res)
})

router.get('/:page', function(req, res, next) {
  res.redirect(`/${req.params['page']}`)
})

module.exports = router
