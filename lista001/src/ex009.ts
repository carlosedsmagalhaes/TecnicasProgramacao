const promptSync = require("prompt-sync");
const prompt = promptSync();


class Numero {
  nros: number[] = [];

  add(nro: number): void {
    this.nros.push(nro);
  }

  sum(): number {
    let s = 0;
    for (let index = 0; index < this.nros.length; index++) {
      s += this.nros[index];
    }

    return s;
  }

  max() {
    let maior = this.nros[0];
    for (let index = 0; index < this.nros.length; index++) {
      if (this.nros[index] > maior) {
        maior = this.nros[index];
      }
    }

    return maior;
  }
}

const numero = new Numero()
let novoNumero:number = 0;
let strNovoNumero:string;

for (let index = 0; index < 5; index++) {
    strNovoNumero = prompt("Digite um número: ");
    novoNumero = parseInt(strNovoNumero)
    numero.add(parseInt(novoNumero));
    
}

console.log('Somatório: ', numero.sum())
console.log('Maior: ', numero.max())