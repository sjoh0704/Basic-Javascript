//함수 사용하기 
function isValidAge(person){
    if(person['age'] > 19)
        return true;
    else
        return false;
}


var personArray = [
    {'name':'sseung', 'age':25},
    {'name':'ppanda', 'age':30},
    {'name':'john', 'age':17},
    {'name':'cindy', 'age':13}
]


//for문 사용하기
for(var i = 0; i < personArray.length; i++){
    console.log(personArray[i]['name'] + '씨 당신은 ')
    if(isValidAge(personArray[i])){

        console.log('성인입니다!')
    }
    else{
        console.log('미성년자입니다!')
    }
}
   

// 나이 평균 구하는 함수 만들기
function getAverageAge(personArray){
    sum = 0
    for(var i=0; i<personArray.length; i++){
        sum += personArray[i]['age']
    }
    return sum / personArray.length;
}

console.log(getAverageAge(personArray))
