const calcularAumentoSalario = (plano, salario_atual) => {
    switch(plano.toUpperCase()){
        case 'A':
            return (salario_atual * (1 + 0.1)).toFixed(2)
        case 'B':
            return (salario_atual * (1 + 0.15)).toFixed(2)
        case 'C':
            return (salario_atual * (1 + 0.2)).toFixed(2)
        default:
            return 'Plano inválido'
    }
}
console.log(calcularAumentoSalario('a', 50))
console.log(calcularAumentoSalario('c', 50))
