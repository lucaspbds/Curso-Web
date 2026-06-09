const imprimir_resultado = (a, b,operacao) => {
    console.log(operacao(a,b))
} // Função anônima

//Outros exemplos
imprimir_resultado(5,2, (a,b)=> a*b)
imprimir_resultado(4,3, function(a,b){return a-b})