import mongoose from 'mongoose';
import { mongoConfig } from '../config/mongo.config.js';

export const connection = async () =>{
    
    //Connection to Database and exception handling
    try {
        await mongoose.connect(mongoConfig.uri ,{
            user: mongoConfig.user,
            pass: mongoConfig.pass,
            dbName: mongoConfig.dbName});        
    } catch (error) {
        console.log(error);
        throw new Error("Connection to database failed!");
    }   

}