class Estudiante {
    constructor(nombre,asignaturas) {
        this.nombre = nombre;
        this.asignaturas = asignaturas;
    }

    obtenDatos() {
        console.log(`Hola, me llamo ${this.nombre} y estoy matriculado en ${this.asignaturas}`)
    }
}

const alumno = new Estudiante("Jorge", ["JavaScript", "HTML", "CSS"]);
console.log(alumno)
alumno.obtenDatos();