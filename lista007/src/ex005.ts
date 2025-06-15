class Carro {
  constructor(private _marca: string = "", private _modelo: string = "") {
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
const carros: Carro[] = [new Carro("VW", "Gol"),
  new Carro("Fiat", "Uno"),
  new Carro("GM", "Corsa")];

carros.forEach((carro) => {
    console.log(`${carro.marca} ${carro.modelo}`);
});

export { Carro };
