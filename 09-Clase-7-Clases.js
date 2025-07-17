//Clases
class Person{
    constructor(name, age, alias){ // constructor es un objeto importante para este tipo de estructuras
        this.name = name
        this.age = age
        this.alias = alias
    }
}
let person1 = new Person("Ricardo", 29, "Donosoo")
console.log(person1) 

//Valores por defecto
class defaultPerson{
    constructor(name = "Sin Nombre", age = 0, alias = "sin alias"){
        this.name = name
        this.age = age
        this.alias = alias
    }
}
let person2 = new defaultPerson("Ricardo", 29)// al faltar alias, coloca "sin alias" por defecto
console.log(person2)

//acceso a propiedades
console.log(person2.age)

person2.alias = "donosoo"
console.log(person2)

//Funciones en clases
class PersonWithFunct{
    constructor(name = "Sin Nombre", age = 0, alias = "sin alias"){
        this.name = name
        this.age = age
        this.alias = alias
    }
    walk() {
        console.log("la persona camina.")
    }
}

let person4 = new PersonWithFunct("Ricardo", 29, "Donosoo")
person4.walk()

//Propiedades privadas: en el caso de que queramos que algo no pueda ser leido
class PrivatePerson {

    #bank// el # se utiliza para datos privados
    constructor(name = "Sin Nombre", age = 0, alias = "sin alias", bank){
            this.name = name
            this.age = age
            this.alias = alias
            this.#bank = bank
        }
       pay() {
            this.#bank
        }

}

let person5 = new PrivatePerson("Ricardo", 29, "Donosoo", 564156415135)
console.log(person5)

//Getters y Setters
class GetPerson {

    #name
    #age
    #alias
    
    constructor(name = "Sin Nombre", age = 0, alias = "sin alias", bank){
            this.name = name
            this.age = age
            this.alias = alias
            this.#bank = bank
        }
       pay() {
            this.#bank
        }

}

let person6 = new PrivatePerson("Ricardo", 29, "Donosoo", 564156415135)
console.log(person6)