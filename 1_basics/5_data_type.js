/* 
Data Types

여섯 개의 Primitive Type 과 한 개의 오브젝트 타입이 있다.

Primitive Type
1) Number
2) String
3) Boolean
4) undefined
5) null
6) Symbol

7) Object(객체)
    Fucntion
    Array
    Object
*/
const age = 32; 
console.log(typeof age);
console.log('----------')

const infinity = Infinity; //무한대
const nInfinity = -Infinity; // -무한대
console.log(typeof infinity);

/* 
Template Literal
`아이브
장원영 ${변수}`

Escaping Character
1) newline -> \n
2) tab -> \t
3) 백슬래시를 스트링으로 표현하고 싶으면 \\

Undefined
사용자가 직접 값을 초기화하지 않았을 때 지정되는 값.
직접 undefined로 값을 초기화 X

Null 타입
명시적으로 없는 값으로 초기화할 때 사용
*/

console.log('----------')
let init = null;
console.log(init)
console.log(typeof init); // object로 나오는데 버그임 null로 나와야함

console.log('----------')
/* Symbol 타입
유일무이한 값을 생성할 때 사용
다른 프리미티브 값들과 다르게 Symbol 함수를 호출해서 사용한다.
 */
const test1='1';
const test2='1';
console.log(test1===test2); //True

const symbol1 = Symbol('1');
const symbol2 = Symbol('1');
console.log(symbol1===symbol2); //False

/* Object 타입
Map
key:value 쌍으로 이루어져있다.

 */
const dictionary = {
    red : '빨간색',
    orange : '주황색',
};
console.log(dictionary)
console.log(dictionary['red'])
console.log(typeof dictionary) //object

/* Array 타입
값을 리스트로 나열
 */

const iveMembersArray = [
    '안유진',
    '가을',
    '장원영'
]
console.log(iveMembersArray)
// 인덱스 사용
console.log(iveMembersArray[0])
console.log(typeof iveMembersArray) // object

/* 
static typing -> 변수를 선언할때 어떤 타입의 변수를 선언할지 명시를 한다. 
ex) C언어
dynamic typing -> 변수의 타입을 명시적으로 선언하지 않고 갑에 의해 타입을 "추론"
ex) JS

*/
