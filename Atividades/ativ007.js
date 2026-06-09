function resolverFormulaBhaskara(a, b, c){
    delta = (b**2)-(4*a*c)
    if (delta >= 0){
        x1 = (-b + Math.sqrt(delta))/(2*a)
        x2 = (-b - Math.sqrt(delta))/(2*a)
        return [x1, x2]
    }
    return 'Delta é negativo!'
}

console.log(resolverFormulaBhaskara(3,-5,12))
console.log(resolverFormulaBhaskara(1,-5,6))
