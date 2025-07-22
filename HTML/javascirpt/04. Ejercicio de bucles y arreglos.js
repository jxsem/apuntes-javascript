/*Vamos a crear un programa simple que permita al usuario gestionar una lista de la compra.

Objetivo del ejercicio:

Crear un array para almacenar los productos de la lista.

Usar un bucle para permitir al usuario añadir múltiples productos.

Usar bucles y condicionales para mostrar la lista o para gestionar acciones.

Requisitos:

Inicialización: Declara un array vacío llamado listaDeCompras.

Bucle Principal (while o do-while):

Tu programa debe preguntar repetidamente al usuario qué acción quiere realizar. Las opciones básicas serán:

"añadir": Para agregar un producto a la lista.

"ver": Para mostrar todos los productos en la lista.

"salir": Para terminar el programa.

Este bucle debe continuar hasta que el usuario elija "salir".

Acción "añadir":

Cuando el usuario elija "añadir", pídele que ingrese el nombre del producto que desea añadir (ej., "leche", "pan").

Añade ese producto al final del listaDeCompras usando el método push().

Confirma al usuario que el producto ha sido añadido.

Acción "ver":

Cuando el usuario elija "ver", comprueba si la listaDeCompras está vacía.

Si está vacía, dile al usuario que la lista no tiene productos.

Si no está vacía, usa un bucle for para recorrer cada elemento del array y mostrarlo al usuario. Puedes usar alert() para cada elemento, o construir un solo string con todos los elementos separados por saltos de línea (ej., \n) y luego mostrarlo en un único alert(). Asegúrate de numerar los elementos (ej., "1. Pan", "2. Leche").

Acción "salir":

Cuando el usuario elija "salir", el bucle principal debe terminar y el programa debe mostrar un mensaje de despedida.

Manejo de entrada inválida:

Si el usuario introduce una opción que no es "añadir", "ver" o "salir", debes informarle que la opción no es válida y volver a pedirle una acción. */

// LISTA DE COMPRAS INTERACTIVA

let listaDeCompras = []; // Array vacío para almacenar los productos
let accionUsuario = ""; // Variable para guardar la acción elegida por el usuario

do {
    accionUsuario = prompt("¿Que acción quieres hacer? añadir, salir, ver").toLowerCase();
        if (accionUsuario === "añadir"){
            let productoaAñadir = prompt("¿Que producto quieres añadir");
            listaDeCompras.push(productoaAñadir); //se conecta el array vacio con el .push() para que añada elementos
            alert(productoaAñadir + " ha sido añadido a la lista.")
        } else if (accionUsuario === "ver"){
            if (listaDeCompras.length === 0){
                alert("No hay productos")
            } else{
                let mensajeCompletoDeLista = "Tu lista de compras: \n\n"
                for (let i = 0; i < listaDeCompras.length; i++){
                mensajeCompletoDeLista += (i + 1) /*Bucle que itera en forma de lista 1. 2.*/ + ". " + listaDeCompras[i] + " \n"; //listadecompras[i] imprime la lista
           }
           alert(mensajeCompletoDeLista);
            }

        } else if (accionUsuario === "salir"){
            alert("Saliendo de la lista de compras")
        } else{
            alert("Comando incorrecto, vuelva a intentarlo.")
        }
    }
while(accionUsuario !== "salir")

// Imprimir una tabla de multiplicar
let tablaMultiplicar = 5
let contador;

for (contador = 1; contador <= 10; contador++){
    console.log(`${tablaMultiplicar} * ${i} = ${tablaMultiplicar * i}`);
    
}

// Imprimir numeros pares del 1 al 50
for (rango = 1; rango <= 50; rango++){
    if (rango % 2 === 0){
        console.log(rango)
    }
}
