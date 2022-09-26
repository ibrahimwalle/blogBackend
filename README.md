# Blog API v2
Create and serve blogs using Blog API!

Built with NodeJS, ExpressJS, and powered by a MongoDb noSQL database.

## DOCUMENTATION:

### Set Up:

- [ ] Make sure you have NodeJs installed on your machine!
- [ ] Clone the project and run the install command: ```npm install```
- [ ] Set up a mongoDB instance, and configure the mongo.config file accordingly! More details at the bottom of the docs.
- [ ] Start the project by running the command: ```npm start```

## Making Requests: 

The Default URI is 
> http://localhost:3000

You may change the port that the app listens to by supplying your preffered port in the constructor in the root index.js file!

### POST Requests:

Creating a Blog: 

To create a blog you need to send a POST request to the relevant Endpoint: ```http://localhost:3000/blogs```

The expected query is as follows: 
```
    title: required:true,
    body: required:true,
    category: required:true, default: 'Other',
    author: required:true,
    authorTitle: required:false, default: 'Author',
    authorImg: required:false, default: 'https://picsum.photos/200/200',
    imgUrl: required:false, default: 'https://picsum.photos/300/200',
```
If the supplied query is sufficient and the database has been setup correctly, The expected response from API will be as follows:
```
{
    "timestamp": "26/09/2022, 18:45:10",
    "statusCode": 201,
    "httpStatus": "CREATED",
    "message": "A new Blog has been Created!",
    "data": {
        "title": "A Test Blog",
        "body": "Test blog body....",
        "category": "Test",
        "author": "Ibrahim",
        "authorTitle": "Author",
        "authorImg": "https://picsum.photos/200/200",
        "imgUrl": "https://picsum.photos/300/200",
        "postdate": "26/09/2022, 18:42:41",
        "_id": "6331e526248e4e56794b8fcf",
        "__v": 0
    }
}
```
In case of an Error, the expected response will be: 
```
{
    "timestamp": "26/09/2022, 18:46:39",
    "statusCode": 500,
    "httpStatus": "INTERNAL_SERVER_ERROR",
    "message": "An error has occurred!",
    "data": {}
}
```
Make sure that you have supplied the correct query in that case, or that your MongoDb instance is running correctly!

Error details are logged in the terminal for furthur inspection! 

### GET Requests:

Fetching Blogs:

To fetch the blogs, you need to send a GET request to the relevant Endpoint: ```http://localhost:3000/blogs```

The expected response is as follows:
```
{
    "timestamp": "26/09/2022, 18:51:31",
    "statusCode": 200,
    "httpStatus": "OK",
    "message": "Blogs retrieved!",
    "data": [
    {
    "timestamp": "26/09/2022, 18:45:10",
    "statusCode": 201,
    "httpStatus": "CREATED",
    "message": "A new Blog has been Created!",
    "data": {
        "title": "A Test Blog",
        "body": "Test blog body....",
        "category": "Test",
        "author": "Ibrahim",
        "authorTitle": "Author",
        "authorImg": "https://picsum.photos/200/200",
        "imgUrl": "https://picsum.photos/300/200",
        "postdate": "26/09/2022, 18:42:41",
        "_id": "6331e526248e4e56794b8fcf",
        "__v": 0
    },
    ...
    ]
}
```
The data property will contain an array of all the blogs in the database!

If any error may occur, the expected response will be:
```
{
    "timestamp": "26/09/2022, 18:46:39",
    "statusCode": 500,
    "httpStatus": "INTERNAL_SERVER_ERROR",
    "message": "An error has occurred!",
    "data": {}
}
```

Fetching a specific blog using its ID:

To fetch the blog you need, you need to supply the ID in the GET request: ```http://localhost:3000/blogs/:blogId```

Replace ":blogId" with the ID of the blog you are trying to fetch!

The expected response if the correct ID is supplied is as follows:
```
{
    "timestamp": "26/09/2022, 18:58:30",
    "statusCode": 200,
    "httpStatus": "OK",
    "message": "Blog 6331e526248e4e56794b8fcf retrieved!",
    "data": {
        "_id": "6331e526248e4e56794b8fcf",
        "title": "A Test Blog",
        "body": "Test blog body....",
        "category": "Test",
        "author": "Ibrahim",
        "authorTitle": "Author",
        "authorImg": "https://picsum.photos/200/200",
        "imgUrl": "https://picsum.photos/300/200",
        "postdate": "26/09/2022, 18:42:41",
        "__v": 0
    }
}
```

Incase the blog does not exist, or an error has occured, the expected response will be:
```
{
    "timestamp": "26/09/2022, 19:00:06",
    "statusCode": 500,
    "httpStatus": "INTERNAL_SERVER_ERROR",
    "message": "An error has occurred! or Blog does not exist!",
    "data": {}
}
```


### PUT Requests:

Editing a Blog:


To edit the blog you want, you need to supply the ID in the PUT request: ```http://localhost:3000/blogs/:blogId```

Replace ":blogId" with the ID of the blog you are trying to edit!

Supply the query with the details you want to edit, you are not expected to supply the whole query if you don't need to change everything. 
The expected query properties are as follows: 
```
    title: ,
    body: ,
    category: ,
    author: ,
    authorTitle: ,
    authorImg: ,
    imgUrl: ,
```

The expected response if the correct ID and queries are supplied is as follows:
```
{
    "timestamp": "26/09/2022, 19:07:07",
    "statusCode": 201,
    "httpStatus": "CREATED",
    "message": "Blog 6331e526248e4e56794b8fcf has been Updated!",
    "data": {
        "_id": "6331e526248e4e56794b8fcf",
        "title": "A Test Blog",
        "body": "Test blog body....",
        "category": "Test",
        "author": "Ibrahim",
        "authorTitle": "Author",
        "authorImg": "https://picsum.photos/200/200",
        "imgUrl": "https://picsum.photos/300/200",
        "postdate": "26/09/2022, 18:42:41",
        "__v": 0
    }
}
```

It is expected that the response data will reply with the blog before it has been updated, you will need to fetch the blog again if u want to see the updated details!


Incase the blog does not exist, or an error has occured, the expected response will be:
```
{
    "timestamp": "26/09/2022, 19:14:09",
    "statusCode": 500,
    "httpStatus": "INTERNAL_SERVER_ERROR",
    "message": "An error has occurred! or Blog does not exist",
    "data": {}
}
```

### DELETE Requests:

Deleting a Blog:

To delete the blog you want, you need to supply the ID in the DELETE request: ```http://localhost:3000/blogs/:blogId```

Replace ":blogId" with the ID of the blog you are trying to delete!

The expected response if the correct ID is supplied is as follows:
```
{
    "timestamp": "26/09/2022, 19:24:15",
    "statusCode": 200,
    "httpStatus": "OK",
    "message": "Blog 6331e526248e4e56794b8fcf has been Deleted!",
    "data": {}
}
```

Incase the blog does not exist, or an error has occured, the expected response will be:
```
{
    "timestamp": "26/09/2022, 19:25:26",
    "statusCode": 500,
    "httpStatus": "INTERNAL_SERVER_ERROR",
    "message": "An error has occurred! or Blog does not exist!",
    "data": {}
}
```

## More Information:

### MongoDB Setup using docker:

The development of this API was aided by using a Docker mongoDb image!

You may use the Docker compose file(mongo.yaml) in the root directory if you prefer to run they project like this.(NOT COMMITED YET!)

Otherwise please configure the mongo.config file to suit your mongoDb instance.


