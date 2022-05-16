let notaPractica, notaProblema, notaTeoria, promedio: number;

let nombreAlumno = prompt("Ingrese el nombre del alumno: ");
console.log("Alumno: " + nombreAlumno);

while (nombreAlumno !== "") {
  notaPractica = Number(prompt("Ingrese la calificación de Práctica: "));
  notaProblema = Number(prompt("Ingrese la calificación de Problemas: "));
  notaTeoria = Number(prompt("Ingrese la calificación de Teoría: "));
  console.log("Resultado Práctica: " + notaPractica, "Resultado Problemas: " + notaProblema, "Resultado Teoría: " + notaTeoria);
  break;
} if (notaPractica > -1 && notaProblema > -1 && notaTeoria > -1 && notaPractica <= 10 && notaProblema <= 10 && notaTeoria <=10) {
    promedio = console.log("El promedio de",nombreAlumno,"es", notaPractica * 0.1 + notaProblema * 0.5 + notaTeoria * 0.4);
  } else if (nombreAlumno === ""){
    console.log("Ingrese datos");
  }
};
