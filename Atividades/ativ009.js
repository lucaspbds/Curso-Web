const classificarAluno = (nota) => {
    let nota_corrigida = arredondarNota(nota)
    if(nota_corrigida >= 0 || nota_corrigida <=100){
        if(nota_corrigida >= 40){
            return `Aprovado! Nota: ${nota_corrigida}`
        }else{
            return `Reprovado! Nota: ${nota_corrigida}`
        }
    }
}

function arredondarNota(nota){
    let proximo_multiplo_5 = (Math.floor(nota/5)+1) * 5
    if(proximo_multiplo_5 - nota < 3){
        return proximo_multiplo_5
    }
    return nota
}
console.log(classificarAluno(100))
console.log(classificarAluno(30))
console.log(classificarAluno(38))
console.log(classificarAluno(88))
console.log(classificarAluno(61))
