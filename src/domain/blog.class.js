
// Blog Class for Consistency
//Used mainly in POST and PUT requests
//ID is passed as request param 
export class Blog {
    
    constructor( title, body, category, author, authorTitle, authorImg, imgUrl){
        // this.id = id;
        this.title = title;
        this.body = body;
        this.category = category;
        this.author = author,
        this.authorTitle = authorTitle;
        this.authorImg = authorImg;
        this.imgUrl = imgUrl;
    }
}