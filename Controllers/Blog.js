const Blog = require('../Models/Blog');

exports.getBlogs = (req, res, next) => {
    Blog.find().then(result => {
        console.log(result);
        res.status(200).json({ message: "Blogs Fetched Succesfully", blog: result })
    })
}

exports.getBlogById = (req, res, next) => {
    const blogId = req.params.blogId;
    Blog.findById(blogId).then(result => {
        res.status(200).json({ message: "Blog Fetched Succesfully", blog: result })
    }).catch(err => {
        console.log(err)
    })
}

exports.addBlog = (req, res, next) => {
    const blogData = req.body.blogMessage;
    const blog = new Blog({ blogMessage: blogData })
    blog.save().then(result => {
        console.log(result);
        res.status(201).json({ message: "Blog Added Succesfully", blog: result })
    }).catch(err => {
        console.log(err)
    })
}

exports.updateBlog = (req, res, next) => {
    const blogId = req.params.blogId;
    const blogData = req.body.blogMessage;
    Blog.findById(blogId).then(blog => {
        blog.blogMessage = blogData;
        return blog.save()
    }).then(result => {
        res.status(200).json({ message: "Blog Updated Succesfully", blog: result })
    })
}

exports.deleteBlog = (req, res, next) => {
    const blogId = req.params.blogId;
    Blog.findById(blogId).then(blog => {
        return Blog.findByIdAndRemove(blogId)
    }).then(result => {
        res.status(200).json({ message: "Blog Deleted Succesfully", blog: result })
    })
}