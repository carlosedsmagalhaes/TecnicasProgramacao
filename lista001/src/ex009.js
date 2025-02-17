var promptSync = require("prompt-sync");
var prompt = promptSync();
var Numero = /** @class */ (function () {
    function Numero() {
        this.nros = [];
    }
    Numero.prototype.add = function (nro) {
        this.nros.push(nro);
    };
    Numero.prototype.sum = function () {
        var s = 0;
        for (var index = 0; index < this.nros.length; index++) {
            s += this.nros[index];
        }
        return s;
    };
    Numero.prototype.max = function () {
        var maior = this.nros[0];
        for (var index = 0; index < this.nros.length; index++) {
            if (this.nros[index] > maior) {
                maior = this.nros[index];
            }
        }
        return maior;
    };
    return Numero;
}());
var numero = new Numero();
var novoNumero = 0;
var strNovoNumero;
for (var index = 0; index < 5; index++) {
    strNovoNumero = prompt("Digite um número: ");
    novoNumero = parseInt(strNovoNumero);
    numero.add(parseInt(novoNumero));
}
console.log('Somatório: ', numero.sum());
console.log('Maior: ', numero.max());
