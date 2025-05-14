class Pessoa {
   constructor(nome, idade) {
       this.nome = nome;
       this.idade = idade;
   }


   mostrarDados() {
       return `Nome: ${this.nome}, Idade: ${this.idade}`;
   }
}


class Funcionario extends Pessoa {
   constructor(nome, idade, salario) {
       super(nome, idade);
       this.salario = salario;
   }


   mostrarSalario() {
       return `O salário de ${this.nome} é: R$ ${this.salario.toFixed(2)}`;
   }
}

const funcionario = new Funcionario("Vanessa", 19, 5000.00);
console.log(funcionario.mostrarDados());
console.log(funcionario.mostrarSalario());
