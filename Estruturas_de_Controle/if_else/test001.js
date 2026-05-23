const resultado_exame = (nota) => {
    if(nota >=7){
        console.log('Aprovado!')
    }
}

const eh_verdade = valor => {
    if (valor)  {
        console.log("É verdade! | " + valor)
    }
}

resultado_exame(8.9)
resultado_exame(5)
eh_verdade()
eh_verdade('')
eh_verdade(null)
eh_verdade(NaN)
eh_verdade(0)
eh_verdade(' ')
eh_verdade(1)