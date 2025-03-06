var readline = require("readline");
var leitor = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let salario: number,
percentualReajuste: number,
salarioReajustado: number;

leitor.question(
    `Digite o seu salário:\n`,
    function (answer: string) {
        salario = parseFloat(answer);
        if (salario <= 650) {
            percentualReajuste = 10;
        } else {
            percentualReajuste = 5;
        }
        salarioReajustado = salario + (salario * percentualReajuste / 100);
        console.log(`Salário original: R$ ${salario.toFixed(2)}`);  
        console.log(`Percentual de reajuste: ${percentualReajuste}%`);
        console.log(`Salário reajustado: R$ ${salarioReajustado.toFixed(2)}`);
        leitor.close();
    }
)

