var Questao = /** @class */ (function () {
    function Questao(enunciado, peso) {
        this.enunciado = enunciado;
        this.peso = peso;
    }
    Questao.prototype.print = function () {
        console.log("".concat(this.enunciado, " (").concat(this.peso, ", pts.)"));
    };
    return Questao;
}());
var quest1 = new Questao("O que é um array?", 0.5);
quest1.print();
