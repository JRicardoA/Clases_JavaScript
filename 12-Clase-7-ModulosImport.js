import { add, PI, Circle} from "./12-Clase-7-ModulosExport.js"; // se puede hacer con autocompletado solo llamando a la funcion
import resta from "./12-Clase-7-ModulosExport.js";// se le puede cambiar el nombre en importacion por defecto
//funcion
console.log(add(9,9))

//propiedades
console.log(PI)

//importacion por defecto: es unica, si se intenta de nuevo va a salir error
console.log(resta(10,5))
//clases
let circle = new Circle(10)
console.log(circle.radius)
console.log(circle.area())

//Se puede importar de varios ficheros a la vez






