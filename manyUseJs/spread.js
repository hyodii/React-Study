//spread
let person = {name:"hyojin", age:12}

// ... 많이 쓰임!!
let person2 = {...person}   // 1 - 실제로 객체를 하나 더 생성하는 것 (객체의 깊은 복사)
let person22 = {...person, address:"seoul"} // 기존에 있는 값에 추가 가능
let person222 = {...person, name:"jimin"} // 기존에 있는 값 변경 가능
let person3 = person        // 2 - 객체의 주소값만 복사(즉 객체는 하나이고 그 객체를 참조하는 변수가 두개)
console.log(person222)
console.log(person3)

console.log(person==person2)    // false
console.log(person==person3)    // true


let a = [1,2]
let b = [...a,3]
console.log(b)  // [ 1, 2, 3 ]

let c = [...a, ...b]
console.log(c)  //[ 1, 2, 1, 2, 3 ]
