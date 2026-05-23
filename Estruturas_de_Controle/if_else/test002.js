const resultado = nota => {
    if(nota >= 7){
        console.log('Aprovado!')
    }else {
        console.log('Reprovado!')
    }
}

resultado(10)
resultado(5)
resultado('Dez') //Javascript não retorna um erro, ele retorna a ação que está no else
    