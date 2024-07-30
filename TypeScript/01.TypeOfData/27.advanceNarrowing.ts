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
  console.log(character.jump) // NO se puede acceder a las propiedades específicas de un personaje
  // Si nos aseguramos que tenemos el tipo correcto, si podremos
  if (character.company === 'Nintendo') {
    console.log(`${character.name} is playing Mario`);
    return
  }
  // Aquí sólo llegaría si character es de tipo Sonic (pues porque no sería de 'Nintendo')
  console.log(`${character.name} is playing Sonic`);
}