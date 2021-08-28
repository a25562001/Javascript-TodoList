//基本變數 字串 數字 布林值 undefined null
let myName = 'John'; //string 
let age = ' My age is 18'
let word = myName + age
console.log(word);

let title = '提示訊息: '
let title1 = '錯誤'
let title2 = '成功'

let alert1 = title + title1
let alert2 = title + title2

console.log(alert1);
console.log(alert2);

let score = 100; //number, 不需要單引號
//+ - * / %
console.log(score + 200)



let isFake = true; //boolean
console.log(isFake);

let bag = undefined;
console.log(bag);

let bag2 = null;
console.log(bag2);


//var let 
//const常數 不能做變動

//let/const: { block scope }
// var: function(){
//     function scope
//     }
//     Global →Function → Block

//作用域不一樣，var的作用域在函數 (function) 裡，let的作用域則是在區塊 (block) 裡。

    

let a1 = "aaa";
console.log(a1);
//修改a1的內容
a1 = "bbb"
console.log(a1);