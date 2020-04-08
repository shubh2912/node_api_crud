const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const BlogSchema = new Schema({
    blogMessage: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Blog', BlogSchema);