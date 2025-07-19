//Exportacion de modulos
// funciones
export function add(a,b){
    return a + b
}

//Propiedades
export const PI = 3.14159

//Exportacion por defecto: es unica, si se intenta de nuevo va a salir error
// no todo es exportable por defecto
export default function substract(a,b){
    return a - b
}

//Clases
export class Circle{
    constructor(radius){
        this.radius = radius
    }
    area(){
        return Math.PI *Math.pow(this.radius,2)
    }
}