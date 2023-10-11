// La casa de Sam tiene un manzano y un naranjo que producen abundantes frutos. Usando la información proporcionada a continuación, determine la cantidad de manzanas y naranjas que caen en la casa de Sam.


// Esta función toma como entrada los siguientes parámetros:

// s y t: Los límites del rango en el que debemos contar las frutas (manzanas y naranjas).

// a y b: Las posiciones de los árboles de manzanas y naranjas respectivamente.

// apples y oranges: Matrices que contienen las distancias a las que caen las manzanas y naranjas desde sus respectivos árboles.

// La función calcula las posiciones finales de las manzanas y naranjas, y luego cuenta cuántas caen dentro del rango [s, t]. Finalmente, imprime el número de manzanas y naranjas que caen dentro del rango en la consola.

// Puedes usar esta función en la función main que ya tienes proporcionada en tu código para procesar las entradas y mostrar los resultados.

function countApplesAndOranges(s, t, a, b, apples, oranges) {
    // Inicializar contadores para las manzanas y naranjas dentro del rango
    let applesCount = 0;
    let orangesCount = 0;

    // Calcular las posiciones finales de las manzanas y naranjas
    const applePositions = apples.map(apple => a + apple);
    const orangePositions = oranges.map(orange => b + orange);

    // Contar las manzanas dentro del rango [s, t]
    for (const applePos of applePositions) {
        if (applePos >= s && applePos <= t) {
            applesCount++;
        }
    }

    // Contar las naranjas dentro del rango [s, t]
    for (const orangePos of orangePositions) {
        if (orangePos >= s && orangePos <= t) {
            orangesCount++;
        }
    }

    // Imprimir los resultados en la consola
    console.log(applesCount);
    console.log(orangesCount);
}

// Llamada a la función countApplesAndOranges con datos de ejemplo
countApplesAndOranges(7, 25, 5, 15, [2, -2, 1], [5, -6]);

// Los valores de ejemplo representan:
// s = 7, t = 11 (rango en el que contar las frutas)
// a = 5 (posición del árbol de manzanas), b = 15 (posición del árbol de naranjas)
// Manzanas: 2, -2, 1 (distancias a las que caen las manzanas)
// Naranjas: 5, -6 (distancias a las que caen las naranjas)