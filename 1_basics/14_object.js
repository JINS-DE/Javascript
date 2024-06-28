/* 
Object / 객체
*/
// key : value pair
let yuJin = {
    name : '안유진',
    group : '아이브',
    // 객체 안의 함수 method
    dance : function(){
        return `${this.name}이 춤을 춥니다.`; // this : 현재 객체를 가리킴
    }
}
console.log(yuJin);
console.log(yuJin.name);
console.log(yuJin['name']);

const key = 'name';
console.log(yuJin[key]);

console.log(yuJin.dance());

const nameKey = 'name';
const nameValue = '안유진';

const groupKey= 'group';
const groupValue = '아이브';

const yuJin2 = {
    [nameKey]: nameValue, //key에 변수를 넣을 때 []안에 넣음
    [groupKey]: groupValue,
    dance : function() {
        return `${this.name}이 춤을 춥니다.`;
    }
}
console.log(yuJin2);
console.log(yuJin2.dance());

yuJin2['group'] = 'JS'
console.log(yuJin2);

yuJin2['englishName'] = 'An Yu Jin';
console.log(yuJin2);

delete yuJin2['englishName'];
console.log(yuJin2);

/* 
객체의 특징

1) const로 선언할경우 객체 자체를 변경 할 수 없다.
2) 객체 안의 프로퍼티나 메서드는 변경 할 수 있다.
*/
const wonYoung = {
    name : '장원영',
    group : '아이브',
}
console.log(wonYoung);

// wonYoung = {}; // error 발생, 1) const 객체 자체를 변경 불가


wonYoung['group'] = 'JS' // 2번 내용 
console.log(wonYoung);


/* 모든 키값 다 가져오기 */
console.log(Object.keys(wonYoung)); // key값 array로 반환

/* 모든 벨류값 다 가져오기 */
console.log(Object.values(wonYoung)); // value값 array

const name = '안유진' ; 
const yuJin3 = {
    name : name,
    name, // name : '안유진'
    // 위 아래가 똑같은 의미 
};
console.log(yuJin3);