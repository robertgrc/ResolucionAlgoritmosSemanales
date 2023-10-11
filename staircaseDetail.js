
function staircase(n) {
    for (let i = 1; i <= n; i++) {
        // Imprimir espacios en blanco
        for (let j = 1; j <= n - i; j++) {
            process.stdout.write(" ");
        }
        
        // Imprimir caracteres #
        for (let k = 1; k <= i; k++) {
            process.stdout.write("#");
        }
        
        // Ir a la siguiente línea
        console.log();
    }
}

staircase(3)
