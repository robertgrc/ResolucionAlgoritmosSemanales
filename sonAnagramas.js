

function sonAnagramas(palabra1, palabra2) {
    palabra1 = palabra1.replace(/\s/g, '').toLowerCase();
    palabra2 = palabra2.replace(/\s/g, '').toLowerCase();

    if (palabra1.length !== palabra2.length) {
        console.log("No son anagramas");
        return;
    }

    const arrPalabra1 = palabra1.split('').sort();
    const arrPalabra2 = palabra2.split('').sort();

    for (let i = 0; i < arrPalabra1.length; i++) {
        if (arrPalabra1[i] !== arrPalabra2[i]) {
            console.log("No son anagramas");
            return;
        }
    }

    console.log("Son anagramas");
}

// Ejemplos de uso:
sonAnagramas("listen", "silent"); // Imprime "Son anagramas" en la consola
sonAnagramas("hello", "world");   // Imprime "No son anagramas" en la consola
sonAnagramas("dog", "god");    
