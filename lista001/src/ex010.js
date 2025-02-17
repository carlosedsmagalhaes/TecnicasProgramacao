var Circulo = /** @class */ (function () {
    function Circulo(raio) {
        this.raio = raio;
    }
    Circulo.prototype.area = function () {
        return Math.PI * Math.pow(this.raio, 2);
    };
    Circulo.prototype.perimetro = function () {
        return 2 * Math.PI * this.raio;
    };
    return Circulo;
}());
var circulo = new Circulo(5);
console.log("Área: ", circulo.area());
console.log("Perímetro: ", circulo.perimetro());
