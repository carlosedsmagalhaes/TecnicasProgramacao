import {Carro} from "./types/index"


class Uno implements Carro {
    constructor(
        public consumo: number, 
        public velocidade: number, 
        public tempoFrenagem: number 
    ) {}
    coeficiente: number = 250;
    
    gasto(distancia: number): number {
        return distancia / this.consumo;
    }
    
    frenagem(): number { 
        return Math.pow(this.velocidade, 2)/this.coeficiente * this.tempoFrenagem ;
    }

}






const uno = new Uno(12.5, 90, 1);
console.log(`Gasto para percorrer 100km: ${uno.gasto(100)} litros`);
console.log(`Distância percorrida ao frear o carro: ${uno.frenagem()} metros`);
