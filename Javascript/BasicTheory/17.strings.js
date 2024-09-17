// Strings

// Considerado un tipo de dato primitivo, pero al mismo tiempo, es tratado como un objeto cuando se accede a sus propiedades y métodos
// Un tipo de dato primitivo es aquel que representa un valor simple y no tiene métodos o propiedades
// JS proporciona objetos incorporados para tipos de datos primitivos, permitiendo así acceder a funcionesy propiedades adicionales.

//? Lista de métodos y/o propiedades
let frase = 'Esta es la primera parte, de la frase';

//* length: Esta propiedad devuelve la longitud (cantidad de caractéres)
let longitud = frase.length;
console.log(`La longitud de la frase es de ${longitud} caractéres`)

//* slice: Extrae un aparte del string y devuelve una nueva cadena, sin modificar la cadena original. Se especifica el índice de inicio y opcionalmente el índice de fin.
let parteDeLaFrase = frase.slice(4, 16);
console.log(`La frase cortada con slice es: ${parteDeLaFrase}`)

//* split: Divide un string en un array de substrings basándose en un separados especificado. Es útil para dividir una cadena en partes más pequeñas.
let lista = 'naranja, manzana, banana, frutillas'
let fraseDividida = lista.split(',');
console.log(`La frase splited es:`, fraseDividida);

//* substr: Similar al slice, pero en lugar de usar el índice de fin, especifica la longitud de la subcadena que deseas extraer a partir de un índice de inicio.
let subcadena = frase.substr(0, 10)
console.log(`La subcadena es: ${subcadena}`)

//* toUpperCase: Convierte todos los caracteres de un string a mayúsculas.
let fraseOriginalMinus = 'Esta es una frase en minúscula'
let fraseMayus = fraseOriginalMinus.toUpperCase()
console.log(`La frase convertida es: ${fraseMayus}`)


//* toLowerCase:  Convierte todos los caracteres de un string a minúsculas.
let fraseOriginalMayus = 'Esta es una frase en mayúscula'
let fraseMinus = fraseOriginalMinus.toLowerCase()
console.log(`La frase convertida es: ${fraseMinus}`)

//* concat: Combina dos o más strings y devuelve una nueva cadena.
let frase1 = 'Esta es la primera frase.'
let frase2 = 'Esta es la segunda frase.'
let fraseCompleta = frase1.concat(` ${frase2}`);
console.log(`La frase completa es: ${fraseCompleta}`)

//* indexOf(): Devuelve el índice de la primera aparición de la subcadena dentro de la cadena. Si no encuentra la subcadena, devuelve -1.
let comidas = 'canelones, lasagna, sushi, Asado, empanadas, pizza'
let buscar = 'asado'
let existe = comidas.toLowerCase().indexOf(buscar.toLowerCase())
console.log(`El index de ${buscar} es: ${existe}`)
//? Para hacer comparaciones sin tener en cuenta mayus y minus es conveniente convertir

//* includes(): Devuelve un valor booleano que indica si la cadena contiene o no la subcadena.
let comidas2 = 'canelones, lasagna, sushi, asado, empanadas, pizza'
let buscar2 = 'asado'
let existe2 = comidas2.includes(buscar2)
console.log(`Comidas incluye ${buscar2}?: ${existe2}`)