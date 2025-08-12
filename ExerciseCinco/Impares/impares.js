
function mientras() {

    let i = 1; //declaro la variable let con un value de 0
    while (i <= 10) { //ciclo repetitivo, se le puede poner contador y un acumulador

        console.log("interacion", i);

        i++; //contador para salir del while
    }
}

function impar() {


    let i = 1; //declaro la variable let con un value de 0
    while (i <= 10) { //ciclo repetitivo, se le puede poner contador y un acumulador

        console.log("interacion", i);

        i += 2; //contador para salir del while
    }
}

function imparIf() {


    let i = 1; // Inicializamos el contador
    const limite = 10; // Definimos el límite superior

    while (i <= limite) {
        if (i % 2 !== 0) { // Verificamos si es impar
            console.log(i); // Imprimimos el número impar
        }
        i++; // Incrementamos el contador
    }
}

