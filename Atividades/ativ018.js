const numero_extenso = num => {
    switch(num){
        case 0:
            return 'Zero'
        case 1:
            return 'Um'
        case 2:
            return 'Dois'
        case 3:
            return 'Três'
        case 4:
            return 'Quatro'
        case 5:
            return 'Cinco'
        case 6:
            return 'Seis'
        case 7:
            return 'Sete'
        case 8:
            return 'Oito'
        case 9:
            return 'Nove'
        case 10:
            return 'Dez'
        default:
            return 'Número fora do intervalo exigido! 0 <= numero <= 10'
    }
}
console.log(numero_extenso(3))
console.log(numero_extenso(30))
console.log(numero_extenso(5))