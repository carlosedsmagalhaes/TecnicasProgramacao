var Filme = /** @class */ (function () {
    function Filme(titulo, duracao) {
        this.titulo = titulo;
        this.duracao = duracao;
    }
    Filme.prototype.print = function () {
        console.log("O filme ".concat(this.titulo, " possui ").concat(this.duracao, " min."));
    };
    return Filme;
}());
var filme1 = new Filme('De volta para o futuro', 116);
filme1.print();
var filme2 = new Filme('Matrix', 136);
filme2.print();
