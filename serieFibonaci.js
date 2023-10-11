// Enunciado: Escribe un programa que imprima los 50 primeros números de la sucesión de Fibonacci empezando en 0.
//  * La serie Fibonacci se compone por una sucesión de números en la que el siguiente siempre es la suma de los dos anteriores.
//  * 0, 1, 1, 2, 3, 5, 8, 13...

function imprimirFibonacci(n) {
    let a = 0;
    let b = 1;
    let resultado = a;

    for (let i = 1; i <= n; i++) {
        console.log(resultado);

        let temp = a;
        a = b;
        b = temp + b;
        resultado = a;
    }
}

imprimirFibonacci(50);