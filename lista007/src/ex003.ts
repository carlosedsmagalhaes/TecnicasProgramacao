class Carro {
  private _marca: string;
  private _modelo: string;

  constructor() {
    this._marca = "";
    this._modelo = "";
  }

  public get marca(): string {
    return this._marca;
  }
  public set marca(value: string) {
    this._marca = value;
  }
  public get modelo(): string {
    return this._modelo;
  }

  public set modelo(value: string) {
    this._modelo = value;
  }
}

const carro = new Carro();
carro.marca = "VW";
carro.modelo = "Gol";
console.log(carro);

export { Carro };
