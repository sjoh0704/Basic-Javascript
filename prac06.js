//Promise
//자바스크립트에서 비동기 처리를 할때 사용하며, 콜백 지옥을 해결할 수 있다. 

/*
< 콜백 지옥 예시 >
    isBusHere(function(isBusHereResult) {
        isBusStop(isBusHereResult, function(isBusStopResult) {
        isDoorOpen(isBusStopResult, function(isDoorOpenResult) {
            findWallet(isDoorOpenResult, function(isWalletHere) {
            findCard(isWalletHere, function(isCardHere) {
                payBusFare(isCardHere, function() {
                // 드디어 결제가 성공했네요...
                }, failureCallback);
            }, failureCallback);
            }, failureCallback);
        }, failureCallback);
        }, failureCallback);
    }, failureCallback);




  <Promise를 이용해서 콜백 지옥을 벗어나보자>

    isBusHere()
    .then(function(isBusHereResult) {
        return isBusStop(isBusHereResult)
    })
    .then(function(isBusStopResult) {
        return isDoorOpen(isBusStopResult)
    })
    .then(function(isDoorOpenResult) {
        return findWallet(isDoorOpenResult)
    })
    .then(function(isWalletHere) {
        return findCard(isWalletHere)
    })
    .then(function(isCardHere) {
        return payBusFare(isCardHere)
    })
    .catch(failureCallback);
    



    < 화살표 함수를 이용하면 더 보기 편해진다. >

    isBusHere()
    .then(isBusHereResult => isBusStop(isBusHereResult))
    .then(isBusStopResult => isDoorOpen(isBusStopResult))
    .then(isDoorOpenResult => findWallet(isDoorOpenResult))
    .then(isWalletHere => findCard(isWalletHere))
    .then(isCardHere => payBusFare(isCardHere))
    .catch(failureCallback);

  */
  

    // Promise 만들어보기 

const isReady = true;
// const isReady = false;
promise_example = new Promise((resolve, reject) => {

    if(isReady)
    resolve('준비가 되었으니 다음 일을 처리해주세요')
    else
    reject('준비가 되지 않았어요 ㅠㅠ')
})

promise_example
.then(msg => console.log(msg))
.catch(msg=> console.log(msg))
.finally(()=> console.log('작업 끝'))

// Promise는 총 3가지 상태로 표현할 수 있다. 
// resolve는 이행, reject는 실패, 그리고 아무것도 아닌 상태 Pending으로 나타낼 수 있다.  
