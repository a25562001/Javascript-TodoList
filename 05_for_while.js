//For

// let a = 10;
// a = a + 20;
// a += 20;
// console.log('a', a);

//i++ => i = i + 1
// for (let i = 0; i < 10; i++) {
//     console.log('i:', i);
// }

// let classA = [100, 70, 59];
// classA.push(40);
// console.log(classA[0]);
// console.log(classA[1]);
// console.log(classA[2]);

// for (let i = 0; i < classA.length; i++) {
//     console.log('i:', classA[i]);
// }


// for (let i = 0; i < classA.length; i++) {
//     if (i === 2) {
//         classA[i] = 999;
//     }
// }
// console.log('classA', classA);

//陣列裡面包含兩個物件[物件一, 物件二,....]
// const posts = [
//     {
//         name:'John',
//         desc: 'post1'
//     },
//     {
//         name: 'John2',
//         desc: 'post2'
//     }
// ]


// for (let i = 0; i < posts.length; i++) {
//     if (i === 0) {
//         //把posts的第一筆取出來放到post變數
//         let post = posts[0];
//         console.log(post);
//     }
// }

//While 如果為真會" 一直執行 "直到不為真

let condition = true;
let target = 10;
let i = 0;

while (condition) {
    if (i === target) {
        condition = false;
    }
    console.log(i);
    i++;
}