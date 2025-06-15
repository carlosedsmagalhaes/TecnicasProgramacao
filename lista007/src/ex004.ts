class Carro {
  constructor(public _marca: string, public _modelo: string ) {
    this._marca = _marca;
    this._modelo = _modelo;
  }

  public get marca(): string {
    return this._marca;
  }

  public get modelo(): string {
    return this._modelo;
  }

}

const carro = new Carro("VW", "Gol");
console.log(carro);

export { Carro };
