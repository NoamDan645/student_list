const express = require('express')
const app = express()
const dotenv = require('dotenv').config()
//const port = process.env.PORT || 3000;

const mongoose = require('mongoose')
mongoose.connect(process.env.DATABASE_URL,{useNewUrlParser:true})
const db = mongoose.connection
db.on('error',error=>{console.error(error)})
db.once('open',()=>console.log('connected to mongo'))

//mongoose.connect(process.env.DATABASE_URL,{useNewUrlParser : True})
const postRouter = require('./routes/post_route.js')
app.use('/post',postRouter)

app.listen(process.env.PORT, (error) => {
    if (error) {
        console.error('Error starting the server:', error);
    } else {
        console.log('Server started successfully');
    }
});
