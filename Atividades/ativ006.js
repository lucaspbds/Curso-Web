const calcular_salario = (horas, valor_hora) => {
    return (horas*valor_hora).toFixed(2)
}
let salario = calcular_salario(150, 40.5)
console.log(`Salário igual a R$ ${salario.replace('.',',')}`)
