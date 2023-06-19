
const numeroMayor = function(numero1, numero2, numero3) {

  if (numero1===numero2 && numero2===numero3){
  return ("Todos los numeros son iguales")
  }

  else {
    return ( Math.max(numero1,numero2,numero3))
  } 
  
}

console.log(numeroMayor(2,2,2))