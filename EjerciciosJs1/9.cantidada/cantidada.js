let frase = prompt("Ingrese una frase").toLocaleLowerCase()

let cantidada = 0
for (let i = 0; i < frase.length; i++){
  if (frase[i] == "a" )
  {
    cantidada++
  }

}

console.log(`Su palabra es ${frase}`)
console.log( `La cantidad de letras "a" que tiene la palabra elegida es de: ${cantidada}` )


