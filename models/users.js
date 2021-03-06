const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

//Users Schema

const Users = new mongoose.Schema({
    name : {
        type : String,
        // required: true,
    },

    username : {
        type : String,
        unique:true

    },
    email : {
        type : String,
        // required: true,
        unique:true
    },

    profilePicture : {
        type: String,
        default:""

    },
    password : {
        type : String,
        required : true,
        
    },

    isAdmin :{
         type: Boolean,
         default : false
    },

    position :{
        type: String
    },

    salary : {
        type : Number
    },

    jobtitle:{
        type : String,
    },

    jobtype:{
        type: String,
    }

}, 
{timestamps : true}
)


module.exports = mongoose.model('Users' , Users)
