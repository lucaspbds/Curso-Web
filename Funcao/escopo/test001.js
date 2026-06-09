const valor = 'Global'
function imprimir(){
    console.log(valor)
}

function imprimir2(){
    const valor = 'Local'
    imprimir()
}

//Closure
function imprimir3(){
    const valor = 'Local'
    imprimir4 = _ =>{
        console.log(valor)
    }
    imprimir4()
}
imprimir()
imprimir2()
imprimir3()
/**
 * Quando uma função é declarada, ela salva na memória o escopo onde foi criado.
 * Então, a função imprimir foi criada no ambiente global, por isso ela pega a 
 * variável valor no ambiente global e não local. Ela só imprimiria 'Local' se 
 * a gente passasse no parâmetro ou criasse ela dentro de uma função que declarou
 * a variável valor.
 * 
 */