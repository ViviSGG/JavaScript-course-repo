// As propriedades de um objeto em js é semelhante a um dicionário em python

var obj = { // objeto é criado com chaves
    nome: 'Matheus',
    idade: 29,
    profissao: 'Programador'
};

console.log(obj);

console.log(typeof obj);

//acessando a propriedade de um objeto
console.log(obj.nome);
console.log(obj.idade);
console.log(obj.profissao);

//utilizando como variável da propriedade
console.log('O meu nome é ' + obj.nome);

//alterando a propriedade (altera como uma variável normal)
obj.nome = 'Pedro'

console.log(obj.nome);
console.log(obj);

//criando propriedade
obj.ativo = true;

console.log(obj);