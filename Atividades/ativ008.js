function calcularProgresso(pontuacoes){
    let maior_pontuacao = 0
    let qtd_vezes_record_batido = 0
    let num_pior_jogo = 0
    pontuacoes = transformarListaStringEmListaNumber(pontuacoes.split(' '))
    if(pontuacoes.length > 1){
        for(index in pontuacoes){
            if(index != 0){
                if(pontuacoes[index] > pontuacoes[maior_pontuacao]){
                    maior_pontuacao = Number(index)
                    qtd_vezes_record_batido += 1
                }else{
                    if(pontuacoes[index] < pontuacoes[num_pior_jogo]){
                        num_pior_jogo = Number(index)
                    }
                }
            }
        }
        num_pior_jogo += 1
        return [qtd_vezes_record_batido, num_pior_jogo]  
    }else{
        return 'Não é possível calcular o progresso com apenas 1 partida'
    }
          
}

function transformarListaStringEmListaNumber(lista_string){
    let lista_temp = []
    for(index in lista_string){
        lista_temp.push(Number(lista_string[index]))
    }
    return lista_temp
}

let pontuacoes_string = "30 40 20 4 51 25 42 38 56 0"
console.log(calcularProgresso(pontuacoes_string))

pontuacoes_string = "5 10 25 30 0 1 2"
console.log(calcularProgresso(pontuacoes_string))
