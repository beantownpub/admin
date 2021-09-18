var express = require('express')
var router = express.Router()
var config = require('./config.json')
const axios = require('axios')

const FOOD_API = process.env.FOOD_API_URL
const API_USER = process.env.API_USER
const API_PW = process.env.API_PW
const AUTH = 'Basic ' + Buffer.from(API_USER + ':' + API_PW).toString('base64')
const HEADERS = {'Content-Type': 'application/json', 'Authorization': AUTH}

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
  try {
    axios({
      method: 'get',
      url: `${FOOD_API}/v1/categories`,
      headers: HEADERS
    })
      .then(response => {
        console.log(response.data)
        if (response.status === 200) {
          res.status(200).json({
            'status': 200,
            'data': response.data
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

router.delete('/categories', function (req, res, next) {
  try {
    const category = req.body.name
    axios({
      method: 'delete',
      url: `${FOOD_API}/v1/categories/${category}`,
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
      url: `${FOOD_API}/v1/categories/${category}`,
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

router.post('/items', function (req, res, next) {
  console.log(req.body)
  try {
    const item = req.body
    console.log(`POST request to create\n${item}`)
    axios({
      method: 'post',
      url: `${FOOD_API}/v1/menu/item`,
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
      url: `${FOOD_API}/v1/categories/${category}`,
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
