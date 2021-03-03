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
	console.log('Я прошел этот урок!');
}

learnJS('Javascript', done);


const opt = {
	name: 'test',
	width: 1024,
	height: 1024,
	colors: {
		border: 'black',
		bg: 'red'
	},
	makeTest: function () {
		console.log("Testing");
	}
};

opt.makeTest();

const {
	border,
	bg
} = opt.colors;
console.log(border);

console.log(Object.keys(opt).length);

// console.log(opt["colors"]["border"]);

// delete opt.name;
// console.log(opt);

// let counter = 0;
// for (let key in opt) {
// 	if (typeof (opt[key]) === 'object') {
// 		for (let i in opt[key]) {
// 			console.log(`Свойство ${i} имеет значение ${opt[key][i]}`);
// 		}
// 	} else {
// 		console.log(`Свойство ${key} имеет значение ${opt[key]}`);
// 		counter++;
// 	}
// }
// console.log(counter);

const arra = [2, 13, 26, 8, 10];
// arra.sort(compareNum);
// console.log(arra);

function compareNum(a, b) {
	return a - b;
}


// arra[99] = 0;
// console.log(arra.length);

// console.log(arra);

arra.forEach(function (item, i, arra) {
	console.log(`${i}: ${item} внутри массива ${arra}`);
});

// arra.pop();
// arra.push(10);

// console.log(arra);

// for (let i = 0; i < arra.length; i++) {
// 	console.log(arra[i]);
// }

for (let value of arra) {
	console.log(value);
}

const stt = prompt("", "");
const prod = stt.split(", ");
console.log(prod);


let a = 5,
	b = a;

b = b + 5;

console.log(b);
console.log(a);

// const od = {
// 	a: 5,
// 	b: 1
// };

// const copp = od;

// copp.a = 10;

// console.log(copp);
// console.log(od);

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
}

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

newArray[1] = 'asdasd';
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

const nnn = [2, 5, 7];

log(...nnn);

const array1 = ["a", "b"];
const newArray1 = [...array1];

const q = {
	one: 1,
	two: 2
}

const newObjj = {
	...q
};

console.log(newObjj);

let stri = "some";
let striObj = new String(stri);

console.log(typeof (stri));
console.log(typeof (striObj));

console.dir([1, 2, 3]);

const soldier = {
	health: 400,
	armor: 150,
	sayHello: function () {
		console.log('Hello');
	}
};

const john = Object.create(soldier);

// const john = {
// 	health: 100
// };

// john.__proto__ = soldier; //устаревший формат

// Object.setPrototypeOf(john, soldier);



// console.log(john.armor);
john.sayHello();

console.log(typeof (String(null)));

console.log(typeof (5 + ""));


const ns = 5;

console.log("https://vk.vom/catalog/" + ns);

const fontSize = 26 + 'px';

console.log(typeof (Number('4')));
console.log(typeof (+'4'));
console.log(typeof (parseInt("15px", 10)));

let answ = +prompt("Hello", "");

let switcher = null;
if (switcher) {
	console.log("Working...");
}

switcher = 1;

if (switcher) {
	console.log("Working...");
}

console.log(typeof (Boolean('4')));

console.log(typeof (!!"4444"));
