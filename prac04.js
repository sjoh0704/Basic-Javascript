//for문 사용하기 
const arrayPerson = ['John', 'Cindy', 'Ppanda']


// 다음 for문들은 모두 동일한 결과를 출력한다. 

//1. 기본 for문
for(let i=0; i<arrayPerson.length; i++)
    console.log(arrayPerson[i])



//2. for of
for(let person of arrayPerson)
    console.log(person)


//3. for in
for(let index in arrayPerson)
    console.log(arrayPerson[index])


//4. for each
arrayPerson.forEach((person)=>{
    console.log(person)
})

