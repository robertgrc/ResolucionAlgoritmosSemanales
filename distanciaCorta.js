// Determine el costo mínimo para brindar acceso a la biblioteca a todos los ciudadanos de HackerLand. Hay ciudades numeradas del al. Actualmente no hay bibliotecas y las ciudades no están conectadas. Se pueden construir carreteras bidireccionales entre cualquier par de ciudades enumeradas en . Un ciudadano tiene acceso a una biblioteca si:

// Su ciudad contiene una biblioteca.
// Pueden viajar por carretera desde su ciudad a una ciudad que contenga una biblioteca.
// Ejemplo

// La siguiente figura es un mapa de muestra de HackerLand donde las líneas de puntos indican posibles caminos:

// El costo de construir cualquier carretera es y el costo de construir una biblioteca en cualquier ciudad es. Construir carreteras a un coste de y bibliotecas a un coste de . Una de las vías disponibles en el ciclo no es necesaria.

// Hay consultas, donde cada consulta consta de un mapa de HackerLand y el valor de y. Para cada consulta, encuentre el coste mínimo para que las bibliotecas sean accesibles a todos los ciudadanos.

// Función descriptiva
// Complete la función roadAndLibraries en el editor a continuación.
// roadAndLibraries tiene los siguientes parámetros:
// int n: número entero, el número de ciudades
// int c_lib: entero, el costo de construir una biblioteca
// int c_road: entero, el coste de reparar una carretera
// int ciudades[m][2]: cada una contiene dos números enteros que representan ciudades que pueden conectarse mediante una nueva carretera
function roadsAndLibraries(n, c_lib, c_road, cities) {
    if (c_lib <= c_road) {
        // Si es más barato construir bibliotecas en todas las ciudades que carreteras,
        // simplemente construimos bibliotecas en todas las ciudades.
        return BigInt(n) * BigInt(c_lib);
    }

    // Construimos un grafo de ciudades utilizando listas de adyacencia.
    const graph = Array(n + 1).fill().map(() => []);
    for (const [city1, city2] of cities) {
        graph[city1].push(city2);
        graph[city2].push(city1);
    }

    let totalCost = BigInt(0);

    // Función DFS para encontrar componentes conexas.
    function dfs(city) {
        let size = 1;
        const stack = [city];
        visited[city] = true;
        while (stack.length > 0) {
            const currentCity = stack.pop();
            for (const neighbor of graph[currentCity]) {
                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    stack.push(neighbor);
                    size++;
                }
            }
        }
        return size;
    }

    const visited = Array(n + 1).fill(false);
    for (let city = 1; city <= n; city++) {
        if (!visited[city]) {
            const componentSize = dfs(city);
            // Calculamos el costo mínimo para esta componente conexa.
            totalCost += BigInt(c_lib) + BigInt(c_road) * BigInt(componentSize - 1);
        }
    }

    return totalCost;
}

// Ejemplo de uso:
const n = 3; // Número de ciudades
const c_lib = 2; // Costo de construir una biblioteca
const c_road = 1; // Costo de construir una carretera
const cities = [[1, 2], [3, 1], [2, 3]]; // Conexiones entre ciudades

const result = roadsAndLibraries(n, c_lib, c_road, cities);
console.log("El costo mínimo para proporcionar acceso a bibliotecas a todos los ciudadanos es:", result);