// As propriedades de um array em js é semelhante a uma lista em python

var arr = [5, 'matheus', true, {peso: 40, idade: 29}]; // arrays é criado com conchetes

console.log(arr);

var arr2 = [2,3,4,5,6]; // arrays é criado com conchetes

console.log(arr2);

// acessando o índice (começa no 0)
console.log(arr[1]); 
console.log(arr2[0]); 

// inserindo elemento/valor
arr[4] = 10; 

arr[0] = 'new'; // pode sobreescrever um valor que já existe tbm

console.log(arr);