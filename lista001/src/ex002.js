var Retangulo = /** @class */ (function () {
    function Retangulo(base, altura) {
        this.base = base;
        this.altura = altura;
    }
    Retangulo.prototype.area = function () {
        return this.base * this.altura;
    };
    Retangulo.prototype.perimetro = function () {
        return 2 * this.base + 2 * this.altura;
    };
    return Retangulo;
}());
var retangulo = new Retangulo(3, 2);
console.log("\u00C1rea: ".concat(retangulo.area()));
console.log("Per\u00EDmetro: ".concat(retangulo.perimetro()));
