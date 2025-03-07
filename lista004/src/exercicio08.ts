var readline = require("readline");
var leitor = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let vogais: string[] = ["a", "e", "i", "o", "u"],
  letrasDigitadas: string[],
  palavraDigitada: string,
  quantidadeVogais: number = 0,
  quantidadeConsoantes: number = 0;

let continuar = true;
function perguntar() {
  if (continuar) {
    leitor.question("Digite uma palavra: ", function (answer: string) {
      palavraDigitada = answer;
      letrasDigitadas = palavraDigitada.split("");
      for (let index = 0; index < letrasDigitadas.length; index++) {
        const element: string = letrasDigitadas[index];
        if (vogais.includes(element)) {
          quantidadeVogais += 1;
        } else {
          quantidadeConsoantes += 1;
        }
      }
      console.log(
        `A palavra ${palavraDigitada} possui ${quantidadeVogais} ${quantidadeVogais > 1 || quantidadeVogais == 0 ?'vogais':'vogal'} e ${quantidadeConsoantes} ${quantidadeConsoantes > 1 || quantidadeConsoantes == 0?'consoantes':'consoante'}.`
      );
      leitor.close();
    });
  }
}
perguntar();
