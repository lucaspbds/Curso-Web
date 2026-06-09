function apresentacao(){
    return `Meu nome é ${this.nome}, tenho ${this.idade} anos`
}

lista_candidatos = [
    {   
        nome: 'Lucas',
        idade: 19,
        apresentacao
    },
    {
        nome: 'Maria',
        idade: 20,
        apresentacao
    },
    {
        nome: 'Pedro',
        idade: 25,
        apresentacao
    }
]

// console.log(lista_candidatos[0].apresentacao())
// console.log(apresentacao.call(lista_candidatos[0]))

global.nome = 'João'
global.idade = 99
//This irá se referir ao escopo global
// console.log(apresentacao())

for(index in lista_candidatos){
    console.log(apresentacao.call(lista_candidatos[index]))
}