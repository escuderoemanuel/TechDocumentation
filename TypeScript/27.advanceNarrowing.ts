interface Mario {
  company: 'Nintendo', // No ponemos string porque no hace falta, ya que el valor debe ser 'nintendo'
  name: string,
  jump: () => void
}

interface Sonic {
  company: 'Sega',
  name: string,
  run: () => void
}

type Character = Mario | Sonic;

function play(character: Character) {
  console.log(character.name) // Se puede acceder a las propiedades comunes a ambos personajes
  // console.log(character.jump) // NO se puede acceder a las propiedades específicas de un personaje
  // Si nos aseguramos que tenemos el tipo correcto, si podremos
  if (character.company === 'Nintendo') {
    character.jump() // Aquí sólo llegaría si character es de tipo Mario
    return
  }
  character.run() // Sólo llegaría si character es Sonic (pues porque no sería de 'Nintendo')
}


// Si no tuviéramos la company, con 'type guard' podemos hacer una comprobación antes de acceder a las propiedades específicas de un personaje
function checkIsSonic(character: Character): character is Sonic {
  return (character as Sonic).run !== undefined
}

function play2(character: Character) {
  if (checkIsSonic(character)) {
    character.run()
    return
  }
  character.jump()
}

//! Siempre que se pueda hay que evitar los type guard, aunque funciona en tiempo de ejecución
