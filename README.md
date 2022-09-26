# blogBackend
A backend application for a blog website built with NodeJs and express, and powered by a MongoDb noSql database


DOCUMENTATION:

Get Blogs:

  Request Type: GET
  
  URI: http://localhost:4000/getBlogs
  
  Parameters: none
  
  Response:
  
    Type: JSON Array: [...,{
        _id: String,
        category: String,
        image_url: String,
        post_date: String | Date,  
        title: String,
        body: String,
        author: String,
        author_title: String,
        author_image: String
    }]
    
    on Error: Error response, status code 403
    
  
Create Blog:

  Request Type: POST
  
  URI: http://localhost:4000/createBlog
  
  Parameters: {
  
    category: {type: String,  required:true},
    image_url: String,
    post_date: {type: String, default: Date.now}, 
    title: {type: String, required:true},
    body: {type: String, required:true},
    author: {type: String, required:true},
    author_title: String,
    author_image: String
  }
  
  Response:
  
    Saved Blog
    Type: JSON: {
        _id: String,
        category: String,
        image_url: String,
        post_date: String | Date,  
        title: String,
        body: String,
        author: String,
        author_title: String,
        author_image: String
    }
    
    on Error: Error response, status code 403
    
Edit Blog:

  Request Type: PATCH
  
  URI: http://localhost:4000/editBlog
  
  Parameters: {
  
        id: String,
        category: String,
        image_url: String,
        title: String,
        body: String,
        author: String,
        author_title: String,
        author_image: String
    }
    
  Response:
  
    Edited Blog
    Type: JSON: {
        _id: String,
        category: String,
        image_url: String,
        post_date: String | Date,  
        title: String,
        body: String,
        author: String,
        author_title: String,
        author_image: String
    }
    on Error: Error response, status code 403    
    
Delete Blog:

  Request Type: DELETE
  
  URI: http://localhost:4000/deleteBlog
  
  Parameters: {
  
        id: String
    }
    
  Response:
  
    Saved Blog
    Type: JSON && String: {
      acknowlaged: boolean,
      deletedCount: number
    } && "Blog Deleted!" | " Delete Failed! Blog doesn't exist or has already been deleted"
    
    on Error: Error response, status code 403    
