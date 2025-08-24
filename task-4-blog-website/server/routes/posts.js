const express = require('express');
const router = express.Router();
const BlogPost = require('../models/BlogPost');
const { authMiddleware, adminMiddleware } = require('../middleware/authMiddleware');

router.get('/', async (req, res) => {
  try {
    const posts = await BlogPost.find().sort({ createdAt: -1 });
    res.json(posts);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

router.get('/:id', async (req, res) => {
  try {
    const post = await BlogPost.findById(req.params.id);
    if (!post) {
      return res.status(404).json({ msg: 'Post not found' });
    }
    res.json(post);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

router.post('/', [authMiddleware, adminMiddleware], async (req, res) => {
  try {
    const newPost = new BlogPost({
      title: req.body.title,
      content: req.body.content,
      slug: req.body.slug,
      author: req.user.id,
      tags: req.body.tags,
    });

    const post = await newPost.save();
    res.json(post);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

router.put('/:id', [authMiddleware, adminMiddleware], async (req, res) => {
  const { title, content, slug, tags } = req.body;
  const postFields = { title, content, slug, tags };

  try {
    let post = await BlogPost.findById(req.params.id);
    if (!post) {
      return res.status(404).json({ msg: 'Post not found' });
    }

    post = await BlogPost.findByIdAndUpdate(
      req.params.id,
      { $set: postFields },
      { new: true }
    );

    res.json(post);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

router.delete('/:id', [authMiddleware, adminMiddleware], async (req, res) => {
  try {
    const post = await BlogPost.findById(req.params.id);
    if (!post) {
      return res.status(404).json({ msg: 'Post not found' });
    }

    await BlogPost.findByIdAndDelete(req.params.id);

    res.json({ msg: 'Post removed' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;