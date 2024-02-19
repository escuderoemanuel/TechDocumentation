# Backend General Information

### JavaScript:
Lenguaje (interpretado por el navegador) de programación utilizado desde 1995 por Netscape Navigator. Se utiliza principalmente para apotar dinamismo a sitios web y aplicaciones web. Funciona en complemento con HTML y CSS, permitiendo crear nuevas funcionalidades e interacciones avanzadas con los usuarios, así como interactual con otras aplicaciones o servicios de backend.
  - Datos: Numéricos, Cadenas, Booleanos, Punteros.
  - Variables: Globales y Locales.
  - Objetos: Arrays, Booleans, Date, Math, String.
  - Arrays: Índice, Longitud.
  - Funciones: Conjunto de instrucciones que se agrupan para realizar una tarea concreta. Se pueden reutilizar a lo largo de diferentes instancias del código.
  - Condicionales: Retornan un valor booleano.
    - if, else if, else...
    - Comparadores: ==, ===, !=, !==, <, <=, >, >=
    - Operadores Lógicos: &&, ||, !
  - Estructura 'Switch': Sirve para manejar múltiples condiciones sobre la misma variable, más ordenadamente que con varios 'if'.
    ```js
    switch(number) {
      case 5:
        ...
        break;
      case 8:
        ...
        break;
      case 0:
      ...
      break;
      default:
        ...
        break;
    }
    ```
    Ciclos, Bucles, Iteraciones:  Estructuras que permiten realizar una o más operaciones más de una vez de forma consecutiva.
    - For:
      ```js
      // desde; hasta; actualización
      for (let i = 0; i <= 5; i++) {
        console.log(`Iteración número: ${i}`)
      }
      ```
    - While:
      ```js
      let repeat = true;
      while(repeat) {
        console.log('I am writing...')
      }
      ```
    - Do... While:
      ```js
      let repeat = true;
      do {
        console.log('Siempre va a ejecutarse esta línea')
      } while(repeat) {
        console.log('I am writing...')
      }
      ```
  - Variables: Espacio reservado en memoria. Puede cambiar su contenido a lo largo de la ejecución de un programa. Pueden ser declaras con 'let' o 'const'.
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