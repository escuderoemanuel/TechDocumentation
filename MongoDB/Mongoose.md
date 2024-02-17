# Mongoose

- Install Mongoose as a project dependency
  ```powershell
  npm install mongoose
  ```
- Example './src/app.js'
  ```js
  require('dotenv').config();
  const USER = process.env.USER;
  const PASSWORD = process.env.PASSWORD;

  const express = require('express');
  const userRouter = require('../routes/users.router');
  const port = 8080;
  const serverMessage = `Server started on port ${port}`
  const mongoose = require('mongoose');

  const app = express();

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  mongoose.connect(`mongodb+srv://${USER}:${PASSWORD}@mongodbcluster.piysuzj.mongodb.net/`,)
    .then(() => console.log('Connected to MongoDB Atlas'))

  app.use('/api/users', userRouter)

  app.listen(port, () => {
    console.log(serverMessage);
  })
  ```
- Example './src/models/user.js' => 'MODEL'
  ```js
  const mongoose = require('mongoose');
  // Constructor => new instance => properties
  const userSchema = new mongoose.Schema({
    firstName: {
      type: String,
      default: 'Jane',
    },
    lastName: {
      type: String,
      default: 'Doe',
    },
    age: Number,
    email: {
      type: String,
      required: true,
      // unique: true,
    },
  });

  const UserModel = mongoose.model('users', userSchema);
  module.exports = UserModel;
    ```
- Example './src/routes/users.router.js' => 'CRUD'
  ```js
  const { Router } = require('express');
  const UserModel = require('../models/user');

  const router = Router();

  router.get('/', async (req, res) => {
    const users = await UserModel.find()
    res.send({ status: 'success', users: users })
  })

  router.post('/', async (req, res) => {
    try {
      await UserModel.create(req.body)
      res.send({ status: 'success' })
    } catch (error) {
      res.status(400).send({ status: 'error', error: 'Incomplete Data' })
    }
  })

  router.put('/:uid', async (req, res) => {
    try {
      const { uid } = req.params;
      const { firstName, lastName, age, email } = req.body;

      await UserModel.updateOne({ _id: uid }, { firstName, lastName, age, email })

      res.send({ status: 'success' })
    } catch (error) {
      res.status(400).send({ status: 'error', error: 'Incorrect Data' })
    }
  })

  router.delete('/:uid', async (req, res) => {
    try {
      const { uid } = req.params;
      await UserModel.deleteOne({ _id: uid })
      res.send({ status: 'success' })
    } catch (error) {
      res.status(400).send({ status: 'error', error: 'Incorrect Data' })
    }
  })

  module.exports = router;
  ```