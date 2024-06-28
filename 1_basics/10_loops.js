/* 
Loops

1) for
2) while

*/
for (let i = 0; i<10 ; i++){
    console.log(i);
}

// for...in
const yuJin = {
    name:'안유진',
    year : 23
}

console.log('-------------');

// for...in
for(let key in yuJin){
    console.log(key) // key 값 출력, name,year
}

const iveMemberArray = ['안유진','가을','레이']
for(let key in iveMemberArray){
    console.log(key) // index 출력
    console.log(`${key}:${iveMemberArray[key]}`)
}

// for...of
for(let value of iveMemberArray){
    console.log(value);
}

//While
let number = 0 ;
while(number<10){
    number ++;
}

// do..while 사용안함 안 쓰는 거 추천
number = 0;
do{
    number ++;
}while(number<10);

// do while은 먼저 실행 후 조건 판단.

// break -> for문 나오기행
// continue -> 해당 순서 반복문을 끝내고 다음 반복문 실행