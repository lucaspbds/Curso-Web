const valorAPagarPlanoDeSaude = (idade) => {
    let valor_pagar = ''
    if (idade < 10){
        valor_pagar = `R$ ${(100 + 80).toFixed(2)}`
    }else{
        if (idade <= 30){
            valor_pagar = `R$ ${(100 + 50).toFixed(2)}`
        }else{
            if(idade <= 60){
                valor_pagar = `R$ ${(100 + 95).toFixed(2)}`
            }else{
                if(idade > 60){
                    valor_pagar = `R$ ${(100 + 130).toFixed(2)}`
                }
            }
        }
    }
    return valor_pagar
   

   
        
}

console.log(valorAPagarPlanoDeSaude(70))
console.log(valorAPagarPlanoDeSaude(7))
console.log(valorAPagarPlanoDeSaude(30))
console.log(valorAPagarPlanoDeSaude(60))