function Pessoa (nome, idade) {
    this.nome = nome;
    this.idade = idade;
}

function Funcionario(nome, idade, cargo, salario) {
    this.cargo = cargo;
    this.salario = salario;

    Pessoa.call(this, nome, idade)
}

function Cliente(nome, idade, telefone, endereco) {
    this.telefone = telefone;
    this.endereco = endereco;

    Pessoa.call(this, nome, idade)
}

const funcionario1 = new Funcionario("Gabriel", 21, "Desenvolvedor FullStack", 6000);
const funcionario2 = new Funcionario("isaias", 29, "Desenvolvedor Back-end", 4000);

const cliente1 = new Cliente ("Debora", 20, "6199452013", "Samambaia norte");

console.log (funcionario1);
console.log (funcionario2);

console.log (cliente1);