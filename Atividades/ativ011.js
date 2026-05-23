function multiplicar(a, b){
    if (!(a < 0 && b  < 0)){
        let acumulador = 0
        for(var i = 1; i <= b; i++){
            acumulador += a
        }
        console.log(acumulador)
    }
}
multiplicar(5,5)
multiplicar(0, 7)
multiplicar(1,5)