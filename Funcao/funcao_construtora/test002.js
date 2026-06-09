function Pessoa(nome){
    this.nome = nome

    this.falar = _ =>{
        console.log(`Meu nome é ${this.nome}`)
    }
}

p1 = new Pessoa('Lucas')
p1.falar()
fala = p1.falar
fala()

class Pessoa1{
    constructor(nome){
        this.nome = nome
    }

    falar(){
        console.log(`Meu nome é ${this.nome}`)
    }
}
p2 = new Pessoa1('Maria')
p2.falar()
fala_maria = p2.falar
fala_maria()