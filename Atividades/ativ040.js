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
                }else{
                    if(nota <= 10){
                        resultado.push([nota, 'Conceito A'])
                    }else{resultado.push([nota, 'Nota inválida'])}
                }
            }
        }
    }
    return resultado
}

let notas = [10, 13, 9, 8.2, 2.5, 7.7, 6.8]
console.log(mostrarConceitoNota(notas))