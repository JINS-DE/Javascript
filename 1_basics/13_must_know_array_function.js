/* 
Array Functions
*/
let iveMembers = [
    '안유진',
    '가을',
    '레이',
    '장원영',
    '리즈',
    '이서',
];
console.log(iveMembers);

//push()
console.log(iveMembers.push('JS')); // 7을 return 
console.log(iveMembers);

console.log('-------------------');
//pop()
console.log(iveMembers.pop()); // return JS
console.log(iveMembers);

console.log('-------------------');
// shift() -> 맨 앞에 삭제
console.log(iveMembers.shift()); // return 안유진
console.log(iveMembers);

// unshift() -> 맨 앞으로 추가 
console.log(iveMembers.unshift('안유진')); // return 안유진
console.log(iveMembers);
console.log('-------------------');

// splice()
console.log(iveMembers.splice(0, 3)) // 0번 index부터 3개값 삭제
console.log(iveMembers);

// immutable
// 원래 array를 건들지 않고 새로운 메모리에 생성
iveMembers = [
    '안유진',
    '가을',
    '레이',
    '장원영',
    '리즈',
    '이서',
];
console.log('-------------------');
console.log(iveMembers);

// concat() -> 기존 값 iveMembers는 그대로 
console.log(iveMembers.concat('JS'));
console.log(iveMembers);

// slice()
console.log(iveMembers.slice(0,3)); // 0번~2번 index 까지
console.log(iveMembers);

// spread operator
let iveMembers2 = [
    ...iveMembers,
];
console.log(iveMembers2); //[ '안유진', '가을', '레이', '장원영', '리즈', '이서' ]

let iveMembers3 = [
    iveMembers,
];
console.log(iveMembers3); // [ [ '안유진', '가을', '레이', '장원영', '리즈', '이서' ] ]

console.log('-------------------');
let iveMembers4 = iveMembers;

console.log(iveMembers4);
console.log(iveMembers4===iveMembers); //True
console.log([
    ...iveMembers,
] === iveMembers); //false ...은 다른메모리 사용 

// join()
console.log(iveMembers.join()); // 안유진,가을,레이,장원영,리즈,이서
console.log(iveMembers.join('/')); // 안유진/가을/레이/장원영/리즈/이서

//sort() 기본적으로 오름차순
iveMembers.sort();
console.log(iveMembers);
console.log(iveMembers.reverse()); // 내림차순

let numbers = [1,9,7,5,3,];
// a, b를 비교했을 때
// 1) a를 b보다 나중에 정렬하려면 (뒤에 두려면) 0보다 큰 숫자를 반환
// 2) a를 b보다 먼저 정렬하려면 (앞에두려면) 0보다 작은 숫자를 반환
// 3) 원래 순서를 그대로 두려면 0을 반환
numbers.sort((a,b)=>{
    return a > b ? 1 : -1
});
console.log(numbers);
numbers.sort((a,b)=>a > b ? -1 : 1);
console.log(numbers);

// map() : 모든 값 순회
console.log('-------------------');
console.log(iveMembers.map((x) => x));
console.log(iveMembers.map((x) => `아이브: ${x}`));

console.log(iveMembers.map((x) => {
    if(x ==='안유진'){
        return `아이브:${x}`;
    } else {
        return x;
    }
}));

// filter() : 모든 값 순회하면서 조건에 맞는 애들 필터링
numbers = [1,8,7,6,3];
console.log(numbers.filter((x)=> x % 2===0)); // 짝수만, 괄호 안에 값이 참일 때

// find() : 순회 하다가 해당 되는 값 하나만 리턴
console.log(numbers.find((x) => x%2 ===0 )); // 8

// findIndex() : find하고 index값 리턴
console.log(numbers.findIndex((x) => x%2 ===0 ));

// reduce() 
console.log(numbers.reduce((p, n) => p+n ,0));
/* 
1. 초기값 0이 p에 입력
2. numbers 어레이 첫번째 값인 1이 n에 입력
3. p+n 실행 -> 0+1 = 1 return
4. return 된 1이 p에 입력
5. 어레이 두번째 값인 8이 n에 입력
6. p+n = 1+8 = 9 리턴
7. 9값이 p에 다시 입력
8. numbers 리스트의 모든 값들을 다 순회할때까지 반복 결국 모든 값을 다 더한 25가 반환된다. 
 */