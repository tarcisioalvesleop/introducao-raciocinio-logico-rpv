// 1. Se ontem foi quarta-feira, amanhã será...
// Qual é o contexto da pergunta? fala sobre o que?
// Sabendo o que está sendo falado!, existe regras?
// informações sobre a frase.
// dias da semana
// máximo de 7 dias
// let ontem = 'quarta-feira'; 
// let hoje = 'quinta-feira';
// let amanha = 'sexta-feira';

// let array = ['domingo', 'segunda-feira', 'terça-feira', 
//     'quarta-feira', 'quinta-feira', 'sexta-feira', 'sábado'];
console.log('Se ontem foi quarta-feira, amanhã será...');
console.log('R: sexta-feira');
console.log('##------------------------------------------------##');

//-----------------------FIM Número 1-------------------------------//
 //OBSERVAÇÃO   
//console.log('O número de itens do meu array é: ' + array.length); 
// tamanho do array e o indice máximo será array.length -1
//console.log('Indice máximo do array: '+ Number(array.length-1)); //cash para transformar em numero
// a função trim() no array retira os espaços do inicio e no fim

console.log('##----------------INICIO 2--------------------------------##')
console.log('2 - Complete a sequência: 1, 4, 9, 16, 25, ...');
// Qual é o contexto da pergunta? fala sobre o que?
// Sabendo o que está sendo falado!, existe regras?
// numero em sequencia ao quadrado
console.log('R: 36');

console.log('##------------------------------------------------##')
//-----------------------FIM Número 2-------------------------------//

console.log('##----------------INICIO 3--------------------------------##')

console.log('3. Um trem de 100 metros de comprimento viaja a 50 km/h. Quanto tempo levará para atravessar um túnel de 50 metros?');
//tamanho do trem, velocidade do trem, tamanho do tunel
// Conversão de medidas Km/h para metros
let velTrem = 50/3.6;
let tempo = (100+ 50)/velTrem; // formula do tempo = deslocamento/velocidade  

console.log('R: Otempo que gasta para atravessar o túnel é' +tempo.toFixed(2) +' segundos.' )


console.log('##------------------------------------------------##')
//-----------------------FIM Número 3-------------------------------//
console.log('##--------------INICIO 4----------------------------------##');
console.log('Júlia é mais alta que Ana. Ana é mais baixa que Bruno. Qual dos três é o mais alto?');
// julia > Ana e Ana < bruno
// Pegando pela ordem alfabetica a julia seria maior pois julia e bruno tem 5 letras 
// obs. Como júlia tem um acento um caracter a mais que bruno
console.log('R: Júlia');
console.log('##------------------------------------------------##')
//-----------------------FIM Número 4-------------------------------//

console.log('##--------------INICIO 5----------------------------------##');
console.log('5. Em uma sala, há 2 pais e 2 filhos. Qual o número mínimo de pessoas na sala?');
// qtdPais, qtdFilhos
// Suponha que pai - pai (filho) - filho

console.log('R: Três pessoas.')

console.log('##------------------------------------------------##')
//-----------------------FIM Número 5-------------------------------//

console.log('6. Se o código para "GATO" é 4130, qual é o código para "PATO"?');
// trocando Gato por 4130, pato será 130
console.log('R: 8130.')

console.log('##------------------------------------------------##')
//-----------------------FIM Número 6-------------------------------//
console.log('7. Você tem 50 moedas de 1 real e 50 moedas de 50 centavos. No total, quanto você tem?');


console.log('##------------------------------------------------##')
//-----------------------FIM Número 7-------------------------------//
console.log('8. Uma torneira pinga 1 gota a cada segundo. Quantas gotas ela pingará em 1 minuto?');


console.log('##------------------------------------------------##')
//-----------------------FIM Número 8-------------------------------//
console.log('9. Se todos os corvos são pretos e minha caneta é um corvo, então minha caneta é preta. Essa afirmação é logicamente válida?');


console.log('##------------------------------------------------##')
//-----------------------FIM Número 9-------------------------------//
console.log('10. Se 3 coelhos comem 3 cenouras em 3 minutos, quanto tempo 10 coelhos levarão para comer 10 cenouras?');

console.log('##------------------------------------------------##')
//-----------------------FIM Número 10-------------------------------//