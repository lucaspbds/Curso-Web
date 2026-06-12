function calcularAprovacao(cod_aluno, notas){
    let somador = 0
    let divisor = 4 + 3*(notas.length - 1)
    let index_maior_numero = maior_numero(notas)
    for(index in notas){
        if(index==index_maior_numero){
            somador += notas[index]*4
        }else{
            somador += notas[index]*3
        }
    }
    let media = (somador/divisor).toFixed(1)
    exibirResultado(cod_aluno, notas, media)
}
const maior_numero = lista_num => {
    index_maior_num = 0
    for(index in lista_num){
        if(lista_num[index] > lista_num[index_maior_num]){
            index_maior_num = index
        }
    }
    return index_maior_num
}
const exibirResultado = (cod_aluno, notas, media) => {
    if(media >= 5){
        console.log(`
            Cod do aluno: ${cod_aluno}
            Notas do aluno: ${notas}
            Média: ${media}
            Situação: Aprovado`)
    }else{
        console.log(`
            Cod do aluno: ${cod_aluno}
            Notas do aluno: ${notas}
            Média: ${media}
            Situação: Reprovado`)
    }
}
let cod_aluno = 5
let notas = [10,5,6]
while (cod_aluno >= 0){
    calcularAprovacao(cod_aluno, notas)
    cod_aluno -= 1
}
    
