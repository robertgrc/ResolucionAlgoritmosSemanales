// Enunciado: Escribe un programa que se encargue de comprobar si un número es o no primo.
//  * Hecho esto, imprime los números primos entre 1 y 100

// Función para comprobar si un número es primo
function esPrimo(numero) {
    if (numero <= 1) {
      return false;
    }
    if (numero <= 3) {
      return true;
    }
    if (numero % 2 === 0 || numero % 3 === 0) {
      return false;
    }
    for (let i = 5; i * i <= numero; i += 6) {
      if (numero % i === 0 || numero % (i + 2) === 0) {
        return false;
      }
    }
    return true;
  }
  
  // Imprimir números primos entre 1 y 100
  for (let i = 1; i <= 100; i++) {
    if (esPrimo(i)) {
      console.log(i);
    }
  }