/*
< async와 await >  

async와 await를 이용하면 promise를 더 쉽게 사용할 수 있다.
뭔가 이러한 것들을 추가하면 더 복잡해지지 않을까 생gak할 수도 있지만 이는 그렇지 않다. 


1. async
다음 함수에 async를 붙이면 함수는 항상 프로미스를 반환한다. 
async function f() {
  return 1;
}


2. await
 await는 aync 함수 내부에서 사용할 수 있는데 await 키워드를 만나면 프로미스가 처리될때까지 
 기다린다. 

*/


// aync를 사용해서 프로미스 반환하기 

const f1 = async() => {
    return 1;
}

f1().then(res=> console.log(res))



//await를 이용해서 동기적으로 작업 수행하기 

const f2 = async()=>{

    // await는 fetch라는 함수가 프로미스를 반환할때까지 기다린다. (동기적으로 작업을 수행할 수 있다)
    let response = await fetch('/article/promise-chaining/user.json');
    console.log(response)

    // 3초 기다린 후, 다음을 실행 
    await new Promise((resolve, reject) => setTimeout(resolve, 3000));

}


f2()


