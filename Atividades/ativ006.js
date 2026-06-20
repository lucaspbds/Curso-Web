function calcularMontanteJurosSimples (capitalInicial, taxaJuros, tempo){
    return `${capitalInicial*(1+taxaJuros*tempo)}`
}
function calcularMontanteJurosCompostos (capitalInicial, taxaJuros, tempo){
    return`${capitalInicial*((1+taxaJuros)**tempo)}`
}

console.log(calcularMontanteJurosSimples(100, 10/100, 2));
console.log(calcularMontanteJurosCompostos(100, 10/100, 2));