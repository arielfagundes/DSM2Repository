class PessoaBonita {
    belezura: string;

    constructor(belezura: string) {
        this.belezura = belezura;
    }
    dizer_beleza():string {
        return `Essa pessoa é ${this.belezura}`
    }
}

class PessoaBonitaRica extends PessoaBonita {
    riqueza: string;

    constructor(belezura: string, riqueza: string) {
        super(belezura); 
        this.riqueza = riqueza;
    }
    dizer_riqueza():string {
        return `Essa pessoa é ${this.belezura} e ${this.riqueza}`
    }

}

class PessoaBonitaRicaRefinada extends PessoaBonitaRica {
    finesse: string;

    constructor(belezura: string, riqueza: string, finesse: string) {
        super(belezura, riqueza);
        this.finesse = finesse;
    }
    dizer_finesse():string {
        return `Essa pessoa é ${this.belezura} e ${this.riqueza} e ${this.finesse}`
    }
}
export {PessoaBonitaRicaRefinada}



