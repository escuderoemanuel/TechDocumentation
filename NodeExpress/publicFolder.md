# Public Folder

### What is it for or when will it be needed?

- When we need to host images and serve them directly to the client.
- When we need to host a web page in all its senses: html, css, js. In this class we will make a simple page to show the scope of public.

## Steps
- Create the 'public' folder inside 'src' folder.
- Inside the 'public' folder you can create other folders such as a 'images', 'documents', 'css' or others.
- Inside the 'public' folder you can also save the file like:
  - index.html 
  - styles.css 
  - main.js 
  - etc...
- To be able to use the resources of a folder statically, all we have to do on the server is specify this folder as “express.static” with the following syntax:
  ```js
  // __dirname (global variable) + route
  app.use(express.static(__dirname + '/public'))
  ```
- Files inside the 'public' folder can be accessed from the path:
  - _http://localhost:8080/filename.ext_
  - _http://localhost:8080/folder/filename.ext_
- 
  


