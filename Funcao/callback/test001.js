const clientes = ['Lucas', 'Maria', 'José']
const imprimir = (nome, index, lista) => console.log(`${index+1}. ${nome}`)

clientes.forEach(imprimir) //A função imprimir é chamada quando um evento ocorrer
// que no caso seria o evento de percorrer a lista.

clientes.forEach((nome)=>console.log(nome))

//O conceito de callback é uma função que chamará outra função caso algum evento ocorra.
//O tipo de evento varia de acordo com cada função de callback