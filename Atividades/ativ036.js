const multiplicar_por = (lista_num, num) => {
    let lista_temp = []
    for(index in lista_num){
        lista_temp.push(lista_num[index]*num)
    }
        return lista_temp
}

const funcao = (lista_num, num) => {
    if(num > 5){
        return multiplicar_por(lista_num,num)
    }
}

console.log(funcao([1,2,3], 6))

