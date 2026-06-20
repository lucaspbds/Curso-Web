const multiplicar_por = (lista_num, num) => {
    let lista_temp = []
    lista_num.forEach(elemento => {
        lista_temp.push(elemento * num)
    });
        return lista_temp
}

const funcao = (lista_num, num) => {
    if(num > 5){
        return multiplicar_por(lista_num,num)
    }
}

let vetor = [1, 2, 3, 4, 5]
console.log(funcao(vetor, 11))

