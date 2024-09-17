// En el taller de Santa, los elfos tienen una lista de regalos que desean fabricar y un conjunto limitado de materiales.
// Los regalos son cadenas de texto y los materiales son caracteres. Tu tarea es escribir una función que, dada una lista de regalos y los materiales disponibles, devuelva una lista de los regalos que se pueden fabricar.
// Un regalo se puede fabricar si contamos con todos los materiales necesarios para fabricarlo.

const gifts = ['tren', 'oso', 'pelota']
const materials = 'tronesa'

manufacture(gifts, materials) // ["tren", "oso"]
// 'tren' SÍ porque sus letras están en 'tronesa'
// 'oso' SÍ porque sus letras están en 'tronesa'
// 'pelota' NO porque sus letras NO están en 'tronesa'

// const gifts = ['juego', 'puzzle']
// const materials = 'jlepuz'
//manufacture(gifts, materials) // ["puzzle"]

// const gifts = ['libro', 'ps5']
// const materials = 'psli'
// manufacture(gifts, materials) // []

// Función que recibe el array de gifts y el string de materiales
function manufacture(gifts, materials) {
  const listGift = []
  // Retorna el filtrado de cada gift del array de gifts
  const filter = gifts.filter(gift => {
    // retorna cada cada caracter del gift y chequea si cada caracter está incluído en el string de materials
    const canManufactureGift = gift.split('').every(char => materials.includes(char))
    if (canManufactureGift) {
      listGift.push(gift)
    }
  })
  console.log(listGift)
  // Retorna un array con los gifts que se pueden fabricar
  return listGift;
}
function manufacture(gifts, materials) {
  // const listGift = []
  return gifts.filter(gift => {
    const canManufactureGift = gift.split('')
      .every(char => materials.includes(char))
    if (canManufactureGift) {
      listGift.push(gift)
    }
  })
  // return listGift;
}


function manufacture(gifts, materials) {
  return gifts.filter(gift => {
    return gift.split('')
      .every(char => materials.includes(char))
  })
}