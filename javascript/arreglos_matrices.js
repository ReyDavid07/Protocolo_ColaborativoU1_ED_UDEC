// ============================================================
//   PARTE 1 - ARREGLOS
// ============================================================

console.log("==================================================");
console.log("         PARTE 1 - ARREGLOS");
console.log("==================================================");

// ------------------------------------------------------------
// 1. Declaración e inicialización con valores aleatorios
// ------------------------------------------------------------
let arreglo = [];
for (let i = 0; i < 10; i++) {
    arreglo[i] = Math.floor(Math.random() * 100) + 1;
}
console.log("\n[1] Arreglo inicial:");
console.log(arreglo);

// ------------------------------------------------------------
// 2. Recorrido
// ------------------------------------------------------------
console.log("\n[2a] Recorrido con for clásico:");
for (let i = 0; i < arreglo.length; i++) {
    console.log(`  arreglo[${i}] = ${arreglo[i]}`);
}

console.log("\n[2b] Recorrido con forEach:");
arreglo.forEach((valor, i) => {
    console.log(`  [${i}] ${valor}`);
});

// ------------------------------------------------------------
// 3. Modificación
// ------------------------------------------------------------

// Cambiar impares por cero
console.log("\n[3a] Cambiar valores impares por cero:");
for (let i = 0; i < arreglo.length; i++) {
    if (arreglo[i] % 2 !== 0) arreglo[i] = 0;
}
console.log(arreglo);

// Multiplicar cada valor por su índice
console.log("\n[3b] Multiplicar cada valor por su índice:");
for (let i = 0; i < arreglo.length; i++) {
    arreglo[i] = arreglo[i] * i;
}
console.log(arreglo);

// ------------------------------------------------------------
// 4. Búsqueda lineal
// ------------------------------------------------------------
function busquedaLineal(arreglo, valor) {
    for (let i = 0; i < arreglo.length; i++) {
        if (arreglo[i] === valor) return i;  // retorna el índice encontrado
    }
    return -1;  // -1 si no se encontró
}

console.log("\n[4] Búsqueda lineal del valor 0:");
let indice = busquedaLineal(arreglo, 0);
if (indice !== -1) {
    console.log(`  Valor encontrado en el índice ${indice}`);
} else {
    console.log("  Valor no encontrado");
}

// ------------------------------------------------------------
// 5. Comparativa (JavaScript vs Java)
// ------------------------------------------------------------
console.log("\n[5] Comparativa JavaScript vs Java:");
console.log("  - JavaScript es de tipado dinámico: no se declara el tipo de variable.");
console.log("  - Java es de tipado estático: se declara int[], String[], etc.");
console.log("  - En JavaScript los arreglos son dinámicos: pueden crecer o reducirse.");
console.log("  - En Java los arreglos tienen tamaño fijo desde su creación.");
console.log("  - JavaScript permite mezclar tipos en un arreglo: [1, 'texto', true].");
console.log("  - En Java un arreglo solo puede contener un tipo de dato.");


// ============================================================
//   PARTE 2 - MATRICES
// ============================================================

console.log("\n==================================================");
console.log("         PARTE 2 - MATRICES");
console.log("==================================================");

// ------------------------------------------------------------
// 1. Declaración e inicialización (3x3, valores del 1 al 9)
// ------------------------------------------------------------
let matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log("\n[1] Matriz inicial:");
matriz.forEach(fila => console.log(" ", fila));

// ------------------------------------------------------------
// 2. Recorrido
// ------------------------------------------------------------
console.log("\n[2a] Imprimir en forma de tabla (por filas):");
for (let fila = 0; fila < 3; fila++) {
    let linea = "";
    for (let col = 0; col < 3; col++) {
        linea += String(matriz[fila][col]).padStart(3);
    }
    console.log(linea);
}

console.log("\n[2b] Recorrido por columnas:");
for (let col = 0; col < 3; col++) {
    let linea = "";
    for (let fila = 0; fila < 3; fila++) {
        linea += String(matriz[fila][col]).padStart(3);
    }
    console.log(linea);
}

// ------------------------------------------------------------
// 3. Operaciones
// ------------------------------------------------------------

// Sumar todos los elementos
let total = 0;
matriz.forEach(fila => fila.forEach(v => total += v));
console.log(`\n[3a] Suma de todos los elementos: ${total}`);

// Intercambiar primera fila con la última
let temp = matriz[0];
matriz[0] = matriz[2];
matriz[2] = temp;
console.log("\n[3b] Matriz después de intercambiar fila 0 con fila 2:");
for (let fila = 0; fila < 3; fila++) {
    let linea = "";
    for (let col = 0; col < 3; col++) {
        linea += String(matriz[fila][col]).padStart(3);
    }
    console.log(linea);
}
