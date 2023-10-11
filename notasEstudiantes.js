

// HackerLand University has the following grading policy:

// Every student receives a  in the inclusive range from  to .
// Any  less than  is a failing grade.
// Sam is a professor at the university and likes to round each student's  according to these rules:

// If the difference between the  and the next multiple of  is less than , round  up to the next multiple of .
// If the value of  is less than , no rounding occurs as the result will still be a failing grade.
// Examples

//  round to  (85 - 84 is less than 3)
//  do not round (result is less than 40)
//  do not round (60 - 57 is 3 or higher)
// Given the initial value of  for each of Sam's  students, write code to automate the rounding process.

// Function Description

// Complete the function gradingStudents in the editor below.

// gradingStudents has the following parameter(s):

// int grades[n]: the grades before rounding

function gradingStudents(grades) {
    // Crear un array para almacenar las calificaciones redondeadas
    const roundedGrades = [];

    // Iterar sobre las calificaciones originales
    for (let i = 0; i < grades.length; i++) {
        const grade = grades[i];

        // Verificar si la calificación es menor de 38, en cuyo caso no se redondea
        if (grade < 38) {
            roundedGrades.push(grade);
        } else {
            // Calcular el siguiente múltiplo de 5 mayor o igual a la calificación
            const nextMultipleOf5 = Math.ceil(grade / 5) * 5;

            // Verificar si la diferencia entre el siguiente múltiplo de 5 y la calificación es menor de 3
            if (nextMultipleOf5 - grade < 3) {
                // Si es menor de 3, redondear al próximo múltiplo de 5
                roundedGrades.push(nextMultipleOf5);
            } else {
                // Si no es menor de 3, mantener la calificación original
                roundedGrades.push(grade);
            }
        }
    }

    return roundedGrades;
}

// Ejemplo de uso:
const grades = [73, 67, 38, 33];
const roundedGrades = gradingStudents(grades);
console.log(roundedGrades); // Mostrar las calificaciones redondeadas en la consola