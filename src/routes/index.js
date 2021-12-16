var express = require('express')
var router = express.Router()
var jalVersion = (process.env.JAL_VERSION) ? process.env.JAL_VERSION : 'unset'
var config = require('./config.json')
var sections = config.sections
const axios = require('axios')

const MERCH_API = `${process.env.MERCH_API_HOST}:5000`
const HEADERS = {'Content-Type': 'application/json'}

router.use(function (req, res, next) {
  next()
})

router.get('/', function(req, res, next) {
  const home = sections.home
  res.render(home.template, home.metadata)
})

router.get('/index', function(req, res, next) {
  const home = sections.home
  res.render(home.template, home.metadata)
})

router.get('/merch', function (req, res, next) {
	if (req.session.loggedin) {
    console.log('LOGGED IN')
    const merch = sections.merch
    res.render(merch.template, merch.metadata)
	} else {
    console.log('NOT LOGGED IN')
		const home = sections.home
    res.render(home.template, home.metadata)
  }
})

router.get('/food', function (req, res, next) {
	if (req.session.loggedin) {
    console.log('LOGGED IN')
    const food = sections.food
    res.render(food.template, food.metadata)
	} else {
    console.log('NOT LOGGED IN')
		const home = sections.home
    res.render(home.template, home.metadata)
  }
})

router.get('/dashboard', function (req, res, next) {
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

router.post('/auth', function (req, res, next) {
  const api_url = `${process.env.USERS_API_PROTOCOL}://${process.env.USERS_API_HOST}/v1/auth`
  try {
    axios({
      method: 'post',
      url: api_url,
      data: req.body,
      headers: HEADERS
    })
      .then(response => {
        if (response.status === 200) {
          console.log(`USERS API Status: ${response.status}`)
          req.session.loggedin = true
          req.session.username = req.body.username
          res.status(200).json({
            'status': 200
          })
        } else {
          res.status(401).json({
            'status': 401,
            'message': 'Unauthorized'
          })
        }
        res.end()
      })
      .catch(error => {
        console.error('AXIOS Error: ' + error)
        res.status(401).json({
          'title': 'Login Failure Asshole',
          'status': 401
        })
      })
  } catch(error) {
    console.log('AUTH Error: ' + error)
    res.status(500).json({
      'title': 'Login Failure Asshole',
      'status': 500
    })
  }
})

router.get('/healthz', function(req, res, next) {
  res.status(200)
})



module.exports = router
