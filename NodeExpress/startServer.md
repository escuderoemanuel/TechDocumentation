# IN FILE PROJECT

* To use Express:
    - Syntax before EC6: 
      ```
      const express = require('express');
      ```
    - Syntax after EC6: 
      ```
      import express from 'express';
      ```
      - It's necessary to add in pachage.json file: 
        ```
        "type": "module"
        ``` 
  
* Define constant for express: 
  ```
  const server = express();
  ```

* This way the server will be able to read complex data:
  ```
  server.use(express.urlencoded({ extended: true }))
  ```

* Call to server on port 8080:
  ```
  server.listen(8080, () => {
  console.log('Server is run on port 8080..')
  })
  ```  








