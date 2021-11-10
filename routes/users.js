const express = require('express');
const route = express.Router();
const Users = require('../models/users');
const bcrypt =require('bcryptjs');

// Update User

route.put("/:id" , async (req , res)=>{
    if(req.body.userId === req.params.id || req.user.isAdmin){

        if(req.body.password){
            try{
                const salt = await bcrypt.genSalt(10);
                req.body.password = await bcrypt.hash(req.body.password , salt);
            }catch(err){
                console.log(err)
            }
        }
        try{
            const user =  await Users.findByIdAndUpdate(req.params.id, 
                {$set:req.body});
            res.status(200).json({'user info updated' : user});


        }catch(err){
            console.log(err)
        }

    }else{
        return res.status(403).json('you can only update your account')
    }

})


//delete user
route.delete('/:id' , async (req,res)=>{
    try{
        if(req.body.userId ===  req.params.id){
            await Users.deleteOne({_id: req.params.id});
            res.status(200).json('user deleted');
        }

    }catch(err){
        console.log(err)
    }
})

module.exports = route;

