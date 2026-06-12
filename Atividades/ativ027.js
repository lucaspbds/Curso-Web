function comparadorDeAltura(alturas, taxas_crescimento_anuais){
    if(alturas[0] > alturas[1]){
        if(taxas_crescimento_anuais[0] < taxas_crescimento_anuais[1]){
            qtd_anos = 0
            let altura_menor = alturas[1]
            while(!(altura_menor > alturas[0])){
                altura_menor *= (1 + taxas_crescimento_anuais[1])
                qtd_anos++
            }
            console.log(`
                Criança maior: ${alturas[0]} - taxa de cresc.: ${taxas_crescimento_anuais[0]}
                Criança menor: ${alturas[1]} - taxa de cresc.: ${taxas_crescimento_anuais[1]}
                A criança menor demorará ${qtd_anos} ano(s) para ultrapassar a criança maior!`)
        }else{console.log('A criança menor nuncar ultrapassára a criança maior!')}
    }else{
        if(alturas[1] > alturas[0]){
            if(taxas_crescimento_anuais[1] < taxas_crescimento_anuais[0]){
            qtd_anos = 0
            let altura_menor = alturas[0]
            while(!(altura_menor > alturas[1])){
                altura_menor *= (1 + taxas_crescimento_anuais[0])
                qtd_anos++
            }
            console.log(`
                Criança maior: ${alturas[1]} - taxa de cresc.: ${taxas_crescimento_anuais[1]}
                Criança menor: ${alturas[0]} - taxa de cresc.: ${taxas_crescimento_anuais[0]}
                A criança menor demorará ${qtd_anos} ano(s) para ultrapassar a criança maior!`)
            }else{console.log('A criança menor nuncar ultrapassára a criança maior!')}
        }else{
            if(alturas[1] == alturas[0]){
                if(taxas_crescimento_anuais[1] < taxas_crescimento_anuais[0]){
                qtd_anos = 0
                let altura_menor = alturas[0]
                while(!(altura_menor > alturas[1])){
                    altura_menor *= (1 + taxas_crescimento_anuais[0])
                    qtd_anos++
                }
                console.log(`
                    Criança 1: ${alturas[1]} - taxa de cresc.: ${taxas_crescimento_anuais[1]}
                    Criança 2: ${alturas[0]} - taxa de cresc.: ${taxas_crescimento_anuais[0]}
                    A criança 2 demorará ${qtd_anos} ano(s) para ultrapassar a criança 1!`)
                }else{
                    if(taxas_crescimento_anuais[0] < taxas_crescimento_anuais[1]){
                        qtd_anos = 0
                        let altura_menor = alturas[1]
                        while(!(altura_menor > alturas[0])){
                            altura_menor *= (1 + taxas_crescimento_anuais[1])
                            qtd_anos++
                        }
                        console.log(`
                            Criança 1: ${alturas[0]} - taxa de cresc.: ${taxas_crescimento_anuais[0]}
                            Criança 2: ${alturas[1]} - taxa de cresc.: ${taxas_crescimento_anuais[1]}
                            A criança 2 demorará ${qtd_anos} ano(s) para ultrapassar a criança 1!`)
                    }else{console.log('A criança 2 nuncar ultrapassára a criança 1!')}
                }
            }
        }
    }  
    
}
comparadorDeAltura([145,145],[0.02,0.01])

