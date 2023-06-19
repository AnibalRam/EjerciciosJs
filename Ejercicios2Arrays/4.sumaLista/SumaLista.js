// A continuacion primer intento de solucion, solo servia par el arreglo NewArray

//let NewArray = [2, 4, 5, 1, 2]

//contador = 0
//for (i= 0; i<NewArray.length; i++){
//contador = (contador + NewArray[i]) 

//}

//console.log(` La suma de los elementos del array es de ${contador} `)


// fin intento 1

// Intento 2 solucionado problema anterir, ahora con una funcion, que permite ingresar cualquier array

function sumaArray (array) {
  
  contador = 0
  for (i= 0; i<array.length; i++){
  contador = (contador + array[i]) 
  }
}

sumaArray([2, 4, 5, 1, 2])

console.log(` La suma de los elementos del array es de ${contador} `)