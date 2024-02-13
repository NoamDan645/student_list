const express = require('express')
const router = express.Router()
const post = require('../controllers/post.js')

// option 1
// router.get('/',(req,res,next)=>{
//     post.getAllPost(req,res,next)
// })

// router.post('/',(req,res,next)=>{
//     post.addNewPost(req,res,next)
// })
// option 2


router.get('/',post.getAllPost)
router.get('/:id',post.getPostById)
router.post('/',post.addNewPost)
module.exports = router
