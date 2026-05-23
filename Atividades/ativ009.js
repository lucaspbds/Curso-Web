const inverso = (valor=0) => {
    let tipo_valor = typeof valor
    if(tipo_valor == 'number'){
        if(valor == 0){
            return 0
        }
        return -valor
    }
    if(tipo_valor == 'boolean'){
        return !valor
    }
    else {
        return `boolean ou número esperados, mas o parâmetro é do tipo ${tipo_valor}`
    }
}

console.log(inverso(true))
console.log(inverso('6'))
console.log(inverso(-2000))
console.log(inverso('programação'))
console.log(inverso())