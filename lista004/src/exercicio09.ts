var readline = require("readline");
var leitor = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let numeroDigitado: number, fatoresPrimos: number[];

recebeNumero();

function recebeNumero() {
  leitor.question("Digite um número: ", function (answer: string) {
    numeroDigitado = parseInt(answer);
    if (validaNumeroPrimo(numeroDigitado)) {
      console.log(`O número ${numeroDigitado} é primo.`);
    } else {
      fatoresPrimos = validaFatoresPrimosNumero(numeroDigitado);
      console.log(
        `O número ${numeroDigitado} não é primo. Seus fatores primos ${
          fatoresPrimos.length > 1 ? "são" : "é"
        }: ${fatoresPrimos.join(", ")}.`
      );
    }
    leitor.close();
  });
}

function validaNumeroPrimo(numero: number) {
  if (numero <= 1) return false;
  for (let i = 2; i <= Math.sqrt(numero); i++) {
    if (numero % i === 0) {
      return false;
    }
  }
  return true;
}

function validaFatoresPrimosNumero(numero: number) {
  const fatores: Set<number> = new Set(); //SET evita duplicidades
  let divisor: number = 2;

  while (numero > 1) {
    if (numero % divisor == 0) {
      numero /= divisor;
      if (validaNumeroPrimo(divisor)) {
        fatores.add(divisor);
      }
    } else {
      divisor++;
    }
  }
  return Array.from(fatores); //Converte o SET para ARRAY
}

export {};
