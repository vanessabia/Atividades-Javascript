function inteiroParaBinario(numero) {
    if (numero === 0) return "0";
 
 
    let binario = "";
    let n = Math.abs(numero);
 
 
    while (n > 0) {
        binario = (n % 2) + binario;
        n = Math.floor(n / 2);
    }
 
 
    return numero < 0 ? "-" + binario : binario;
 }
 
 
 document.getElementById("converterBtn").addEventListener("click", function () {
    const numeroInput = document.getElementById("numeroInput");
    const numero = parseInt(numeroInput.value.trim());
 
 
    if (isNaN(numero)) {
        document.getElementById("resultado").textContent = "Por favor, insira um número válido!";
        return;
    }
 
    const binario = inteiroParaBinario(numero);
    document.getElementById("resultado").textContent = `O número ${numero} em binário é: ${binario}`;
 }); 