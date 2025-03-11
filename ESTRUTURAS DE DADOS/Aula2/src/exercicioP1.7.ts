import PromptSync = require("prompt-sync");
const prompt = PromptSync();

//PARA O EXERCÍCIO NÃO PRECISAVA DA ESTRUTURA DE CLASSES. BOM PARA APRENDIZADO.
type Opcoes = {
    duvidas: string;
    reclamacoes: string;
    sair: string;
}

class Atendimento {
    nome:string;
    opcoes: Opcoes;


    constructor(nome:string, duvidas:string, reclamacoes:string, sair:string){
        this.opcoes = {duvidas, reclamacoes, sair}
        this.nome = nome;
    }

    msg(){
        console.log()
    }
}


const arrayOpcoes: string[] = ['1.Dúvidas ', '2.Reclamações ', '3.Sair '];

for(let i = 0; i < arrayOpcoes.length; i++){

        console.log(arrayOpcoes[i]);

}

const resposta: number = Number(prompt('Qual das opções acima é da sua escolha: [1], [2] ou [3]? '));


switch (resposta){
    case 1: 
        console.log('Suas dúvidas devem ser encaminhadas para o email duvidas@email.com');
        break;
    case 2: 
        // biome-ignore lint/correctness/noSwitchDeclarations: <explanation>
        const respo:string = prompt('Escreva sua reclamação e entraremos em contato: ');
        console.log(`Obrigado por registrar sua reclamação! Ficaremos feliz em resolvê-la. Sua mensagem foi: ${respo.toLocaleUpperCase()}`);
        break;
    case 3:
        console.log('Obrigado. Volte Sempre!');
        break;
    default:
        console.log('[ERROR] Sua opção não é válida')
}