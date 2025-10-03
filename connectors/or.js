// Exemplo do conector OR (||)

// Este conector retorna 'true' se PELO MENOS UMA das condições forem verdadeiras.

//Eu posso votar caso seja masculino ou feminino,
// tenha mais de 16 anos e tenha título de eleitor.

//-----------Contexto Atribuição ----------//
let sexo = 'H'; // ou 'M'
let idade = 17;
let possuiTituloEleitor = true;

//-----------------------------------------//

//-----------Contexto VALIDAÇÃO ----------//
if( (sexo == 'H' || sexo == 'M') && idade >= 16 && possuiTituloEleitor == true ){
    console.log('POSSO VOTAR');
}else{
    console.log('VOCÊ NÃO PODE VOTAR.');
}

//-----------------------------------------//