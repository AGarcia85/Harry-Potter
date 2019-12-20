const mongoose = require('../connection');

const Schema = mongoose.Schema

const HouseSchema = new Schema({
    _id: String,
    name: String,
    mascot: String,
    headOfHouse: String,
    houseGhost: String,
    founder: String,
    school: String,
    members: [String],
    values: [String],
    colors: [String]
})

const House = mongoose.model('House', HouseSchema)

module.exports - House