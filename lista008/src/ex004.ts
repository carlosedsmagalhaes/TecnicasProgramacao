abstract class Livro{
    protected titulo: string;
    protected ano: string;

    constructor(titulo: string, ano: string) {
        this.titulo = titulo;
        this.ano = ano;
    }

    abstract print(): void;
}

class Revista extends Livro{
    private edicao: number;
    constructor(titulo: string, ano: string, edicao: number) {
        super(titulo, ano);
        this.edicao = edicao;
    }

    print(): void {
        console.log(`${this.titulo} ${this.ano} ${this.edicao}`);
    }
}

const revista = new Revista("Superinteressante: O futuro da IA", "2023", 448);
revista.print();