import * as funcoes from './funcoes.js'
import prompt from 'prompt-sync'
let ler = prompt();


// Criação do Objeto onde iremos guardar o nome e a pontuação do usuário.
let pessoa = {
    pontuacao: 0
}

let escolha;

// Função para apresentar o programa e pedir o nome do usuário.
await funcoes.ApresentarPrograma(pessoa);

// Aqui mostramos o menu de opções do programa e 
// pedimos para o usuário escolher por onde ele quer começar
await funcoes.apresentarMenu();
escolha = await funcoes.pedirEscolha();


// Aqui o criamos um loop para acontecer até o usuário digitar a opção 10. Sair
// Dentro desse loop, temos as funções:
// "funcoes.opcao": que mostra um pequeno texto informarivo para o usuário.
// "funcoes.perguntarQuiz": Introdução do Quiz.
// "funcoes.perguntar": É a função que está armazenada as perguntas do Quiz.
// "funcoes.somando": É onde ocorre a soma da pontuação do Quiz e guarda no Objeto.
// "funcoes.apresentarMenu" e "funcoes.pedirEscolha": Onde retorna o menu e pede novamente a opcção do usuário
while(escolha != 10){
    if(escolha == 1){
   await funcoes.opcao1();
    }
    else if(escolha == 2){
   await funcoes.opcao2();
    }
    else if(escolha == 3){
   await funcoes.opcao3();
    }
    else if(escolha == 4){
   await funcoes.opcao4();
    }
    else if(escolha == 5){
   await funcoes.opcao5();
    }
    else if(escolha == 6){
   await funcoes.opcao6();
    }
    else if(escolha == 7){
   await funcoes.opcao7();
    }
    else if(escolha == 8){
   await funcoes.opcao8();
    }
    else if(escolha == 9){

await funcoes.perguntarQuiz();

       let p1 = await funcoes.perguntar1();
       let p2 = await funcoes.perguntar2();
       let p3 = await funcoes.perguntar3();
       let p4 = await funcoes.perguntar4();
       let p5 = await funcoes.perguntar5();
       let p6 = await funcoes.perguntar6();
       let p7 = await funcoes.perguntar7();
       let p8 = await funcoes.perguntar8();
       let p9 = await funcoes.perguntar9();
       let p10 = await funcoes.perguntar10();

        funcoes.somando(p1,p2,p3,p4,p5,p6,p7,p8,p9,p10, pessoa);

        // Verifica a pontuação do Quiz
        if(pessoa.pontuacao == 10){
            console.log();
            console.log();
             console.log(`Essa é a sua pontuação final: ${pessoa.pontuacao}`);
             console.log();
                         console.log("Parabéns!! Você é um novo Javascripter.");
            console.log();
        }
        else if(pessoa.pontuacao >= 6 && pessoa.pontuacao < 10){
            console.log();
            console.log();
            console.log(`Essa é a sua pontuação final: ${pessoa.pontuacao}`);
            console.log();
                        console.log("Parabéns!! Você é quase um Javascripter."); 
            console.log();
        }
        else if(pessoa.pontuacao < 6){
            console.log();
            console.log();
            console.log(`Essa é a sua pontuação final: ${pessoa.pontuacao}`);
            console.log();
                        console.log("Que pena! Boa sorte na próxima."); 
            console.log();
        }
    }
            else if(escolha > 10){
            console.log('Opção Inválida!');
    }
    await funcoes.apresentarMenu();
    escolha = await funcoes.pedirEscolha();
}

// Função que acontece quando o usuário deseja sair do programa
await funcoes.finalizacao();