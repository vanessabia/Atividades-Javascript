function calcularFatorial(numero) {
    if (numero === 0 || numero === 1) {
        return 1; // Base da recursão
    }
    return numero * calcularFatorial(numero - 1);
    }

// Função para calcular o fatorial de um número inteiro não negativo
    document.getElementById("calcularBtn").addEventListener("click", function () {
    const numero = parseInt(document.getElementById("numeroInput").value);
   
    if (isNaN(numero) || numero < 0) {
        document.getElementById("resultado").textContent = "Por favor, insira um número inteiro não negativo.";
        return;
    }
   
    const fatorial = calcularFatorial(numero);
    document.getElementById("resultado").textContent = `O fatorial de ${numero} é: ${fatorial}`;
    }); 