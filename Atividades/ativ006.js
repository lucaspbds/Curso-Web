function calcularMontanteJurosSimples (capitalInicial, taxaJuros, tempo){
    return `${capitalInicial*(1+taxaJuros*tempo)}`
}
function calcularMontanteJurosCompostos (capitalInicial, taxaJuros, tempo){
    return`${capitalInicial*((1+i)**tempo)}`
}

