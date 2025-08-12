const numeroInput = document.getElementById('numero');
const verificarButton = document.getElementById('verificar');
const resultadoParagraph = document.getElementById('resultado');

verificarButton.addEventListener('click', verificarDivisibilidad);

function verificarDivisibilidad(event) {
    event.preventDefault();

    const numero = parseInt(numeroInput.value);

    if (isNaN(numero)) {
        resultadoParagraph.textContent = 'Por favor, ingresa un número válido';
        return;
    }

    if (numero % 3 === 0 && numero % 5 === 0) {
        resultadoParagraph.textContent = `El número ${numero} es divisible entre 3 y 5`;
    } else if (numero % 3 === 0) {
        resultadoParagraph.textContent = `El número ${numero} es divisible entre 3, pero no entre 5`;
    } else if (numero % 5 === 0) {
        resultadoParagraph.textContent = `El número ${numero} es divisible entre 5, pero no entre 3`;
    } else {
        resultadoParagraph.textContent = `El número ${numero} no es divisible entre 3 ni 5`;
    }
}