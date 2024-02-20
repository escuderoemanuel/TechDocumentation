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
    - Object
      ```js
      // Object Example
      let taxes = {
        tax1: 'value1',
        tax2: 'value2',
        tax3: 'value3',
      }

      // Only Properties
      let onlyProperties = Object.key(taxes)
        console.log(onlyProperties) // => result: [tax1, tax2, tax3]

      // Only Values
      let onlyValues = Object.values(taxes)
        console.log(onlyValues) // => result: [value1, value2, value3]

      let pairKeyValue = Object.entries(taxes)
      console.log(pairKeyValue) // => [[ tax1, value1 ], [ tax2, value2 ], [ tax3, value3 ]]
      ```
    - Array Methods: 
      - push(): Agrega uno o más elementos al final del array y devuelve la nueva longitud del array.
        ```js
        const array = [1, 2, 3];
        array.push(4, 5);
        console.log(array); // Output: [1, 2, 3, 4, 5]
        ```
      - pop(): Elimina el último elemento del array y lo devuelve.
        ```js     
        const array = [1, 2, 3];
        const elementoEliminado = array.pop();
        console.log(elementoEliminado); // Output: 3
        console.log(array); // Output: [1, 2]
        ```
      - shift(): Elimina el primer elemento del array y lo devuelve, modificando el array original.
        ```js     
        const array = [1, 2, 3];
        const elementoEliminado = array.shift();
        console.log(elementoEliminado); // Output: 1
        console.log(array); // Output: [2, 3]
        ```
      - unshift(): Agrega uno o más elementos al principio del array y devuelve la nueva longitud del array.
        ```js     
        const array = [2, 3];
        array.unshift(0, 1);
        console.log(array); // Output: [0, 1, 2, 3]
        ```
      - concat(): Retorna un nuevo array que contiene los elementos de los arrays o valores concatenados.
        ```js     
        const array1 = [1, 2];
        const array2 = [3, 4];
        const newArray = array1.concat(array2);
        console.log(newArray); // Output: [1, 2, 3, 4]
        ```
      - slice(): Retorna una copia superficial de una porción del array en un nuevo array seleccionado desde inicio hasta fin (fin no incluido). El array original no se modificará.
        ```js
        const array = [1, 2, 3, 4, 5];
        const newArray = array.slice(2, 4);
        console.log(newArray); // Output: [3, 4]
        ```
      - splice(): Cambia el contenido de un array eliminando o reemplazando elementos existentes y/o agregando nuevos elementos en su lugar.
        ```js
        const array = [1, 2, 3, 4, 5];
        array.splice(2, 1, 'a', 'b');
        console.log(array); // Output: [1, 2, 'a', 'b', 4, 5]
        ```
      - forEach(): Ejecuta una función dada una vez por cada elemento del array.
        ```js
        const array = [1, 2, 3];
        array.forEach(element => console.log(element));
        // Output:
        // 1
        // 2
        // 3
        ```
      - map(): Crea un nuevo array con los resultados de llamar a una función proporcionada en cada elemento del array.
        ```js
        const array = [1, 2, 3];
        const newArray = array.map(element => element * 2);
        console.log(newArray); // Output: [2, 4, 6]
        ```
      - filter(): Crea un nuevo array con todos los elementos que pasan la prueba implementada por la función proporcionada.
        ```js
        const array = [1, 2, 3, 4, 5];
        const newArray = array.filter(element => element % 2 === 0);
        console.log(newArray); // Output: [2, 4]
        ```
      - reduce(): Aplica una función a un acumulador y a cada valor del array (de izquierda a derecha) para reducirlo a un único valor.
        ```js
        const array = [1, 2, 3, 4, 5];
        const sum = array.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
        console.log(sum); // Output: 15
        ```
      - Otros ...
    - Promises: operaciones asíncronas. Permiten que una operación asíncrona produzca un valor en el futuro, una vez que se complete, o una razón por la cual no se puede completar. Las promesas tienen tres estados: pendiente (pending), resuelta (fulfilled), o rechazada (rejected).
      ```js
      // Example without Async Await
      function operacionSinAsyncAwait() {
        let recurso;
        try {
          recurso = obtenerRecurso();
          // Operaciones que pueden lanzar excepciones
          console.log('Realizando operaciones...');
          throw new Error('Error simulado');
        } catch (error) {
          console.error('Ocurrió un error durante las operaciones:', error);
        } finally {
          if (recurso) {
            liberarRecurso(recurso);
          }
          console.log('Limpiando recursos...');
        }
      }
      function obtenerRecurso() {
        return 'Recurso obtenido';
      }
      function liberarRecurso(recurso) {
        console.log('Recurso liberado:', recurso);
      }
      operacionSinAsyncAwait();

      // Example with Async Await
      async function operacionConAsyncAwait() {
        let recurso;
        try {
          recurso = await obtenerRecursoAsync();
          // Operaciones que pueden lanzar excepciones
          console.log('Realizando operaciones...');
          throw new Error('Error simulado');
        } catch (error) {
          console.error('Ocurrió un error durante las operaciones:', error);
        } finally {
          if (recurso) {
            liberarRecurso(recurso);
          }
          console.log('Limpiando recursos...');
        }
      }
      function obtenerRecursoAsync() {
        return new Promise(resolve => {
          setTimeout(() => resolve('Recurso obtenido'), 1000);
        });
      }
      function liberarRecurso(recurso) {
        console.log('Recurso liberado:', recurso);
      }
      operacionConAsyncAwait();
      ```
    - Spread Operator: 
    - Rest Operator: