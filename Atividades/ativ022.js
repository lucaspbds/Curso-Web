function CalcularValorAnuidadeAPagar(mes, valor_anuidade){
    if(mes > 0 && mes < 13){
        let taxa = mes - 1 //Quantos meses de atraso em relação a janeiro
        return `R$ ${(valor_anuidade*((1+0.05)**taxa)).toFixed(2)}`
    }else{return 'Mês inválido!'}
}
console.log(CalcularValorAnuidadeAPagar(4, 100))