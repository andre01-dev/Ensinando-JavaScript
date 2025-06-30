import prompt from 'prompt-sync'
let ler = prompt();


export async function ApresentarPrograma(pessoa) {
    console.log("Olá, como se chama?");
    pessoa.nome = ler()
    await sleep(1500);
    console.log();
    console.log(`Seja bem-vindo ${pessoa.nome}, sou o Zé do Script e vou te ensinar alguns conceitos básicos de javascript 👍🏽`);
    await sleep(1000);
console.log("No final temos um quiz para testar seus conhecimentos.");
    console.log();
    await sleep(4000);
}
export async function apresentarMenu() {
    console.log("MENU: ");
    await sleep(500);
    console.log("1. Aprenda sobre Comandos de Entrada/Saída");
    await sleep(500);
    console.log("2. Aprenda sobre Variáveis");
    await sleep(500);
    console.log("3. Aprenda sobre Operações");
    await sleep(500);
    console.log("4. Aprenda sobre Condições");
    await sleep(500);
    console.log("5. Aprenda sobre Repetição");
    await sleep(500);
    console.log("6. Aprenda sobre Vetor");
    await sleep(500);
    console.log("7. Aprenda sobre Funções");
    await sleep(500);
    console.log("8. Aprenda sobre Objeto"); 
    await sleep(500);
    console.log("9. Jogue nosso Quiz");     
    await sleep(500);
    console.log("10. Sair");
    console.log();
    await sleep(1000);
}
export async function pedirEscolha() {
    await sleep(1000);
    console.log('Escolha uma opção:');
    let escolha = Number(ler());
    console.log();
    return escolha;
}
export async function opcao1() {
    await sleep(1500);
    console.log();
    console.log("Você escolheu a opção: 1.Comandos de Entrada e Saída");
    await sleep(1000);
    console.log(`Em Javascript, os comandos de saída de dados mais comuns
são console.log(), que exibe mensagens no console do navegador 
(usando para testes), alert(), que mostra uma caiza de alerta para 
o usuário, e document.write(), que escreve diretamente na página HTML
(pouco recomendado).`);
    await sleep(2000);
    console.log(`Para entrada de dados, usa-se prompt(), que exibe uma caixa
para o usuário digitar algo e retorna esse valor como texto, e confirm(),
que mostra uma caixa com as opções "OK" e "Cancelar", retornando true ou
false.`);
    await sleep(1500);
    console.log();
}
export async function opcao2() {
    await sleep(1000);
    console.log("Você escolheu a opção: 2.Variáveis");
    await sleep(1000);
    console.log(`Em Javascript, variáveis armazenam dados e são declaradas
com var, lrt ou const. Use let para valores que mudam e const para
constantes. Os tipos mais comuns são:`);
    await sleep(2000);
    console.log(`Texto (string), número (number), lógico (boolean), nulo (null)
e indefinido (undefined). Nomes de variáveis devem ser claros, começar
com letra, _ ou $ e não podem se usar palavras reservadas. Prefira let
e const no lugar de var.`)
    await sleep(1500);
                    console.log();

}
export async function opcao3() {
    await sleep(1000);
    console.log("Você escolheu a opção: 3.Operações");
    await sleep(1000);
    console.log(`Em Javascript, as operações são usadas para realizar cálculos,
comparações e manipulções de valores. As operações ariméticas básicas incluem 
soma(+), subtração(-), multiplicação(*), divisão(/) e resto de divisão(%).
Também existe o operador de exponenciação(**). Para compara valores, usamos
os operadore de comparação, como ==(igual), ===(igual e do mesmo tipo),  !=(diferente),
,>,<,>=,<=.`);
    await sleep(2000);
    console.log(`Já os operadores lógicos permitem combinar condições: && (e), || (ou) e
! (negação). Além disso, há operadores de atribuição, como =, +=, -=, que servem para atribuir e atualizar 
valores de variáveis. JavaScript também suporta operadores de concatenação, como o + para unir strings.`);
    await sleep(1500);
                    console.log();

}
export async function opcao4() {
    await sleep(1000);
    console.log("Você escolheu a opção: 4.Condições");
        await sleep(1000);
    console.log(`Em JavaScript, as estruturas de condição são usadas para 
tomar decisões no código com base em testes lógicos. A principal estrutura é
o if, que executa um bloco de código se uma condição for verdadeira. Também é possível 
usar else para definir o que acontece se a condição for falsa, e else if para testar 
condições adicionais`);
           await sleep(2000);
console.log(`Outra forma de escrever condições mais simples é usando o operador 
    ternário (condição ? valorSeVerdadeiro : valorSeFalso).
Além disso, o switch é usado quando há várias opções de valor para verificar,
funcionando como uma alternativa ao if com vários else if.`)
            await sleep(1500);
                console.log();

        }
export async function opcao5() {
    await sleep(1000);
    console.log("Você escolheu a opção: 5.Repetição");
    await sleep(1000);
    console.log(`Em Javascript, a repetição de código, ou loop, é uma
estrutura de controle que permite executar um bloco de código
várias vezes, dependendo de uma condição`);
    await sleep(2000);
    console.log(`Os principais tipos de códigos de repetição em
Javascript são for, while, do...while e for...of. Eles são
essenciais para executar tarefas repetitivas e lidar com 
grandes conjuntos de dados de forma eficiente.`);
    await sleep(1500);
                console.log();

}
export async function opcao6() {
    await sleep(1000);
    console.log("Você escolheu a opção: 6.Vetor");
    await sleep(1000);
    console.log(`Em javascript, um vetor é conhecido como array.
Um array é uma estrutura de dados que permite armazenar
múltiplos valores em ums única variável`);
    await sleep(2000);
    console.log(`É uma forma organizada de manter uma lista de itens ,
acessíveis através de um indice numérico(começando em 0).`);
    await sleep(1500);
                    console.log();
}
export async function opcao7() {
    await sleep(1000);
    console.log("Você escolheu a opção: 7.Funções");
    await sleep(1000);
    console.log(`Em Javascript, uma função (function) é um bloco de código
que realiza uma tarefa específica.`);
    await sleep(2000);
    console.log(`Ela pode ser definida e chamada várias vezes para executar 
a mesma tarefa, tornando o código mais organizados e reutilizável.`);
    await sleep(1500);
                console.log();

}
export async function opcao8() {
    await sleep(1000);
    console.log("Você escolheu a opção: 8.Objetos");
    await sleep(1000);
    console.log(`Um objeto é uma estrutura que permite agrupar valores relacioados.
Ele serve para representar coisas do mundo real: uma pessoa, um carro,
um produto, etc.`);
    await sleep(2000);
    console.log(`Cada valor dentro do objeto é chamado de propriedade.`);
    await sleep(1500);
                    console.log();

}

export function somando(p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, pessoa) {

    pessoa.pontuacao = 0

    if (p1 == "b" || p1 == "B") {
        pessoa.pontuacao = pessoa.pontuacao + 1;
    }
    if (p2 == "b" || p2 == "B") {
        pessoa.pontuacao = pessoa.pontuacao + 1;
    }
    if (p3 == "c" || p3 == "C") {
        pessoa.pontuacao = pessoa.pontuacao + 1;
    }
    if (p4 == "a" || p4 == "A") {
        pessoa.pontuacao = pessoa.pontuacao + 1;
    }
    if (p5 == "d" || p5 == "D") {
        pessoa.pontuacao = pessoa.pontuacao + 1;
    }
    if (p6 == "c" || p6 == "C") {
        pessoa.pontuacao = pessoa.pontuacao + 1;
    }
    if (p7 == "b" || p7 == "B") {
        pessoa.pontuacao = pessoa.pontuacao + 1;
    }
    if (p8 == "c" || p8 == "C") {
        pessoa.pontuacao = pessoa.pontuacao + 1;
    }
    if (p9 == "a" || p9 == "A") {
        pessoa.pontuacao = pessoa.pontuacao + 1;
    }
    if (p10 == "d" || p10 == "D") {
        pessoa.pontuacao = pessoa.pontuacao + 1;
    }
    return pessoa;
}

export async function perguntarQuiz() {
    console.log("Você escolheu a opção: 9.Quiz📚📖");
    await sleep(1000)
    console.log("Vamos testar seus conhecimentos!");
    await sleep(1000)
    console.log("Escolha a alternativa correta para cada pergunta...");
    await sleep(1000)
    console.log("Boa Sorte!!!")
    await sleep(1000)
    console.log();
    console.log('Criando as perguntas...🕑');
    await sleep(3000)
    console.log();
}
export async function perguntar1(){
    console.log(`Pergunta 1. O que é um comando de entrada em JavaScript?`);
    await sleep(800)
        console.log();
    console.log(`A) Mostrar uma mensagem no console.
B) Receber dados do usuário.
C) Exibir alertas na tela.
D) Encerrar o programa.`);
            let p1 = ler();
            console.log();
            if(p1 == 'b' || p1 == 'B'){
                await sleep(1000)
                console.log('Verificando a resposta...')
                await sleep(1500)
                console.log('Alternativa correta: B✅')
                            console.log();

            }
            else{
                console.log('Verificando a resposta...')
                await sleep(1500);
                console.log('Alternativa Errada..❌')
                console.log('Alternativa correta: B✅')
                                await sleep(1000)
                            console.log();


            }

        return p1
    }
        export async function perguntar2() {
            console.log(`Pergunta 2. Para que serve uma variável em JavaScript?`)
                console.log();
            await sleep(800)
            console.log(`A) Executar loops.
B) Guardar informações.
C) Comparar valores.
D) Enviar mensagens.`);
            let p2 = ler();
            console.log();
            if(p2 == 'b' || p2 == 'B'){
                await sleep(1000)
                console.log('Verificando a resposta...')
                await sleep(1500)
                console.log('Alternativa correta: B✅')
                                console.log();
            }
            else{
                console.log('Verificando a resposta...')
                await sleep(1500);
                console.log('Alternativa Errada..❌')
                console.log('Alternativa correta: B✅')
                                await sleep(1000)
                console.log();

            }
            return p2

        }
        export async function perguntar3() {
            console.log(`Pergunta 3. Qual é um operador lógico?`)
                console.log();
            await sleep(800)
             console.log(`A) +
B) -
C) && 
D) %`);
            let p3 = ler();
            console.log();            
             if(p3 == 'c' || p3 == 'C'){
                await sleep(1000)
                console.log('Verificando a resposta...')
                await sleep(1500)
                console.log('Alternativa correta: C✅')
                                console.log();
            }
            else{
                console.log('Verificando a resposta...')
                await sleep(1500);
                console.log('Alternativa Errada..❌')
                console.log('Alternativa correta: C✅')
                                await sleep(1000)
                                console.log();


            }
            return p3
        }
        export async function perguntar4() {
            console.log(`Pergunta 4. Quando é recomendado usar o switch...case?`)
                console.log();
            await sleep(800)
            console.log(`A) Para comparar muitos valores iguais. 
B) Para fazer cálculos matemáticos.
C) Para criar loops infinitos.
D) Para criar funções anônimas.`);
            let p4 = ler();
            console.log();
            if(p4 == 'a' || p4 == 'A'){
                await sleep(1000)
                console.log('Verificando a resposta...')
                await sleep(1500)
                console.log('Alternativa correta: A✅')
                                console.log();
            }
            else{
                console.log('Verificando a resposta...')
                await sleep(1500);
                console.log('Alternativa Errada..❌')
                console.log('Alternativa correta: A✅')
                                await sleep(1000)
                            console.log();

            }
            return p4
        }
        export async function perguntar5(){
            console.log(`Pergunta 5. Qual é a função do if...else?`)
                console.log();
            await sleep(800)
            console.log(`A) Criar listas.
B) Repetir comandos.
C) Definir objetos.
D) Tomar decisões no código.`);
            let p5 = ler();
                console.log();
            if(p5 == 'd' || p5 == 'D'){
                await sleep(1000)
                console.log('Verificando a resposta...')
                await sleep(1500)
                console.log('Alternativa correta: D✅')
                            console.log();

            }
            else{
                console.log('Verificando a resposta...')
                await sleep(1500);
                console.log('Alternativa Errada..❌')
                console.log('Alternativa correta: D✅')
                                await sleep(1000)
                            console.log();
            }
            return p5
        }
        export async function perguntar6() {
            console.log(`Pergunta 6. Qual é a diferença entre == e ===?`)
                console.log();
            await sleep(800)
            console.log(`A) == compara valores e tipos, === compara só valores.
B) São operadores idênticos.
C) == compara só valores, === compara valores e tipos. 
D) Ambos são usados apenas com strings.`);
            let p6 = ler();
             console.log();
            if(p6 == 'c' || p6 == 'C'){
                await sleep(1000)
                console.log('Verificando a resposta...')
                await sleep(1500)
                console.log('Alternativa correta: C✅')
                        console.log();
            }
            else{
                console.log('Verificando a resposta...')
                await sleep(1500);
                console.log('Alternativa Errada..❌')
                console.log('Alternativa correta: C✅')
                                await sleep(1000)
                        console.log();
            }

            return p6
        }
        export async function perguntar7() {
            console.log(`Pergunta 7. O que faz o laço while?`)
            console.log();
            await sleep(800)
            console.log(`A) Executa uma vez e para.
B) Repete enquanto a condição for verdadeira.
C) Cria funções.
D) Executa só após o else.`);
            let p7 = ler();
                console.log();
        if(p7 == 'b' || p7 == 'B'){
                await sleep(1000)
                console.log('Verificando a resposta...')
                await sleep(1500)
                console.log('Alternativa correta: B✅')
                console.log();
            }
            else{
                console.log('Verificando a resposta...')
                await sleep(1500);
                console.log('Alternativa Errada..❌')
                console.log('Alternativa correta: B✅')
                                await sleep(1000)
                            console.log();

            }
            return p7
        }
        export async function perguntar8() {  
            console.log(`Pergunta 8. O que é um vetor (array) em JavaScript?`)
                console.log();
            await sleep(800)
            console.log(`A) Um tipo de função.
B) Uma estrutura de repetição.
C) Uma variável que guarda múltiplos valores.
D) Um operador lógico.`);
            let p8 = ler();
                console.log();
            if(p8 == 'c' || p8 == 'C'){
                await sleep(1000)
                console.log('Verificando a resposta...')
                await sleep(1500)
                console.log('Alternativa correta: C✅')
                    console.log();
            }
            else{
                console.log('Verificando a resposta...')
                await sleep(1500);
                console.log('Alternativa Errada..❌')
                console.log('Alternativa correta: C✅')
                                await sleep(1000)
                 console.log();

            }
            return p8
        }
        export async function perguntar9() {
            console.log(`Pergunta 9. O que é uma função em JavaScript?`)
                console.log();
            await sleep(800)
                  console.log(`A) Um bloco de código reutilizável.
B) Uma lista de números.
C) Um operador de comparação.
D) Um tipo de laço de repetição.`);
            let p9 = ler();
                console.log();
            if(p9 == 'a' || p9 == 'A'){
                await sleep(1000)
                console.log('Verificando a resposta...')
                await sleep(1500)
                console.log('Alternativa correta: A✅')
                            console.log();
            }
            else{
                console.log('Verificando a resposta...')
                await sleep(1500);
                console.log('Alternativa Errada..❌')
                console.log('Alternativa correta: A✅')
                                await sleep(1000)
                        console.log();


            }
            return p9
        }
        export async function perguntar10() {
            console.log(`Pergunta 10. O que são objetos em JavaScript?`)
                console.log();
            await sleep(800)
             console.log(`A) Laços de repetição.
B) Funções aninhadas.
C) Operadores matemáticos.
D) Estruturas que agrupam dados em chave e valor.`);
             let p10 = ler();
            if(p10 == 'd' || p10 == 'D'){
                await sleep(1000)
                console.log('Verificando a resposta...')
                await sleep(1500)
                console.log('Alternativa correta: D✅')
                console.log();
            }
            else{
                console.log('Verificando a resposta...')
                await sleep(1500);
                console.log('Alternativa Errada..❌')
                console.log('Alternativa correta: D✅')
                                await sleep(1000)
                            console.log();
            }
            return p10
        }
    

function sleep(milisegundos) {
    return new Promise((ok, nok) => {
        setTimeout(ok, milisegundos);
    })
}
export async function finalizacao(){
    console.log();
    console.log("Obrigado por acessar nosso programa, espero que tenha gostado ❤");
}
