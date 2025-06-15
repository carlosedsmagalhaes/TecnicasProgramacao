class Animal {
    protected emitirSom(): void {
        console.log("Som genérico");
    }

    public fazerBarulho(): void {
        this.emitirSom(); // Pode chamar porque está dentro da classe
    }
}

class Cachorro extends Animal {
    public latir(): void {
        this.emitirSom(); // Também pode chamar porque é uma subclasse
    }
}

const a = new Animal();
a.fazerBarulho(); // OK: "Som genérico"
// a.emitirSom(); // ❌ Erro: método protegido

const c = new Cachorro();
c.latir();        // OK: "Som genérico"
// c.emitirSom(); // ❌ Erro: método protegido