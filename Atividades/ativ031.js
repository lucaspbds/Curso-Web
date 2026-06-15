function contadorNumeroNegativo(lista_num){
    let cont_negativos = 0
    for(index in lista_num){
        if(lista_num[index] < 0){
            cont_negativos += 1
        }
    }
    console.log(`Quantidade de números negativos: ${cont_negativos}`)
}
contadorNumeroNegativo([5,6,3,-1,2,-8])