const Characters = require('../models/Characters')

module.exports = {
    index: (req, res) => {
        Characters.find({}).then( (character) => {
            res.json(character)
        })
    }
}