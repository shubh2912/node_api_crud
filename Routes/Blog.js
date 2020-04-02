var express = require('express');

var blogController = require('../Controllers/Blog');

const router = express.Router();

router.get('/getblogs', blogController.getBlogs);
router.get('/getblog/:blogId', blogController.getBlogById);
router.put('/updateblog/:blogId', blogController.updateBlog);
router.post('/addblog', blogController.addBlog);
router.delete('/deleteblog/:blogId', blogController.deleteBlog);

module.exports = router;
