
function sumarArreglo(arreglo) {
    let suma = 0;
    for (let i = 0; i < arreglo.length; i++) {
      suma += arreglo[i];
    }
    return suma;
  }

  const miArreglo = [1, 2, 3, 4, 5];
  const resultado = sumarArreglo(miArreglo);
  console.log("La suma de los números en el arreglo es:", resultado);
