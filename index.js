const express = require('express');
const app = express();
const port = 8080;
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const morgan = require('morgan');
const helmet = require('helmet');
const users = require('./routes/users')


mongoose.connect(process.env.MONGOURI , {useNewUrlParser : true}, ()=>{
    console.log('mongodb connected')
});

//middleware
app.use(express.json());
app.use(helmet());
app.use(morgan());


//routes
app.use('/users' , users);


//running app
app.get('/', (req,res)=>{
    res.send('app connected on default pagess')

})

app.listen(port ,()=>{ 
console.log(`backend server running on ${port}..`)
})
