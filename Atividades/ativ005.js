function formatoMoeda(moeda='R$',valor){
    const valor_formatado = `${valor.toFixed(2)}`.replace('.',',')
    return `${moeda}${valor_formatado}`
}
console.log(0.1+0.2)
console.log(formatoMoeda('R$',0.1+0.2))