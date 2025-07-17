let person3 = {
    name:"Ricardo",
    age: 29,
    alias:"Donosoo",
    walk: function(){
        console.log("la persona camina")
    },
    job:{
        name: "ingeniero",
        exp: 2,
        work: function(){
            console.log(`${person3.name} trabaja desde hace ${this.exp} años`)
        }
    }
}
//Desestructuracion: extrae valores y los asigna a variables
//Arrays
let numbers = [1, 2, 3, 4, 5]
let[MyValue1, MyValue2, MyValue3, MyValue4, MyValue5, MyValue6 = 0] = numbers
console.log(MyValue1)
console.log(MyValue2)
console.log(MyValue3)
console.log(MyValue4)
console.log(MyValue5)
console.log(MyValue6)// es 0 porque es valor predeterminado ya que no existe en numbers
// ignorar elementos de array: se dejan los espacios segudiso de comas
let [MyValue7, , , , MyValue11] = numbers
console.log(MyValue7)
console.log(MyValue11)

//Objetos

let {name, age, alias} = person3
console.log(name)
console.log(age)
console.log(alias)

//Objetos con valores predeterminados

let {name2, age2, alias2, mail = "hola@hola.com"} = person3
console.log(name2)// sale como undefined porque tenemos que usar los nombres de las variables en los objetos
console.log(age2)// el mismo caso que en name2
console.log(alias2)// el mismo caso que en name2
console.log(mail)// no existe entonces arroja el valor predeterminado

//Objetos con nuevos nombres de variables
let {name:name3, age:age3, alias:alias3} = person3 // se utilizan los 2 puntos, no importa el orden solo el nombre correcto de la variable de objeto
console.log(name3)
console.log(age3)
console.log(alias3)

//Objetos con objetos anidados
let {name: name4, job:{name: jobname}} = person3
console.log(name4)
console.log(jobname)

//Propagar(...)
//arrays
let myArray =  [1, 2, 3, 4, 5]
let myArray2 = [...myArray] // copia de arrays
let myArray3 = [...myArray, 6, 7] // copia y modificacion de arrays
let myOtherArray = [6, 7, 8, 9, 10]
let myArray4 = [...myArray,...myOtherArray]//combina 2 arrays
console.log(myArray2)
console.log(myArray3)
console.log(myArray4)
//Objects
let person4 = {...person3}//copia de person 3
let person5 = {...person3, email:"hola@hola.com"}// copia y aumento a person 3
console.log(person4)
console.log(person5)