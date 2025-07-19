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
    #bank
    
    constructor(name = "Sin Nombre", age = 0, alias = "sin alias", bank){
            this.#name = name
            this.#age = age
            this.#alias = alias
            this.#bank = bank
        }
       pay() {
            this.#bank
        }

}

let person6 = new GetPerson("Ricardo", 29, "Donosoo", 564156415135)
console.log(person6)//en este caso saldria GetPerson {}, vacio ya que todo es privado
///////////////////////////////////////////////////////////////////////////////////////
class GetPerson2 {

    #name
    #age
    #alias
    #bank
    
    constructor(name = "Sin Nombre", age = 0, alias = "sin alias", bank){
            this.#name = name
            this.#age = age
            this.#alias = alias
            this.#bank = bank
        }
       get  name() { // se crea una funcion que puede retornar un valor oculto con la palabra reservada get
            return this.#name
        }
}

let person7 = new GetPerson2("Ricardo", 29, "Donosoo", 564156415135)
console.log(person7.name) // se llama la funcion como name, no como get
///////////////////////////////////////////////////////////////////////////////////////
class GetSetPerson{

    #name
    #age
    #alias
    #bank
    
    constructor(name = "Sin Nombre", age = 0, alias = "sin alias", bank){
            this.#name = name
            this.#age = age
            this.#alias = alias
            this.#bank = bank
        }
       get  name() { 
            return this.#name
        }
        get  bank() { 
            return this.#bank
        }
        set bank(newbank) { 
            this.#bank = newbank
        }
}

let person8 = new GetSetPerson("Ricardo", 29, "Donosoo", 111111)
console.log(person8.bank)
person8.bank = 222222 // se actualiza el numero de banco
console.log(person8.bank)

/// Herencia //////////////////////////////////////////////////////////////////////////////////////////// 
class Animal {

    constructor(name){
        this.name = name
    }

    sound(){
        console.log("Emite un sonido generico")
    }
}

class Dog extends Animal{ // se utiliza extend para la herencia
    run(){
        console.log("El perro corre")
    }
    sound(){ 
        console.log("Woof")
        // si se utilizara super.sound() haraia lo mismo declarado en Animal, no tendria sentido porque seria redundante
    }
}

let MyDog = new Dog("RicarDog")
MyDog.run()
MyDog.sound()

class Fish extends Animal{ 
    constructor(name, size){
        super(name) // hace un llamado a la superclase, en este caso Animal y usa el name de ese constructor
        this.size = size // se agrega la carateristica adicional que no esta en Animal
    }
    swim(){
        console.log("El pez nada")
    }
}

let MyFish = new Fish("Pescardo", 10)
MyFish.swim()
MyFish.sound()

// Metodos Estaticos /////////////////////////////////////////////////
class MathOperations {

    static sum(a, b) {
        return a + b
    }
}
// no se utiliza let, se utiliza static cunado no se necesita crear nuevas instancias
console.log(MathOperations.sum(5,10))