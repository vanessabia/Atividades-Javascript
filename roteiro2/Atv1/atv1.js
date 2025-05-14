const dataAtual = new Date();
console.log("Data atual:", dataAtual.toLocaleDateString());


const fimDoAno = new Date(dataAtual.getFullYear(), 11, 31);
const diasParaFimAno = Math.ceil((fimDoAno - dataAtual) / (1000 * 60 * 60 * 24));
console.log("Dias restantes para o final do ano:", diasParaFimAno);
 
const entradaUsuario = prompt("Digite uma data no formato AAAA-MM-DD:");
if (entradaUsuario) {
  const dataInformada = new Date(entradaUsuario);
 
  if (!isNaN(dataInformada)) {
    const diasParaData = Math.ceil((dataInformada - dataAtual) / (1000 * 60 * 60 * 24));
    if (diasParaData >= 0) {
      console.log(`Dias restantes até ${dataInformada.toLocaleDateString()}:`, diasParaData);
    } else {
      console.log("A data informada já passou!");
    }
  } else {
    console.log("Data inválida. Por favor, insira no formato correto.");
  }
} else {
  console.log("Nenhuma data foi informada.");
}