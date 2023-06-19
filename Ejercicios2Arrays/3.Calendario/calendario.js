let calendario = [
  "enero",
  "febrero",
  "marzo",
  "abril",
  "mayo",
 "junio",
  "julio",
  "agosto",
  "septiembre",
  "octubre",
  "nobiembre",
  "diciembre"
];

let pregunta = prompt("ingrese el numero de mes del cual necesita saber el nombre")

if (pregunta<=0){
  console.log("No existe dicho mes, trata de que sea un mes con numero mayor que 0 y menor a 12")
}

if ((pregunta>0) && (pregunta<=12)) {
  let ajustador = pregunta-1
console.log(`El mes que necesiabas saber es  ${calendario[ajustador]}`)
}

else if (pregunta>12) {

  console.log("No existe dicho mes, trata de que sea un mes con numero mayor que 0 y menor a 12")
}


