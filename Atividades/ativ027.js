function calcularCrescimento(alturas, taxas_crescimento){
    if(alturas[0] > alturas[1]){
            if(taxas_crescimento[0] < taxas_crescimento[1]){
                console.log(`
                    Criança maior: ${alturas[0]} - taxa de cresc.: ${taxas_crescimento[0]}
                    Criança menor: ${alturas[1]} - taxa de cresc.: ${taxas_crescimento[1]}
                    A criança menor demorará ${calcularTempoDeCrescimento(alturas[1], alturas[0], taxas_crescimento[1], taxas_crescimento[0])} ano(s) para ultrapassar a criança maior!`)
            }else{console.log('A criança menor nuncar ultrapassára a criança maior!')}
    }else{
        if(alturas[1] > alturas[0]){
            if(taxas_crescimento[1] < taxas_crescimento[0]){
            console.log(`
                Criança maior: ${alturas[1]} - taxa de cresc.: ${taxas_crescimento[1]}
                Criança menor: ${alturas[0]} - taxa de cresc.: ${taxas_crescimento[0]}
                A criança menor demorará ${calcularTempoDeCrescimento(alturas[0], alturas[1], taxas_crescimento[0], taxas_crescimento[1])} ano(s) para ultrapassar a criança maior!`)
            }else{console.log('A criança menor nuncar ultrapassára a criança maior!')}
        }else{
            if(alturas[1] == alturas[0]){
                if(taxas_crescimento[1] < taxas_crescimento[0]){
                console.log(`
                    Criança 1: ${alturas[1]} - taxa de cresc.: ${taxas_crescimento[1]}
                    Criança 2: ${alturas[0]} - taxa de cresc.: ${taxas_crescimento[0]}
                    A criança 2 demorará ${calcularTempoDeCrescimento(alturas[0], alturas[1], taxas_crescimento[0],taxas_crescimento[1])} ano(s) para ultrapassar a criança 1!`)
                }else{
                    if(taxas_crescimento[0] < taxas_crescimento[1]){
                        console.log(`
                            Criança 1: ${alturas[0]} - taxa de cresc.: ${taxas_crescimento[0]}
                            Criança 2: ${alturas[1]} - taxa de cresc.: ${taxas_crescimento[1]}
                            A criança 2 demorará ${calcularTempoDeCrescimento(alturas[1], alturas[0], taxas_crescimento[1], taxas_crescimento[0])} ano(s) para ultrapassar a criança 1!`)
                    }else{console.log('A criança 2 nuncar ultrapassára a criança 1!')}
                }
            }
        }
    }    
}

const calcularTempoDeCrescimento = (altura_menor, altura_maior, taxa_menor, taxa_maior) => {
    let anos = 0
    while(altura_menor <= altura_maior){
        altura_menor *= 1 + taxa_menor 
        altura_maior *= 1 + taxa_maior
        anos++
    }
    return anos
}

calcularCrescimento([150, 130], [0.2, 0.21])
