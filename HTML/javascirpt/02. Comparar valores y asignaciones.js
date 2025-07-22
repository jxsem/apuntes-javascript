// OPERADORES DE ASIGNACIÓN
let puntuacion = 100; // Declaración con 'let'

puntuacion += 20; // Suma 20 y asigna -> es decir tomas el valor de 100 y sumas 20
console.log("Puntuación después de sumar 20: " + puntuacion); // 120

puntuacion -= 30; // Resta 30 y asigna -> tomas el valor de 100 y restas 30
console.log("Puntuación después de restar 30: " + puntuacion); // 90

puntuacion *= 2; // Multiplica por 2 y asigna
console.log("Puntuación después de multiplicar por 2: " + puntuacion); // 180

puntuacion /= 3; // Divide por 3 y asigna
console.log("Puntuación después de dividir por 3: " + puntuacion); // 60

puntuacion %= 7; // Obtiene el resto de dividir por 7 y asigna
console.log("Puntuación después de módulo 7: " + puntuacion); // 4 (60 / 7 es 8 con resto 4)

console.log("-----------------------------------");

// OPERADORES DE COMPARACIÓN
let valorA = 25;    // Número
let valorB = '25';  // String

// == (Igualdad débil): Compara solo el VALOR, realiza coerción de tipo si es necesario.
console.log("valorA == valorB (¿25 == '25'?): " + (valorA == valorB)); // Resultado: true (el string '25' se convierte a número 25)

// === (Igualdad estricta): Compara VALOR Y TIPO. Recomendado.
console.log("valorA === valorB (¿25 === '25'?): " + (valorA === valorB)); // Resultado: false (tipos diferentes: number vs string)

// != (Desigualdad débil): Lo opuesto a ==. Compara solo el VALOR.
console.log("valorA != valorB (¿25 != '25'?): " + (valorA != valorB)); // Resultado: false (porque 25 es igual a '25' en valor)

// !== (Desigualdad estricta): Lo opuesto a ===. Compara VALOR Y TIPO. Recomendado.
console.log("valorA !== valorB (¿25 !== '25'?): " + (valorA !== valorB)); // Resultado: true (son diferentes en tipo)

// > (Mayor que)
console.log("valorA > 20 (¿25 > 20?): " + (valorA > 20)); // Resultado: true

// < (Menor que): JavaScript convierte 'valorB' a número para comparar con 30.
console.log("valorB < 30 (¿'25' < 30?): " + (valorB < 30)); // Resultado: true (25 es menor que 30)

// >= (Mayor o igual que)
console.log("valorA >= 25 (¿25 >= 25?): " + (valorA >= 25)); // Resultado: true

// <= (Menor o igual que): JavaScript convierte 'valorB' a número para comparar con '25'.
console.log("valorB <= '25' (¿'25' <= '25'?): " + (valorB <= '25')); // Resultado: true (25 es menor o igual a 25)