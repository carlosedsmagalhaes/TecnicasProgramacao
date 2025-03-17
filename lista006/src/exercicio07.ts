let numeros1:number [] = [];
let numeros2:number [] = [];
let numerosConcatenados:number [] = [];

for (let i = 0; i < 10; i++) {
    numeros1.push(Math.floor(Math.random() * 100 + 1));
    numeros2.push(Math.floor(Math.random() * 100 + 1));
}

numerosConcatenados = numeros1.concat(numeros2);
console.log('Primeira lista: ', numeros1);
console.log('Segunda lista: ', numeros2);
console.log('Listas concatenadas: ', numerosConcatenados);


