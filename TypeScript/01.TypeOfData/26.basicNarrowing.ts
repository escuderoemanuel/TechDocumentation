// Narrowing

// En este punto daría error, pues length no existe en el tipo 'string | number'
function showLength1(object: number | string) {
  return object.length
}

// Para ello, debemos 'limpiar' los tipos que no queremos comprobar 'narrowing'
// Entonces verificamos que tenemos el tipo correcto antes de hacer algo
function showLength(object: number | string) {
  if (typeof object === 'string') {
    return object.length // O cualquier método permitido para el tipo 'string'
  } else {
    return object.toString().length // Sino primero lo convertimos al tipo adecuado
  }
}

showLength('1');

