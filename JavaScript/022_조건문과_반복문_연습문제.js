// 1부터 100까지 더하는 예제
// for(초깃값;조건;증감값)
// 1번 풀이
let s = 0
for (let i = 0; i < 101; ++i) {
    s += i
}
s

// 2번 풀이
let s = 0
let i = 1
while (i < 101) {
    s += i
    ++i
}
s

new Array(10)
new Array(10).fill(1)
new Array(10).fill(1)
new Array(10).fill(1).map((_, i) => i)
new Array(10).fill(1).map((_, i) => i + 1)

// 저는 javascript도 python처럼 쓰기위해서
// range구현하고, zip도 구현하고, map 구현해놓고 사용합니다.
// 위처럼 개발하시는 것을 권하지는 않습니다.
// 개인 개발 속도는 빨라지지만 협업할 때 문제가 생깁니다.
// 회사 컨벤션으로 맞춰놓으면 개발속도 높아집니다.

// 3번 풀이
let range = new Array(100).fill(1).map((_, i) => i + 1)
let s = 0
for (const i of range) {
    // console.log(i)
    s += i
}
s

// 4번 풀이
new Array(100).fill(1).map((_, i) => i + 1).reduce((a, c) => a + c, 0)


// 5번 풀이
let range = new Array(100).fill(1)
let s = 0
for (const index in range) {
    // index가 문자열이라서 변환해준겁니다.
    // s += parseInt(index) + 1
    s += +index + 1
}
s


// 1부터 100까지 짝수만 더하는 예제
// 100번 반복
let s = 0
for (let i = 0; i < 101; ++i) {
    if (i % 2 === 0) {
        s += i
    }
}
s

// 위보다는 효율적인 코드
// 50번 반복
let s = 0
for (let i = 0; i < 101; i += 2) {
    s += i
}
s

let s = 0
let i = 0
while (i < 101) {
    if (i % 2 === 0) {
        s += i
    }
    ++i
}
s

// [10, 5, 4, 7, 9, 3, 2, 5, 4, 7, 4, 2, 1]에서 5보다 작은 수만(미만인 수) 다 더해주세요.
// 다양하게 풀어보세요. for, while, filter, map, reduce...
let data = [10, 5, 4, 7, 9, 3, 2, 5, 4, 7, 4, 2, 1]
let s = 0
for (const i of data) {
    if (i < 5) {
        s += i
    }
}
s

let data = [10, 5, 4, 7, 9, 3, 2, 5, 4, 7, 4, 2, 1]
let s = 0
let i = 0
while (i < data.length) {
    if (data[i] < 5) {
        s += data[i]
    }
    i++
}
s

data.filter(v => v < 5)
data.filter(v => v < 5).reduce((a, c) => a + c, 0)

data.map(v => v < 5)
data.map(v => v < 5 ? v : 0)
data.map(v => v < 5 ? v : 0).reduce((a, c) => a + c, 0)

data.map(v => {
    if (v < 5){
        return v
    }
    return 0
})

// 이렇게 풀이하는 것은 매우 어려운 방법입니다.
data.reduce((a, c) => c < 5 ? a + c: a, 0)

// forEach
let s = 0
data.forEach(v => v < 5 && (s += v))


// [10, '5', 4, '7', 9, '3', 2, '5', 4, '7', '4', '2', '1']에서 모든 숫자를 다 더해주세요.
// 1. 숫자만 더합니다.
// 2. 문자열도 숫자로 변환하여 더합니다.
// 다양하게 풀어보세요. for, while, filter, map, reduce...

function typeCheck(value){
    return Object.prototype.toString.call(value).slice(8,-1)

let data =[ 10, '5', 4, '7', 9, '3', 2, '5', 4, '7', '4', '2', '1']
let s = 0
for (const i of data) {
    if (typeof(i) === 'number'){
        s += i
    }
}
s

let data = [10, '5', 4, '7', 9, '3', 2, '5', 4, '7', '4', '2', '1']
while (i < data.length) {
    if (typeof(data[i]) === 'number') {
        s += data[i]
    }
    i++
}
s

let data = [10, '5', 4, '7', 9, '3', 2, '5', 4, '7', '4', '2', '1']
data.filter(v => typeof(v) === 'number').reduce((a, c) => a + c, 0)
data.reduce((a, c) => typeof(c) === 'number' ? a + c : a, 0)
// 엔터를 이렇게 칠 수 있기 때문에 가동성 차원에서 이점을 볼 수 있습니다.

// number와 string 모두 더하는 것이었따면?
data.reduce((a, c) => a + parseInt(c), 0)
data.map(v => parseInt(v)).reduceRight((a, c) => a + c, 0)

result = 0
money = 10000
for (let age = 8; age < 36; age++) {
    result += money
    if (money >= 300000) {
        continue
    }
    money = money * 2
}
result