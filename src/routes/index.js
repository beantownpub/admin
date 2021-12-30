var express = require('express')
var router = express.Router()
var config = require('./config.json')
var sections = config.sections
const axios = require('axios')

const MERCH_API = `${process.env.MERCH_API_HOST}:5000`
const HEADERS = {'Content-Type': 'application/json'}

router.use(function (req, res, next) {
  next()
})

router.get('/', function(req, res, next) {
  if (req.session.loggedin) {
    console.log('/home LOGGED IN')
    const home = sections.home
    res.render(home.template, home.metadata)
  } else {
    console.log('/home NOT LOGGED IN')
    const home = sections.home
    res.render(home.template, home.metadata)
  }
})

router.get('/login', function(req, res, next) {
  console.log('GETTING LOGIN PAGE')
  const home = sections.home
  res.render('login', home.metadata)
})

router.get('/index', function(req, res, next) {
  const home = sections.home
  res.render(home.template, home.metadata)
})

router.get('/merch', function (req, res, next) {
	if (req.session.loggedin) {
    console.log('LOGGED IN ' + req.session.username)
    const merch = sections.merch
    res.render(merch.template, merch.metadata)
	} else {
    console.log('NOT LOGGED IN')
		const home = sections.home
    res.redirect('/login')
  }
})



router.get('/beantown', function (req, res, next) {
	if (req.session.loggedin) {
    console.log('/beantown | LOGGED IN | User: ' + req.session.username)
    const food = sections.food
    res.render(food.template, food.metadata)
	} else {
    console.log('/beantown NOT LOGGED IN')
		const home = sections.home
    res.redirect('/login')
  }
})

router.get('/beantown/logout', function(req, res, next) {
  console.log(`/beantown/logout LOGOUT Req: ${req.path}`)
  req.session.loggedin = false
  res.redirect('/')
})

router.get('/beantown/food', function (req, res, next) {
	if (req.session.loggedin) {
    console.log('/food | LOGGED IN | User: ' + req.session.username)
    const food = sections.food
    res.render(food.template, food.metadata)
	} else {
    res.redirect('/login')
  }
})

router.get('/beantown/:section', function(req, res, next) {
  console.log(`/beantown Section: /${req.params['section']}`)
  if (req.session.loggedin) {
    console.log('/beantown/:section | LOGGED IN | User: ' + req.session.username)
    res.redirect('/beantown')
  } else {
    console.log('/beantown:section NOT LOGGED IN')
    res.redirect('/login')
  }
})

router.get('/thehubpub', function (req, res, next) {
	if (req.session.loggedin) {
    console.log('/thehubpub | LOGGED IN | User: ' + req.session.username)
    const food = sections.food
    res.render(food.template, food.metadata)
	} else {
    console.log('/thehubpub NOT LOGGED IN')
		const home = sections.home
    res.redirect('/login')
  }
})

router.get('/thehubpub/logout', function(req, res, next) {
  console.log(`/thehubpub/logout LOGOUT Req: ${req.path}`)
  req.session.loggedin = false
  res.redirect('/')
})

router.get('/thehubpub/food', function (req, res, next) {
	if (req.session.loggedin) {
    console.log('/food | LOGGED IN | User: ' + req.session.username)
    const food = sections.food
    res.render(food.template, food.metadata)
	} else {
    res.redirect('/login')
  }
})

router.get('/thehubpub/:section', function(req, res, next) {
  console.log(`/thehubpub Section: /${req.params['section']}`)
  if (req.session.loggedin) {
    console.log('/thehubpub/:section | LOGGED IN | User: ' + req.session.username)
    res.redirect('/thehubpub')
  } else {
    console.log('/thehubpub:section NOT LOGGED IN')
    res.redirect('/login')
  }
})

router.get('/dashboards', function (req, res, next) {
  console.log('SESSION: ' + Object.keys(req))
  console.log('/dashboards | LOGGED IN | User: ' + req.session.username)
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
          'title': 'Axios Login Failure',
          'status': 401
        })
      })
  } catch(error) {
    console.log('AUTH Error: ' + error)
    res.status(500).json({
      'title': 'AUTH Login Failure',
      'status': 500
    })
  }
})

router.get('/logout', function(req, res, next) {
  console.log(`LOGOUT Req: ${req.path}`)
  // remove the req.user property and clear the login session
  // req.logout()
  // destroy session data
  req.session.loggedin = false
  // req.session = null
  // redirect to homepage
  res.redirect('/')
})

router.get('/healthz', function(req, res, next) {
  console.log(`Req: ${req.path}`)
  res.sendStatus('ok')
})



module.exports = router
