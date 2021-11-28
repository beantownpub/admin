var express = require('express')
var router = express.Router()
var config = require('./config.json')
const axios = require('axios')
const request = require('../utils/requests')

const HOST = process.env.MENU_API_HOST
const PROTOCOL = process.env.MENU_API_PROTOCOL
// const MENU_API = process.env.FOOD_API_URL
const API_USERNAME = process.env.API_USERNAME
const API_PASSWORD = process.env.API_PASSWORD
const AUTH = 'Basic ' + Buffer.from(API_USERNAME + ':' + API_PASSWORD).toString('base64')
const HEADERS = {'Content-Type': 'application/json', 'Authorization': AUTH}

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

router.post('/items', function (req, res, next) {
  console.log('POST Body:')
  for (const item of Object.keys(req.body)) {
    console.log(`${item}: ${req.body[item]}`)
  }
  const apiUrl = `${PROTOCOL}://${HOST}/v1/menu/items`
  const options = {
    url: apiUrl,
    method: 'post',
    data: req.body
  }
  makeRequest(options, res)
})

router.delete('/categories', function (req, res, next) {
  try {
    const category = req.body.name
    axios({
      method: 'delete',
      url: `${PROTOCOL}://${HOST}/v1/categories/${category}`,
    })
      .then(response => {
        if (response.status === 204) {
          res.status(200).json({
            'status': 200,
          })
        } else {
          res.status(500).json({
            'status': 500,
            'message': 'Food API Category Error'
          })
        }
        res.end()
      })
      .catch(error => {
        console.error('AXIOS Error: ' + error)
        res.status(500).json({
          'title': 'Food Category Failure',
          'status': 500
        })
      })
  } catch(error) {
    console.log('AUTH Error: ' + error)
    res.status(500).json({
      'title': 'Food Category Failure',
      'status': 500
    })
  }
})

router.post('/categories', function (req, res, next) {
  console.log(req.body)
  try {
    const category = req.body.name
    axios({
      method: 'post',
      url: `${PROTOCOL}://${HOST}/v1/categories/${category}`,
      data: req.body,
      headers: HEADERS
    })
      .then(response => {
        if (response.status === 201) {
          res.status(200).json({
            'status': 200,
          })
        } else {
          res.status(500).json({
            'status': 500,
            'message': 'Food API Category Error'
          })
        }
        res.end()
      })
      .catch(error => {
        console.error('AXIOS Error: ' + error)
        res.status(500).json({
          'title': 'Food Category Failure',
          'status': 500
        })
      })
  } catch(error) {
    console.log('AUTH Error: ' + error)
    res.status(500).json({
      'title': 'Food Category Failure',
      'status': 500
    })
  }
})

router.post('/legacy/items', function (req, res, next) {
  console.log(req.body)
  try {
    const item = req.body
    console.log(`POST request to create\n${item}`)
    axios({
      method: 'post',
      url: `${PROTOCOL}://${HOST}/v1/menu/item`,
      data: req.body,
      headers: HEADERS
    })
      .then(response => {
        if (response.status === 201) {
          res.status(200).json({
            'status': 200,
          })
        } else {
          res.status(500).json({
            'status': 500,
            'message': 'Food API Item Error'
          })
        }
        res.end()
      })
      .catch(error => {
        console.error('AXIOS Error: ' + error)
        res.status(500).json({
          'title': 'Food Item Failure',
          'status': 500
        })
      })
  } catch(error) {
    console.log('AUTH Error: ' + error)
    res.status(500).json({
      'title': 'Food Item Failure',
      'status': 500
    })
  }
})

router.put('/categories', function (req, res, next) {
  console.log(req.body)
  try {
    const category = req.body.name
    axios({
      method: 'PUT',
      url: `${PROTOCOL}://${HOST}/v1/categories/${category}`,
      data: req.body,
      headers: HEADERS
    })
      .then(response => {
        if (response.status === 204) {
          res.status(200).json({
            'status': 200,
          })
        } else {
          res.status(500).json({
            'status': 500,
            'message': `Food API Error - Status: ${response.status}`
          })
        }
        res.end()
      })
      .catch(error => {
        console.error('AXIOS Error: ' + error)
        res.status(500).json({
          'title': 'Food Category Failure',
          'status': 500,
          'message': error
        })
      })
  } catch(error) {
    console.log('AUTH Error: ' + error)
    res.status(500).json({
      'title': 'Food Category Failure',
      'status': 500
    })
  }
})

// TODO fix routing so these routes aren't needed

router.get('/:page', function(req, res, next) {
  res.redirect(`/${req.params['page']}`)
})

module.exports = router
