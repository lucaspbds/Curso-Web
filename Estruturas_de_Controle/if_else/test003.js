Number.prototype.entre = function(inicio, fim, inclusivo=true){
    return inclusivo? this >= inicio && this <= fim: this > inicio && this < fim
}

/*Number.prototype permite que você crie um método que todas as variáveis do tipo
 * Number irão poder utilizar. Contudo, não se recomenda abusar dessa técnica, pois
 * poderá acarretar em um conflito em alguma parte do código ou com bibliotecas que
 * esperam o funcionamento padrão das variáveis numéricas.
 */
const imprimir_resultado = nota => {
    if(nota.entre(9, 10)){
        console.log('Aluno Destaque')
    }else if(nota.entre(7, 8.99)){
        console.log('Aprovado')
    }else if(nota.entre(5, 6.99)){
        console.log('Recuperação')
    }else if(nota.entre(0, 4.99)){
        console.log('Reprovado')
    }else{
        console.log('Nota inválida!')
    }
}

imprimir_resultado(10)
imprimir_resultado(7.5)
imprimir_resultado(5.5)
imprimir_resultado(3)
imprimir_resultado(-1)