const maior_menor_valor = lista_num => {
    let maior_index = 0
    let menor_index = 0
    for(index in lista_num){
        if(lista_num[index] > lista_num[maior_index]){
            maior_index = index
        }else{
            if(lista_num[index] < lista_num[menor_index]){
                menor_index = index
            }
        }
    }
    return {maior_numero: lista_num[maior_index], menor_numero: lista_num[menor_index]}
}
console.log(maior_menor_valor([20,65,66,22,1]))