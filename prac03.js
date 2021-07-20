//var, let, const 사용

//1. var
//var를 사용하면 괄호 내부에서 선언되어도 
//외부에서 선언된 것처럼 사용된다.(이를 호이스팅이라 한다.)  

var num1 = 10
if(num1 == 10){
    var num1 = 20
    console.log(num1)  // 20 출력 
}
console.log(num1)  // 20 출력




//2. let
//scope라는 개념이 도입되어 내부에서 선언된 변수는 내부에서만 사용 가능하다. 
let num2 = 10
if(num2 == 10){
    let num2 = 20
    console.log(num2)  // 20 출력 
}
console.log(num2)  // 10 출력




//3. const 
//const로 선언하면 선언 이후, value를 변화시킬 수 없다. 

const PI = 3.14
// PI = 3.141592 에러 발생



//ES6에서는 let, const를 사용하는 것을 권장한다. 