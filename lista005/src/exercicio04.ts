class Carro { 
    marca?: string; 
    modelo?: string; 
    ano?: number; 

    constructor();
    constructor(marca: string, modelo: string);
    constructor(marca: string, modelo: string, ano: number);
    constructor(marca?: string, modelo?: string, ano?: number){
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }
 
    print(): void { 
        if(this.marca && this.modelo && this.ano){
            console.log(`Carro { marca: '${this.marca}', modelo: '${this.modelo}', ano: ${this.ano} }`);;
        }else if(this.marca && this.modelo){    
            console.log(`Carro { marca: '${this.marca}', modelo: '${this.modelo}' }`);; 
        }else{
            console.log(`Carro {}`);;
        }
    } 
} 
 
const g = new Carro("VW","Gol",2010); 
g.print(); 
const f = new Carro("Fiat", "Uno"); 
f.print(); 
const v = new Carro(); 
v.print();


