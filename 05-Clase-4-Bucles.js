// bucles
//for: con minuscula
for (let i = 0 ; i <5; i++){// declara la variable, da la condicion para detenerse, y da la condicion para el cambio
    console.log(`Hola ${i}`)
}

const numbers = [1, 2, 3, 4, 5]
for (let i = 0 ; i < numbers.length ; i++){
    console.log(`Elemento ${numbers[i]}`)
}

// while
// while (true) : bucle infinito
let i = 0
while (i < 5) {
    console.log(`Hola 2.0 ${i}`)
    i++
}

// do while: ejecuta antes de comprobar
i = 6
do{
    console.log(`Hola 3.0 ${i}`)
    i++
} while (i<5)

// for of: para estructuras de datos
let myArray = ["Jose", 29, true]
let mySet = new Set(["Jose","Ricardo",29])
let myMap = new Map([
    ["Nombre","Ricardo"],
    ["Apellido","Acosta"],
    ["Edad",29],
    ["Nickname","Donosoo"]
])

for (let valor of myArray){ // Hace un recorrido por los datos del array
    console.log(valor)
}

for (let valor of myMap.get("Nickname")){ // tambien puede tratar las letras de un string como una estructura de datos
    console.log(valor)
}

// se puede usar continue para ignorar un ciclo y break para detener la ejecucion del bucle

for (let i = 0 ; i <11; i++){
    if (i == 5)
        continue
    if (i == 8)
        break
    console.log(`Hola ${i}`)
}
