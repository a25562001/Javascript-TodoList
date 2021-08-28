//構造函數 function 建立物件

// function createCard(initName) {
//     this.name = initName;
// }

//class的基本操作 類別要大寫
// class Card {
//     constructor (initName) {
//         this.name = initName;
//     }
// }

// const c1 = new Card('John')
// //c1是用Card去建立的物件
// console.log('c1', c1);
// console.log(c1.name);

//this
//看當下執行者是誰 誰就是this
class Card {
    constructor (initName) {
        this.name = initName;
    }
    hello() {
        console.log('Hello', this.name)
    }
}
const c1 = new Card('John')
console.log('c1', c1);
c1.hello();

const a = {name: 'AA'}
a.helloooooo = c1.hello
a.helloooooo()

//繼承
class Car {
    constructor() {
        this.name = initName
    }
    start() {
        console.log('車子啟動')
    }
}

class Porshe extends Car {
    constructor(namePorshe) {
        super(namePorshe)
    }
}

const p1 = new Porshe("保時捷");
p1.start();
console.log('name', p1.name)