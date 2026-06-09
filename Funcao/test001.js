const multiplicacao = (a,b) => {
    return function(c){
        console.log((a+b)*c)
    }
}
const multiplicar_por_nove = multiplicacao(5,4)
multiplicar_por_nove(10)

