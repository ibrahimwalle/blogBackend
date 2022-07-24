const mongoose = require('mongoose');

//Blog Model
const blogSchema = new mongoose.Schema({
    category: {type: String,  required:true},
    image_url: String,
    post_date: {type: String, default: Date.now}, 
    title: {type: String, required:true},
    body: {type: String, required:true},
    author: {type: String, required:true},
    author_title: String,
    author_image: String
},{collection:'blogs'});

const model = mongoose.model('blogModel', blogSchema);

module.exports = model