const alunos:string[] = ["Pedro", "Paulo", "Carlos", "Ana", "Marta"];
const notas:number[][] = [[7.5, 10], [6.5, 8.5], [9.5, 9.5], [8.5, 7.5], [7.5, 6.5]];
let medias:number[] = [];

for (let i = 0; i < alunos.length; i++) {
    medias[i] = (notas[i][0] + notas[i][1]) / 2;
}

for (let i = 0; i < alunos.length; i++) {
    console.log(`Aluno ${alunos[i]} - Nota 1: ${notas[i][0]} - Nota 2: ${notas[i][1]} - Média: ${medias[i]}`);
}


