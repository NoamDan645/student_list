

const getAllPost = (req,res,next)=>{
    res.send('get all posts')
}

const addNewPost = (req,res,next)=>{
    console.log(req.body) 
    res.send(req.body)
}



module.exports = {getAllPost,addNewPost}