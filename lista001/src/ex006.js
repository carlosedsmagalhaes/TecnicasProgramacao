var Operacao = /** @class */ (function () {
    function Operacao(numero1, numero2) {
        this.numero1 = numero1;
        this.numero2 = numero2;
    }
    Operacao.prototype.somar = function () {
        return this.numero1 + this.numero2;
    };
    Operacao.prototype.subtrair = function () {
        return this.numero1 - this.numero2;
    };
    Operacao.prototype.dividir = function () {
        return (this.numero2 = 0 ? this.numero1 / 1 : this.numero1 / this.numero2);
    };
    return Operacao;
}());
var op = new Operacao(3, 5);
console.log('Soma: ', op.somar());
console.log('Diferença: ', op.subtrair());
console.log('Divisão: ', op.dividir());
