class Numero {
  protected aleatorio(): number {
    return Math.floor(Math.random() * 100);
  }
}
class Categoria extends Numero {
    public aleatorio(): number {
        return super.aleatorio();
    }
}
class Teste extends Categoria {
    public aleatorio(): number {
        return super.aleatorio();
    }
}
const teste = new Teste();
console.log("Valor:", teste.aleatorio());
