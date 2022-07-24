const con = require('./connection')()
const Blog = require('./blog')

//Establish connection to database
con.catch(err => {
    console.log(err);
})

//DataBase CRUD Functions
async function createBlog(blog){
    const result = await Blog.create(blog);
    return result;
}
function fetchBlogs(){
    return Blog.find().exec();
}
async function deleteBlog(blog){
    console.log(blog._id);
    const result = await Blog.deleteOne({_id: blog._id});
    console.log(result);
    return result;
}
async function updateBlog(blog){
    const result = await Blog.updateOne({_id: blog._id},blog);
    return result;
}

module.exports = {
    createBlog,
    fetchBlogs,
    deleteBlog,
    updateBlog
}