//! Ejercicio

//* Crear una lista de tareas en HTML que incluya un campo de texto de entrada y un botón de 'Agregar Tarea'
//* Cuando el usuario introduzca una tarea y preisone en el botón, ésta deberá añadorse a una lista de tareas que en un principio deberá estar vacía
//* Cada tarea en la lista deberá estar acompañada de un botón 'Eliminar' a su lado
//* Al hacer click en el botón 'Eliminar' la tarea deberá desaparecer de la lista
//? Sugerencias
//* Utilizar JS
//* Investigar diferentes métodos del DOM que puedan ser utilizados
//* Mejorar diseño aplicando CSS



function addTask() {

  // Obtener el elemento
  let task = document.getElementById('task').value;
  // Validar que no esté vacío
  if (task === '') {
    alert('El campo, no puede estar vacío');
    return;
  }

  // Crear el elemento de la lista
  let newTask = document.createElement('li');
  newTask.classList.add('w-full', 'flex', 'justify-between', 'py-1', 'px-2', 'bg-gray-200', 'rounded', 'text-black', 'font-semibold', 'my-1');
  newTask.textContent = `${task} `

  // Crear el div de botones
  let btns = document.createElement('div');
  newTask.appendChild(btns);

  // Crear btn delete
  let btnDelete = document.createElement('button');
  btnDelete.classList.add('text-red-600', 'font-extrabold', 'mx-1')
  btnDelete.textContent = '×';
  btnDelete.onclick = function () {
    newTask.remove();
  };

  // Agregar el btn delete al elemento de la lista
  btns.appendChild(btnDelete);

  // Crear btn done
  let btnDone = document.createElement('button');
  btnDone.textContent = '✓';
  btnDone.classList.add('text-green-400', 'font-extrabold');
  btnDone.onclick = function () {
    newTask.classList.add('line-through', 'italic', 'text-gray-400');
  }

  // Agregar el btn done al elemento de la lista
  btns.appendChild(btnDone);

  // Agregar la tarea a la lista
  document.getElementById('divList').appendChild(newTask);

  // Limpiar el input
  document.getElementById('task').value = '';
}