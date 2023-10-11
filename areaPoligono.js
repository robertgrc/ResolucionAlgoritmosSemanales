// * Enunciado: Crea UNA ÚNICA FUNCIÓN (importante que sólo sea una) que sea capaz de calcular y retornar el área de un polígono.
// * - La función recibirá por parámetro sólo UN polígono a la vez.
// * - Los polígonos soportados serán Triángulo, Cuadrado y Rectángulo.
// * - Imprime el cálculo del área de un polígono de cada tipo.

function calcularAreaPoligono(poligono){
    let area = 0
    if (poligono.tipo === "Triangulo"){
        area= poligono.base* poligono.altura
        console.log(area)
        return area
    }
    if (poligono.tipo === "Cuadrado"){
        area= poligono.lado*poligono.lado
        console.log(area)
        return area
    }
    if (poligono.tipo === "Rectangulo"){
        area= poligono.base*poligono.altura
        console.log(area)
        return area
    }
}

const triangulo = {
    tipo: "Triangulo",
    base: 5,
    altura: 3,
  };
  
  const cuadrado = {
    tipo: "Cuadrado",
    lado: 4,
  };
  
  const rectangulo = {
    tipo: "Rectangulo",
    base: 6,
    altura: 8,
  };

calcularAreaPoligono(triangulo);  // Imprime el área del triángulo y retorna el valor
calcularAreaPoligono(cuadrado);   // Imprime el área del cuadrado y retorna el valor
calcularAreaPoligono(rectangulo); // Imprime el área del rectángulo y retorna el valor