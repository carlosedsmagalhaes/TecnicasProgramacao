class Texto extends String {
  primeira(): string {
    return this.charAt(0);
  }
  ultima(): string {
    return this.charAt(this.length - 1);
  }
}

let texto: Texto = new Texto("Boa noite");
console.log(`Quantidade: ${texto.length}`);
console.log(`Primeira: ${texto.primeira()}`);
console.log(`Última: ${texto.ultima()}`);
console.log(`Minúscula: ${texto.toLowerCase()}`);

