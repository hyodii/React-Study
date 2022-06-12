function requestData1(callback){
    callback(data);
}
function requestData2(callback){
    callback(data);
}
function onSuccess1(callback){
    console.log(data);
    requestData2(onSuccess2);
}
function onSuccess2(callback){
    console.log(data);
    requestData2(onSuccess1);
}
requestData1(onSuccess1);

//위에 코드를 아래처러 할수있음
requestData1()
    .then(data => {
        console.log(data);
        return requestData2();
    })
    .then(data => {
        console.log(data);
    });