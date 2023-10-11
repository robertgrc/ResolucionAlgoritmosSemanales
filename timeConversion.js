// Submissions	Leaderboard	Discussions	Editorial
// Given a time in -hour AM/PM format, convert it to military (24-hour) time.
// Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
// - 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.
// Example
// Return '12:01:00'.
// Return '00:01:00'.
function timeConversion(s) {
    // Divide la cadena de tiempo de entrada en horas, minutos, segundos y AM/PM
    const timeParts = s.split(':');
    let hours = parseInt(timeParts[0]);
    const minutes = parseInt(timeParts[1]);
    const seconds = parseInt(timeParts[2]);

    // Verifica si es PM y no es 12:00:00 PM
    if (s.includes('PM') && hours !== 12) {
        hours += 12;
    }
    // Verifica si es AM y es 12:00:00 AM
    else if (s.includes('AM') && hours === 12) {
        hours = 0;
    }

    // Formatea las horas, minutos y segundos con ceros iniciales si es necesario
    const militaryTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

    console.log(militaryTime);

    return militaryTime;
}

// Ejemplo de uso:
const inputTime1 = '12:01:00PM';
const inputTime2 = '12:01:00AM';

timeConversion(inputTime1);  // Resultado: '12:01:00'
timeConversion(inputTime2);  // Resultado: '00:01:00'






