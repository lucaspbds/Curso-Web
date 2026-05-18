function random_number([min=0, max=100]){
    if (min > max){
        [min, max] = [max, min]
    }
    return Math.floor(Math.random() * (max - min) + min)
}
console.log(random_number([50,40]))
console.log(random_number([,10]))
console.log(random_number([]))
console.log(random_number([98]))