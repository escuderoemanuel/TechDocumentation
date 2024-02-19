# Backend General Information

### JavaScript:
  - Variables: 'let', 'const'.
    ```js
    const user = 'John';
    // TypeError: Assignment to contant
    user = 'Jack';
    // Correct
    const user = { name = 'John' };
    user.name = 'Jack'
    ```
  - Scoope: Ámbito donde viven las variables, funciones, etc y el alcance que trandrán las mismas.
  - Function: Bloque de instrucciones.
    - Named Function:
      ```js
        // Definición de la función nombrada
      function suma(a, b) {
        return a + b;
      }
      // Uso de la función nombrada
      let resultado = suma(5, 3);
      console.log(resultado); // Output: 8
      ```
    - Anonymous Function:
      ```js
      setTimeout(function() {
        console.log('¡Hola, mundo!');
      }, 1000);
      ```
    - Expression Functions:
      ```js
      // Can receives params or not
      let saludar = function(params) {
        console.log('Hello World..');
      };

      saludar(); // Output: Hello World..
      ```
    - Arrow Functions:
      ```js
      // Can receives params or not
      const sayHi (params) => {
        console.log('Hi, welcome..');
      };
      ```
  - Template Strings: Permite combinar strings con variables.
  - Class: funcionan como 'moldes' para crear diferentes objetos (instancias) con la misma propiedades y métodos. Ejemplo:
      ```js
      class Person = {
        // Static Variable
        static specie = 'human'
        // The constructor has the default properties
        constructor(name) {
          this.name= name;
        }
        // Método usando una propiedad del constructor
        sayHi() {
          console.log(`Hi I'm ${this.name}, nice to meet you!`)
        }
        // Método usando una variable estática
        getSpecie() => {
          console.log(`I'm a ${Person.specie}`)
        }
      }

      // Para usar la clase se crea una nueva instancia de la misma con la palabra 'new'
      let persona1 = new Person('Saul');
      let persona2 = new Person('Izzy');
      // Ahora se pueden acceder a las 'propiedades' y 'métodos' del modelo de la clase
      persona1.sayHi();
      persona2.sayHi();
      persona1.getSpecie();
      persona2.getSpecie();
      ```
      Example:
      ```js
      // Class Initialized 
      class Counter {
        // Static Variable
        static globalCounter = 0;
        // Constructor
        constructor(name) {
          this.name = name;
          this.counter = 0;
        }
        // Method that return something!
        getResponsable = () => {
          return this.name
        }
        // Method that do something!
        count = () => {
          this.counter++, Counter.globalCounter++;
        }
        // Method that do something!
        getIndividualCounter = () => {
          this.counter++;
        }
        // Method that do something!
        getGlobalCounter = () => {
          Counter.globalCounter++;
        }
      }

      // Class intances
      let counter1 = new Counter('John');
      let counter2 = new Counter('Mary');
      // Class Methods
      const responsable1 = counter1.getResponsable();
      const responsable2 = counter2.getResponsable();
      console.log('Responsable 1:', responsable1);
      console.log('Responsable 2:', responsable2);
      // Class Methods
      counter1.count();
      counter1.count();
      counter2.count();
      console.log('globalCounter:', Counter.globalCounter);
      console.log('counter1:', counter1.counter);
      console.log('counter2:', counter2.counter);
      ```
    - Array Methods:
      - Uno
      - Dos
    - Promises: Son...
      - Example:
        ````js

        ```
    - Spread Operator:
    - Rest Operator: