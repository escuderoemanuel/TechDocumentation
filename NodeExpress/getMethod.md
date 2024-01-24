# GET METHOD

* Get Method:
    - Example: 
      ```js
      server.get('/enpoint', (req, res) => {
        res.send('Some String or Whatever');
      })
      ```
    
    - Example: 
      ```js
      server.get('/greeting', (req, res) => {
        res.send('<h2>Greeting: Hello World from Express.js</h2>');
      })
      ```

    - Example: 
      ```js
      server.get('/welcome', (req, res) => {
        res.send('<p style="color: blue" >Hi, welcome to Express.js</p>');
      })
      ```

    - Example:
      ```js
      const user = {
        name: 'Emanuel',
        lastname: 'Escudero',
        age: 37,
        email: 'emanuel@gmail.com'
      }

      server.get('/user', (req, res) => {
      // El objeto podría estar definido aquí o en otro archivo e importado
      res.send(user);
      })
      ```

    - Example: 
      ```js
      server.get('/params/:name/:lastname', (req, res) => {
        const { name, lastname } = req.params;
        res.send(`<h2>Hello ${name} ${lastname}</h2>`);
      })
      ```

      - Example: _http://localhost:3000/query?name=Jane&lastname=Doe_
      ```js
      server.get('/query', (req, res) => {
        const consults = req.query;
        res.send(consults)
      })
      ```

      - Example 'Search by gender': _http://localhost:3000/?gender=female_
      ```js
      server.get('/', (req, res) => {
        let result = users;
        const gender = req.query.gender;
        if (gender) {
          result = result.filter(user => user.gender === gender)
        }
        res.send({ users: result })
        })
      ```
