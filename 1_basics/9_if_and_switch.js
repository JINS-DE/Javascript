/* IF AND SWITCH */

let number = 5;

if(number%2 ===0){
    console.log("짝수")
} else {
    console.log('홀수')
}

if(number%2 ===0){
    console.log("2의배수")
} else if (number%3 ===0){
    console.log('3의배수')
} else {
    console.log('2,3배수아님')
}

const englishDay = 'monday';

let koreanDay;

switch(englishDay){
    case 'monday':
        koreanDay = '월요일';
        break;
    case 'thuesday':
        koreanDay = '화요일';
        break
    default:
        koreanDay = "주말";
        break
}

console.log(koreanDay)

