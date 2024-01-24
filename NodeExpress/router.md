# Router

### Creating routes is useful to have the code composed, organized, scalable and clean!

## Steps:
- Create a folder called 'routes' inside 'src' folder.
- Create a 'name.router.js' => in this case 'pets.router.js'
- Write the file. 
- Simple example, how to create a router file:
  ```js
  // Create const Router from express
  const { Router } = require('express');
  // Create a Router instance
  const router = Router();

  // For this example, create an empty array
  let pets = [];

  // get method, route, callback, function
  router.get('/', (req, res) => {
    res.send({ pets: pets })
  })

  // posrt method, route, callback, function
  router.post('/', (req, res) => {
    const pet = req.body;
    pets.push(pet)
    res.send({ status: 'success' })
  })

  // export the Router instance, to use in other file (app.js)
  module.exports = router;
  ```
- In the 'app.js' file:
  ```js
  // Create constant express
  const express = require('express');
  // Create constant to the port (optional)
  const port = 8080;
  // Create message (optional)
  const serverMessage = `Server up and running on port ${port}`
  // import pets router as a constant
  const petsRouter = require('./routes/pets.router')

  // Create an Express instance
  const app = express();

  // To use the body param
  app.use(express.urlencoded({ extended: true }))
  // To use Json files
  app.use(express.json());


  // appMethod, main route, constant with its functions and endpoints
  app.use('/api/pets', petsRouter)

  // appMethodToListen, port, callback
  app.listen(port, () => {
    console.log(serverMessage)
  })
  ```
