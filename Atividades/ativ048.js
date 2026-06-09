function eh_maior_ou_igual(num1, num2){
    if(typeof num1 == typeof num2 & typeof num1 == 'number'){
        return num1 >= num2
    }
    return false
}
console.log(eh_maior_ou_igual(0,0))
console.log(eh_maior_ou_igual(0,'0'))
console.log(eh_maior_ou_igual(5, 1))
console.log(eh_maior_ou_igual('e', 'a'))
