const numero1=prompt("Ingrese un numero")
const numero2=prompt("Ingrese un segundo numero")
const numero3=prompt("Ingrese un tercer numero")

function comparacion( numero1, numero2, numero3){
if (numero1>=numero2 && numero1>=numero3)
document.querySelector(".contenido").innerHTML = ` El numero mayor es ${numero1} `

  else if (numero2>=numero1 && numero2>=numero3)
  document.querySelector(".contenido").innerHTML = ` El numero mayor es ${numero2} `

 else if (numero3>=numero1 && numero3>=numero2)
 document.querySelector(".contenido").innerHTML = ` El numero mayor es ${numero3} `
}

comparacion( numero1, numero2, numero3)