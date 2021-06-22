const express = require("express");
const router = express.Router();
const Post = require("../models/Post");

//GET ALL POSTS
router.get("/", async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (error) {
    res.json(error);
  }
});

//GET SPECIFIC POST
router.get("/:postId", async (req, res) => {
  try {
    const post = await Post.findById(req.params.postId);
    res.json(post);
  } catch (error) {
    res.json(error);
  }
});

// Create New Post

router.post("/", async (req, res) => {
  console.log(req.body);

  const post = new Post({
    title: req.body.title,
    content: req.body.content,
    author: req.body.author,
    tags: req.body.tags,
    url: req.body.url,
  });
  try {
    const savedPost = post.save();
    res.json(savedPost);
  } catch (error) {
    res.json(error);
  }
});

// UPDATE POST
router.patch("/:postId", async (req, res) => {
  console.log(req.body);
  console.log(req.body.postId);

  try {
    const updatedPost = await Post.updateOne(
      { _id: req.params.postId },
      {
        $set: {
          title: req.body.title,
          content: req.body.content,
          author: req.body.author,
          tags: req.body.tags,
          url: req.body.url,
        },
      }
    );
    res.json(updatedPost);
  } catch (error) {
    res.json(error);
  }
});

// Delete Posts
router.delete("/:postId", async (req, res) => {
  console.log(req.params.postId);

  try {
    const deletedPost = await Post.deleteOne({ _id: req.params.postId });
    res.json(deletedPost);
  } catch (error) {
    res.json(error);
  }
});

module.exports = router;
