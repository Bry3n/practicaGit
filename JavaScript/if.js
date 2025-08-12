//console.log("Script conectado exitosamente")
/* 
*/
/* 
var x = 0;
var x2 = 10;
let x3 = x * x2
//<<<<---- Valido solo con el tipo "var"
console.log("Hola el valor es" + x3)
if (x3 == 18) {
    console.log('es un adulto')
} else {
    console.log('para casa menor')
}
let dia = 'Lunes'
switch (dia) {
    case '8':
        console.log('es lunes')
        break
    case 'viernes':
        console.log('es viernes')
        break
    case 10:
        console.log('el valor es >>' + x3)
    default:
        console.log('es otro dia')
}

calcular(7, 9)
*/

const txtop1 = document.getElementById("op1")
const txtoperacion = document.getElementById("operador")
const txtop2 = document.getElementById("op2")
const btnCalcular = document.getElementById("calcular")
const tpResultado = document.getElementById("resultado")
function calcular(val1, val2) {
    /*let val1 = 19
    let cal = val1 + val2
    console.log('el valor de la val1 es '+ val1)
    console.log('el valor de la val2 es '+ val2)
    console.log('el valor de la funcion es '+ cal)*/
    const operacion = txtoperacion.value
    const op1 = txtop1.value
    const op2 = txtop2.value
}