function tipoDoDia(dia){
    switch (dia){
        case 1:
            console.log('É um fim de semana!')
            break
        case 2: case 3: case 4: case 5: case 6:
            console.log('É um dia útil!')
            break
        case 7:
            console.log('É um fim de semana!')
            break
        default:
            console.log('Número inválido! Digite um número entre 1 e 7')
    }
}

tipoDoDia(8)
tipoDoDia(7)
tipoDoDia(2)