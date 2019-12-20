const House = require('../models/House')

module.exports = {
    index: (req, res) => {
        House.find({}).then( (house) => {
            res.json(house)
        })
    }
}