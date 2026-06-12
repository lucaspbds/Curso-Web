const ehParOuImpar = lista_num => {
    let cont_par = 0
    let cont_impar = 0
    for(index in lista_num){
        if(lista_num[index]%2==0){
            cont_par +=1
        }else{cont_impar += 1}
    }
    return {cont_par,cont_impar}
}
console.log(ehParOuImpar([4,6,3,1,8]))
