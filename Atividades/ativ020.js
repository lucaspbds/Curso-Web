function dinheiroTrocado(valor){
    const cedulas = [100, 50, 10, 5, 1]
    let cedulas_utilizadas = {}
    while(valor != 0){
    for(index in cedulas){
        if(valor >= cedulas[index]){
            valor -= cedulas[index]
            if (!cedulas_utilizadas[cedulas[index]]){
                cedulas_utilizadas[cedulas[index]] = 1
            }else{
                cedulas_utilizadas[cedulas[index]] += 1
                }
            
            }
        }
    }
    exibirResultado(cedulas_utilizadas)
}
const exibirResultado = dict => {
    for(index in dict){
        console.log(`${dict[index]} nota(s) de R$ ${index}.`)
    }
}


dinheiroTrocado(153)