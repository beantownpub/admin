const axios = require('axios')
const authHeaders = require('./auth')

const OK_RESPONSES = Array.from({length: 300 - 200}, (v, k) => k + 200)

const OPTIONS = {
    method: '',
    headers: authHeaders,
    url: ''
}

const RESPONSES = {
    apiError: {
        'status': 500,
        'message': 'Menu API Error'
    },
    axiosError: {
        'status': 500,
        'message': 'Axios Error'
    },
    authError: {
        'status': 500,
        'message': 'Auth Failure'
    }
}

function makeRequest(options, res) {
    authHeaders['Content-Type'] = 'application/json'
    options.headers = authHeaders
    console.log(`makeRequest | METHOD: ${options.method} | URL | ${options.url}`)
    try {
        axios(options)
        .then(response => {
            console.log(`makeRequest | Response: ${response.status}`)
            if (OK_RESPONSES.includes(response.status)) {
                res.status(200).json({'status': 200, 'data': response.data})
            } else {
                res.status(500).json(RESPONSES.apiError)
            }
            res.end()
        })
        .catch(error => {
            console.error('AXIOS Error: ' + error)
            res.status(500).json(RESPONSES.axiosError)
        })
    } catch(error) {
        console.log('AUTH Error: ' + error)
        res.status(500).json(RESPONSES.authError)
    }
}

module.exports = makeRequest
