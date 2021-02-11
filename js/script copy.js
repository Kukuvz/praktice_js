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