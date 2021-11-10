const express = require('express');
const Userroute = express.Router();
const Users = require('../models/users');
const bcrypt =require('bcryptjs');

// Update User

Userroute.put('auth/users/:id' , async (req , res)=>{
    if(req.body.userId===req.params.id){

        if(req.body.password){
            try{
                const salt = await bcrypt.genSalt(10);
                req.body.password = await bcrypt.hash(req.body.password , salt);
            }catch(err){
                res.status(403).json(err)
            }
        }
        try{
            const user = await Users.findbyIdAndUpdate(req.params.id, {$set:req.body});
            res.status(200).json('user info updated');


        }catch(err){
            console.log(err)
        }

    }else{
        return res.status(403).json('you can only update your account')
    }

})

module.exports = Userroute;

