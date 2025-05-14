document.getElementById("calcularBtn").addEventListener("click", function () {
    const input = document.getElementById("inputValores").value;
    const vetor = input.split(",").map(Number);
    const maiorValor = Math.max(...vetor);
    document.getElementById("resultado").textContent = `O maior valor do vetor é: ${maiorValor}`;
});