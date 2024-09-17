let mensajeInicial = window.confirm('¿Deseas ingresar con tu email?');
console.log(mensajeInicial);
if (mensajeInicial) {
  let email = window.prompt('Ingresa tu email:', 'ejemplo@email.com') // Esto crea un cuadro de diálogo donde el usuario puede introducir un valor/texto
  let mensaje = `'${email}' bienvenido a nuestro sitio web!`;
  alert(mensaje)
} else {
  alert('Has ingresado como invitado.')
}