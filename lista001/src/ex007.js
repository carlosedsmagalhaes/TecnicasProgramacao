var Ponto = /** @class */ (function () {
    function Ponto(numero1, numero2) {
        this.numero1 = numero1;
        this.numero2 = numero2;
    }
    Ponto.prototype.distancia = function (ponto) {
        return Math.sqrt(Math.pow(ponto.numero1 - this.numero1, 2) +
            Math.pow(ponto.numero2 - this.numero2, 2));
    };
    return Ponto;
}());
var a = new Ponto(3, 5);
var b = new Ponto(1, 2);
console.log("Distância:", a.distancia(b));
