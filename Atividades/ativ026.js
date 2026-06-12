const ehPar = num => {
    if(num%2 == 0){
        return true
    }
    return false
}
let cont = 1  
let lista_pares = []
while(cont <= 100){
    if(ehPar(cont)){
        lista_pares.push(cont)
    }
    cont++
}
console.log(lista_pares)