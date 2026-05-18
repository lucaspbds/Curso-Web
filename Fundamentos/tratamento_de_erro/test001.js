function tratar_erro(erro){
    throw 'Valor de entrada incorreto'
}
function aumentar_texto(texto){
    try{
        console.log(texto.toUpperCase())
    }catch(e){
        tratar_erro(e)
    }
    finally{
        console.log('Operação finalizada!') 
    }
}
aumentar_texto('Lucas')
aumentar_texto(6)