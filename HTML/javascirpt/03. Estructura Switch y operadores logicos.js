// Operador Switch -> Es como una serie de if y else pero mas simple

/* switch (expresion){
case : 
    codigo a ejecutar
case :
    codigo a ejecutar
default:
    codigo a ejecutar
    break
}*/

let numeroElegido = parseInt(prompt("Elige un numero del 1 al 3"));

switch(numeroElegido){
    case 1:
        alert("El numero es el 1")
    case 2:
        alert("El numero es el 2")
    case 3:
        alert("El numero es el 3")
    default:
        alert("Ese numero no esta entre el 1 y el 3")
        break;
}


// CALCULADORA Básica con Switch

let numeroCalculadora = parseInt(prompt("Introduce el primer numero para la operacion: "));
// Validación del primer número: debe ser un número, positivo y NO CERO.
if (isNaN(numeroCalculadora) || numeroCalculadora <= 0){ // Cambié '< 0' a '<= 0' para que el 0 también se excluya según tu mensaje.
    alert("Error: El primer número tiene que ser un número válido, positivo y distinto de cero.");
} else {
   let numeroCalculadora2 = parseInt(prompt("Introduce un segundo numero: "));

   // Validación del segundo número: debe ser un número, y positivo. (Permitimos el 0 aquí para operaciones como suma/multiplicacion)
   if (isNaN(numeroCalculadora2) || numeroCalculadora2 < 0){ // ¡Cambiado a '< 0' para permitir 0!
    alert("Error: El segundo número tiene que ser un número válido y positivo.");
   } else {
    // Guiamos al usuario sobre las operaciones disponibles
    let operacion = prompt("¿Qué operación vas a hacer? (suma, resta, multiplicacion, division, resto)");

        switch (operacion) {
            case "suma":
                alert("El resultado de la suma es: " + (numeroCalculadora + numeroCalculadora2));
                break;
            case "resta":
                alert("El resultado de la resta es: " + (numeroCalculadora - numeroCalculadora2));
                break;
            case "multiplicacion":
                alert("El resultado de la multiplicación es: " + (numeroCalculadora * numeroCalculadora2));
                break;
            case "division":
                // --- ¡VALIDACIÓN ESPECÍFICA PARA LA DIVISIÓN POR CERO AÑADIDA! ---
                if (numeroCalculadora2 === 0) {
                    alert("Error: No se puede dividir entre cero.");
                } else {
                    alert("El resultado de la división es: " + (numeroCalculadora / numeroCalculadora2));
                }
                break;
            case "resto":
                // --- ¡VALIDACIÓN ESPECÍFICA PARA EL RESTO CON CERO AÑADIDA! ---
                if (numeroCalculadora2 === 0) {
                    alert("Error: No se puede calcular el resto con cero.");
                } else {
                    alert("El resto de la división es: " + (numeroCalculadora % numeroCalculadora2));
                }
                break;
            default:
                alert("Error: Esa operación no está disponible. Por favor, elige entre 'suma', 'resta', 'multiplicacion', 'division' o 'resto'.");
                break;
        }
   }
}