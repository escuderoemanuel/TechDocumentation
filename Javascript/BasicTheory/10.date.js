let now = new Date(); // 2024-08-15T02:56:02.983Z

let flagDay = new Date(2024, 5, 20) // 1986-06-20T03:00:00.000Z -> MM/DD/YYYY
let birthday = new Date("06/20/1986") // 2024-01-06T03:00:00.000Z -> MM/DD/YYYY

let day = birthday.getDate();
let month = birthday.getMonth();
let year = birthday.getFullYear();

console.log(`Now: ${now}`);
console.log(`Birthday: ${birthday}`);
console.log(`Flagday: ${flagDay}`);
console.log(`I was born on the ${day}th of the month ${month + 1} in the year ${year}`);
