function getpreco(moeda='R$', imposto=0){
    return `${moeda}${this.preco * (1 - this.desconto) * (1 + imposto)}`
}

const produto = {
    preco: 50,
    desconto: 0.5
}
console.log(getpreco.call(produto,'$',0.5)) 
console.log(getpreco.apply(produto, ['$',0.1]))