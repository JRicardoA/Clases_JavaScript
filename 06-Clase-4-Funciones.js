// Funciones

function myFunc(){ // al igual que en python, las funciones tiene que llamarse
    console.log("Hola Funcion")
}

for (let i = 0 ; i < 10 ; i++){
    myFunc()
}

// Con parametros

function myFunWithParams(name) {
    console.log(`Hola ${name}`)
}

myFunWithParams("Ricardo")
// Funciones anonimas

const myFunc2 = function(name){
    console.log(`Hola ${name}`)
}
myFunc2("Ricardo")

//Arrow Functions: funcion simplificada que podemos hacer en una linea

const myFunc3 = (name) => console.log(`Hola ${name}`)
myFunc3("Ricardo")

//parametros

function sum (a,b){
    console.log(a +b)
}

sum (5,10)

// valores por defecto: utilizados si no se declaran las variables en la funcion

function sum2(a = 0,b = 0) {
    console.log(a + b)
}

sum2(5)
sum2()

//retorno de valores: si no se desea que se muestre el valor, solo que se clacule y que se muestre en otro momento

function mult (a,b) {
    return a*b
}

console.log(mult(6,6))

// Funciones anidadas: se llama la funcion externa, pero la funcion interna no se puede llamar directamente
function extern() {
    console.log("Funcion externa")
    function intern() {
        console.log("Funcion interna")
    }
    intern()
}

extern()
//intern(): este llamado provocaria un error al no existir dentro del scope

//Funciones de orden Superior: utiliza de parametros, una funcion y el parametro para dicha funcion

function applyFunction(func, param){
    func(param)
}

applyFunction(myFunc3, "Funcion de orden superior")

//For Each: ejecuta la funcion para cada elemento del array, map o set. Tiene la desventaja de que no se puede utilizar break o continue

myarray = ["Jose", 29, true]

myarray.forEach((value)=> console.log(value + " Pero no importa"))

let myMap = new Map([
    ["Nombre","Ricardo"],
    ["Apellido","Acosta"],
    ["Edad",29],
    ["Nickname","Donosoo"]
])

myMap.forEach((keys,value)=> console.log(`Hola, tu ${value} es ${keys}`))