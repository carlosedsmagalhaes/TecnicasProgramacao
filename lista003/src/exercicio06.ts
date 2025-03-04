var readline = require("readline");
var leitor = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let totalEleitores: number = 0,
  totalNulos: number = 0,
  totalBranco: number = 0,
  totalValidos: number = 0,
  votosObtidos: number = 0,
  somaValidosBrancos: number = 0,
  percentualVotacao: number = 0;

leitor.question(
  "Digite o número total de eleitores:\n",
  function (answer: number) {
    totalEleitores = answer;
  } 
);

/* leitor.question("Digite o número total de nulos:\n", function (answer: number) {
  totalNulos = answer;
});

leitor.question(
  "Digite o número total de votos em branco:\n",
  function (answer: number) {
    totalBranco = answer;
  }
);

leitor.question(
  "Digite o número total de votos válidos:\n",
  function (answer: number) {
    totalValidos = answer;
  }
);

leitor.question(
  "Digite o número total de votos obtidos:\n",
  function (answer: number) {
    votosObtidos = answer;
  }
); */

somaValidosBrancos = totalValidos + totalBranco;
percentualVotacao  = (votosObtidos * 100) / totalEleitores

if(votosObtidos > (somaValidosBrancos * 0.1)){
    console.log('Você foi eleito.')
}

console.log(`Você recebeu ${percentualVotacao}% de um total de ${totalEleitores} eleitores.`)


