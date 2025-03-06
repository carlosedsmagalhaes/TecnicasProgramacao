var readline = require("readline");
var leitor = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let numeroVotos: number[] = [],
  somaValidosBrancos: number,
  percentualVotacao: number,
  i: number = 0;

let solicitacoes: string[] = [
  "eleitores",
  "votos em branco",
  "votos nulos",
  "votos válidos",
  "votos obtidos",
];

function solicitacao() {
  leitor.question(
    `Digite o número total de ${solicitacoes[i]}:\n`,
    function (answer: string) {
      numeroVotos.push(parseInt(answer));
      i++;

      if (i < 5) {
        solicitacao();
      } else {
        somaValidosBrancos = numeroVotos[3] + numeroVotos[1];
        console.log(`Total de votos válidos: ${somaValidosBrancos}`);
        percentualVotacao = (numeroVotos[4] * 100) / numeroVotos[0];
        console.log(
          `Você recebeu ${percentualVotacao.toFixed(2)}% dos votos de um total de ${numeroVotos[0]} eleitores.`
        );
        console.log(
          numeroVotos[4] > somaValidosBrancos * 0.1
            ? "Você foi eleito."
            : "Você não foi eleito."
        );
        leitor.close();
      }
    }
  );
}

solicitacao();


export {};
