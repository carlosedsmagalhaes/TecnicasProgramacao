var Aleatorio = /** @class */ (function () {
    function Aleatorio() {
    }
    Aleatorio.prototype.get = function () {
        return Math.floor(Math.random() * 100 + 1);
    };
    return Aleatorio;
}());
var numeroAleatorio = new Aleatorio;
for (var index = 0; index < 5; index++) {
    console.log(numeroAleatorio.get());
}
