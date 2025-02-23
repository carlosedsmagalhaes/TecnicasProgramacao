let numeroEleitores:number = 200000;
let votosBrancos:number = 10000;
let votosNulos:number = 15000;
let votosValidos:number = 175000;
let percentVotosBrancos:number;
let percentVotosNulos:number;
let percentVotosValidos:number;

percentVotosBrancos = (votosBrancos * 100) / numeroEleitores

percentVotosNulos = (votosNulos * 100) / numeroEleitores

percentVotosValidos = (votosValidos * 100) / numeroEleitores

console.log(`Percentual de votos brancos: ${percentVotosBrancos}%`)

console.log(`Percentual de votos nulos: ${percentVotosNulos}% `)

console.log(`Percentual de votos válidos: ${percentVotosValidos}%`)