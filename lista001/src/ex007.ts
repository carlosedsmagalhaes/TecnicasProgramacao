class Ponto {
  numero1: number;
  numero2: number;

  constructor(numero1: number, numero2: number) {
    this.numero1 = numero1;
    this.numero2 = numero2;
  }

  distancia(ponto: Ponto): number {
    return Math.sqrt(
      Math.pow(ponto.numero1 - this.numero1, 2) +
        Math.pow(ponto.numero2 - this.numero2, 2)
    );
  }
}

const a = new Ponto(3, 5);
const b = new Ponto(1, 2);
console.log("Distância:", a.distancia(b));
