class Questao {
  enunciado: string;
  peso: number;

  constructor(enunciado: string, peso: number) {
    this.enunciado = enunciado;
    this.peso = peso;
  }

  print(): void {
    console.log(`${this.enunciado} (${this.peso}, pts.)`);
  }
}

const quest1 = new Questao("O que é um array?", 0.5);
quest1.print();
