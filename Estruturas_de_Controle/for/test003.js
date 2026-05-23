let clientes = [
    {
        nome: 'Lucas',
        idade: 19,
        sexo: 'M'
    },
    {
        nome: 'Maria',
        idade: 19,
        sexo: 'F'
    },
    {
        nome: 'José',
        idade: 25,
        sexo: 'M'
    }
]

for(let index in clientes){
    for(let atributo in clientes[index]){
        console.log(`${atributo} - ${clientes[index][atributo]}`)
    }
    console.log('-=-=-=-=-=-=-=-=-=-')
}