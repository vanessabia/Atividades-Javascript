function verificarPalindromo() {
    const str1 = document.getElementById('string1').value;
    const str2 = document.getElementById('string2').value;

    function isPalindrome(str) {
        let reversed = '';
        for (let i = str.length - 1; i >= 0; i--) {
            reversed += str[i];
        }
        return str === reversed;
    }

    const resultado1 = isPalindrome(str1);
    const resultado2 = isPalindrome(str2);

    let mensagem = `A primeira string (${str1}) `;
    mensagem += resultado1 ? "é um palíndromo." : "não é um palíndromo.";
    mensagem += `<br>A segunda string (${str2}) `;
    mensagem += resultado2 ? "é um palíndromo." : "não é um palíndromo.";

    document.getElementById('result').innerHTML = mensagem;
}