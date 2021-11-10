const express = require('express')
const route = express.Router();
const Users = require('../models/users')
const bcrypt = require('bcryptjs')

//Register
route.post('/register',async  (req, res)=>{

    const salt = bcrypt.genSalt(10);
    const hashedPass = bcrypt.hash(req.body.password,salt)
    try{
        const user =await new Users({
            name : req.body.name,
            password : hashedPass,
            username : req.body.username,
            email : req.body.email,
        })

        user.save();
        res.status(200).json({'user registered' : user})
    }catch(err){
        console.log(err)
    }
})


//login

route.post('/login' , async (req , res)=>{

    try{
    const user = await Users.findOne(req.body.username);
    const validatePass = bcrypt.compare(req.body.password , user.password);

    if(user && validatePass){
        res.status(200).json('login successful')
    }else{
        console.log(err)
    }
}catch(err){
    console.log(err)
}
})

module.exports = route;