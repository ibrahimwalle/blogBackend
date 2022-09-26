import { Response } from "../enum/response.enum.js";

// Response Class for Consistency 
export class HttpResponse {
    timestamp;
    constructor(statusCode, httpStatus, message, data = {}){
        this.timestamp = new Date().toLocaleString();
        if( Object.values(Response.Code).indexOf(statusCode) > -1 ){
            this.statusCode = statusCode;
        }else{
            throw new Error('Wrong response code.. Check Response enums!');
        }
        if( Object.values(Response.Status).indexOf(httpStatus) > -1 ){
            this.httpStatus = httpStatus;
        }else{
            throw new Error('Wrong response status.. Check Response enums!');
        }
        this.message = message;
        this.data = data;
    }
}