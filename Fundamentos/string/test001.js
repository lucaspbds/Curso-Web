const nome = 'David Lucas'
const sobrenome = 'Pereira'
const idade = ': 17 anos'
console.log(nome.charAt(1))
console.log(nome.indexOf('L'))
console.log(nome.substring(2))
console.log(nome.substring(0, 4))
console.log(nome.concat(' ') + sobrenome.concat(idade))

const nomeCompleto = nome + ' ' + sobrenome
console.log(nomeCompleto)
console.log(nomeCompleto.split(" "))
const lista = nomeCompleto.split(" ")
console.log(lista[2])

