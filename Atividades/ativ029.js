function intervalo(lista_num){
    let cont_dentro = 0
    let cont_fora = 0
    for(index in lista_num){
        if(lista_num[index] >= 10 && lista_num[index] <= 20){
            cont_dentro +=1
        }else{cont_fora += 1}
    }
    console.log({cont_dentro, cont_fora})
}
let vetor = [ 7, 8, 9, 10, 11, 12, 16, 17, 18, 19, 20, 21]
intervalo(vetor)