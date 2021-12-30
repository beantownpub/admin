const config = require('./config.json')

const getOptions = {
    method: 'GET',
    headers: {'Content-Type': 'application/json'}
}

function makeSingular(name) {
    return name.replace(/ees$/, 'ee').replace(/es$/, '').replace(/s$/, '')
}

module.exports = { config, getOptions, makeSingular }
