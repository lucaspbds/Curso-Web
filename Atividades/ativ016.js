function calculadora(num1,operacao,num2){
    switch(operacao){
        case '+':
            return num1 + num2
        case '-':
            return num1 - num2
        case '*':
            return num1 * num2
        case '/':
            return num1 / num2
        default:
            return 'Operador inválido!'
    }
}
console.log(calculadora(2,'+',3))