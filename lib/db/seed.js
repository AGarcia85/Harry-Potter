const mongoose = require('./connection');
const houseData = require('./houses.json');
const characterData = require('./characters.json');
const House = require('./models/House')
const Character = require('./models/Character')

// const characterData = data.map(item => {
//     const character = {}
//     character._id = item._id
//     character.name = item.name
//     character.region = item.region
//     character.population = item.population
//     return character
// })

House.deleteMany({}).then( () => {
    House.create(houseData).then( (houseReturn) => {
        console.log(houseReturn)
        process.exit()
    })
    .catch( (err) => {
        console.log("You did something wrong and this is why: ", err)
    })
})

Character.deleteMany({}).then( () => {
    Character.create(characterData).then( (characterReturn) => {
        console.log(characterReturn)
        process.exit()
    })
    .catch( (err) => {
        console.log("You did something wrong and this is why: ", err)
    })
})