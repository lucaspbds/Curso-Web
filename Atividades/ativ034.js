function contem_mesmos_caracteres(str1, str2){
    let string_menor = ''
    let string_maior = ''
    let mesmos_caracteres
    if(str1.length >= str2.length){
        string_maior = str1.toLowerCase()
        string_menor = str2.toLowerCase()
    }else{
        string_maior = str2.toLowerCase()
        string_menor = str1.toLowerCase()
    }
    for(i in string_menor){
        mesmos_caracteres = false
        for(j in string_maior){
            if(string_menor[i] == string_maior[j]){
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
console.log(contem_mesmos_caracteres('omelete', 'ovo'))
console.log(contem_mesmos_caracteres('ovário', 'Ovo'))
