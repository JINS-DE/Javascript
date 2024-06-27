/**
 * Variable 선언하기
 * 
 * 1) var - 더 이상 쓰지 않는다.
 * 2) let
 * 3) const
 */
var name = '코드';
console.log(name);

var age = 32 ;
console.log(age);

let ive = '아이브';
console.log(ive);


// let과 var로 선언하면 값을 추후 변경 할 수 있다
ive = "안유진";
console.log(ive);

// 바꿀 수 없는 변수
const newJeans = '뉴진스'; 
console.log(newJeans);
// newJeans = '코드'; 

/**
 * 선언과 할당
 * 
 * 1) 변수를 선언하는 것.
 * 2) 할당
 */
var name; // 변수 선언
var name = '코드'; // 할당
console.log(name);

let girlFriend;
console.log(girlFriend); // undefined

const girlFriends2; // 초기값 할당을 무조건 해줘야함
