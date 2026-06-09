ehTriangulo = (a, b, c) => {
    return (a < b+c) && (b < a+c) && (c < a+b)
}

function classificarTriangulo(a, b, c){
    if (ehTriangulo(a,b,c)){
        const equilatero = a == b && a==c
        const isosceles = (a == b && a !=c) || (b == c && b != a) || (c == a && c != a) 
        const escaleno = (a != b && c!=a && b != c)
        if (equilatero){
            return 'Equilátero'
        }else{
            if(isosceles){
                return 'Isósceles'
            }else{
                return 'Escaleno'
            }
        }
    }else{
        return 'Não é um triângulo'
    }
}

console.log(classificarTriangulo(5,5,5))
console.log(classificarTriangulo(5,4,4))
console.log(classificarTriangulo(3,4,5))
console.log(classificarTriangulo(5,1,2))