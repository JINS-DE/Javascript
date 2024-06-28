/* 
function -> 함수

DRY
D -> Don't
R -> Repeat
Y -> Yourself

함수에서 입력 받는 값에 대한 정의를 Parameter 

실제 입력하는 값은 argument
*/
function multiply(x,y=10){
    return x*y;
}
console.log(multiply(5)) //50, y값 기본값 세팅
console.log(multiply(5,5)) //25

// Arrow 함수
const multiply2 = (x,y) => {
    return x * y;
}
console.log(multiply2(3,4));

const multiply3 = (x,y) => x * y; //위에랑 같음
console.log(multiply3(4,5));

const multiply4 = x => x*2; //파라미터 하나면 ()도 필요없음
console.log(multiply4(2));

const multiply5 = x => y => z => `x:${x} y:${y} z:${z}`
console.log(multiply5(2)(5)(7));

// multiply5랑 같은 함수 
function multiply6(x){
    return function(y){
        return function(z){
            return `x:${x} y:${y} z:${z}`
        }
    }
}
console.log(multiply6(3)(4)(5));

const multiplyTwo = function(x,y) {
    return x*y;
}
console.log(multiplyTwo(4,5));

const multiplyThree = function(x,y,z){
    console.log(arguments);
    return x*y*z;
}
console.log('----------------')
console.log(multiplyThree(4,5,6)); 
//[Arguments] { '0': 4, '1': 5, '2': 6 }
//120

const multiplyAll = function(...arguments){
    return Object.values(arguments).reduce((a,b)=>a*b,1);
}
console.log(multiplyAll(3,4,5,6,7,8,9,10));

// immediately invoked function 함수 바로실행
(function(x,y){
    console.log(x*y);
})(4,5)

console.log(typeof multiply);
// 좌측에 있는게 오른쪽과 같은 파일인가 ? multiply가 Object이냐?
console.log(multiply instanceof Object);
