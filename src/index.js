'use strict'

const categories = [
    'Sciences',
    'Monde',
    'Divertisements',
    'Films',
    'Séries',
    'Jeux Vidéos',
    'Automobile',
    'Espace',
    'Technologies',
    'Politique',
    'Social',
    'Juridique'
]

module.exports = {
    validate: (news) => {
        if (news.title && news.body && news.category) {
            if (categories.includes(news.category)) {
                return true
            }
        }
        return false
    },
    categories
}
