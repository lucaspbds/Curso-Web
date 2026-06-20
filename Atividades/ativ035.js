let vetorPilha = [1,2,3,4,5]
let vetorAdiciona = [6,7,8,9,10]
function adicionarVetor(vetor_inicial, vetor_adicionar){
    for(let i = 0; i < vetor_adicionar.length; i++){
        vetor_inicial.push(vetor_adicionar[i])
    }
    console.log('Vetor adicionado: ' + vetor_adicionar)
    console.log('Vetor resultado: ' + vetor_inicial)
}

adicionarVetor(vetorPilha, vetorAdiciona)