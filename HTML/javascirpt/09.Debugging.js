/*🧪 Ejercicio 1:
El siguiente código debería mostrar "Hola, Juan", pero no funciona como se espera.

function saludar(nombre) {
  console.log("Hola," + nombre)
}

saludar["Juan"];*/


function saludar(nombre) {
  console.log("Hola, " + nombre)
}

saludar("Juan");

/*🧪 Ejercicio 2:
Este código debería mostrar el doble del número introducido, pero no funciona correctamente.

function duplicar(numero) {
  return numero * 2;
}

let resultado = duplicar["5"];
console.log("El resultado es: " + resultado); */

function duplicar(numero) {
   return numero * 2
}

let resultado = duplicar(5);
console.log("El resultado es: " + resultado);

/*🧪 Ejercicio 3:
Este código debería saludar solo si el nombre no está vacío.

function saludarSiNombre(nombre) {
  if (nombre.length > 0) {
    console.log("Hola " + nombre);
  } else {
    console.log("No se proporcionó ningún nombre");
  }
}

saludarSiNombre(); */

function saludarSiNombre(nombre) {
  if (nombre && nombre.length > 0) { // Se comprueba que nombre es truthy, es decir; que no sea undefined, null, false, 0, NaN...
    console.log("Hola " + nombre);
  } else {
    console.log("No se proporcionó ningún nombre");
  }
}

saludarSiNombre();

/*🧪 Ejercicio 4:
Este código debería sumar todos los números en un array y mostrar el resultado, pero no funciona correctamente.

function sumarArray(numeros) {
  let suma = 0;
  for (let i = 0; i <= numeros.length; i++) {
    suma += numeros[i];
  }
  console.log("La suma es: " + suma);
}

sumarArray([1, 2, 3, 4]); */

function sumarArray(numeros) {
  let suma = 0;
  for (let i = 0; i < numeros.length; i++) { // el fallo estaba en que los array empieza desde el indice 0 y estaria yendo a un indice que no existe
    suma+=numeros[i]; //Es una variable que usamos como contador 
  }
  console.log("La suma es: " + suma);
  
}

sumarArray([1,2,3,4])

/* 🧪 Ejercicio 5:
Este código debería devolver el factorial de un número, pero no funciona bien.

function factorial(n) {
  let resultado = 1;
  for (let i = 1; i <= n; i++) {
    resultado = resultado * i;
  }
  return resultado;
}

console.log(factorial(5));  // Debería mostrar 120
console.log(factorial(0));  // ¿Qué muestra? ¿Está bien?*/

function factorial(n) {
  let resultado = 1;
  for (let i = 1; i <= n; i++) {
    resultado = resultado * i;
  }
  return resultado;
}

console.log(factorial(5));  // Debería mostrar 120 -> 1×2×3×4×5 = 120
console.log(factorial(0));  // ¿Qué muestra? ¿Está bien? -> Si, el factorial de 0 es 1
