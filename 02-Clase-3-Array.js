// array (listas en otros lenguajes)

let myarray = []
let myarray2 = new Array() // no recomendada

//inicializacion

myarray = ["Jose", 29, true]
myarray2 = new Array(3) // crea espacios vacios, no tiene sentido utilizarla actualmente

console.log(myarray)

myarray2[1]= 29
myarray2[0]= "Jose"
myarray2[2]= true
// salen en el orden que especifiquemos , comenzando con 0, puede dejar espacios , de no tener un item designado
console.log(myarray2)

//Metodos comunes
//push: agrega elementos al array, se agregan en orden
myarray = []
myarray.push("Ricardo")
myarray.push(29)
myarray.push(true)
console.log(myarray)
// pop: elimina el ultimo elemento del array
console.log(myarray.pop()) // nos guardamos el elemento borrado y lo imprimimos
console.log(myarray)

// Shift: elimina el primer elemento del array
myarray = []
myarray.push("Ricardo")
myarray.push(29)
myarray.push(true)
console.log(myarray)
console.log(myarray.shift()) // nos guardamos el elemento borrado y lo imprimimos
console.log(myarray)

// length: longitud del array
console.log(myarray.length)
myarray.length = 0 //lo mismo que poner myarray = []; se vacia
console.log(myarray)

//slice: para separar elementos concretos
myarray = []
myarray.push("Ricardo")
myarray.push(29)
myarray.push(true)
console.log(myarray)
myslicearray = myarray.slice(1,2) // seleccionaria un solo elemento, el elemento entre antes de 1 y antes de 2
console.log(myslicearray)
console.log(myarray)
//splice: para eliminar elementos concretos
myarray = []
myarray.push("Ricardo")
myarray.push(29)
myarray.push(true)
console.log(myarray)
myarray.splice(0,1) // eliminaria un solo elemento, desde el elemento de 0 (0) y la cantidad (el otro 1)
console.log(myarray)

myarray = []
myarray.push("Ricardo")
myarray.push(29)
myarray.push(true)
console.log(myarray)
myarray.splice(0,1,"Ricardo 2") // agrega una entrada donde los elementos se retiraron
console.log(myarray)