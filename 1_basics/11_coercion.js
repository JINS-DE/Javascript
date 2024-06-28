/* 
타입 변환(Type Conversion)
1) 명시적
2) 암묵적
*/

// 명시적
let age = 32;
let stringAge = age.toString();
console.log(typeof stringAge, stringAge); //string 32

toString() // 스트링
parseInt() // 정수
parseFloat() //실수

//boolean 타입으로 변환 (***중요*** 외우셈)
// 스트링은 기본적으로 true 인데 ''같이 값이 없으면 false로 인식
console.log(!!'x'); //True 
console.log(!!''); // false 

//0은 숫자는 false 문자열은 true
console.log(!!0); // false
console.log(!!'0'); // true 
console.log(!!undefined); //false
console.log(!!null); //false
console.log(!!{}); // object는 true
console.log(!![]); // array도 true
console.log('-------------')

/* 
# false 반환
1) 아무 글자도 없는 String
2) 값이 없는 경우
3) 0
*/

// 암묵적 ( 이렇게 쓰지 않기 조심해야함. )
let test = age + '' ;
console.log(typeof test, test); //string 32

// javascript는 이런 기괴한 현상이 발생하니 조심해야 한다. 
console.log('98' + 2); // 982
console.log('98' * 2); // 196
console.log('98' - 2); // 96
