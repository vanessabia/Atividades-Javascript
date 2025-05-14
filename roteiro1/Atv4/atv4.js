function verificarParImpar() {
    const numero = parseInt(document.getElementById('userNumber').value);

    if (isNaN(numero)) {
        document.getElementById('result').textContent = "Por favor, insira um número válido.";
        return;
    }

    const resultado = (numero % 2 === 0) ? "par" : "ímpar";

    document.getElementById('result').textContent = `O número ${numero} é ${resultado}.`;
}