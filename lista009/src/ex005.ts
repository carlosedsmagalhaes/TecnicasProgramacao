class Pilha<T> {
  private items: T[] = [];
  push(item: T): void {
    if (this.items.length == 5) {
      throw new Error("Pilha cheia");
    }
    this.items.push(item);
  }
  pop(): T {
    const item = this.items.pop();
    if (item === undefined) {
      throw Error("Pilha vazia");
    }
    return item;
  }
}

const nomes = ["Ana", "Pedro", "Luiz", "Maria", "Inês", "José"];
const pilha = new Pilha<string>();

try {
  for (let i = 0; i < nomes.length; i++) {
    pilha.push(nomes[i]);
  }
} catch (error) {
  error instanceof Error && console.error(error.message);
}

let item = pilha.pop();
try {
  while (item) {
    console.log(item);
    item = pilha.pop();
  }
} catch (error) {
  error instanceof Error && console.error(error.message);
}
console.log("Fim do programa");

export {};
