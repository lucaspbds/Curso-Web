function somar(){
    let somador = 0
    for(i in arguments){
        somador += arguments[i]
    }
    console.log(somador)
}
somar()
somar(1,2,3)
somar(1)
somar('a', 'b', 'c')