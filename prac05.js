//화살표 함수

// 다음 함수들은 모두 동일하게 사용할 수 있다. 

// 1. 일반 함수
function hello(msg){
    console.log(msg)
}


// 2. 화살표 함수
const helloArray = (msg) =>{
    console.log(msg)
}


// 3. 코드블럭이 없는 화살표 함수 
// 보통 한줄로 코드를 작성할 수 있을 때 코드블럭 없이 다음과 같이 사용한다. 
const helloArrayOneline = (msg) => console.log(msg)




//문제: 화살표 함수를 이용하여 사람들의 나이 평균 구하기 
let personArray = [
    {'name':'sseung', 'age':25},
    {'name':'ppanda', 'age':30},
    {'name':'john', 'age':17},
    {'name':'cindy', 'age':13}
]

const getAverageAge = (personArray) => {
    let sum = 0
    personArray.forEach(person=>{
        sum += person['age']
    })
    return sum / personArray.length
}

console.log(getAverageAge(personArray))