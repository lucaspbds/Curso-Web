function CalcularValorAnuidadeAPagar(mes, valor_anuidade){
    switch(mes){
        case 1:
            return `R$ ${(valor_anuidade).toFixed(2)}`
        case 2:
            return `R$ ${(valor_anuidade*((1+0.05)**2)).toFixed(2)}`
        case 3:
            return `R$ ${(valor_anuidade*((1+0.05)**3)).toFixed(2)}`
        case 4:
            return `R$ ${(valor_anuidade*((1+0.05)**4)).toFixed(2)}`
        case 5:
            return `R$ ${(valor_anuidade*((1+0.05)**5)).toFixed(2)}`
        case 6:
            return `R$ ${(valor_anuidade*((1+0.05)**6)).toFixed(2)}`
        case 7:
            return `R$ ${(valor_anuidade*((1+0.05)**7)).toFixed(2)}`
        case 8:
            return `R$ ${(valor_anuidade*((1+0.05)**8)).toFixed(2)}`
        case 9:
            return `R$ ${(valor_anuidade*((1+0.05)**9)).toFixed(2)}`
        case 10:
            return `R$ ${(valor_anuidade*((1+0.05)**10)).toFixed(2)}`
        case 11:
            return `R$ ${(valor_anuidade*((1+0.05)**11)).toFixed(2)}`
        case 12:
            return `R$ ${(valor_anuidade*((1+0.05)**12)).toFixed(2)}`
    }
}

console.log(CalcularValorAnuidadeAPagar(2, 50))