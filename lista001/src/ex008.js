var Point = /** @class */ (function () {
    function Point(numero1, numero2) {
        this.numero1 = numero1;
        this.numero2 = numero2;
    }
    Point.prototype.distance = function (ponto) {
        return Math.sqrt(Math.pow(ponto.numero1 - this.numero1, 2) +
            Math.pow(ponto.numero2 - this.numero2, 2));
    };
    return Point;
}());
var Rectangle = /** @class */ (function () {
    function Rectangle(infEsquerdo, superiorDireito) {
        this.infEsquerdo = infEsquerdo;
        this.superiorDireito = superiorDireito;
    }
    Rectangle.prototype.area = function () {
        var largura = this.infEsquerdo.numero1 - this.superiorDireito.numero1;
        var altura = this.infEsquerdo.numero2 - this.superiorDireito.numero2;
        return largura * altura;
    };
    return Rectangle;
}());
var sd = new Point(3, 5);
var ie = new Point(1, 2);
var r = new Rectangle(ie, sd);
console.log("Área: ", r.area());
