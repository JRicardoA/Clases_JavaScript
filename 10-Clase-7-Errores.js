// Excepcion
let myObject
console.log(myObject) // arroja undefined
//console.log(myObject.email) produce una excepcion que detendria el funcionamiento

//Bloque de error
// try and catch: intenta ejecutar un codigo, si no puede lo salta y muestra un mensaje
try{
    console.log(myObject.email)
}
catch (error) {
    console.log("Se ha producido un error:", error.message)

}
// Finally
try{
    console.log(myObject.email)
}
catch (error) { // si no se pone da igual que se ejecute el finally
    console.log("Se ha producido un error:", error.message)}
finally{ // se utiliza para ejecutar algo fundamental independientemente del error
    console.log("Esto se ejecuta siempre")}

//Lanzamiento de errores
function sumIntegers(a,b){
    if (typeof a !== "number" ||typeof b !== "number"){
        throw new TypeError("Esta operacion solo suma numeros")// un tipo de error
    }
    if (!Number.isInteger(a) ||!Number.isInteger(b)){
        throw new Error("Esta operacion solo suma enteros")//otro tipo de error
    }
     if (a == 0 ||b == 0){
        throw new SumZeroIntegerError("Se esta intentantdo sumar cero", a,b)//otro tipo de error
    }
    return a + b
}

console.log(sumIntegers(5,10))// operacion sin errores

try{ // se va a detenr al primer error, si lo que se quiere es que se detenga a cada uno, se deberia utilizar try y catch en cada uno
    //console.log(sumIntegers("5",10))
    console.log(sumIntegers(5.5 ,10))
    
} catch (error){
    if (error instanceof TypeError)
    console.log("se ha producido un error de tipo:", error.message)
    else if (error instanceof Error)
    console.log("se ha producido un error:", error.message)
}
// Excepcion personalizada
class SumZeroIntegerError extends Error{
    constructor(message,a, b){
        super(message)
        this.a = a
        this.b = b
        }
    printNumbers(){
        console.log(this.a, "+",this.b)
    }
}

try{
    console.log(sumIntegers(0,10))
}catch(error){
    console.log("Se ha producido un error personalizado:", error.message)
    error.printNumbers()
}

