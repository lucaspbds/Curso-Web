console.log('1)', '0' == 0) //Compara o conteúdo
console.log('2)', '0' === 0) //Compara o conteúdo e o tipo
console.log('3)', '3' != 3) //Compara o conteúdo, então eles são iguais
console.log('4)', '3' !== 3) //Compara o tipo e o conteúdo, então eles são diferentes por causa do tipo

console.log('5)', 3 < 2)
console.log('6)', 3 > 2)
console.log('7)', 3 <= 2)
console.log('8)', 3 >= 2)

const d1 = new Date(0)
const d2 = new Date(0)
console.log('9)', d1 == d2)
console.log('10)', d1 === d2)
//Não são iguais porque o endereço de memória é diferentes

console.log('11)', d1.getTime() == d2.getTime())
console.log('12)', d1.getTime() === d2.getTime())
//São iguais porque o getTime retorna um número, então como o conteúdo e o tipo são iguais, a comparação é True
//Date não retorna nada, só faz referência há uma data na memória

console.log('13)', undefined == null) //O conteúdo dos dois é o vazio, por isso é true
console.log('14)', undefined === null) // O tipo é diferente
