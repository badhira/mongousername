//Accessing  Mongoose packege
const mongoose = require('mongoose');

//Database connection
mongoose.connect('mongodb://localhost:27017/csp');


//Schema defnition
const Schema = mongoose.Schema;


const NameSchema = new Schema({
    name: {
        type: String,
        required: true
    }
})


// model creation
var NAME_DATA = mongoose.model('NameTest', NameSchema);

module.exports = NAME_DATA;