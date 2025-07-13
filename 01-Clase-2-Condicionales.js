//if
let age = 29
if (age == 29){
  console.log("la edad es 29")
}

//else
let age2 = 20
if (age2 == 29){
  console.log("la edad es 29")
} else {console.log("la edad no es 29")}

//if else
let age3 = 17
if (age3 == 29){
  console.log("la edad es 29")
} else if (age3 < 18) {console.log("Es menor de edad")} 
else {console.log("la edad es 29")}

// operador ternario
const message = age = 29 ? "la edad es 29 2.0" : "La edad no es 29 2.0"
console.log(message)

//switch: util si se inspeccionan varias opciones dentro de una misma variable. necesita la instruccion break al finalizar
// no permite concatenar comparaciones como es el caso del if
let day = 4
let dayname

switch (day) {
  case 0:
    dayname = "lunes"
    break
  case 1:
    dayname = "martes"
    break
  case 2:
    dayname = "miercoles"
    break
  case 3:
    dayname = "jueves"
    break
  case 4:
    dayname = "viernes"
    break
  case 5:
    dayname = "sabado"
    break
  case 6:
    dayname = "domingo"
}

console.log(dayname)