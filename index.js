const express = require('express');
const app = express();
const port = 8082;
const path = require('path')
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const morgan = require('morgan');
const helmet = require('helmet');
const auth = require('../micro/routes/auth')


mongoose.connect(process.env.MONGOURI , {useNewUrlParser : true}, ()=>{
    console.log('mongodb connected')
});

//middleware
app.use(express.json());
app.use(helmet());
app.use(morgan());



//routes
app.use('/auth' , auth)

//static folder for joining 
app.use(express.static(path.join(__dirname, 'public')))



app.listen(port ,()=>{ 
console.log(`backend server running on ${port}..`)
})
