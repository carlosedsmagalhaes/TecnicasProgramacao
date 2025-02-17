class Operacao {
  numero1: number;
  numero2: number;

  constructor(numero1: number, numero2: number) {
    this.numero1 = numero1;
    this.numero2 = numero2;
  }

  somar(): number {
    return this.numero1 + this.numero2;
  }

  subtrair(): number {
    return this.numero1 - this.numero2;
  }

  dividir(): number {
    return (this.numero2 = 0 ? this.numero1 / 1 : this.numero1 / this.numero2);
  }
}


const op = new Operacao(3,5);
console.log('Soma: ', op.somar());
console.log('Diferença: ', op.subtrair());
console.log('Divisão: ', op.dividir());