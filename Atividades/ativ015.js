const venda_carro = (modelo) => {
    switch(modelo){
        case 'hatch':
            return 'Compra efetuada com sucesso!'
        case 'sedans':case 'motocicletas':case 'caminhonetes':
            return 'Tem certeza que não prefere este modelo?'
        default:
            return 'Não trabalhamos com este tipo de automóvel aqui!'
    }
}
console.log(venda_carro('hatch'))
console.log(venda_carro('sedans'))
console.log(venda_carro('caminhonetes'))
console.log(venda_carro('bmw'))
