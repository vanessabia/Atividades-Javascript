document.getElementById("adicionarBtn").addEventListener("click", function () {
    const itemInput = document.getElementById("itemInput");
    const lista = document.getElementById("lista");
 
 
    const textoItem = itemInput.value.trim();
 
 
    if (textoItem === "") {
        alert("Por favor, insira um texto válido!");
        return;
    }
 
    const novoItem = document.createElement("li");
    novoItem.textContent = textoItem;
    lista.appendChild(novoItem);
 
 
    itemInput.value = "";
    itemInput.focus();
 });
 