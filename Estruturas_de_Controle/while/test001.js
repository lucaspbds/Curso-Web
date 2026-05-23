const numero_aleatorio = (min, max) => {
    num = Math.random() * (max-min) + min
    return Math.floor(num)
}

let numero_escolhido = 5
let numero_sorteado = 0
let rodadas = 0
while (numero_sorteado != numero_escolhido){
    numero_sorteado = numero_aleatorio(0,10)
    console.log('Número sorteado: ' + numero_sorteado)
    rodadas++
}
console.log('Você ganhou um celular da Xiaomi!')
console.log('Foram '+rodadas+' rodada(s) até sortear o seu número.')