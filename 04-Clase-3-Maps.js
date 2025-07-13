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
myMap = ([
    ["Nombre","Ricardo"],
    ["Apellido","Acosta"],
    ["Edad",29],
    ["Nickname","Donosoo"]
])
