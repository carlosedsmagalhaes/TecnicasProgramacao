import {Pilha} from "./types/index";

const pilha = new Pilha<string>();
pilha.push('Ana');
pilha.push('Pedro');
pilha.push('Luiz');
pilha.push('Maria');

while (true) {
    const item = pilha.pop();
    if (item === undefined) {
        break;
    }
    console.log(item);
}
