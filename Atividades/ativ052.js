const repetir = (valor, qtd_vezes) => {
    let lista = []
    for(var i = 0; i < qtd_vezes; i++){
        lista.push(valor)
    }
    return lista
}
console.log(repetir('código', 3))
console.log(repetir(7, 5))   