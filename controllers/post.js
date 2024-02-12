const Post = require('../models/post_model')

const getAllPost = async (req, res, next) => {
    console.log('getPosts');
    try{
        const posts = await Post.find()
        res.status(200).send(posts)
    }catch(err){
        err.status(400).send({'error' : 'fail to get posts from DB'})

    }
}
// save new post in the DB  

const addNewPost = async (req, res, next) => {
    console.log(req.body)

    const post = new Post({
        message: req.body.message,
        sender: req.body.sender
    })

    try {

        newPost = await post.save()
        console.log("Post saved in DB:", newPost);
        res.status(200).send(newPost); // Sending the saved post as the response
    } catch (err) {
        console.error("Failed to save post in DB:", err);
        res.status(400).send({
            'status': 'fail',
            'message': err.message
        });
    }
}



module.exports = { getAllPost, addNewPost }