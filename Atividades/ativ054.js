function receber_primeiro_e_ultimo_elemento(lista){
    index_ultimo = lista.length - 1
    return [lista[0], lista[index_ultimo]]
}
console.log(receber_primeiro_e_ultimo_elemento([7,14,'olá']))
console.log(receber_primeiro_e_ultimo_elemento([-100, 'aplicativo', 16]))
console.log(receber_primeiro_e_ultimo_elemento(['Oi', 4,'Leão', 'Barco']))