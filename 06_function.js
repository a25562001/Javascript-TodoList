//函數的原因 就是會有共用的程式碼 重複性高的 不用一個一個去改 提高整潔性
//宣告函數
// function hello() {
//     console.log('Hello')
// }

// function hello2() {
//     console.log('Hello2')
// }

// function hello3() {
//     console.log('Hello3')
// }
//執行函數
// hello();
// hello2();
// hello3();

// function addMoney() {
//     console.log(100 + 200);
// }

// //結帳頁面
// addMoney();

// //購物車頁面
// addMoney();

//有參數的 function
//接受傳入兩個參數
function addMoney(price1, price2, discount) {
    // console.log('price1', price1);
    // console.log('price2', price2);
    // console.log('discount', discount);
    // console.log(price1 + price2 - discount);
}

// //結帳頁面
// addMoney(100, 200, 100);

// //購物車頁面
// addMoney(200,300, 100);

//有回傳值的 function (return)
// function addMoney(price1, price2, discount) {
//     let result = price1 + price2 - discount
//     //把result回傳出去 把加減完的結果傳出去 給外面的人知道裡面做了什麼事 結果是什麼
//     return result;
// }
// //用total去接
// let total = addMoney(100, 200, 100);
// console.log('total', total);

function addMoney(price1, price2, discount) {
    let result = price1 + price2 - discount
    let message = '普通會員'
    
    if (result >= 50000) {
        message = '尊榮會員'
        return message;
    }
    
    if (result >= 20000) {
        message = '白金會員'
        //沒有return 的話會被後面覆蓋過去 也有中止function的功能
        return message;
    }

    return message;
}
let msg = addMoney(20000, 5000, 1000);
console.log('msg', msg);

//function 的使用方法

// const card = {
//     name: '小明'
// }
// const card2 = {
//     name: '小明2'
// }
// const card3 = {
//     name: '小明3'
// }

//構造函數 function 

// function createCard(initName) {
//     this.name = initName;
// }

// // new 建立或構造
// const a1 = new createCard ('小明');
// const a2 = new createCard ('小明2');
// const a3 = new createCard ('小明3');
// const a4 = new createCard ('小明4');

// console.log(a1);
// console.log(a2);
// console.log(a3);
// console.log(a4);


function hello() {}

let hello = function () {}

let hello = () => {}