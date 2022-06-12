// - return 키워드 깜박하지 않기
Promise.resolve(10)
.then(data => {
    console.log(data);
    // Promise.resolve(20); // return 빼먹으면 10이랑 undefined 출력됨!!
    return Promise.resolve(20);
})
.then(data => {
    console.log(data);
});


// - 프로미스는 불변 객체라는 사실 명심하기
// function requestData(){
//     const p = Promise.resolve(10);
//     p.then(() => {
//         return 20;
//     });
//     return p;
// }
// requestData().then(v => {
//     console.log(v);
// }); // 이러면 10 이 출력됨

// 20 출력하고 싶으면 이렇게!
function requestData() {
    return Promise.resolve(10).then(v=>{
        return 20;
    });
}
requestData().then(v => {
    console.log(v);
}); // 20


// - 프로미스를 중첩해서 사용하지 않기 -> Promise.all 사용하면 됨!
// 중첩해서 사용한 경우
requestData1().then(result1 => {
    requestData2(result1).then(result2 => {
    // ....
    });
});

// 이런식으로 하기!
requestData1()
.then(result1 => {
    return Promise.all([result1, requestData2(result1)]);
})
.then(([result1, result2]) => {
    // ...
});


// 동기 코드의 예외 처리 신경 쓰기 -> doSync함수를 fetch 안에 넣으면 catch메서드 안에서 예외가 처리된다.
function requestData(){
    return fetch()
        .then(data => {
            doSync();
            console.log(data);
        })
        .catch(error => console.log(error));
}