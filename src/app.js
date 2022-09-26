import express from "express";
import ip from "ip";
import cors from "cors";
import { Response } from "./enum/response.enum.js";
import { HttpResponse } from "./domain/response.js";
import blogRoutes from "./routes/blog.routes.js";

export class App {
    app;
    APPLICATION_RUNNING = 'application is running on: ';
    ROUTE_NOT_FOUND = 'Route does not exist on this server';

    //App initialization
    constructor(port = process.env.SERVER_PORT || 3000){
        this.port = port;
        this.app = express();
        this.middleware();
        this.routes();
    }

    listen(){
        this.app.listen(this.port);
        console.info(`${this.APPLICATION_RUNNING} ${ip.address()}:${this.port}`);
    }

    middleware(){
        this.app.use(cors({origin: '*'}));
        this.app.use(express.json());
    }

    routes(){
        this.app.use('/blogs', blogRoutes); //Blogs Router
        this.app.get('/', (_req,res) => res.status(Response.Code.OK)
            .send(new HttpResponse(Response.Code.OK, Response.Status.OK, "Welcome to The Blog API v2")));
        this.app.all('*', (_req,res) => res.status(Response.Code.NOT_FOUND)
            .send(new HttpResponse(Response.Code.NOT_FOUND, Response.Status.NOT_FOUND, this.ROUTE_NOT_FOUND)));
    }
}