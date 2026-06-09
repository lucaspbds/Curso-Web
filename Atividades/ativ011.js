const ehAnoBissexto = ano => {
    return ano%4==0 && (ano%100!=0 || ano%400==0)?'Ano bissexto! True':'Não é ano bissexto! False'
}
console.log(ehAnoBissexto(1900))
console.log(ehAnoBissexto(2000))
console.log(ehAnoBissexto(2100))
console.log(ehAnoBissexto(2028))