'use strict'
// Programa que nos pida un numero y saber cual es mayor y el menor
// Si los numeros no son un numero o son menores o iguales a cero, nos lo vuelva a pedir
let numero = parseInt(prompt("Necesito que me digas el primer numero"));
let numero2 = parseInt(prompt("Ahora inserta el segundo numero"));
while ((isNaN(numero) || isNaN(numero2) || numero <= 0 || numero2 <= 0)){
    
    if(isNaN(numero) || isNaN(numero2)){
        alert("No son numeros introduce numeros reales.")
    }

    
 numero = parseInt(prompt("Necesito que me digas el primer numero"));
 numero2 = parseInt(prompt("Ahora inserta el segundo numero"));

}

if(numero <= 0 || numero2 <= 0){
    alert("Los numeros son menores o iguales a cero");
}else if(numero < numero2){
    alert("El numero " + numero + " es menor que " + numero2); 
}else if(numero > numero2){
    alert("El numero " + numero + " es mayor que " + numero2); 
}else{
    alert("Los numeros son iguales.")
}

/*Utilizando un bucle, mostrar la suma y la media de los numeros introducidos
hasta introducir un numero negativo y ahi mostrar el resultado */

let suma = 0;
let contador = 0;
let media = 0;

do{
    var numeros = parseInt(prompt(("Introduce numeros, termina cuando introduzcas un numero negativo")));

    if(isNaN(numeros)){
        numeros = 0;
    }else if(numeros >= 0){
        suma+=numeros
        contador++; 
        media = suma / contador;
    }
    
}while(numeros >=0 );

    alert("Suma total: " + suma);
    alert("Numeros introducidos: " + contador);
    alert("La media es de: " + media);

// Muestra todos los numeros entre dos numeros introducidos por el usuario

let dato1 = parseInt(prompt("Introduce un número aleatorio"), 10);
let dato2 = parseInt(prompt("Introduce otro número aleatorio"), 10);

if (isNaN(dato1) || isNaN(dato2)) {
    alert("No son números");
} else {
    let inicio = Math.min(dato1, dato2); // toma el valor más pequeño
    let fin = Math.max(dato1, dato2); // toma el valor más grande

    for (let i = inicio + 1; i < fin; i++) { // let i = inicio ya que te muestra el numero mas pequeño en la parte de arriba, +1 porque el dato introducido por el usuario no lo queremos ya que te dice el enunciado numeros comprendidos entre un numero y otro
        console.log(i);
    }
}

