function calcular(operacao) {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);

    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById('result').textContent = "Por favor, insira números válidos.";
        return;
    }

    let resultado;
    switch (operacao) {
        case '+':
            resultado = num1 + num2;
            break;
        case '-':
            resultado = num1 - num2;
            break;
        case '*':
            resultado = num1 * num2;
            break;
        case '/':
            if (num2 === 0) {
                document.getElementById('result').textContent = "Não é possível dividir por zero.";
                return;
            }
            resultado = num1 / num2;
            break;
        default:
            document.getElementById('result').textContent = "Operação inválida.";
            return;
    }

    document.getElementById('result').textContent = `Resultado: ${resultado}`;
}