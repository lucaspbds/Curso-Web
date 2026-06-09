// function Pessoa (){
//     this.idade = 0
    
//     setInterval(
//         function(){
//             this.idade++
//             console.log(this.idade)
//         }.bind(this)/*Sem o bind, a função não terá acesso ao atributo idade*/,
//         2000 //2 segundos
//     )
// }

//Outra maneira de resolver seria criar uma variável const e referenciar ao this
// function Pessoa (){
//     this.idade = 0
//     const self = this
    
//     setInterval(
//         function(){
//             self.idade++
//             console.log(self.idade)
//         },
//         2000 //2 segundos
//     )
// }

//Outra maneira para resolver o problema é usando arrow function
function Pessoa (){
    this.idade = 0
    const self = this
    
    setInterval(
        ()=> {
            self.idade++
            console.log(self.idade)
        },
        2000 //2 segundos
    )
}   
new Pessoa //Instanciar o objeto
