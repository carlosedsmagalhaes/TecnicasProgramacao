var readline = require("readline");
var leitor = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let categoria: string;

leitor.question("Digite sua idade:\n", function (answer: number) {
  var resp = answer;
  if (resp <= 10) {
    categoria = "Criança";
  } else if (resp <= 13) {
    categoria = "Pré-Adolescente";
  } else if (resp <= 17) {
    categoria = "Adolescente";
  } else if (resp <= 59) {
    categoria = "Adulto";
  } else {
    categoria = "Idoso";
  }
  console.log(`Categoria: ${categoria}.`);
  leitor.close();
});
