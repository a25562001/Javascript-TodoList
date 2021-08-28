//IF 的用法
// if (100 < 50) {
//     //當我們的條件成立要做的事情
        // console.log('This is true');
// } else {
//     //當我們的條件沒有成立要做的事情
        // console.log('error');
// }
// true or false
// let condition = 100 < 50
// console.log('condition', condition);
// if (condition) {
//     //當我們的條件成立要做的事情
//     console.log('This is true');
// } else {
//     //當我們的條件沒有成立要做的事情
//     console.log('error');
// }

// + - * / 算術運算子
// && || ! 邏輯運算子
//由左邊看起
// && 兩邊都該是 true 結果才是true (and)
// || 兩邊只要有一個是true 結果就是true (or)
// ! 把結果反向

let condition = false && true
let condition2 = true || false
let condition3 = !true
let condition4 = !(true && false) //括號裡是false 但有! 所以為true
let condition5 = !(true || false) //括號裡是true 但有! 所以為false

// console.log('condition', condition);
// console.log('condition2', condition2);
// console.log('condition3', condition3);
// console.log('condition4', condition4);
// console.log('condition5', condition5);

// let scoreA = 59
// let scoreB = 100
// // let condition = scoreA === scoreB
// // > < >= <= === !==
// if (scoreA > scoreB) {
//     console.log('A考的比較高分')
// } else {
//     console.log('B考的比較高分')
// }

let score = 70;

// if (score >= 100) {
//     console.log('great')
// } else if (score >= 70) {
//     console.log('good')
// } else if (score >= 60) {
//     console.log('pass')
// }else {
//     console.log('fail')
// }

//Switch用法
let key = 100;

switch (key) {
    case 100:
        console.log('you got 100')
        break;
    case 200:
        console.log('you got 200')
        break;
    default:
        console.log('you got no score')
        break;
}