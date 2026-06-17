function sequenciaNumeros(inicio=0,fim=100){
    [inicio, fim] = inicio > fim ? [fim,inicio]:[inicio,fim]
    for(let i = inicio; i <= fim; i++){
        console.log(i)
    }
}
sequenciaNumeros(1,3)
console.log('-=-=-=-=-=-=-=-=-=-=')
sequenciaNumeros(5,1)