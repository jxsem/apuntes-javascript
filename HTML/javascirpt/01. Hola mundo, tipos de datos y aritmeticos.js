// Hola mundo en Javascript
console.log("Hola Mundo");


// Tipos de datos - String
let nombre = "Juan";
let mensaje = 'Hola, ¿cómo estás?';
let saludoCompleto = `Hola, ${nombre}. Tienes ${30} años.`; // Con backticks e inserción de variables

// Tipos de datos - Numéricos
let edad = 25;
let precio = 19.99;
let temperatura = -5;

// Tpos de datos - Booleano
let esActivo = true;
let estaLogeado = false;

// Operadores Aritmeticos.
let resultadoSuma = 10 + 5;      // 15
let resultadoResta = 20 - 7;     // 13
let resultadoMultiplicacion = 4 * 6; // 24
let resultadoDivision = 25 / 5;  // 5
let resultadoModulo = 17 % 4;    // 1 (17 dividido 4 es 4 y sobra 1)

// Esto es un comentario de una sola línea
let edad_promedio = 30; // Aquí guardamos la edad de la persona
/*
Este es un comentario
que puede abarcar
varias líneas de código.
*/
let x = 10;
let y = 20;
/*
console.log(x);
console.log(y);
*/

/*Ejercicio 1
En tu archivo script.js, realiza lo siguiente:

Pide al usuario un número usando prompt() y guárdalo en una variable llamada numero1. 

Importante: prompt() siempre devuelve una cadena de texto. Para poder hacer operaciones matemáticas, 

necesitarás convertirla a un número usando parseInt() (para enteros) o parseFloat() (para decimales). 

Por ejemplo: let numero1 = parseInt(prompt("Introduce el primer número:"));

Pide al usuario un segundo número de la misma manera y guárdalo en una variable llamada numero2.

Calcula la suma, resta, multiplicación y división de numero1 y numero2. Guarda cada resultado en su propia variable (ej. resultadoSuma, resultadoResta, etc.).

Muestra cada uno de estos resultados al usuario utilizando alert(). Por ejemplo: alert("La suma es: " + resultadoSuma);.

Añade comentarios en tu código explicando cada paso importante: la declaración de variables, la conversión de tipos, los cálculos y las salidas.
*/

// Primero pedimos el numero al usuario y lo pasamos a entero
//let numero1 = parseInt(prompt("Necesito que me des un numero positivo:"));

// --- INICIAMOS LA CADENA DE VALIDACIÓN PARA numero1 ---
// Validamos si numero1 NO es un número O si es menor o igual a cero (no positivo)
if (isNaN(numero1) || numero1 <= 0) {
    alert("Error: El primer valor introducido no es un número válido o no es positivo. Por favor, recarga la página e inténtalo de nuevo.");
    // Si hay un error aquí, la ejecución del script *para las operaciones* termina.
    // El 'else' de este 'if' (que contiene el resto del código) NO se ejecutará.
} else {
    // Si numero1 es válido y positivo, podemos proceder a pedir el segundo número.
    let numero2 = parseInt(prompt("Ahora necesito que me des otro numero positivo:"));

    // --- CONTINUAMOS LA CADENA DE VALIDACIÓN PARA numero2 ---
    // Validamos si numero2 NO es un número O si es menor o igual a cero (no positivo)
    if (isNaN(numero2) || numero2 <= 0) {
        alert("Error: El segundo valor introducido no es un número válido o no es positivo. Por favor, recarga la página e inténtalo de nuevo.");
        // Si hay un error aquí, el 'else' de este 'if' (que contiene las operaciones) NO se ejecutará.
    } else {
        // --- ¡FELICIDADES! SI LLEGAMOS HASTA AQUÍ, AMBOS NÚMEROS SON VÁLIDOS Y POSITIVOS. ---
        // SOLO AHORA podemos realizar las operaciones de forma segura.

        // Almacenamos las operaciones en variables
        let suma = numero1 + numero2;
        let resta = numero1 - numero2;
        let multiplicacion = numero1 * numero2;
        let division; // Declaramos 'division' aquí, la asignaremos más adelante

        // Imprimimos mediante una alerta las operaciones que siempre son válidas
        alert("La suma de " + numero1 + " y " + numero2 + " es: " + suma);
        alert("La resta de " + numero1 + " y " + numero2 + " es: " + resta);
        alert("La multiplicación de " + numero1 + " y " + numero2 + " es: " + multiplicacion);

        // --- VALIDACIÓN ESPECÍFICA PARA LA DIVISIÓN POR CERO ---
        if (numero2 === 0) {
            // Si el segundo número es cero, alertamos que no se puede dividir
            alert("Advertencia: No se puede realizar la división porque el segundo número es cero.");
        } else {
            // Si numero2 NO es cero, procedemos con la división
            division = numero1 / numero2;
            alert("La división entre " + numero1 + " y " + numero2 + " es: " + division);
        }
    }
}