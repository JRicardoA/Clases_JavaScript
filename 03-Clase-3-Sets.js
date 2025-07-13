//Sets

//Declaracion
let mySet = new Set() // solo se puede declarar un set de esta forma
console.log(mySet)

//inicializacion
 mySet = new Set(["Jose","Ricardo",29])// se deben poner corchetes para inicializar ya con datos
 console.log(mySet)

 //Metodos comunes
// add: agrega
mySet.add("Correo")
console.log(mySet)

// delete: borra, pero no por indice... por elemento
mySet.delete("Correo")
console.log(mySet)
console.log(mySet.delete("Jose")) // Produce un boolean si es que el elemento existio y fue eliminado
console.log(mySet)

// has: arroja un bollean sobre si el elemento existe o no existe
console.log(mySet.delete("Ricardo")) // arroja un true

//size: la cantidad de elementos 
console.log(mySet.size) // en este caso 1

//Convertir un set en array 
let myArray = Array.from(mySet)
console.log(myArray)

//Convertir un array en set 
let Set2 = new Set(myArray)
console.log(Set2)

//Diferencia entre Array y Set: En set NO hay duplicados, si cambia un mayuscula YA es otro elemento
