// Guia de estilo en JavaScript de Google https://google.github.io/styleguide/jsguide.html

/* se pueden hacer
comentrios en varias lineas
*/

/*
console.log("Hola Mundo, estoy aprendiendo JavaScript")
console.log(5)
console.log("5")
console.log(5 + 2)
console.log(5 - 2)
console.log(5 * 2)
console.log(5 / 2)
*/

//Creacion de variables
//var, tiene ciertos problemas, ya no se utiliza tanto
var helloWord = "Hola JavaScript"
console.log(helloWord)

//let
let helloWord2 = "Hola JavaScript 2"
console.log(helloWord2)

//const, no se puede reasignar su valor, es algo asi como una "VARIABLE CONSTANTE"
const helloWord3 = "Hola JavaScript 2"
console.log(helloWord3)

//TIPOS DE DATOS
//String (cadena de texto)
let myName = "Ricardo" 
    //las cadenas se pueden concadenar
    let greeting = "Hola " + myName
    console.log(greeting)
    // se puede ver su longitud
    console.log(greeting.length)
    // se puede acceder a un caracter
    console.log(greeting[0])
    //otras propiedades
    console.log(greeting.toUpperCase())//convierte toda la cadena de texto a mayusculas
    console.log(greeting.toLowerCase())//convierte toda la cadena de texto a minusculas
    console.log(greeting.indexOf("Hola"))// Encuentra la posicion de la palabra solicitada, es -1 sino existe 
    console.log(greeting.includes("Hola"))// Una funcion parecida a indexof pero genera un booleano 
    console.log(greeting.slice(0,5))// deja solo los caracteres dentro del rango especificado
    console.log(greeting.replace("Ricardo","Alumno"))// Remmplaza una palabra por otra

    //template literals// el acento invertido alt + 96 es util para escribir en varias lineas
    let message = `Hola, estoy
practicando Javascript`
    console.log(message)
    //o para incluir variables en cadenas de texto
    console.log(`Hola ${myName}, tu nombre fue incluido como una variable`)

//numeros
let edad = 29
let altura = 1.70
//Booleanos
let isStudent = true

//Undefined
let undefinedData // se puede llamar como sea, no se coloca igual y si se llama aparece como undefined

//Null, se diferencia del undefined porque se utiliza cuando intecionalmente queremos decir que no hay valor, no que aun no esta definido
let nullValue = null

//Symbol, crea un valor unico asociado
let mySymbol = Symbol("mySymbol")

//BigInt
let myBigInt = BigInt(328423843290851098509132850913285093128)
let myBigInt2 = 328423843290851098509132850913285093128n

//para mostrar el tipo de dato, se usa typeof
console.log(typeof myName)
 
// Los comandos de aritmeticos son parecidos a los que se utilizan en python excepto por 2
a=10
a++ // es un incremento, sube en 1
console.log(a)

b=10
b-- // es un decremento
console.log(b)

//Operadores de asignacion//////////////////////////////////////////////////////////////////////////////////////////////////////
let myVariable3 = 2
console.log(myVariable3)
myVariable3 += 3
console.log(myVariable3)

// Se utilizan para simplificar expresiones tipo myvariable = myvariable +3

/*
Se utilizan en con los demas comparadores

myVariable3 -= 3
myVariable3 *= 3
myVariable3 /= 3
myVariable3 %= 3
myVariable3 **= 3
*/

//Operadores de comparacion//////////////////////////////////////////////////////////////////////////////////////////
// Lanzan una respuesta que es un booleano
console.log(a < b)
console.log(a > b)
console.log(a <= b)
console.log(a >= b)
console.log(a == 11) // igualdad por valor
console.log(a == "11") // JavaScript reconoce la igualdad por valor en ambos casos
console.log(a === 11) // el triple igual se utiliza para ver igualdad por identidad (tipo y valor)
console.log(a === "11") // En este caso da falso porque no es uno es un numero y el otro una cadanea de texto
console.log(a != 11) // diferente de (valor)
console.log(a !== 11) // diferente de (valor y tipo)

// se pueden comparar muchas cosas como es el caso de los null y los undefined
console.log(undefined == null)
console.log(undefined === null)

//JavaScript tiene valores y expresiones que siempre son verdaderas (Truthy values) 
  // Todos los numeros positivos y negativos menos el cero
  // Todas las cadenas de texto menos las vacias
  // el boolean True

//Y tiene valores y expresiones que siempre son negativas (Falsy values) 
  //0
  //0n
  //null
  //undefined
  //NaN (not a number)
  //boolean false
  //cadenas de texto vacias

//Operadores logicos//////////////////////////////////////////////////////////////////////////////////////////
// and (&&)
console.log(10 < 15 && 15 > 20)
console.log(10 < 15 && 15 < 20)

// or (||)
console.log(10 < 15 || 15 > 20)
console.log(10 < 15 || 15 < 20)

// not (!)// se utiliza para invertir el valor, obtener el opuesto exacto de lo que se buscaba
console.log(!(10 < 15 || 15 > 20))
console.log(!(10 < 15 || 15 < 20))

//Operadores ternarios//////////////////////////////////////////////////////////////////////////////////////////
// hacen la funcion de un condicional
const isRaining = false
 isRaining ? console.log("Esta lloviendo") : console.log("No esta lloviendo")