//Array 陣列
let c1 = '小明'
// ...
let c30 = '小白'

//宣告陣列使用[]
let classA = ['小明','小白','小華'];
// console.log('轉學前: ', classA);

//push往後面加一個學生
classA.push('小黃');
// console.log('轉學後: ',classA);

//長度 length
// console.log(classA.length);

//用陣列儲存多張圖片
let igPhotos = [
    'https://xx.img.con/a1.png',
    'https://xx.img.con/a2.png',
    'https://xx.img.con/a3.png'
]

//把陣列展示出來
console.log('第一筆', igPhotos[0]); //index 索引
console.log('第二筆', igPhotos[1]);
console.log('第三筆', igPhotos[2]);

// console.log('igPhotos', igPhotos);
// console.log('igPhotos len', igPhotos.length);

//Object 物件

//宣告物件使用{} 去宣告一個東西裡面放屬性
const card = {
    name: 'John',
    address: 'Taiwan',
    age: '19',
}

console.log('名字', card.name); // . =>card的name

//以貼文舉例
const post = {
    image: 'https://xx.img.con/a1.png',
    desc: 'this is a pic',
    date: 2022/02/20,
    comment: ['good', 'great'] //可能會有多則留言 所以用陣列
}

const post2 = {
    image: 'https://xx.img.con/a1.png',
    desc: 'this is a pic',
    date: 2022/02/21,
    comment: ['good', 'great', 'great', 'great'] //可能會有多則留言 所以用陣列
}

//動態牆
const wall = [
    post,
    post2
]

//console.log('wall', wall)