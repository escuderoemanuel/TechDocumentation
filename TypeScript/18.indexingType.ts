type HeroProp = {
  isActive: boolean,
  address: {
    planet: string
    city: string
  }
}

const addressHero: HeroProp['address'] = {
  // planet: 'Earth',
  city: 'New York'
  // No permite que pongamos una prop si falta la otra
}


// Ejemplo de typeOf
const address = {
  planet: 'Earth',
  city: 'New York'
}

type Address = typeof address

const addressTwitch: Address = {
  planet: 'Mars',
  city: 'Twitch'
}