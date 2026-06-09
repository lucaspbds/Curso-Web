function Moto(velocidade_max=150, delta=10, modelo, marca) {
    //Atributo privado
    let velocidade_atual = 0
    
    //Atributo público
    this.modelo = modelo
    this.marca = marca
    this.delta = delta

    //Método público
    this.acelerar = _ => {
        if(velocidade_atual+delta <= get_velocidade_max()){
            velocidade_atual +=delta
        }else{
            velocidade_atual = get_velocidade_max()
        }
    }

    this.get_velocidade_atual = function(){
        return velocidade_atual
    }

    //Método privado
    const get_velocidade_max = _ =>{
        return velocidade_max
    }

}

dominar400 = new Moto(172, 20, 'Dominar 400', 'Bajaj')
console.log(`----${dominar400.modelo}----`)
console.log(dominar400.get_velocidade_atual())
dominar400.acelerar()
dominar400.acelerar()
dominar400.acelerar()
console.log(dominar400.get_velocidade_atual())


bros150 = new Moto(150, 5,'Bros 150', 'Yamaha')
console.log(`----${bros150.modelo}----`)
console.log(bros150.get_velocidade_atual())
bros150.acelerar()
bros150.acelerar()
bros150.acelerar()
console.log(bros150.get_velocidade_atual())

twister250f = new Moto(140, 12, 'Twister 250F', 'Honda')
console.log(`----${twister250f.modelo}----`)
console.log(twister250f.get_velocidade_atual())
twister250f.acelerar()
twister250f.acelerar()
twister250f.acelerar()
console.log(twister250f.get_velocidade_atual())
