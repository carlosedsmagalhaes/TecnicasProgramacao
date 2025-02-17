class Point {
    numero1: number;
    numero2: number;
  
    constructor(numero1: number, numero2: number) {
      this.numero1 = numero1;
      this.numero2 = numero2;
    }
  
    distance(ponto: Point): number {
      return Math.sqrt(
        Math.pow(ponto.numero1 - this.numero1, 2) +
          Math.pow(ponto.numero2 - this.numero2, 2)
      );
    }
  }

class Rectangle {
  infEsquerdo: Point;
  superiorDireito: Point;

  constructor(infEsquerdo: Point, superiorDireito: Point) {
    this.infEsquerdo = infEsquerdo;
    this.superiorDireito = superiorDireito;
  }

  area(): number {
    let largura = this.infEsquerdo.numero1 - this.superiorDireito.numero1
    let altura = this.infEsquerdo.numero2 - this.superiorDireito.numero2
    return largura * altura;
  }
}

const sd = new Point(3, 5);
const ie = new Point(1, 2);

const r = new Rectangle(ie, sd);
console.log("Área: ", r.area());
