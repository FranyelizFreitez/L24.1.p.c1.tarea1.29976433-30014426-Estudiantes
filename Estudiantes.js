class Cl_Estudiante {
    constructor(cedula, sexo, notap1, notap2, notap3) {
      this.cedula = cedula;
      this.sexo = sexo;
      this.notap1 = notap1;
      this.notap2 = notap2;
      this.notap3 = notap3;
    }
  
    NotaTotal() {
      return this.notap1 + this.notap2 + this.notap3;
    }
  }
  
  class Cl_Ucla {
    constructor() {
      this.estudiantes = [];
    }
  
    agregarEstudiante(estudiante) {
      this.estudiantes.push(estudiante);
    }
  
    MayorNota() {
      let mayorNota = 0;
      for (const estudiante of this.estudiantes) {
        const notaTotal = estudiante.NotaTotal();
        if (notaTotal > mayorNota) {
          mayorNota = notaTotal;
        }
      }
      return mayorNota;
    }
  
    CantidadAprobadasFemeninas() {
      let cantidad = 0;
      for (const estudiante of this.estudiantes) {
        if (estudiante.sexo === "F" && estudiante.NotaTotal() >= 48) {
          cantidad++;
        }
      }
      return cantidad;
    }
  
    PromedioNotas() {
      let sumaNotas = 0;
      for (const estudiante of this.estudiantes) {
        sumaNotas += estudiante.NotaTotal();
      }
      return sumaNotas / this.estudiantes.length;
    }
  }
  
  const estudiante1 = new Cl_Estudiante (13457856, "M", 15, 20, 25);
  const estudiante2 = new Cl_Estudiante (15432551, "F", 10, 10, 10);
  const estudiante3 = new Cl_Estudiante (32455678, "M", 18, 22, 20);
  const estudiante4 = new Cl_Estudiante (28678900, "F", 18, 25, 24);
  
  const Ucla = new Cl_Ucla();
  
  Ucla.agregarEstudiante(estudiante1);
  Ucla.agregarEstudiante(estudiante2);
  Ucla.agregarEstudiante(estudiante3);
  Ucla.agregarEstudiante(estudiante4);
  
  salida = document.getElementById("salida");
  
  salida.innerHTML = "Resultados:<br> <br>";

  for (const estudiante of Ucla.estudiantes) {
    salida.innerHTML += `El estudiante con cedula ${estudiante.cedula} obtuvo una nota total de ${estudiante.NotaTotal()}<br> <br>`;
  }
  salida.innerHTML += `La nota mayor es: ${Ucla.MayorNota()}`
  salida.innerHTML += `<br> <br> La cantidad de mujeres aprobadas es: ${Ucla.CantidadAprobadasFemeninas()}<br> <br>
  El promedio de las notas es: ${Ucla.PromedioNotas()}<br> <br>`

