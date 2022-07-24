const app = require('express')();
const db = require('./src/mongoDb');

//Routes:
//get Blogs
app.get('/getBlogs',async (req,res)=>{
    try {
        const response = await db.fetchBlogs();
        res.json(response)            
    } catch (error) {
        res.send(error);
        res.sendStatus(403);
    }
});

//Create New Blog
app.post('/createBlog',async (req,res)=>{
    let blog = {
        category: req.query.category,
        image_url: req.query.image_url,
        title: req.query.title,
        body: req.query.body,
        author: req.query.author,
        author_title: req.query.author_title,
    };
    try {
        const response = await db.createBlog(blog);
        res.json(response);        
    } catch (error) {
        res.send(error);
        res.sendStatus(403);
    }
});

//Edit Blog
app.patch('/editBlog',async (req,res)=>{
    let blog = {
        _id: req.query.id,
        category: req.query.category,
        image_url: req.query.image_url,
        title: req.query.title,
        body: req.query.body,
        author: req.query.author,
        author_title: req.query.author_title,
    }
    try {
        const response = await db.updateBlog(blog);
        res.json(response);   
    } catch (error) {
        res.send(error);
        res.sendStatus(403);
    }
});

//Delete Blog
app.delete('/deleteBlog',async (req,res)=>{
    let blog = {
        _id: req.query.id,
    }
    try {
        const response = await db.deleteBlog(blog);
        if (response.deletedCount == 1) {
            res.send(response,"Blog Deleted!");
        }else{
            res.send(response," Delete Failed! Blog doesn't exist or has already been deleted");
        }        
    } catch (error) {
        res.send(error);
        res.sendStatus(403);
    }
});    

app.listen(4000);