const mongoose = require('../connection');
const Character = require('../models/Character')
const Schema = mongoose.Schema

const CharacterSchema = new Schema({
    _id: String,
    name: String,
    role: String,
    house: String,
    school: String,
    ministryOfMagic: Boolean,
    orderOfThePhoenix: Boolean,
    dumbledoresArmy: Boolean,
    deathEater: Boolean,
    bloodStatus: String,
    species: String
})

const HouseSchema = new Schema({
    _id: String,
    name: String,
    mascot: String,
    headOfHouse: String,
    houseGhost: String,
    founder: String,
    school: String,
    members: [{ type: Schema.Types.ObjectId, ref: 'CharacterSchema' }],
    values: [String],
    colors: [String]
})

const House = mongoose.model('House', HouseSchema)
// const Character = mongoose.model('Character', CharacterSchema)

module.exports = House