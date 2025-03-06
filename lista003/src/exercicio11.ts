var readline = require("readline");
var leitor = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let informacoes: string[] = [],
  descricoes: string[] = [
    "o nome do empregado",
    "a categoria do empregado",
    "o salário do empregado",
  ],
  i: number = 0;

function informacoesEmpregado() {
  leitor.question(`Digite ${descricoes[i]}:\n`, function (answer: string) {
    informacoes.push(answer);
    i++;
    if (i < 3) {
      informacoesEmpregado();
    } else {
      switch (informacoes[1].toUpperCase()) {
        case "A":
        case "C":
        case "F":
        case "H":
          console.log(
            `O empregado ${informacoes[0].toUpperCase()} da categoria ${
              informacoes[1].toUpperCase()
            } terá um aumento de 10% no salário, passando de R$${
              informacoes[2]
            } para R$${parseFloat(informacoes[2]) * 1.1}.`
          );
          break;

        case "B":
        case "D":
        case "E":
        case "I":
        case "J":
        case "T":
          console.log(
            `O empregado ${informacoes[0].toUpperCase()} da categoria ${
              informacoes[1].toUpperCase()
            } terá um aumento de 15% no salário, passando de R$${
              informacoes[2]
            } para R$${parseFloat(informacoes[2]) * 1.15}.`
          );
          break;

        case "K":
        case "R":
          console.log(
            `O empregado ${informacoes[0].toUpperCase()} da categoria ${
              informacoes[1].toUpperCase()
            } terá um aumento de 25% no salário, passando de R$${
              informacoes[2]
            } para R$${parseFloat(informacoes[2]) * 1.25}.`
          );
          break;

        case "L":
        case "M":
        case "N":
        case "O":
        case "P":
        case "Q":
        case "S":
          console.log(
            `O empregado ${informacoes[0].toUpperCase()} da categoria ${
              informacoes[1].toUpperCase()
            } terá um aumento de 35% no salário, passando de R$${
              informacoes[2]
            } para R$${parseFloat(informacoes[2]) * 1.35}.`
          );
          break;

        case "U":
        case "V":
        case "X":
        case "Y":
        case "W":
        case "Z":
          console.log(
            `O empregado ${informacoes[0].toUpperCase()} da categoria ${
              informacoes[1].toUpperCase()
            } terá um aumento de 50% no salário, passando de R$${
              informacoes[2]
            } para R$${parseFloat(informacoes[2]) * 1.5}.`
          );
          break;
      }
      leitor.close();
    }
  });
}

informacoesEmpregado();

export {};
