const express = require('express')
const route = express.Router();


//register

route.get('/register', async(req, res , next)=>{
    // res.send('registered')
    try{
     const user =  await new User(req.body);
     user.save()
     res.status(200).json('new user registered ')
 
    }catch(err){
        console.log(err)
        res.status(404).json(err)
    }
})

//login
route.put('/login', (req , res)=>{
    try{

    }catch(err){
        console.log(err)
    }
})



module.exports = route