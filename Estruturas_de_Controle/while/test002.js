const numero_aleatorio = (min, max) => {
    num = Math.random() * (max-min) + min
    return Math.floor(num)
}

let numero_escolhido = 5
let numero_sorteado // DO WHILE permite que eu inicialize uma variável sem atribuir um valor
do{
    numero_sorteado = numero_aleatorio(0,10)
    console.log(`Número sorteado: ${numero_sorteado}`)
}while(numero_sorteado != numero_escolhido)
