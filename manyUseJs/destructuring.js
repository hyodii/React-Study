// destructuring

let person = {
    name : "hyojin",
    age : 20
}

// 예전 문법
// let name = person.name
// let age = person['age']®

// 현재 ES6 위에 두분장이 이거랑 같은 것
// let {name, age} = person

// 한개만 불러올수도 있음
let {name} = person

console.log(name)


let array = [1,2,3,4]
// 앞에 두개가 들어감!
let [a,b,...rest] = array
// ...rest 앞에 두개를 제외한 나머지 값이 들어감
let [a,b,...rest] = array
console.log(rest)


