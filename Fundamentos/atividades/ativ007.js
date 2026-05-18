let nome_meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
    'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
]
const nome_mes = numero => {
    if(numero >= 1 & numero <=12){
        return nome_meses[numero-1]
    }
    return null
}

console.log(nome_mes(1))
console.log(nome_mes(4))
console.log(nome_mes(13))