function createAddress() {
  return {
    planet: 'Earth',
    city: 'Beijing'
  }
}

type Address = ReturnType<typeof createAddress> // ReturnType es un utility que recupera el tipo de lo que devuelve la function que tiene el createAddress y lo guarda en el Address

function createPerson() {
  return {
    name: 'John',
    age: 30,
    address: createAddress()
  }
}