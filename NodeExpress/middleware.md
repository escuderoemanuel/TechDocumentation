# Middleware

___'Middleware' refers to an intermediary, it is always executed before reaching the corresponding endpoint.___

### What is it for?
- Provide information about the queries that are being made (logs)
- Authorize or deny users before they reach the endpoint (security)
- Add or alter information to the req method before it reaches the endpoint (format)
- Redirect as needed (router)
- In certain cases, complete the request without reaching the endpoint (security)


### What types of middleware exist?

- Application level middleware
  ```js
  const  app = express();
  // middleware use will be executed every time the application receives a request
  app.use(function (req, res, netx) {
    console.log('Times:', Date.now());
    next();
  })
  ```
- Middleware at the endpoint level
  ```js
  // Middleware #1
  function midOne(req, res, netx) {
    req.dataOne = 'Data #1'
    next();
  }

  // Middleware #2
  function midTwo(req, res, netx) {
    req.dataTwo = 'Data #2'
    next();
  }


  // In the app file:
  app.get('/route1', mid1, (req, res) => {
   res.json({
       data1: req.data1
   })
  })

  app.get('/route2', mid1, mid2, (req, res) => {
     res.json({
         data1: req.data1,
         data2: req.data2
     })
  })
  ```
- Router-level middleware
  ```js
  const app = express();
  const router = express.Router();

  // Middleware function without mount path.
  // The code is executed for each request to the router
  router.use(function (req,res, next) {
    console.log('Time:', Date.now());
    next();
  })
  ```
- Error handling middleware
  ```js
  // Recives 4 arguments
  app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('Something broke!');
  });
  ```
- Built-in middleware
  ```js
  // Middleware incorporated within Express!
  // express.static(root, [options])
  app.use(express.static('public', options));
  ```
- Third party middleware
  ```powershell
  $ npm install --save multer
  ```
  ```js
  const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '/tmp/my-uploads')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, file.fieldname + '-' + uniqueSuffix)
  }
  })

  const upload = multer({ storage: storage })
  ```
  - ___It is recommended to create a 'middlewares' folder for third-party or custom middlewares.___

