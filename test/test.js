'use strict'

const jsau = require('../src/index.js')

let news = {title: 'News', category: 'Politique', body: 'Blabla.'}
console.log(jsau.validate(news))
console.log(jsau.categories)
