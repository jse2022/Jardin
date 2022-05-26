import "./styles.css";

/*
• El jardín infantil necesita un programa para poder asignar cursos a las aulas
• Se cuentan con tres aulas: Azul, Verde y Amarilla
• Cada aula cuenta con una capacidad diferente (es decir, un número de
bancos)
• La aula Azul tiene 40 bancos, la Verde 35 y la Amarilla 30
• Dado un número de infantes ingresado por el usuario, el programa deberá
determinar el aula que minimice la cantidad de bancos vacíos
• La salida del algoritmo es el color que identifica al aula asignada

Ejemplo: si la cantidad de personas de un curso es 34, entonces
el aula a asignar será la Verde. El aula Amarilla no puede ser
asignada porque la cantidad de personas es menor a la cantidad
de bancos disponibles. El aula Azul es descartada porque quedan
más bancos inutilizados que en el aula Verde (6 versus 1).
 */
let arrayAulaAzul: number[] = Array(40);
let arrayAulaVerde: number[] = Array(35);
let arrayAulaAmarilla: number[] = Array(30);

function aulaAsignada(cantidadAlumnos: number) {
  if (cantidadAlumnos === 0) {
    return console.log(`La cantidad ${cantidadAlumnos} no es posible.`);
  } else if (cantidadAlumnos > 40) {
    return console.log(
      `No hay suficiente espacio para los ${cantidadAlumnos} alumnos.`
    );
  }
  if (
    cantidadAlumnos <= arrayAulaAzul.length &&
    cantidadAlumnos > arrayAulaVerde.length
  ) {
    return console.log(
      `Los ${cantidadAlumnos} alumnos ingresados van al aula Azul`
    );
  }
  if (
    cantidadAlumnos <= arrayAulaVerde.length &&
    cantidadAlumnos > arrayAulaAmarilla.length
  ) {
    return console.log(
      `Los ${cantidadAlumnos} alumnos ingresados van al aula Verde`
    );
  }
  if (cantidadAlumnos <= arrayAulaAmarilla.length) {
    return console.log(
      `Los ${cantidadAlumnos} alumnos ingresados van al aula Amarilla`
    );
  }
}

let alumnos: number = Number(prompt("Ingrese la cantidad de alumnos:"));
aulaAsignada(alumnos);
