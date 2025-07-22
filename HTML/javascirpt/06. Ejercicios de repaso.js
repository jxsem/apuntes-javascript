// EJERCICIO 1 - CALCULADORA DE EDAD

let añoNacimiento = prompt("Dime tu año de nacimiento: "); // Pide el año de nacimiento
// ¡Pequeño detalle aquí!
let añoReal = new Date().getFullYear(); // Intenta obtener el año actual

let edadReal = añoReal - añoNacimiento; // Calcula la edad

alert("Pues chaval, creo que tienes " + edadReal + " años"); // Muestra la edad

if(edadReal >= 18){ // Condicional para la mayoría de edad
    alert("¡Eres mayor de edad")
} else{
    alert("Me temo que no eres mayor de edad")
}

// Lista de tareas con Contador
listaDeTareas = [];

function añadirTarea(tarea) {
    listaDeTareas.push(tarea); // <-- ¡Usamos 'tarea' aquí!
    alert(tarea + " ha sido añadido."); // <-- Y también aquí.
}

function mostrarTareas(){
    let mensajeDeTareas = ""; // <-- Declara la variable aquí, ANTES del if/else

    if(listaDeTareas.length === 0){
        mensajeDeTareas = "¡No hay tareas pendientes por ahora!"; // <-- Asigna el mensaje para este caso
    } else {
        mensajeDeTareas = "📝 Tus tareas pendientes:\n\n"; // <-- Asigna el encabezado para este caso
        for (let i = 0; i < listaDeTareas.length; i++) {
            mensajeDeTareas += (i + 1) + ". " + listaDeTareas[i] + " \n";
        }
        alert("Te faltan " + listaDeTareas.length + " tareas pendientes")
    }
    alert(mensajeDeTareas); // <-- Esta alerta ahora podrá acceder a la variable
}
añadirTarea("Ir a la autoescuela")
añadirTarea("Estudiar")
añadirTarea("Hacer la compra")
mostrarTareas()

// EJERCICIO 3 Juego de adivinar el numero

let numeroSecreto = 8;
let adivinanza;

do {
    adivinanza = Number(prompt("¿En qué número estoy pensando del 0 al 100?"));
    if (adivinanza < 0 || adivinanza > 100){
        alert("No puede ser un numero negativo")
    } else if (adivinanza > numeroSecreto){
        alert("Te pasas")
    } else if (adivinanza < numeroSecreto){
        alert("Te quedas corto")
    } else if(adivinanza === numeroSecreto){
        alert("Pues si, es el " + adivinanza)
    }

}while(adivinanza !== numeroSecreto)