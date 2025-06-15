import { Imc } from "./types/index";

class Pessoa extends Imc {
  constructor(peso: number, altura: number) {
    super(peso, altura);
  }

  getImc() {
    return super.getImc();
  }

  classificacao(): string {
    const imc = this.getImc();
    if (imc < 18.5) {
      return "Abaixo do peso";
    } else if (imc < 24.9) {
      return "Peso normal";
    } else if (imc < 29.9) {
      return "Sobrepeso";
    } else if (imc < 34.9) {
      return "Obesidade grau I";
    } else if (imc < 39.9) {
      return "Obesidade grau II";
    } else {
      return "Obesidade grau III (obesidade mórbida)";
    }
  }
}

const pessoa = new Pessoa(70, 1.62);
console.log("IMC:", pessoa.getImc());
console.log("Classificação:", pessoa.classificacao());
