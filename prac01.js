/* 
노드는 자바스크립트 엔진으로 빌드된 자바스크립트 런타임이다. 
v8 자바스크립트 엔진은 브라우저가 없이도 자바스크립트가 동작할 수 있도록 만든 것이다. 
즉 v8엔진은 자바스크립트를 실행할 수 잇는 환경 
노드 = 자바스크립트를 브라우저가 아닌 컴퓨터에서 브라우저 없이 실행하게 도와주는 환경 
ES6는 자바스크립트에 대한 버전 (많은 곳에서 표준으로 사용)
npm = node package manager 파이썬의 pip와 동일 



< 자바 스크립트 실행 방법 >

node 설치 후, 터미널에서 node [파일명].js로 실행가능  
*/



// 변수 선언 
var number = 10
console.log(number)

// 리스트 선언 
var numArray = [10, 20, 30]
console.log(numArray[0])
console.log(numArray[1])

//Dictionary
var person = {'name':'ppanda', 'age': 21}
console.log(person)
console.log(person['name'])

// 조건문

if(person['age'] > 19){
    console.log('술 먹자')
}
else{
    console.log('못 먹어~')
}
