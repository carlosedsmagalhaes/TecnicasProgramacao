var readline = require("readline");
var leitor = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const setNumerosDigitados: Set<number> = new Set();
let numeroDigitado: number,
  i: number = 0,
  listaNumerosDigitados: number[] = [],
  soma: number = 0;

function recebeNumero() {
  leitor.question(
    "Digite um número entre 1 e 100: ",
    function (answer: string) {
      numeroDigitado = parseInt(answer);
      if (
        setNumerosDigitados.has(numeroDigitado) ||
        numeroDigitado > 100 ||
        numeroDigitado < 1
      ) {
        console.log(
          `O número ${numeroDigitado} é inválido ou já foi informado.`
        );
      } else {
        i++;
        setNumerosDigitados.add(numeroDigitado);
      }
      if (i < 10) {
        recebeNumero();
      } else {
        listaNumerosDigitados = Array.from(setNumerosDigitados);
        listaNumerosDigitados.sort((a, b) => a - b);
        const maiorNumero: number =
            listaNumerosDigitados[listaNumerosDigitados.length - 1],
          menorNumero: number = listaNumerosDigitados[0];

        soma += menorNumero;

        for (let index = 1; index < listaNumerosDigitados.length; index++) {
          soma += listaNumerosDigitados[index];
        }

        console.log(
          `Os números digitados em ordem crescente: ${listaNumerosDigitados.join(
            ", "
          )}.`
        );

        console.log(
          `O maior número digitado foi ${maiorNumero}, o menor número digitado foi ${menorNumero} e a soma entre eles é igual a ${soma}.`
        );
        leitor.close();
      }
    }
  );
}

recebeNumero();

export {};
