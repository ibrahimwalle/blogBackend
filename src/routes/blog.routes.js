import { Router } from "express";
import { getBlog, getBlogs, deleteBlog, createBlog, editBlog } from "../controller/blog.controller.js";

const blogRoutes = Router({mergeParams: true});

//Generalized Routes
blogRoutes.route('/')
    .get(getBlogs)
    .post(createBlog);

//ID specific Routes
blogRoutes.route('/:blogId')
    .get(getBlog)
    .put(editBlog)
    .delete(deleteBlog);

export default blogRoutes;