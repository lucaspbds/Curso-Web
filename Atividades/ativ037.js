function progressao_aritmetica(n, a1, r){
    let lista_termos = [a1]
    for(let i = 2; i <= n; i++){
        lista_termos.push(a1+(i-1)*r)
    }
    soma = ((lista_termos[0] + lista_termos[n-1])/2)*n
    return {lista_termos, soma}
}

function progressao_geometrica(n, a1, r){
    let lista_termos = [a1]
    for(let i = 2; i <= n; i++){
        lista_termos.push(a1*(r**(i-1)))
    }
    let soma = ((a1 * ((r**n) - 1)) / (r - 1))
    return {lista_termos, soma}
}
console.log(progressao_aritmetica(10, 10, 15))
console.log('----------------')
console.log(progressao_geometrica(10, 5, 3))