var mongoose = require('mongoose')

var registerSchema = new mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type: String,
    },
    password:{
        type:String
    }
})

module.exports = mongoose.model('register',registerSchema)