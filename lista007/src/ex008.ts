/* Exercício 8: Codificar o corpo da classe Calcular. Requisitos:
• A classe Matematica não poderá ser alterada;
• A soma e subtração deverá ser calculada nos métodos da classe
Matematica;
• O código em amarelo não poderá ser alterado.
class Matematica {
constructor(private a: number, private b: number) {
}
protected somar() {
console.log("Soma:", this.a + this.b);
}
protected subtrair() {
console.log("Diferença:", this.a - this.b);
}
}
class Calcular extends Matematica {
    public somar(): void {
        super.somar();
    }
    public subtrair(): void {
        super.subtrair();
    }
}
const calc = new Calcular(5,3);
calc.somar();
calc.subtrair(); */

class Matematica {
  constructor(private a: number, private b: number) {}
  protected somar() {
    console.log("Soma:", this.a + this.b);
  }
  protected subtrair() {
    console.log("Diferença:", this.a - this.b);
  }
}

class Calcular extends Matematica {
  public somar(): void {
    super.somar();
  }
  public subtrair(): void {
    super.subtrair();
  }
}

const calc = new Calcular(5, 3);
calc.somar();
calc.subtrair();
