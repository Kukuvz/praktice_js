"use strict";

// // alert("Hello");

// // const result = confirm('Are you here?');
// // console.log(result);

// // const answer = +prompt("Вам есть 18?", "18");
// // console.log(answer + 5);

// const answers = [];

// // answers[0] = prompt("Как ваше имя?", "");
// // answers[1] = prompt("Как ваша фамилия?", "");
// // answers[2] = prompt("Сколько вам лет?", "");

// console.log(typeof (answers));

// const category = 'toys';

// console.log(`https://url.com/${category}/5`);

// const user = "Ivan";

// alert(`Привет, ${user}`);

// console.log('arr' + " - object");
// console.log(4 + +"5");

// let incr = 10,
//     decr = 10;

// // ++incr;
// // --decr;

// console.log(++incr);
// console.log(--decr);

// console.log(5 % 2);

// console.log(2 + 2 * 2 !== 8);

// const isChecked = false,
//     isClose = false;

// console.log(isChecked || !isClose);

if (4 == 4) {
    console.log('Ok');
} else {
    console.log('Error');
}

// const num = 50;

// if (num < 49) {
//     console.log('Error');
// } else if (num > 100) {
//     console.log('Много');
// } else {
//     console.log('OK!');
// }

// (num === 50) ? console.log('OK!') : console.log('Error!');

// const num = '50';
// switch (num) {
//     case '49':
//         console.log("Неверно");
//         break;
//     case '100':
//         console.log("Неверно");
//         break;
//     case '50':
//         console.log("Верно");
//         break;
//     default:
//         console.log("Не в этот раз");
//         break;
// }

let num = '50';
// while (num <= 55) {
//     console.log(num);
//     num++;
// }

// do {
//     console.log(num);
//     num++;
// }
// while (num < 55);

for (let i = 1; i < 10; i++) {
    if (i === 6) {
        // break;
        continue;
    }
    console.log(i);
    num++;
}

let num5 = 20;

function showFirstMessage(text) {
    console.log(text);
    console.log(num5);
}

showFirstMessage("Hello World!");
console.log(num5);

function calc(a, b) {
    return (a + b);
}

console.log(calc(4, 3));
console.log(calc(5, 6));
console.log(calc(10, 6));

function ret() {
    let num = 50;
    return num;
}

const anothernum = ret();
console.log(anothernum);

const logger = function () {
    console.log("Hello");
};

logger();

const calc1 = (a, b) => {
    console.log();
    return a + b;
};

const str = "teSt";
const arr = [1, 2, 3];

// console.log(str[2]);
// console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str);

const fruit = "Some fruit";
console.log(fruit.indexOf("q"));

const logg = "Hello world";
// console.log(logg.slice(6, 11));

// console.log(logg.substring(6, 11));

console.log(logg.substr(6, 5));


const num2 = 12.2;
console.log(Math.round(num2));

const test = "12.2px";
console.log(parseInt(test));
console.log(parseFloat(test));


function first() {
    //Do something
    setTimeout(function () {
        console.log(1);
    }, 500);
}

function second() {
    console.log(2);
}

first();
second();

function learnJS(lang, callback) {
    console.log(`Я учу: ${lang}`);
    callback();
}

function done() {
    console.log("Я прошел этот урок!");
}

learnJS("JavaScript", done);

const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    },
    makeTest: function () {
        console.log("Test");
    }
};

options.makeTest();

const {
    border,
    bg
} = options.colors;
console.log(border);
console.log(bg);


// console.log(options.name);

// delete options.name;

// console.log(options);

// console.log(Object.keys(options).length);

// let counter = 0;
// for (let key in options) {
//     if (typeof(options[key]) === 'object') {
//         for (let i in options[key]) {
//             console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
//             counter++;
//         }
//     } else {
//         console.log(`Свойство ${key} имеет значение ${options[key]}`);
//         counter++;
//     }
// }
// console.log(counter);

const array = [2, 13, 26, 8, 10];
array.sort(compareNum);
console.log(array);

function compareNum(a, b) {
    return a - b;
}

// array[99] = 0;
// console.log(array.length);
// console.log(array);

array.forEach(function (item, i, array) {
    console.log(`${i}: ${item} внутри массива ${array}`);
});

// array.pop();
// console.log(array);

// array.push(10);
// console.log(array);

for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}

for (let value of array) {
    console.log(value);
}

const str1 = prompt("", "");
const products = str.split(", ");
products.sort();
console.log(products.join(';'));

// let a = 5,
//     b = a;

// b = b + 5;

// console.log(b);
// console.log(a);

// const obj = {
//     a: 5,
//     b: 1
// };

// const copy = obj; //Ссылка на объект

// copy.a = 10;
// console.log(copy);
// console.log(obj);

function copy(mainObj) {
    let objCopy = {};
    let key;
    for (key in mainObj) {
        objCopy[key] = mainObj[key];
    }
    return objCopy;
}

const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4
    }
};

const newNumbers = copy(numbers);

newNumbers.a = 10;
newNumbers.c.x = 10;

// console.log(newNumbers);
// console.log(numbers);

const add = {
    d: 17,
    e: 20
};

const clone = Object.assign({}, add);

clone.d = 20;

// console.log(add);
// console.log(clone);

const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice();

newArray[1] = 'sadas';
console.log(newArray);
console.log(oldArray);

const video = ['youtube', 'vimeo', 'rutube'],
    blogs = ['wordpress', 'livejournal', 'blogger'],
    internet = [...video, ...blogs, 'vk', 'facebook'];

console.log(internet);

function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

const mmm = [2, 5, 7];

log(...mmm);

const arrb = ['a', 'b'];
const www = [...arrb];

const q = {
    one: 1,
    two: 2
};

const newObject = {
    ...q
};

let str5 = "some";
let strObj = new String(str5);

// console.log(typeof(str5));
// console.log(typeof(strObj));

console.dir([1, 2, 3]);

const soldier = {
    health: 400,
    armor: 100,
    sayHello: function () {
        console.log("Hello!");
    }
};

// const john = {
//     health: 150
// };

// john.__proto__ = soldier;

// Object.setPrototypeOf(john, soldier);

const john = Object.create(soldier);

// console.log(john.armor);
john.sayHello();