
//* Dada una matriz realiza la diferencia de sus diagonales


function diagonalDifference(arr) {
    let primaryDiagonalSum = 0;
    let secondaryDiagonalSum = 0;
    const n = arr.length;

    for (let i = 0; i < n; i++) {
        primaryDiagonalSum += arr[i][i];
        secondaryDiagonalSum += arr[i][n - 1 - i];
    }

    return Math.abs(primaryDiagonalSum - secondaryDiagonalSum);
}

const matrizEjemplo = [
    [14, 2, 7],
    [4, 9, 6], 
    [7, 8, 14]
];

console.log("Matriz de ejemplo:");
for (let i = 0; i < matrizEjemplo.length; i++) {
    console.log(matrizEjemplo[i].join(" "));
}

const resultado = diagonalDifference(matrizEjemplo);
console.log("Diferencia entre diagonales:", resultado);