// Never type

function fn(x: string | number) {
  if (typeof x === "string") {
    console.log(typeof x) // Esto retorna 'string'
    x.toLocaleUpperCase()
  } else if (typeof x === "number") {
    console.log(typeof x) // Esto retorna 'string'
    x.toFixed()
  } else {
    console.log(typeof x) // Esto retorna 'is not defined en el navegador'
    x; // el type en ts es 'never'
  }
}