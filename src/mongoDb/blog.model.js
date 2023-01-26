import mongoose from 'mongoose';
const { Schema } = mongoose;

//Blog Model
const blogSchema = new Schema({
    title: {type: String, required:true},
    body: {type: String, required:true},
    category: {type: String, required:true, default: 'Other'},
    author: {type: String, required:true},
    authorTitle: {type: String, default: 'Author'},
    authorImg: {type: String, default: 'https://picsum.photos/200/200'},
    imgUrl: {type: String, default: 'https://picsum.photos/3000/2000'},
    postdate: {type: String, default: new Date().toLocaleString()}
},{collection:'blogs'});

const BlogModel = mongoose.model('Blog', blogSchema);

export default BlogModel;