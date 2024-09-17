// Methods

//? Agregar - Eliminar


let cars = ['Audi', 'BMW', 'Ferrari']
console.log('Original Cars:', cars)

//* push(): Agrega uno o más elementos el final del array y devuelve la nueva longitud
cars.push('Mercedez Benz')
console.log('Push Cars:', cars)
// [['Audi', 'BMW', 'Ferrari', 'Mercedez Benz',]]

//* pop(): Elimina el último elemento del array y lo devuelve
cars.pop()
console.log('Pop Cars:', cars)
// [['Audi', 'BMW', 'Ferrari']]

//* unshift(): Agrega uno o más elementos al principio del array y devuelve la nueva longitud
cars.unshift('Dodge')
console.log('Unshift Cars:', cars)
// [['Dodge','Audi', 'BMW', 'Ferrari']]

//* shift(): Eliminma el primer elemento del array y lo devuelve
cars.shift()
console.log('Shift Cars:', cars)
// [['Audi', 'BMW', 'Ferrari']]

//? Modificar Contenido

//* splice(): Cambia el contenido de un array eliminando, reemplazando o agregando elementos
//* fill(): Rellena todos los elementos del array con un valor específico
//* reverse(): Invierte el orden de los elementos del array

//? Buscar y Filtrar

//* indexOf(): Devuelve el primer índice en el que se encuentra el elemento especificado o -1 si no se encuentra
//* lastIndexOf(): Devuelve el último índice en el que se encuentra un elemento especificado o -1 si no se encuentra
//* find(): Devuelve el primer elemento en el array que cumple con una condición específica
//* filter(): Crea un nuev array con todos los elementos que cumplan con una condición específica

//? Transformar y Ordenar

//* map(): Crea un nuevo array con los resultados de aplicar una función a cada elemento del array
//* sort(): Ordena los elementos alfabéticamente o según la función de comparación
//* contact(): Combina 2 o más arrays y devuelve un array nuevo
//* slice(): Devuelve una copia superficial de una porción del array en un nuevo array

//? Obtener Información del Array

//* lenght: Propiedad que devuelve la cantidad de elementos en el array (longitud)
//* includes(): Comprueba si un elemento está presente en el array
//* every(): Verifica si todos los elementos cumplen con una condición específica
//* some(): Verifica si al menos un elemento cumple con una condición específica

//? Reducir y Acumular Valores del Array

//* reduce(): Aplica una función a un acumulador y a cada elemento del array (de izquierda a derecha) para reducirlo a un solo valor
//* reduceRight(): Aplica una función a un acumulador y a cada elemento del array (de derecha a izquierda) comenzando por el último valor, para reducirlo a uno solo