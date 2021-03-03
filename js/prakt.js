"use strict";

let number = 4.6;

console.log(4 / 0);

const obj = {
	name: "John",
	age: 25,
	isMarried: false
};

// console.log(obj.name)
console.log(obj["name"]);

let arr = ['plum.png', 'orange.jpg', 6, 'apple.bmp', {},
	[]
];

console.log(arr[1]);

// alert('Hello');

// const result = confirm("Are you here?");
// console.log(result);

// const answer = +prompt("Вам есть 18?", "18");
// console.log(answer + 5);

// const answers = [];

// answers[0] = prompt('Как ваше имя?', '');
// answers[1] = prompt('Как ваша фамилия?', '');
// answers[2] = prompt('Сколько вам лет?', '');

// console.log(typeof (answers));

const category = 'toys';

console.log(`https://someurl.com/${category}/5`);

const user = "Ivan";

alert(`Привет, ${user}`);

console.log('arr' + " - object");
console.log(4 + +"5");

let incr = 10,
	decr = 10;

// ++incr;
// --decr;

console.log(++incr);
console.log(--decr);

console.log(2 + 2 * 2 === 8);

const isChecked = false,
	isClose = false;

console.log(isChecked || !isClose);

if (4) {
	console.log('ok');
} else {
	console.log('error');
}



// if (num < 49) {
//     console.log('Error');
// } else if (num > 100) {
//     console.log('Много');
// } else {
//     console.log('ok!');
// }

// (num === 50) ? console.log('ok!') : console.log('Error');

// const num = '50';

// switch (num) {
//     case '49':
//         console.log('Неверно');
//         break;
//     case '100':
//         console.log('Неверно');
//         break;
//     case '50':
//         console.log('В точку!');
//         break;
//     default:
//         console.log('Не в этот раз');
//         break;
// }

// let num = 50;

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
}

let num = 20;

function showFirstMessage(text) {
	console.log(text);
	let num = 10;
	console.log(num);
}

showFirstMessage("Hello world!");
console.log(num);


// function calc(a, b) {
// 	return(a + b);
// }

// console.log(calc(4, 3));
// console.log(calc(5, 6));
// console.log(calc(10, 6));

function ret() {
	let num = 50;
	return num;
}

const anothernum = ret();
console.log(anothernum);

let logger = function () {
	console.log('Hello');
};

logger();

const calc = (a, b) => {
	console.log('1');
	return a + b;
};

let V = calc(4, 5);
console.log(V);

const str = 'teSt';
// const array = [1, 2, 3];
// console.log(array.length);

console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str);

const fruit = "some fruit";

console.log(fruit.indexOf("q"));

const logg = "hello world";

console.log(logg.slice(6, 11));

console.log(logg.substring(6, 11));

console.log(logg.substr(6, 5));

const num55 = 12.2;
console.log(Math.round(num55));

const test = "12.2px";
console.log(parseInt(test));
console.log(parseFloat(test));
