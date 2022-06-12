const p1 = new Promise((resolve, reject) => {
    //resolve(data)
    // or
    //reject('error message')
});
const p2 = Promise.reject('error message');
//const p3 = Promise.resolve(param);


const p123 = Promise.resolve(123);
console.log(p123 !== 123);  // true

const p22 = new Promise((resolve => setTimeout(() => resolve(10), 1)));
console.log(Promise.resolve(p22)===p22);    // true

// then은 처리됨 상태가 된 프로미스를 처리할 때 사용하는 메소드
// requestData().then(onResolve, onReject);
// Promise.resolve(123).then(data => console.log(data));   // 123
// Promise.reject('err').then(null, error => console.log(error));  // 에러

// reject 이기 때문에 onReject 함수를 호출해서 then 4 then 5 를 출력한다!
Promise.reject('error')
    .then( () => console.log('then 1') )
    .then( () => console.log('then 2') )
    .then( () => console.log('then 3'), () => console.log('then 4') )
    .then( () => console.log('then 5'), () => console.log('then 6') );

