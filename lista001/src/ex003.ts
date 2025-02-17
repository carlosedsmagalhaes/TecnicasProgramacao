class Aleatorio {
  get(): number {
    return Math.floor(Math.random() * 100 + 1);
  }
}

const numeroAleatorio = new Aleatorio();
for (let index = 0; index < 5; index++) {
  console.log(numeroAleatorio.get());
}
