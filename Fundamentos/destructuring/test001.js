const pessoa = {
    nome: 'Lucas',
    idade: 19,
    sexo: 'Masculino',
    endereco: {
        logradouro: 'Rua 123',
        numero: '45'
    }
}

const {nome, idade} = pessoa //Retirando os atributos nome e idade do objeto pessoa
console.log(`Nome: ${nome} | Idade: ${idade}`)

const {nome: n, sexo: s} = pessoa
console.log(`Nome: ${n} | Sexo: ${s}`)

const {nome_mae='Nada consta', telefone} = pessoa
console.log(`Nome da mãe: ${nome_mae} | telefone: ${telefone}`)

const {endereco: {logradouro:rua, numero:num_casa, cep, pais='Brasil'}} = pessoa
console.log(`
Endereço
    Rua: ${rua}
    Número da casa: ${num_casa}
    cep: ${cep}
    pais: ${pais}`)

console.log(typeof pessoa)