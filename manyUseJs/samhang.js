// 삼항연산자
let person = {name:"hyojin", age:17}
// let person = null

if(person){
    console.log(person.name)
}else {
    console.log("there is no person")
}

// 리액트에서는 이렇게 표현
console.log(person?person.name:"there is no person")
