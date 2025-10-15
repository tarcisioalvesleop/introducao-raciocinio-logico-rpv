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
console.log('R: 13130.')

console.log('##------------------------------------------------##')
//-----------------------FIM Número 6-------------------------------//
console.log('7. Você tem 50 moedas de 1 real e 50 moedas de 50 centavos. No total, quanto você tem?');
// 50 * 1 = 50 50 * 0.5 = 25 50+25=75
console.log('R: 75.00.')

console.log('##------------------------------------------------##')
//-----------------------FIM Número 7-------------------------------//
console.log('8. Uma torneira pinga 1 gota a cada segundo. Quantas gotas ela pingará em 1 minuto?');
// 60 segundos equivale a 1 minuto. Logo 60 gotas
console.log('R: 60 gotas')

console.log('##------------------------------------------------##')
//-----------------------FIM Número 8-------------------------------//
console.log('9. Se todos os corvos são pretos e minha caneta é um corvo, então minha caneta é preta. Essa afirmação é logicamente válida?');
console.log('R: Verdade.')

console.log('##------------------------------------------------##')
//-----------------------FIM Número 9-------------------------------//
console.log('10. Se 3 coelhos comem 3 cenouras em 3 minutos, quanto tempo 10 coelhos levarão para comer 10 cenouras?');
// cada coelho gasta 1 minuto para comer uma cenoura, logo 10 coelhos levaram 10 minutos
console.log('R: 10 minutos.') 

console.log('##------------------------------------------------##')
//-----------------------FIM Número 10-------------------------------//

console.log('11. Se "SOL" está para "LUZ" como "GELO" está para...')
console.log('R: frio')
console.log('##------------------------------------------------##')
//-----------------------FIM Número 11-------------------------------//

console.log("12. João, Pedro e Maria têm 3 profissões diferentes: médico, professor e engenheiro. João não é médico. Pedro é amigo do engenheiro. Quem é o professor?")
// joão não é medico e Pedro não é engenheiro, professor ?
// negando as premissas. joao medico, pedro é professor e maria engenheiro
console.log('R: Pedro é Professor ')
console.log('##------------------------------------------------##')
//-----------------------FIM Número 12-------------------------------//
console.log('13. Uma caixa de bombons custa 10 reais. Se a caixa custa 8 reais a mais que os bombons, qual o preço dos bombons?')
// c+b=10 c=b+8  b+8+b=10 2b +8 =10 b=1 logo c=9
console.log('R: 1 real')
console.log('##------------------------------------------------##')
//-----------------------FIM Número 13-------------------------------//
console.log('14. Um relógio digital mostra 08:08. Qual será a próxima vez que ele mostrará a mesma configuração de dígitos?')
// divisivel por 2
console.log('R: 10:10 ')

console.log('##------------------------------------------------##')
//-----------------------FIM Número 14-------------------------------//
console.log('15. Se o dobro de um número é 20, qual é a metade do triplo desse número?')
//2*x=20, 3*(x/2)=?  x=10  3*5=15
console.log('R: 15')

console.log('##------------------------------------------------##')
//-----------------------FIM Número 15-------------------------------//
console.log('16. Em um grupo de 100 pessoas, 85 falam inglês e 75 falam espanhol. Quantas pessoas, no mínimo, falam as duas línguas?')
//85-x + 75 -x =100 -2x=100-160 2x=60 x=30
console.log('R: 30 pessoas')
console.log('##------------------------------------------------##')
//-----------------------FIM Número 16-------------------------------//
console.log('17. Se "A" está para 1, "B" para 2, "C" para 3, etc., qual é a soma de "C" + "O" + "D" + "I" + "G" + "O"?')
//O=15, D=4, I=9, G=7 e O=15  Somatoria 3+15+4+9+7+15=53
console.log('R: 53')

console.log('##------------------------------------------------##')
//-----------------------FIM Número 17-------------------------------//
console.log('18. Em um torneio, cada equipe joga uma vez contra todas as outras. Se há 5 equipes, quantos jogos serão disputados no total?')
//5 equipes e 4 adversarios, logo 20 jogos retirando os jogos repetido 20/2 = 10
console.log('R: 10 jogos')

console.log('##------------------------------------------------##')
//-----------------------FIM Número 18-------------------------------//
console.log('19. Um homem foi ao restaurante, comeu o que quis e pagou com uma nota de 50 reais, mas o garçom lhe devolveu 20 reais. Quanto ele gastou?')
//50 -20 =30
console.log('R: 30')

console.log('##------------------------------------------------##')
//-----------------------FIM Número 19-------------------------------//
console.log('20. Se 50% de um número é 40, quanto é 25% desse mesmo número?')
//40/2 = 20
console.log('R: 20')
console.log('##------------------------------------------------##')
//-----------------------FIM Número 20-------------------------------//
console.log('21. Uma corrida de revezamento tem 4 corredores. O primeiro corre 10 metros, o segundo corre 20, o terceiro 40, e o quarto 80. Qual é a distância total da corrida?')
//10+20+40+80 = 150

console.log('R:150 metros')
console.log('##------------------------------------------------##')
//-----------------------FIM Número 21-------------------------------//
console.log('22. Se a palavra "AMOR" está para "ROMA" como "CASA" está para...')
//a=1 m=2 o=3 r=4     4321      c=1 a=2 s=3 a2  2321 ASAC
console.log('R: ASAC')
console.log('##------------------------------------------------##')
//-----------------------FIM Número 22-------------------------------//
console.log('23. Em um grupo, 3 pessoas mentem e 2 falam a verdade. Quem diz: "Pelo menos um de nós está mentindo"?')
// se fosse os que metem ninguém falaria a verdade.
console.log('R: fala verdade.')
console.log('##------------------------------------------------##')
//-----------------------FIM Número 23-------------------------------//
console.log('24. Se a temperatura sobe de 10°C para 20°C, quantos graus ela subiu?')
//20 -10 = 10
console.log('R: 10 graus')
console.log('##------------------------------------------------##')
//-----------------------FIM Número 24-------------------------------//
console.log('25. Se um carro viaja a 60 km/h, quantos quilômetros ele percorre em 30 minutos?')
//1 hora - 60 minutos 60minutos-60km    30 minutos-30km
console.log('R: 30 KM')

console.log('##------------------------------------------------##')
//-----------------------FIM Número 25-------------------------------//
console.log('26. Se a irmã de Clara tem um irmão, e esse irmão tem 3 irmãos, quantas irmãs Clara tem?')
//considerando que os 3 irmãos sejam homens, logo clara tem uma irmã 
console.log('R: 1 irmã apenas')

console.log('##------------------------------------------------##')
//-----------------------FIM Número 26-------------------------------//
console.log('27. Qual o próximo número na sequência: 1, 1, 2, 3, 5, 8, ...')
//1+1=2 1+2=3 2+3=5 3+5=8 5+8=13
console.log('R: 13')

console.log('##------------------------------------------------##')
//-----------------------FIM Número 27-------------------------------//
console.log('28. Se um pato anda, um peixe nada e um pássaro voa, então um canguru...')
//
console.log('pula')

console.log('##------------------------------------------------##')
//-----------------------FIM Número 28-------------------------------//
console.log('29. Se todos os cães latem e Bob é um cão, então Bob late. Essa afirmação é válida?')
//
console.log('R: Verdadeira')

console.log('##------------------------------------------------##')
//-----------------------FIM Número 29-------------------------------//
console.log('30. Um lago tem um crescimento de plantas que dobra de área a cada dia. Se em 30 dias o lago fica coberto, em quantos dias ele estava coberto pela metade?')
// 1-1m 2-2m 3-4m 4-8m 5-16m .... 30-coberto 29-(coberto/2)
console.log('R: 29 dia')
console.log('##------------------------------------------------##')
//-----------------------FIM Número 30-------------------------------//