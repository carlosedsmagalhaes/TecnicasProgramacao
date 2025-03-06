var readline = require("readline");
var leitor = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let ladosTriangulo: number[] = [],
  i: number = 0;

function medidaLadosTriangulo() {
  leitor.question(
    `Digite o ${i + 1}° lado do triângulo:\n`,
    function (answer: string) {
      ladosTriangulo.push(parseFloat(answer));
      i++;
      if (i < 3) {
        medidaLadosTriangulo();
      } else {
        ladosTriangulo.sort((a, b) => a - b);
        if (ladosTriangulo[0] + ladosTriangulo[1] > ladosTriangulo[2]) {
          if (
            ladosTriangulo[0] === ladosTriangulo[1] &&
            ladosTriangulo[1] === ladosTriangulo[2]
          ) {
            console.log("Triângulo equilátero.");
          } else if (
            ladosTriangulo[0] === ladosTriangulo[1] ||
            ladosTriangulo[1] === ladosTriangulo[2]
          ) {
            console.log("Triângulo isósceles.");
          } else {
            console.log("Triângulo escaleno.");
          }
        } else {
          console.log("Os valores inseridos não formam um triângulo.");
        }
        leitor.close();
      }
    }
  );
}

medidaLadosTriangulo();

export {};
