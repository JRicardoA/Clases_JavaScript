// LO QUE EN PYTHON SE CONOCERIA COMO UN DICCIONARIO

//DECLARACION  // igual se utilizan corchetes
let myMap = new Map([
    ["Nombre","Ricardo"],
    ["Apellido","Acosta"],
    ["Edad",29],
    ["Nickname","Donosoo"]
])

console.log(myMap)
// Metodos
// Set: añade una nueva key o la actualiza
myMap.set("Correo", "Ricardo@hotmail")
myMap.set("Nickname", "JAcostaD")

console.log(myMap)
//Get: Retorna el value dada la key
console.log(myMap.get("Nickname"))
//has: Retorna un bollean sobre si esa key existe o no
console.log(myMap.has("Nickname"))
console.log(myMap.has("Genero"))
//Delete: elimina una key y su respectivo value
console.log(myMap.delete("Correo"))
console.log(myMap)
//clear: vacia el map
myMap.clear()
console.log(myMap)
myMap = new Map([ // al parecer si bien no necesita ser declarada de nuevo, necesita new map o genera lo que creo es un array
["Nombre","Ricardo"],
["Apellido","Acosta"],
["Edad",29],
["Nickname","Donosoo"]
])
// Keys, entries y values: muestra dichos elementos
console.log(myMap)
console.log(myMap.keys())
console.log(myMap.values())
console.log(myMap.entries())

//size: muestra el tamaño del mapa
console.log(myMap.size)