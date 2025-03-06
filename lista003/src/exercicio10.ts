/*Faça um script que solicite ao usuário que digite um número que represente um determinado mês do ano. Após
a leitura escreva por extenso qual o mês lido. Caso o número digitado não esteja na faixa de 1 <= 12 escreva
uma mensagem no console informando ao usuário do erro na digitação.*/
var readline = require("readline");
var leitor = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let meses: string[] = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ],
  mesAno: number;

leitor.question(
  "Digite um número que represente um mês do ano:\n",
  function (answer: string) {
    mesAno = parseInt(answer);
    if (mesAno >= 1 && mesAno <= 12) {
      switch (mesAno) {
        case 1:
          console.log("Janeiro");
          break;
        case 2:
          console.log("Fevereiro");
          break;
        case 3:
          console.log("Março");
          break;
        case 4:
          console.log("Abril");
          break;
        case 5:
          console.log("Maio");
          break;
        case 6:
          console.log("Junho");
          break;
        case 7:
          console.log("Julho");
          break;
        case 8:
          console.log("Agosto");
          break;
        case 9:
          console.log("Setembro");
          break;
        case 10:
          console.log("Outubro");
          break;
        case 11:
          console.log("Novembro");
          break;
        case 12:
          console.log("Dezembro");
          break;
      }
    } else {
      console.log("O número digitado não corresponde a um mês do ano.");
    }
    leitor.close();
  }
);
