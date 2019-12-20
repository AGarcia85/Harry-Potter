const mongoose = require('mongoose');

const mongoURL = "mongodb://localhost/harry-potter"

mongoose.Promise = Promise

mongoose.connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then( feedback => console.log("We are Connected"))
.catch( err => console.log("You messed up and this is why: ", err))

module.exports = mongoose