const imprimir_resultado = nota => {
    switch(Math.floor(nota)){
        case 10: case 9: //Se nota for 10 ou 9, vai ser executado o console.log
            console.log('Aluno destaque')
            break //É necessário colocar break porque se não irá executar todos os cases
        case 8: case 7:
            console.log('Aprovado')
            break
        case 6: case 5:
            console.log('Recuperação')
            break
        case 4: case 3: case 2: case 1: case 0: 
            console.log('Reprovado')
            break
        default:
            console.log('Nota inválida')
    }
}

imprimir_resultado(10)
imprimir_resultado(7.5)
imprimir_resultado(5.5)
imprimir_resultado(3)
imprimir_resultado(-1)