function converter_idade_em_dias(idade){
    if (typeof idade == 'number'){
        return idade*365
    }
    return NaN
}
console.log(converter_idade_em_dias(25))
console.log(converter_idade_em_dias(70))
console.log(converter_idade_em_dias('a'))