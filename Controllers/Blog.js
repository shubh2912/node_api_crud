const blogModel = require('../Models/Blog');

exports.getBlogs = (req, res, next) => {
    console.log('Hi');
    blogModel.find().then(result => {
        console.log(result);
        res.status(200).json({ message: "Blogs Fetched Succesfully", blog: result })
    })
}

exports.getBlogById = (req, res, next) => {
    const blogId = req.params.blogId;
    blogModel.findById(blogId).then(result => {
        res.status(200).json({ message: "Blog Fetched Succesfully", blog: result })
    })
}

exports.addBlog = (req, res, next) => {
    console.log('Hi');
    const blogName = req.body.blogName;
    console.log(req.body.blogName);
    blogModel.save(blogName).then(result => {
        console.log(result);
        res.status(200).json({ message: "Blog Added Succesfully", blog: result })
    }).catch(err => {
        console.log(err)
    })
}


exports.updateBlog = () => {
    const blogId = req.params.blogId;
    const blogName = req.body.blogName;
    blogModel.findById(blogId).then(blog => {
        blog.blogName = blogName;
        return blog.save()
    }).then(result => {
        res.status(200).json({ message: "Blog Updated Succesfully", blog: result })
    })
}

exports.deleteBlog = (req, res, next) => {
    const blogId = req.params.blogId;
    blogModel.findById(blogId).then(blog => {
        return blogModel.findByIdAndRemove(blogId)
    }).then(result => {
        res.status(200).json({ message: "Blog Deleted Succesfully", blog: result })
    })
}