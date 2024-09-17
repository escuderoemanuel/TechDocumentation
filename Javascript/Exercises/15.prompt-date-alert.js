// Ejercicio
// Ingresar una fecha mediante un prompt (formato MM/DD/YYYY)
// Mostrar mediante un alert, a qué día de la semana corresponde

let dateIntered = window.prompt('Ingresa tu fecha de nacimiento, con el formato solicitado', 'MM/DD/YYYY')
let parsedDate = new Date(dateIntered)
// console.log('parsedDate', parsedDate)

let numberDay = parsedDate.getDay()
console.log('numberDay', numberDay)
let dayOfTheWeek;

switch (numberDay) {
  case 0:
    dayOfTheWeek = 'Domingo'
    break;
  case 1:
    dayOfTheWeek = 'Lunes'
    break;
  case 2:
    dayOfTheWeek = 'Martes'
    break;
  case 3:
    dayOfTheWeek = 'Miércoles'
    break;
  case 4:
    dayOfTheWeek = 'Jueves'
    break;
  case 5:
    dayOfTheWeek = 'Viernes'
    break;
  case 6:
    dayOfTheWeek = 'Sábado'
    break;
}
// console.log('dayOfTheWeek', dayOfTheWeek)
alert(`Naciste un día ${dayOfTheWeek}!`)

// console.log(itsDay)