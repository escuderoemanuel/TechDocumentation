//? What print console.log(obj.b.c) ?

const obj1 = { a: 1, b: { c: 2 } }
const obj2 = { d: 3 }

const obj3 = { ...obj1, ...obj2 }
obj3.b.c = 4

console.log(
  'obj1.b.c:', obj1.b.c, // 4 porque se modificó en la línea 7 el valor original dentro del obj1
  'obj3.b.c:', obj3.b.c, // 4 porque se modificó en la línea 7 el valor original dentro del obj1 y cambió también dentro del obj3
)


//* Result = 4