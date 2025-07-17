//objetos: la sintaxis es entre corchetes, tienen mas funcionalidades que las demas estructuras
let person1 = {
    name:"Ricardo",
    age: 37,
    alias:"Donosoo"
}

//acceso a propiedades
//notacion punto
console.log(person1.name)
//notacion corchetes: no recomendada
console.log(person1["name"]) 
//modificacion
person1.name = "Jose"
console.log(person1.name)

//Eliminar propiedades
delete person1.age
console.log(person1)

//nueva propiedad
person1.email = "jacosta@com"
person1.age = 29
console.log(person1)

let person2 = {
    name:"Ricardo",
    age: 37,
    alias:"Donosoo",
    walk: function(){
        console.log("la persona camina")
    },
    job:{
        name: "ingeniero",
        exp: 2,
        work: function(){
            console.log("La persona trabaja")
        }
    }
}

console.log(person2)
person2.job.work()

// igualdad de objetos

let person3 = {
    name:"Ricardo",
    age: 37,
    alias:"Donosoo",
    walk: function(){
        console.log("la persona camina")
    },
    job:{
        name: "ingeniero",
        exp: 2,
        work: function(){
            console.log(`${person3.name} trabaja desde hace ${this.exp} años`)// si se quiere hacer referencia a un objeto interno, se usa this. 
        }
    }
}

console.log(person2 == person3)// no son iguales aunque tengan los mismos datos, la instancia es unica
console.log(person2.name == person3.name) // forma correcta de comparar
person3.job.work()

// Funciones como objetos
function Person(name, age){// deberia ser una clase
    this.name = name
    this.age= age
}

let person5 = new Person("Ricardo", 29)
console.log(person5)
console.log(person5.name)