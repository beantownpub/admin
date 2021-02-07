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
  try {
    axios({
      method: 'post',
      url: `http://${process.env.AUTH_API_HOST}:5045/v1/auth`,
      data: req.body,
      headers: HEADERS
    })
      .then(response => {
        if (response.status === 200) {
          console.log(`AUTH API Status: ${response.status}`)
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

router.get('/categories', function (req, res, next) {
  try {
    axios({
      method: 'get',
      url: `http://${process.env.MERCH_API_HOST}:5000/v1/categories`,
      headers: HEADERS
    })
      .then(response => {
        if (response.status === 200) {
          res.status(200).json({
            'status': 200,
            'data': response.data
          })
        } else {
          res.status(500).json({
            'status': 500,
            'message': 'Merch API Category Error'
          })
        }
        res.end()
      })
      .catch(error => {
        console.error('AXIOS Error: ' + error)
        res.status(500).json({
          'title': 'Merch Category Failure',
          'status': 500
        })
      })
  } catch(error) {
    console.log('AUTH Error: ' + error)
    res.status(500).json({
      'title': 'Merch Category Failure',
      'status': 500
    })
  }
})

router.delete('/categories', function (req, res, next) {
  try {
    const category = req.body.name
    axios({
      method: 'delete',
      url: `http://${MERCH_API}/v1/categories/${category}`,
    })
      .then(response => {
        if (response.status === 204) {
          res.status(200).json({
            'status': 200,
          })
        } else {
          res.status(500).json({
            'status': 500,
            'message': 'Merch API Category Error'
          })
        }
        res.end()
      })
      .catch(error => {
        console.error('AXIOS Error: ' + error)
        res.status(500).json({
          'title': 'Merch Category Failure',
          'status': 500
        })
      })
  } catch(error) {
    console.log('AUTH Error: ' + error)
    res.status(500).json({
      'title': 'Merch Category Failure',
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
      url: `http://${MERCH_API}/v1/categories/${category}`,
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
            'message': 'Merch API Category Error'
          })
        }
        res.end()
      })
      .catch(error => {
        console.error('AXIOS Error: ' + error)
        res.status(500).json({
          'title': 'Merch Category Failure',
          'status': 500
        })
      })
  } catch(error) {
    console.log('AUTH Error: ' + error)
    res.status(500).json({
      'title': 'Merch Category Failure',
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
      url: `http://${MERCH_API}/v1/categories/${category}`,
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
            'message': 'Merch API Category Error'
          })
        }
        res.end()
      })
      .catch(error => {
        console.error('AXIOS Error: ' + error)
        res.status(500).json({
          'title': 'Merch Category Failure',
          'status': 500
        })
      })
  } catch(error) {
    console.log('AUTH Error: ' + error)
    res.status(500).json({
      'title': 'Merch Category Failure',
      'status': 500
    })
  }
})

module.exports = router
