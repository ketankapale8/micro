const express = require('express')
const route = express.Router();
const Users = require('../models/users');
const passport = require('passport')


//register

route.post('/register', async(req, res , next)=>{
    // res.send('registered')
    try{
     const user =  await new Users({
         name : req.body.name,
         email : req.body.email,
         password : req.body.password,
         username : req.body.username
     });
     user.save()
     res.status(200).json('new user registered ')
     res.send('new user reg.')
 
    }catch(err){
        console.log(err)
        res.status(404).json(err)   
    }
})

//login
route.get('/login', async (req , res)=>{
    try{
      await res.send('login successful')
    }catch(err){
        console.log(err)
    }
})

//authentication

route.get('/authentication' , async (req,res)=>{
   await res.send('authenticated')
})


// profile

route.get('/profile' , async (req,res)=>{
    try{
        await res.send('profile')

    }catch(err){
        console.log(err)
    }
})

// validation 

route.get('/validate', async (req,res)=>{
    await res.send('validate')
})


module.exports = route