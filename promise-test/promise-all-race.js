// 순차적으로 실행되는 비동기 코드
requestData1()
.then(data => {
    console.log(data);
    return requestData2();
})
.then(data => {
    console.log(data);
});

// 병렬로 실행되는 코드
// requestData1().then(data => console.log(data));
// requestData2().then(data => console.log(data));
//

// Promise.all 사용하는 코드
Promise.all([requestData1(), requestData2()]).then(([data1, data2]) => {
    console.log(data1, data2);
});

function requestData1() {
    let a = "rr";
    console.log(a);
}
function requestData2() {
    let b = "rr";
    console.log(b);
}

// requestData 함수가 3초 안에 데이터를 받으면 then 메서드가 호출되고, 그렇지 않으면 catch 메서드가 호출된다.
Promise.race([
    requestData(),
    new Promise( (_, reject) => setTimeout(reject, 3000)),
])
.then(data => console.log(data))
.catch(error => console.log(error));

