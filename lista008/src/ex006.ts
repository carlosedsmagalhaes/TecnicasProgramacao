import { Pilha, Ponto } from "./types/index";

const pilha = new Pilha<Ponto>();
pilha.push({x:1, y: 2});
pilha.push({x:2, y: 3});
pilha.push({x:3, y: 4});
pilha.push({x:4, y: 5});

while (true) {
    const item = pilha.pop();
    if (item === undefined) {
        break;
    }
    console.log(item);
}
