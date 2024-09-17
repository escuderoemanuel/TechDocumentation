// Ejercicio

//* Crear un programa que, dada una lista de nombres pre armada, un usuario sea capaz de ingresar un nombre por teclado y el programa realice una búsqueda e identifique si el mismo está presente en la lista o no.
//* En caso de estar, se debe informar por pantalla esta situación. Caso contrario, de igual manera se debe informar mediante un mensaje.
//* Ten en cuenta que el programa debe ser insensible a Mayus y Minus

let marcasDeportivas = 'Nike, Reebok, Adidas, Under Armour, Le Coq Sportif, Puma, New Balance, Topper, Asics'
let buscar = prompt('Ingresa una marca para chequear si tenemos el producto que buscas:', 'Adidas, Nike...')

if (marcasDeportivas.toLowerCase().includes(buscar.toLowerCase())) {
  alert(`La marca ${buscar}, si existe en nuestro stock!`)
} else {
  alert(`No vendemos la marca que buscas.`)
}