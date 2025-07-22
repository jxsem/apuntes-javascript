//EJERCICIO EXTRA

/*Instrucciones:

Pide al usuario su edad usando prompt(). Asegúrate de convertir la entrada a un número entero con parseInt().

Implementa la siguiente lógica de control de flujo y validación:

Validación 1: ¿Es un número válido?

Si la entrada NO es un número (usa isNaN()), muestra un alert() que diga: "Error: Por favor, introduce una edad válida (solo números)."

Si es un número, entonces:

Validación 2: ¿Es una edad razonable?

Si la edad es menor que 0 o mayor que 120, muestra un alert() que diga: "Error: La edad introducida no es razonable. Por favor, introduce una edad entre 0 y 120."

Si es una edad razonable, entonces:

Lógica de Acceso:

Si la edad es menor de 18 años, muestra un alert() que diga: "Acceso Denegado: Eres menor de edad. No puedes acceder a este contenido."

Si la edad está entre 18 y 64 años (ambos incluidos), muestra un alert() que diga: "Acceso Permitido: Eres un usuario estándar."

Si la edad es 65 años o más, muestra un alert() que diga: "Acceso Permitido: Eres un usuario senior con privilegios especiales."
*/ 

//Se implementa la variable edad con un parseInt para convertirlo a numero entero
let edad = parseInt(prompt("Introduce tu edad"));

//Validacion de edad -> que sea numero, mayor o igual que cero y menor que 120
if (isNaN (edad) || edad <= 0 || edad > 120 ){
    alert("Por favor, introduce una edad válida (solo números positivos");
    //Si es menor de 18 años no puede tener acceso
}else if (edad < 18){
    alert("Acceso denegado: Eres menor de edad. No puedes acceder a este contenido")
    // si se mueve entre 18 años y 64 años es usuario estandar
}else if (edad >= 18 && edad <= 64){
    alert("Acceso permitido: Eres un usuario estandar")
    // si es mayor de 64 años es un senior
}else {
    alert("Acceso permitido: Eres un usuario senior con privilegios especiales")
}