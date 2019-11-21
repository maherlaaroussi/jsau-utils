'use strict'

const validate = require('../src/index.js')

let news = {title: 'News', category: 'Politique', body: 'Blabla.'}
console.log(validate(news))
