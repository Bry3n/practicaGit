const pesoInput = document.getElementById('peso');
const alturaInput = document.getElementById('altura');
const calcularButton = document.getElementById('calcular');
const resultadoParagraph = document.getElementById('resultado');

calcularButton.addEventListener('click', calcularIMC);

function calcularIMC(event) {
    event.preventDefault();

    const peso = parseFloat(pesoInput.value);
    const altura = parseFloat(alturaInput.value);

    if (isNaN(peso) || isNaN(altura)) {
        resultadoParagraph.textContent = 'Por favor, ingresa valores válidos';
        return;
    }

    const imc = peso / (altura * altura);
    const categoria = getCategoriaIMC(imc);

    resultadoParagraph.textContent = `Tu IMC es: ${imc.toFixed(2)} (${categoria})`;
}

function getCategoriaIMC(imc) {
    if (imc < 18.5) {
        return 'Bajo peso';
    } else if (imc < 25) {
        return 'Peso normal';
    } else if (imc < 30) {
        return 'Sobrepeso';
    } else {
        return 'Obesidad';
    }
}