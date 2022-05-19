let notaPractica, notaProblema, notaTeoria, promedio: number;

let nombreAlumno = prompt("Ingrese el nombre del alumno: ");
console.log("Alumno: " + nombreAlumno);

// ENTRE EL WHILE Y EL IF HAY VARIOS ERRORES DE INDENTACION
// EL IF DEBE ESTAR DENTRO DEL WHILE
while (nombreAlumno !== "") {
  notaPractica = Number(prompt("Ingrese la calificación de Práctica: "));
  notaProblema = Number(prompt("Ingrese la calificación de Problemas: "));
  notaTeoria = Number(prompt("Ingrese la calificación de Teoría: "));
  console.log(
    "Resultado Práctica: " + notaPractica,
    "Resultado Problemas: " + notaProblema,
    "Resultado Teoría: " + notaTeoria
  );

  if (
    notaPractica > -1 &&
    notaProblema > -1 &&
    notaTeoria > -1 &&
    notaPractica <= 10 &&
    notaProblema <= 10 &&
    notaTeoria <= 10
  ) {
    //EN LA VARIABLE PROMEDIO HAY QUE GUARDAR EL VALOR, NO EL CONSOLE.LOG
    //EL CONSOLE.LOG SE USA PARA IMPRIMIR EN CONSOLA Y NO SE GUARDA DENTRO DE UNA VARIABLE
    promedio = notaPractica * 0.1 + notaProblema * 0.5 + notaTeoria * 0.4;
    console.log("El promedio de", nombreAlumno, "es", promedio);

    // ELSE IF nombreAlumno ==="" NO TIENE SENTIDO, AL ESTAR DENTRO DEL WHILE YA SABEMOS QUE
    // nombreAlumno NO ES VACIO
    // HAY QUE AGREGAR UN ELSE QUE MUESTRE UN MENSAJE QUE SI NO SE CUMPLE LA CONDICION DE LAS NOTAS
  } else {
    console.log("Error en las notas ingresadas de", nombreAlumno);
  }

  // PEDIR AL USUARIO QUE INGRESE EL NOMBRE DE OTRO ALUMNO
  nombreAlumno = prompt("Ingrese el nombre del alumno: ");
}
