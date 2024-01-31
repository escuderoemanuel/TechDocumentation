# IN FILE PROJECT

* To use Express:
    - Syntax before EC6: 
      ```js
      const express = require('express');
      ```
    - Syntax after EC6: 
      ```js
      import express from 'express';
      ```
      - It's necessary to add in pachage.json file: 
        ```js
        "type": "module"
        ``` 
  
* Define constant for express: 
  ```js
  const server = express();
  ```

* Define public folder
```js
app.use(express.static('public'));
```

* Enable reading json files
```js
app.use(express.json());

```


* This way the server will be able to read complex data:
  ```js
  server.use(express.urlencoded({ extended: true }))
  ```

* Call to server on port 8080:
  ```js
  server.listen(8080, () => {
  console.log('Server is run on port 8080..')
  })
  ```  

* Example:
  ```js
  const express = require('express');

  const port = 8080;
  const serverMessage = `Server is running on port ${port}`;

  const app = express(); // Instance of Express

  app.use(express.static('public')); // Public Folder
  app.use(express.json()); // Enable Reading Json File
  app.use(express.urlencoded({ extended: true })); // Enable Reading from Request Body


  app.listen(port, () => { // Enable Listening
    console.log(serverMessage); 
  })
  ```






