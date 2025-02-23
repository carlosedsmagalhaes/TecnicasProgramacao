let peso: number, altura: number, imc: number, mensagem: string;

peso = 82;
altura = 1.63;
imc = peso / Math.pow(altura, 2);

if (imc <= 18.5) {
  mensagem = "Abaixo do peso ideal.";
} else if (imc <= 24.9) {
  mensagem = "Dentro do peso ideal.";
} else if (imc <= 29.9) {
  mensagem = "Acima do peso ideal.";
} else if (imc <= 34.9) {
  mensagem = "Obesidade Grau I.";
} else if (imc <= 39.9) {
  mensagem = "Obesidade Grau II.";
} else {
  mensagem = "Obesidade Grau III.";
}

export{}

console.log(mensagem);


