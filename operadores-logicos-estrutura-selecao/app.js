const { read } = require('fs');

const readLine = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log('Esse programa irá checar se você é maior de idade e possui habilitação para entrar no kart.');
console.log('Além de sua idade, precisamos verificar se você está na lista de presença do horário confirmado.');

readLine.question('Qual o ano do seu nascimento?', ano => {
    if (ano > 2005){
        console.log('Você não tem 18 anos.');
    }else{
        readLine.question('Você tem habilitação? (Sim/Não)', temHabilitacao => {
            if(!(temHabilitacao.toUpperCase() === 'SIM')){
                console.log('Você não tem habilitação para entrar no Kart.');

            }else{
                readLine.question('Qual o seu nome ?', nome => {
                    switch(nome){
                        case 'Luis':
                            console.log('Bem vindo ao Kart, Luis.');
                            break;d
                        case 'Henrique':
                            console.log('Bem vindo ao Kart, Henrique');
                        default:
                            console.log('Seu nome não foi identificado na lista de presença');
                    }

                })
            }
        })
    }
    
})