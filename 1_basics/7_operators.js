/* 
+,-,*,/,%,++,--
*/
// 숫자가 아닌 타입에 +,- 사용해보기
let sample = '99';
console.log(+sample)
console.log(typeof sample); //number로 변환

sample = '안유진';
//NaN -> Not a Number
console.log(+sample)

// 할당 연산자 (assignment operator)
number = 100;
console.log(number);

number += 10;
console.log(number)

/* 비교연산자
==, ===(타입까지 같은가), !=, !==, >, >=, <,<= 
 */

// 삼항 조건 연산자(ternary operator)
console.log(10>0 ? '10이 0보다 크다': '10이 0보다 작다');

console.log('-------------------')
/* 
논리 연산자
1) && (and)
2) || (or)
*/

/* 단축평가 (short circuit evaluation)
&& 사용시 좌측이 true면 우측 값 반환
&& 사용시 좌측이 false면 좌측 값 반환
|| 사용시 좌측이 true면 좌측 값 반환
|| 사용시 좌측이 false면 우측 값 반환
*/
console.log(true || '아이브'); // true
console.log(false || '아이브'); // 아이브
console.log(false && '아이브'); // false
console.log(true && '아이브'); // 아이브
console.log(true && true && '아이브'); //아이브
console.log(true && false && '아이브'); //false
console.log(true || false && '아이브'); //true

// 지수 연산자
console.log(2**2); 

// null 연산자
let name;
console.log(name);

name = name ?? 'test'; // ??는 name이 undefined거나 null일 때 'test' 반환
console.log(name); // test

name = name ?? '아이브';
console.log(name) // test, 위에서 이미 name에 'test'가 들어감

let name2;
name2 ??= '코드'; // 할당 연산자로 활용 가능
console.log(name2);


