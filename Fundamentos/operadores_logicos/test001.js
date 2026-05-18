function compras(trabalho1, trabalho2){
    const comprar_livro = trabalho1 || trabalho2 //OU inclusivo
    const comprar_cama = trabalho1 && trabalho2
    const comprar_aparador_pelos = trabalho1 != trabalho2 //Gambiarra para implementar o OU exclusivo
    const estou_pobre = !comprar_cama
    return {comprar_livro, comprar_cama, comprar_aparador_pelos, estou_pobre}
}
console.log(compras(true, true))