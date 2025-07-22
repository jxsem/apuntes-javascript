// Bucle -> estructuras de control que mientras se cumpla algo sigue ejecutandose.

/*Bucle for

for (inicializacion; condicion; actualizacion{
    codigo a repetir})*/

//Contar del 1 al 5
for (let i = 1; i <= 5; i++) { // variable iniciada en 1, mientras que i <= 5, i será incrementada
    console.log("Numero: " + i);
}

/*Bucle while

while (condicion){
    codigo a repetir}*/


// Inicia la variable con un dato para que pueda entrar en el bucle while
let numero = -1 //Numero negativo

while (numero <= 0 || isNaN(numero)){ //Como es negativo y es un numero
    numero = parseInt(prompt("Introduce un numero positivo: ")) //Aqui iniciamos el bucle
    if (numero <= 0 || isNaN(numero)){
        alert("Numero no valido. Intentalo de nuevo")
    }
}
console.log("Has introducido el numero positivo: " + numero);

/*Do while 

do {
    codigo a repetir
} while (condicion)
*/

// Ejectuar una accion al menos una vez y repetir si se desa
let respuesta ;

do {
    respuesta = prompt("Quieres seguir jugando (si/no)").toLowerCase();//toLowerCase, para que introduzca Si,nO,sI,nO y se traduzca en si, no
    if (respuesta === "si"){
        alert("Sigamos");
    } else if (respuesta === "no") {
        alert("Perfecto, adios.");
    } else{
        alert("Respuesta no valida: Introduce si o no.")
    }
} while (respuesta !== "no" && respuesta !== "si");

// ARREGLOS O ARRAYS -> Son estructuras de datos que almacenan colecciones de elementos bajo un nombre de variable y cada elemento tiene un indice 

// Array vacío
let miArrayVacio = [];

//Array con elementos
let frutas = ["manzana", "banana", "cereza"]
let numeros = [10, 20, 30, 40, 50];
let mixto = ["hola", 123, true, null];

//Acceder al dato mediante indice -> empieza desde el 0
console.log(frutas[0]); //salida esperada manzana
console.log(numeros[1]); //salida esperada 20
console.log(mixto[3]); //salida esperada null

//Modificar valores de un array
numeros[0] = 100; //el array de numeros, el 10 se ha modificado al numero 100 no imprime nada pero se ha modificado
console.log(numeros[0]); //salida esperada 100 y aqui si que se imprime
console.log(numeros);

//Propiedad de un array
console.log(frutas.length); //lenght cuantos elementos hay en el array -> 3
frutas.push("uva");//push añade un elemento al final del array
console.log(frutas); //Salida esperada + uva añadida
frutas.pop(); //pop elimina un elemento al final
console.log(frutas); // Salida esperada - uva eliminada