const classificarAluno = (nota) => {
    if(nota >= 0 || nota <=100){
        if(nota >= 38){
            let proximo_multiplo_5 = (Math.floor(nota/5)+1) * 5
            if(proximo_multiplo_5 - nota < 3){
                nota = proximo_multiplo_5
            }
            return `Aprovado! Nota: ${nota}`
        }else{
            return `Reprovado! Nota: ${nota}`
        }
    }
}
console.log(classificarAluno(84))
console.log(classificarAluno(38))
console.log(classificarAluno(37.9))
console.log(classificarAluno(87))
