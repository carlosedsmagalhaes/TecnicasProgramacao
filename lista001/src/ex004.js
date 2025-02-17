var Carro = /** @class */ (function () {
    function Carro() {
        this.marca = "";
        this.modelo = "";
    }
    Carro.prototype.setMarca = function (marca) {
        this.marca = marca;
    };
    Carro.prototype.setModelo = function (modelo) {
        this.modelo = modelo;
    };
    Carro.prototype.print = function () {
        console.log("".concat(this.marca, " ").concat(this.modelo));
    };
    return Carro;
}());
var carro1 = new Carro();
carro1.setMarca("VW");
carro1.setModelo("Gol");
carro1.print();
var carro2 = new Carro();
carro2.setMarca("Fiat");
carro2.setModelo("Uno");
carro2.print();
