const express = require("express");
const router = express.Router();


//import controller
const { likePost} = require("../controllers/LikeController");
const {createComment} = require("../controllers/CommentController");
const {createPost, getAllPosts} = require("../controllers/PostController");



// mapping create  
router.post("/comment/create", createComment )
router.post("/posts/create", createPost)
router.get("/posts", getAllPosts)
router.post("/likes/like", likePost)


//export
module.exports = router;

