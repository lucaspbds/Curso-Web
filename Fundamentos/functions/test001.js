function imprimirSubtracao(a, b){
    console.log(a-b)
}
imprimirSubtracao(2,3)

function subtracao(a, b=0){
    return a-b
}

console.log(subtracao(1,1))

const soma = function (a, b=0){
    return a+b
}

const divisao = (a, b=1) => {
    return a / b
}

const multiplicao = (a, b) => a*b

console.log(subtracao(2,3))
console.log(soma(2,3))
console.log(divisao(6,3))
console.log(multiplicao(5,3))