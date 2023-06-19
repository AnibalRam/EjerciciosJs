const verificaVocal = function( letra ) {

  let letraMinuscula= letra.toLowerCase()


if (letraMinuscula == "a"|| letraMinuscula == "e"|| letraMinuscula == "i"|| letraMinuscula == "o"|| letraMinuscula == "u" ){

  return("esto es una vocal")

}

else {
  
  return( "esto no es una vocal")

}

}

console.log(verificaVocal("U"))
