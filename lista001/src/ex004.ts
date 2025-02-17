class Carro {
  marca: string = "";
  modelo: string = "";

  setMarca(marca: string) {
    this.marca = marca;
  }

  setModelo(modelo: string) {
    this.modelo = modelo;
  }

  print(): void {
    console.log(`${this.marca} ${this.modelo}`);
  }
}

const carro1 = new Carro();
carro1.setMarca("VW");
carro1.setModelo("Gol");
carro1.print();

const carro2 = new Carro();
carro2.setMarca("Fiat");
carro2.setModelo("Uno");
carro2.print();
