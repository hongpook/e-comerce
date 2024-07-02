const express = require('express');
const router = express.Router();
const BlogController = require('../controller/blogController');

router.post('/blogs', BlogController.createBlog);
router.get('/blogs', BlogController.getAllBlogs);
router.get('/blogs/:id', BlogController.getBlogById);
router.put('/blogs/:id', BlogController.updateBlog);
router.delete('/blogs/:id', BlogController.deleteBlog);

module.exports = router;
