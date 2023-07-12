// variáveis tradicionais
var teste = 2; // number (int e float)
var nome = 'Mateus'; // string

console.log(teste);

console.log(nome);

// novas variáveis
let testando = 10;
const ola = 20;

console.log(testando);
console.log(ola);

// variável vazia
var meuNome;
console.log(meuNome); // undefined - indefinido

meuNome = "Lívia";
console.log(meuNome);
console.log(typeof meuNome); // typeof - imprime o tipo do dado

// Tipo de dado Boolean
var vedadeiro = true;

console.log(vedadeiro);
console.log(typeof vedadeiro);
console.log(typeof false);

// escrevendo no documento com js
simples = "aspas 'simples'";
duplas = 'aspas "duplas"';

document.write("Pode utilizar na String " + simples + " ou " + duplas); // concatenação