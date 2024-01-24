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








