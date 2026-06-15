function mediaAritmetica(lista_num){
    let somador = 0
    for(index in lista_num){
        somador += lista_num[index]
    }
    return somador/lista_num.length
}
let lista = [1,2,3,4,5]
console.log(`Lista de números: ${lista}
Média aritmética: ${mediaAritmetica(lista)}`)