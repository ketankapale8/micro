const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

//Users Schema

const Users = mongoose.Schema({
    name : {
        type : String,
    },

    username : {
        type : String,

    },
    email : {
        type : String,
        required: true
    },
    password : {
        type : String,
        required : true 
    },
})

module.exports = mongoose.model('Users' , Users)
