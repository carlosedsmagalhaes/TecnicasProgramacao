class Cliente {
  private constructor(readonly nome: string, readonly idade: number) {}

  public static criar(nome: string, idade: number): Cliente {
    return new Cliente(nome, idade);
  }

  print() {
    console.log(this.nome, this.idade);
  }
}

const cliente = Cliente.criar("Maria", 21);
cliente.print();
