const express = require('express')
const app = express()
const dotenv = require('dotenv').config()
//const port = process.env.PORT || 3000;

const postRouter = require('./routes/post_route.js')
app.use('/post',postRouter)

// //קוד שירוץ רק אם מישוה בעתיד יקרא לשרת ויבקש את הרות (השורש)
// app.get('/' , (req,res)=>{
//     res.send("hello")
// })

// app.get('/index1' , (req,res)=>{
//     res.send("indcdcdex1")
// })

// app.get('/index2' , (req,res)=>{
//     res.send("index2 bla ccscscsccs")
// })


//callback function that run in future 


app.listen(process.env.PORT, (error) => {
    if (error) {
        console.error('Error starting the server:', error);
    } else {
        console.log('Server started successfully');
    }
});
