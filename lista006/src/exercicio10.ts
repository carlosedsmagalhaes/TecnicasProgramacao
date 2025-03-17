var readline = require("readline");
var leitor = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});


leitor.question("Quantos elementos haverão nas listas: ", function (answer: string) {
  var tamanhoLista: number = parseInt(answer);
  var numerosAleatorios: number[][] = [];

  for (let i = 0; i < tamanhoLista; i++) {
    numerosAleatorios[i] = [];
    for (let j = 0; j < tamanhoLista; j++) {
      numerosAleatorios[i].push(Math.floor(Math.random() * 100 + 1));
    }
  }

  console.log('Lista original: ', numerosAleatorios);
  const numerosAleatoriosPrimeiraLinha:number[] = [...numerosAleatorios[0]];
  console.log('Primeira linha da matriz: ', numerosAleatoriosPrimeiraLinha);

  for (let i = 0; i < tamanhoLista; i++) {
    for (let j = 0; j < tamanhoLista; j++) {
      numerosAleatorios[i][j] += numerosAleatoriosPrimeiraLinha[j];
    }
  }

  console.log('Lista somada: ',numerosAleatorios);
  leitor.close();

});



