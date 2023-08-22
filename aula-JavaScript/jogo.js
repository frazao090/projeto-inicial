// declaração de variaveis let e const

const NomeFacilitador01 = 'Anderson';

let NomeFacilitador02 = 'Regina';

// Tipos de variaveis = 
// string = texto

const nome= "Anderson"

// number = numero

let idade = 28
let altura = 1.74

// boolean = verdadeiro ou falso

let isHuman = true
const gostaDeAlgumaCoisa = false

//  outros

let indefinido = undefined
let nulo = null

// tipos de estruturas de dados

// array
let tipoArray = []


let arrayAnderson = ['Anderson' , 1.74, 28];




// objeto

let tipoobjeto = {}

let objetoAnderson = {
    nome:'Anderson',
    idade:40,
    Altura:1.83,
    isHuman: true
}

console.log(objetoAnderson);

// Operadores Lógicos
// Igualdade == ou === (valor e tipo)

console.log(5==5);

console.log (5==='5')

// diferente !=

console.log(5 != 5)

// maior e menor quw < ou >

console.log(5 > 4);
console.log(5 < 4);

let idadePessoa = 18

console.log(idadePessoa >= 18);

// Operadores matemáticos

// +

let numero1 = 10;
let numero2= 11;
let soma = numero1 + numero2;

console.log(soma);

// -

let numero3 = 10;
let numero4= 11;
let subtracao = numero1 - numero2;

console.log(subtracao);

// *

let numero5 = 10;
let numero6= 11;
let mult = numero1 * numero2;

console.log(mult);

// divisao /

let numero7 = 10;
let numero8= 11;
let div = numero1 / numero2;

console.log(div);

// operardor e = &&
// operador ou ||

console.log(5 == 5 && 6 == 6);

console.log(5 == 5 && 6 == 8 || 7 == 9);

// condicionais if / else

idadePessoa2 = 35;

if (idadePessoa2 >=16 && idadePessoa2 < 18 || idadePessoa2 >= 70) {
    console.log('Não é obrigado a votar')
}

else if (idadePessoa2 > 18){
    console.log('Você pode votar')
}

else {
    console.log('Você não pode votar')
}

// Estruturas de repetição for e while

for(let index = 0; index < 20; index ++) {
    console.log("volta do for numero". index);
}
console.log('saimos do for')





























