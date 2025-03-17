interface MaiorNumero {
  valor: number;
  indice: number;
}

interface MenorNumero {
  valor: number;
  indice: number;
}

let numerosAleatorios: number[] = [];
let maiorNumero: MaiorNumero = {
  valor: 0,
  indice: 0,
};

let menorNumero: MenorNumero = {
  valor: Infinity,
  indice: 0,
};

for (let i = 0; i < 30; i++) {
  numerosAleatorios.push(Math.floor(Math.random() * 100 + 1));
  if (numerosAleatorios[i] > maiorNumero.valor) {
    maiorNumero.valor = numerosAleatorios[i];
    maiorNumero.indice = i;
  }

  if (numerosAleatorios[i] < menorNumero.valor) {
    menorNumero.valor = numerosAleatorios[i];
    menorNumero.indice = i;
  }
}

console.log("Números aleatórios: ", numerosAleatorios);
console.log("Maior número: ", maiorNumero.valor, "Índice: ", maiorNumero.indice);
console.log("Menor número: ", menorNumero.valor, "Índice: ", menorNumero.indice);

export {};
