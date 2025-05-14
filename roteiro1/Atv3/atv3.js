function contarVogais() {
    const input = document.getElementById('userInput').value;
    const vogais = 'aeiouAEIOU';
    let count = 0;

    for (let i = 0; i < input.length; i++) {
        if (vogais.includes(input[i])) {
            count++;
        }
    }

    document.getElementById('result').textContent = `Número de vogais: ${count}`;
}