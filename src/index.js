'use strict'

// TODO: Analyse news and categorie

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

module.exports = (news) => {
    if (news.title && news.body && news.category) {
        if (categories.includes(news.category)) {
            return true
        }
    }
    return false
}
