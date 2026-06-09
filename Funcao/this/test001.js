const carro = {
    is_on: false,
    estado_carro(){
        console.log(`status: ${this.is_on}`)
    },
    ligar_carro(){
        console.log('Carro ligado!')
        this.is_on = true
    },
    desligar_carro(){
        console.log('Carro desligado!')
        this.is_on = false
    }
}

carro.estado_carro()
carro.ligar_carro()
carro.estado_carro()

const status_carro = carro.estado_carro
status_carro() //Isso ocorre porque a variável is_on não está se referencio ao objeto criado (carro)

//Correção do problema
const status_carro2 = carro.estado_carro.bind(carro)//Dentro do parêntese, eu coloco o objeto que quero que ele referencie
status_carro2()

