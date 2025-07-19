//Console
//log
console.log("Hola JavaScript")
//error
console.error("Error")
console.error("Error al conectarse con la base de datos", new Error("Conexion fallida."))
//warn
console.warn("Este es un mensaje de advertencia.")
//info
console.info("Este es un mensaje de informacion adicional.")
//table
let data = [
    ["Ricardo", 29],
    ["Sara", 10]
]
console.table(data)

let data2 = [//agrega encabezados
    {name:"Ricardo", age:29},
    {name:"Sara", age:10}
]
console.table(data2)

//group: agrega un encabezado que se acaba con groupend
console.group("Usuario:")
console.log("Ricardo")
console.log("29")
console.groupEnd()

//time
console.time("Tiempo de ejecucion")
for (let i = 0 ; i <10; i++){
    console.log(`Hola ${i}`)}
console.timeEnd("Tiempo de ejecucion")// debe terminar con el mismo nombre con el que inicia o no lo reconoce

//assert: lanza un mensaje dado un condicional
let age = 17
console.assert(age >= 18, "El usuario debe ser mayor de edad")

//count: para contabilizar algo
console.count("Click")
console.count("Click")
console.count("Click")
console.countReset("Click")
console.count("Click")

//trace
function funcA(){
    funcB()
}

function funcB(){
 console.trace("Seguimiento de la ejecucion.")
}

funcA()

//clear: vaciar la consola
//console.clear()