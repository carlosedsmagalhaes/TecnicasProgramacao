let numerosAleatorios: number[] = [];

for (let i = 0; i < 20; i++) {
  numerosAleatorios.push(Math.floor(Math.random() * 100 + 1));
}

console.log("Números aleatórios: ", numerosAleatorios);
numerosAleatorios.sort((a, b) => a - b);
console.log("Números aleatórios ordenados: ", numerosAleatorios);


export{};