// Exemplo do conector NOT (!)

// Este conector INVERTE o valor lógico da condição.
// Se a condição é verdadeira, o '!' a torna falsa, e vice-versa.

//Se posso dirigir caso:
// Maior de idade
// Possuir habilitação
// Ser Brasileiro


// ------CONTEXTO DE ATRIBUIÇÃO-------------------//
let idade = 18;
let possuoCNH = true;
let nacionalidade = 'Brasileira';
//------------------------------------------------//

let possuiInformação = 1;
if(possuiInformação){

    console.log('Possui Informação')
}else{
    console.log('Não possui informação')
}

// ------CONTEXTO DE VALIDAÇÃO-------------------//
if (!(idade >= 18 && possuoCNH == true && nacionalidade == 'Brasileira')) {
    console.log('VOCÊ não pode dirigir!!!');
} else {
    console.log('VOCÊ pode dirigir!!!')
}
// ----------------------------------------------//