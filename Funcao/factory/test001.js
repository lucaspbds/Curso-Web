// Função factory é uma função que cria um objeto (fabrica).
function criarProduto(nome_produto, preco){
    return {
        nome_produto: nome_produto,
        preco: preco,
        desconto: 0.15
    }
}
