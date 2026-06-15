let vetorInteiro = [1,2,3,4]
let vetorString = ['a','b','c','d']
let vetorDouble = [1.1,1.2,1.3,1.4]

lista_concat1 = vetorInteiro.concat(vetorDouble.concat(vetorString))
console.log(lista_concat1)

let lista_concat2 = vetorString.concat(vetorInteiro).concat(vetorDouble)
console.log(lista_concat2)