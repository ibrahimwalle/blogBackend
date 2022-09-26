import { HttpResponse } from "../domain/response.js";
import { Response } from "../enum/response.enum.js";
import BlogModel from "../mongoDb/blog.model.js";
import { Blog } from '../domain/blog.class.js';
import { connection } from "../mongoDb/connection.js";

//Get All Blogs
export const getBlogs = async (req, res) => {
    console.info(`[${new Date().toLocaleString()}] Incoming ${req.method}${req.originalUrl} Request from ${req.rawHeaders[0]} ${req.rawHeaders[1]}`) //Logging Request details for debugging
    try {
        const con = await connection(); //Connection
        const result = await BlogModel.find(); //Query
        return res.status(Response.Code.OK) //Handling response
            .send(new HttpResponse(
                Response.Code.OK, 
                Response.Status.OK, 
                "Blogs retrieved!", 
                result));
    } catch (error) {
        console.log(error); //Handling Errors
        return res.status(Response.Code.INTERNAL_SERVER_ERROR)
            .send(new HttpResponse(
                Response.Code.INTERNAL_SERVER_ERROR, 
                Response.Status.INTERNAL_SERVER_ERROR, 
                "An error has occurred!"));
    }
}

//Get Blog by ID
export const getBlog = async (req, res) => {
    console.info(`[${new Date().toLocaleString()}] Incoming ${req.method}${req.originalUrl} Request from ${req.rawHeaders[0]} ${req.rawHeaders[1]}`)
    try {
        const con = await connection();
        const result = await BlogModel.findOne({_id : req.params.blogId});
        return res.status(Response.Code.OK)
            .send(new HttpResponse(
                Response.Code.OK, 
                Response.Status.OK, 
                `Blog ${req.params.blogId} retrieved!`, 
                result));
    } catch (error) {
        console.log(error);
        return res.status(Response.Code.INTERNAL_SERVER_ERROR)
            .send(new HttpResponse(
                Response.Code.INTERNAL_SERVER_ERROR, 
                Response.Status.INTERNAL_SERVER_ERROR, 
                "An error has occurred! or Blog does not exist!"));
    }
}

//Delete Blog by ID
export const deleteBlog = async (req, res) => {
    console.info(`[${new Date().toLocaleString()}] Incoming ${req.method}${req.originalUrl} Request from ${req.rawHeaders[0]} ${req.rawHeaders[1]}`)
    try {
        const con = await connection();
        const result = await BlogModel.findOneAndRemove({_id : req.params.blogId});
        return res.status(Response.Code.OK)
            .send(new HttpResponse(
                Response.Code.OK, 
                Response.Status.OK, 
                `Blog ${req.params.blogId} has been Deleted!`));
    } catch (error) {
        console.log(error);
        return res.status(Response.Code.INTERNAL_SERVER_ERROR)
            .send(new HttpResponse(
                Response.Code.INTERNAL_SERVER_ERROR, 
                Response.Status.INTERNAL_SERVER_ERROR, 
                "An error has occurred! or Blog does not exist!"));
    }
}

//Create Blog 
export const createBlog = async (req, res) => {
    console.info(`[${new Date().toLocaleString()}] Incoming ${req.method}${req.originalUrl} Request from ${req.rawHeaders[0]} ${req.rawHeaders[1]}`)
    let newBlog = new Blog(req.query.title, req.query.body, req.query.category, req.query.author, req.query.authorTitle, req.query.authorImg, req.query.imgUrl);
    // console.log(`query: ${JSON.stringify(req.query)}`);
    try {
        const con = await connection();
        const result = await BlogModel.create(newBlog);
        return res.status(Response.Code.CREATED)
            .send(new HttpResponse(
                Response.Code.CREATED, 
                Response.Status.CREATED, 
                `A new Blog has been Created!`,
                result));
    } catch (error) {
        console.log(error);
        return res.status(Response.Code.INTERNAL_SERVER_ERROR)
            .send(new HttpResponse(
                Response.Code.INTERNAL_SERVER_ERROR, 
                Response.Status.INTERNAL_SERVER_ERROR, 
                "An error has occurred!"));
    }
}

//Edit Blog 
export const editBlog = async (req, res) => {
    console.info(`[${new Date().toLocaleString()}] Incoming ${req.method}${req.originalUrl} Request from ${req.rawHeaders[0]} ${req.rawHeaders[1]}`)
    let newBlog = new Blog(req.query.title, req.query.body, req.query.category, req.query.author, req.query.authorTitle, req.query.authorImg, req.query.imgUrl);
    // console.log(`query: ${JSON.stringify(req.query)}, 'params': ${JSON.stringify(req.query)}`);
    try {
        const con = await connection();
        const result = await BlogModel.findByIdAndUpdate(req.params.blogId, newBlog);
        return res.status(Response.Code.CREATED)
            .send(new HttpResponse(
                Response.Code.CREATED, 
                Response.Status.CREATED, 
                `Blog ${req.params.blogId} has been Updated!`,
                result));
    } catch (error) {
        console.log(error);
        return res.status(Response.Code.INTERNAL_SERVER_ERROR)
            .send(new HttpResponse(
                Response.Code.INTERNAL_SERVER_ERROR, 
                Response.Status.INTERNAL_SERVER_ERROR, 
                "An error has occurred! or Blog does not exist"));
    }
} 