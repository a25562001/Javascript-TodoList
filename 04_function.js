//函式是一段預先寫好的程式碼 需要呼叫
// function hello(name, age) {
//     document.write(`Hello ${name}, you are ${age} years old` );
// }

// hello('John', '82');

function add(num1, num2) {
    // document.write(num1 + num2);
    return num1 + num2 //回傳的值覆蓋掉原先的呼叫 函式碰到return會把值回傳回來不繼續運行
}

// add(3,5);
document.write(add(3,5)); //回傳值以利之後的運算處理
document.write("<br/>")


function add(num1, num2) {
    document.write(num1 + num2);
    document.write("<br/>");
    return 10;
    document.write('Hello');
}

value = add(3,2)
document.write( value );