const Persona1 = {
  Nombre : " Anibal",
  Apellido : "Ramirez",
  Materias :{
    Ingles:{
      nota1 : 7,
    },
    Programacion :{
      nota1 : 6,
    },
    proghtml :{
      nota1 : 5,

    },
  },
  promedio : function() {
    const average =((this.Materias.Ingles.nota1) + (this.Materias.Programacion.nota1) + (this.Materias.proghtml.nota1))/3
    return average
  },
  mostrarInfo : function () {
    console.log (`Guardar las calificaciones del estudiate: ${this.Nombreombre} ${this.Apellido}, sus calificaciones son 
    Ingles: ${this.Materias.Ingles.nota1}.
    Programacion: ${this.Materias.Programacion.nota1}.
    HTML: ${this.Materias.proghtml.nota1} 
    Su promedio es de:  ${this.promedio()}`)

},
}
Persona1.mostrarInfo();
Persona1.promedio();