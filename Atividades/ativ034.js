function contem_mesmos_caracteres(str1, str2){
    let mesmos_caracteres
    for(i in str1.toLowerCase()){
        mesmos_caracteres = false
        for(j in str2.toLowerCase()){
            if(str1[i] == str2[j]){
                mesmos_caracteres = true
                break
            }
        }
        if(mesmos_caracteres){
            continue
        }else{return false}
    }
    return true
}

console.log(contem_mesmos_caracteres('casa', 'hotel'))
console.log(contem_mesmos_caracteres('abc','cba'))
console.log(contem_mesmos_caracteres('abcdf', 'dcba'))

