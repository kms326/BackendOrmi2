`
def one(x):
    def two(y):
        return x ** y
    return two

승수2 = one(2)
승수3 = one(3)

승수2(3)
승수3(3)
`

function one(x) {
    function two(y){
        return x ** y
    }
    return two
}

let 승수2 = one(2)
let 승수3 = one(3)

console.log(승수2(3))
console.log(승수3(3))