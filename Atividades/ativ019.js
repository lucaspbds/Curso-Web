function calcular_pedido(cod, qtd){
    switch(cod){
        case 100:
            return `R$ ${(3*qtd).toFixed(2)}`
        case 200:
            return `R$ ${(4*qtd).toFixed(2)}`
        case 300:
            return `R$ ${(5.5*qtd).toFixed(2)}`
        case 400:
            return `R$ ${(7.5*qtd).toFixed(2)}`
        case 500:
            return `R$ ${(3.5*qtd).toFixed(2)}`
        case 600:
            return `R$ ${(2.8*qtd).toFixed(2)}`
        default:
            return 'Código inválido! Produto não existe'
    }
}

console.log(calcular_pedido(200, 2))