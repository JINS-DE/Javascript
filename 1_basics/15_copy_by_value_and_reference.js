/* 
copy by value  값에 의한 전달
copy by reference 참조에 의한 전달

1) 기본적으로 모든 primitive(객체 빼고 나머지들(array,함수..)) 값은 copy by value
2) 객체는 copy by reference다.
*/
// copy by value
let original = '안녕하세요';
let clone = original; 

console.log(original);
console.log(clone);

clone += ' 안유진 입니다.';
console.log('------------------------')
console.log(original);
console.log(clone);

// copy by reference
// orginalObj는 객체가 담겨 있는 메모리 주소를 저장한다. 
let originalObj = {
    name : '안유진',
    group : '아이브',
};
// originalObj의 메모리 주소를 복사하게 되는 것.
let cloneObj = originalObj;
console.log(originalObj);
console.log(cloneObj);
console.log('------------------------')
// 그래서 얕은 복사가 됨. 
originalObj['group'] = 'JS';
console.log(originalObj);
console.log(cloneObj);

//TEST
const yuJin1 = {
    name : '안유진',
    group : '아이브',
};
const yuJin2 = yuJin1;
const yuJin3 = {
    name : '안유진',
    group : '아이브',
};

console.log(yuJin1 === yuJin2); // true
console.log(yuJin1 === yuJin3); // false
console.log(yuJin2 === yuJin3); // false 

/* 
Spread Operator 
- 사용하면 메모리 공간은 다른 공간을 사용한다.
- copy by value
 */
const yuJin4 = {
    ...yuJin3,
};
console.log(yuJin4);
console.log(yuJin4 === yuJin3); // false 

const yuJin5 = {
    name : 'JS',
    ...yuJin3,
};
console.log(yuJin5); // { name: '안유진', group: '아이브' } 덮어쓰기

const yuJin6 = {
    ...yuJin3,
    name : 'JS',

};
console.log(yuJin6); // { name: 'JS', group: '아이브' }

const numbers = [1,3,5];
const numbers2 = [
    ...numbers,
    10,
]
console.log(numbers2);