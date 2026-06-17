const mostrarConceitoNota = lista_notas => {
    let resultado = []
    for(index in lista_notas){
        let nota = lista_notas[index]
        if(nota <= 4.9){
            resultado.push([nota, 'Conceito D'])
        }else{if(nota <= 6.9){
            resultado.push([nota, 'Conceito C'])
        }else{
            if(nota <= 8.9){
                resultado.push([nota, 'Conceito B'])
                }else{resultado.push([nota, 'Conceito A'])}
            }
        }
    }
    return resultado
}
console.log(mostrarConceitoNota([5.6,7.5,8.0]))