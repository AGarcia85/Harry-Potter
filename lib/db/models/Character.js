const mongoose = require('../connection');

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

const Character = mongoose.model('Character', CharacterSchema)

module.exports = Character