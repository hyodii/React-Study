// then 와 catch 메서드
Promise.reject(1).then(null, error => {
    console.log(error);
});
Promise.reject(1).catch(error => {
    console.log(error);
});


// Promise.resolve().then(
//     () => {
//         throw  new Error('some error');
//     },
//     error => {
//         console.log(error);
//     },
// );  // 에러 발생

Promise.resolve()
    .then(() => {
        throw  new Error('some error');
    })
    .catch(error => {
        console.log(error);
    });

// catch 메서드 이후에도 then 메서드 사용하기
Promise.reject(10)
.then(data => {
    console.log('then1:', data);
    return 20;
})
.catch(error => {
    console.log('catch:', error);
    return 30;
})
    .then(data => {
    console.log('then2:', data);
});
/*
catch: 10
then2: 30
 */

// finally 메서드는 새로운 프로미스를 생성하지 않는다.
function requestData() {
    return fetch()
        .catch(error => {

        })
        .finally( () => {
            sendLogToServer('requestData finished');
        });
}
requestData().then(data => console.log(data));
