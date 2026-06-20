function contadorNumeroNegativo(lista_num){
    let cont_negativos = 0
    for(index in lista_num){
        if(lista_num[index] < 0){
            cont_negativos += 1
        }
    }
    console.log(`Quantidade de números negativos: ${cont_negativos}`)
}
vetor =  [10, 5, -7, 3, -1, 3, -11, -20, 6, 9]
contadorNumeroNegativo(vetor)