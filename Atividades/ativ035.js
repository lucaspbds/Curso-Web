let vetorPilha = [1,2,3,4,5]
let vetorAdiciona = [6,7,8,9,10]
let a = vetorAdiciona.concat(vetorPilha)
for(index in vetorAdiciona){
    vetorPilha.push(vetorAdiciona[index])
}
console.log(a)
console.log(vetorPilha)