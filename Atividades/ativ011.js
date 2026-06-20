const ehAnoBissexto = ano => {
    if(ano <= 0){
        return 'Não é ano bissexto! False'
    }
    return ano%4==0 && (ano%100!=0 || ano%400==0)?'Ano bissexto! True':'Não é ano bissexto! False'
}


console.log(ehAnoBissexto(0))
console.log(ehAnoBissexto(4))
console.log(ehAnoBissexto(100))
console.log(ehAnoBissexto(400))
console.log(ehAnoBissexto(800))
console.log(ehAnoBissexto(2020))
console.log(ehAnoBissexto(2021))