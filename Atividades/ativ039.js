const trocaElementos = (vetorA, vetorB) => {
    console.log(`Antes da troca
        Vetor A: ${vetorA}
        Vetor B: ${vetorB}`)
    for(index in vetorA){
        [vetorA[index], vetorB[index]] = [vetorB[index],vetorA[index]]
    }
    console.log(`Depois da troca
        Vetor A: ${vetorA}
        Vetor B: ${vetorB}`)
}
trocaElementos([1,2,3],[4,5,6])