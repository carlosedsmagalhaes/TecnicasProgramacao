let salarioAtual:number = 3500;
let percentReajuste:number = 2.5;
let salarioNovo:number;

salarioNovo = salarioAtual + (salarioAtual * (percentReajuste/100))

console.log(`Salário atual: R$${salarioAtual}`)
console.log(`Novo salário: R$${salarioNovo}`)