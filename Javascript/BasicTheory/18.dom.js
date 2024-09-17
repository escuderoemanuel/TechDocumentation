// DOM

//* En JS el DOM (Document Object Model) es como un mapa o una representación estructurada de una página HTML
//* Cuando el navegador carga una página web, crea una estructura de objetos a partir del código HTML
//* Cada elemento HTML, como títulos, párrafos, imágenes, etc, se convierte en un objeto en el DOM

// Etimológicamente

//* Document: el archivo HTML
//* Object: Cada elemento dentro del archivo HTML
//* Model: La estructura organizada que tienen estos objetos entre si (casi siempre en forma de árbol)

//? Al trabajar en JS, se puede interactuar con los objetos del DOM, para cambiar el contenido de la página, modificar estilos, agregar o quitar elementos, etc.

//! La estructura general:

//! document
////? Root Element: <html>
//////? Element: <head>
////////* Element: <title>
////////* Text: <'myTitle'>
//////? Element: <body>
////////* Element: <h1>
////////* Text: <'Un texto'>

//! Ejemplo


function cambiarTexto() {
  let texto = document.getElementById('miParrafo')
  texto.textContent = 'Texto cambiado'
  texto.style.color = 'red'
}