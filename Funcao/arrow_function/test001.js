const soma = (a, b) => a+b 
const imprimir_resultado = (a, b,operacao=soma) => {
    console.log(operacao(a,b))
}
imprimir_resultado(4,5)
