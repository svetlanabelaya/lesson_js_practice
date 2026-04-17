//////////////////////Итераторы////////////////////////////////

///////////////Итерируемые объекты в JavaScript//////////////////


/*
 Любой объект, который можно перебрать через цикл for of, называется итерируемым.

Массивы являются одним из частных случаев итерируемых объектов:
let arr = [1, 2, 3];

for (let elem of arr) {
	console.log(elem);
}

Коллекции Map также являются итерируемыми объектами:
let map = new Map();
map.set('a', 1);
map.set('b', 2);
map.set('c', 3);

for (let elem of map) {
	console.log(elem);
}

Коллекции NodeList также являются итерируемыми объектами:
let elems = document.querySelectorAll('p');

for (let elem of elems) {
	console.log(elem);
}

Кроме того, JavaScript позволяет сделать итерируемым все, что угодно. Для этого существуют специальные манипуляции, которые мы будем изучать в следующих уроках:
let obj = {a: 1, b: 2, c: 3};

// тут хитрые манипуляции

for (let elem of obj) { // можно перебирать
	console.log(elem);
}

*/



////////////Функция итератора в JavaScript///////////////////

/*
Все итерируемые объекты имеют специальную структуру, которая называется итератор. Итератор представляет собой функцию, позволяющую перебирать объект. 

Функция итератора для любого итерируемого объекта хранится с ключом в виде хорошо известного символа Symbol.iterator: 
Мы можем убедиться, что под данным ключом хранится функция (но ее код будет скрыт от нас браузером): 
*/
// let arr = [1, 2, 3];

// let func = arr[Symbol.iterator];
// console.log(func); // функция

/*
Проверьте различные типы известных вам итерируемых объектов на предмет наличия в них описанной функции. 
*/

// let elems = document.querySelectorAll('p');
// let func = elems[Symbol.iterator];
// console.log(func);


////////////////////Вызовы итератора в JavaScript/////////////////////////////

/*
Получите итератор коллекции Map. Последовательно вызывайте его, пока элементы коллекции не закончатся. 
*/

// let map = new Map();
// //добавим в коллекцию елементы
// map.set('a', 1);
// map.set('b', 2);
// map.set('c', 3);

// //получим итератор самой коллекции map
// let iter = map[Symbol.iterator]();

// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());


// /*
// Получите итератор коллекции NodeList. Последовательно вызывайте его, пока элементы коллекции не закончатся. 
// */
// let elems = document.querySelectorAll('p');

// //Получим итератор 
// let iter = elems[Symbol.iterator]();

// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());

/*
Получите итератор коллекции HTMLCollection. Последовательно вызывайте его, пока элементы коллекции не закончатся. 

возвращает  HTMLCollection
getElementsByTagName
getElementsByClassName
document.forms
document.images
document.links
*/
// let elem1 = document.getElementsByTagName('p');


// let iter = elem1[Symbol.iterator]();
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());




/////////////////Генераторы в JavaScript////////////////////////////////

/*
 Существуют специальные функции, с помощью которых можно создавать свои итераторы. Такие функции называются генераторы. Имена таких функций должны начинаться со звездочки:
function *func() {
	
}

Внутри генераторов используется ключевое слово yield, указывающее то, что должен вернуть итератор на следующем вызове. Для примера давайте сделаем так, чтобы первый вызов возвращал 1, второй - 2, а третий - 3:
function *func() {
	yield 1;
	yield 2;
	yield 3;
}

Генератор своим результатом возвращает итератор:
let iter = func();

Давайте проверим работу нашего итератора:
console.log(iter.next()); // {value: 1, done: false}
console.log(iter.next()); // {value: 2, done: false}
console.log(iter.next()); // {value: 3, done: false}
console.log(iter.next()); // {value: undefined, done: true}
*/

/*
Создайте итератор, каждый вызов которого будет возвращать числа от 5 до 1. 
*/

// function *func() {
// 	yield 5;
// 	yield 4;
// 	yield 3;
// 	yield 2;
// 	yield 1;
// }

// let iter = func();
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());


/////////////////////////Циклы в генераторах в JavaScript///////////////////////////

/*
 Внутри генераторов можно использовать циклы. При этом мы можем ставить циклы на паузу с помощью yield. Давайте посмотрим на примере. Будем ставить цикл на паузу каждую итерацию:
function *func() {
	for (let i = 1; i <= 3; i++) {
		yield i;
	}
}

Получим итератор:
let iter = func();

Проверим работу нашего итератора:
console.log(iter.next()); // {value: 1, done: false}
console.log(iter.next()); // {value: 2, done: false}
console.log(iter.next()); // {value: 3, done: false}
console.log(iter.next()); // {value: undefined, done: true}
*/

/*
Создайте итератор, каждый вызов которого будет возвращать числа от 10 до нуля. 
*/

// function *func() {
// 	for(let i = 10; i >= 0; i--) {
// 		yield i;
// 	}
// }
// let iter = func();

// console.log(iter.next());


/*
Сделайте генератор, который параметром будет принимать число. Пусть каждый вызов итератора уменьшает число на единицу, пока не будет достигнут ноль. 
*/


// function *func(num) {
// 	for(let i = num; i > 0; i--) {
// 		yield i;
// 	}
// }
// let iter = func(3);

// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());


/*
Сделайте генератор, который параметром будет принимать число. Пусть каждый вызов итератора уменьшает число в два раза и возвращает результат. И так, пока число не станет меньше единицы. 
*/

// function *func(num) {
// 	let i = num;
//   while(i >= 1) {
// 		yield i;
// 		i = i / 2;
// 	}
// }

// let iter = func(6);

// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());


/*
Сделайте итератор, каждый вызов которого будет возвращать следующую степень двойки. 
*/

// function *func(num) {
// 	let i = num;
//   while(true) {
// 		yield i;
// 		i *= 2;
// 	}
// }

// let iter = func(1);

// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());

/*
Сделайте итератор, каждый вызов которого будет возвращать следующее число Фибоначчи.
*/
// function *func() {
// 	let num1 = 0;
// 	let num2 = 1

//   while(true) {
// 		yield num1;
// 		let sum = num1 + num2;
// 		num1 = num2;
// 		num2 = sum;
// 	}
// }

// let iter = func();

// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());


/////////////////////Однократная работа итераторов в JavaScript//////////////////

/*
Каждый итератор может участвовать в цикле лишь один раз. 

 Давайте убедимся в этом. Пусть у нас есть следующий генератор:
function *func() {
	yield 1;
	yield 2;
	yield 3;
}

Сделаем итератор:
let iter = func();

Переберем итератор одним циклом:
for (let elem of iter) {
	console.log(elem); // 1, 2, 3
}

А теперь переберем итератор двумя циклами:
for (let elem of iter) {
	console.log(elem); // 1, 2, 3
}
for (let elem of iter) {
	console.log(elem); // не работает
}

Для решения проблемы нужно для каждого нового цикла создавать свой итератор:
let iter1 = func();
for (let elem of iter1) {
	console.log(elem); // 1, 2, 3
}

let iter2 = func();
for (let elem of iter2) {
	console.log(elem); // 1, 2, 3
}

Можем упростить:
for (let elem of func()) {
	console.log(elem); // 1, 2, 3
}

for (let elem of func()) {
	console.log(elem); // 1, 2, 3
}

*/

/*
 Исправьте ошибку, допущенную в следующем коде:
function *func() {
	for (let i = 1; i <= 3; i++) {
		yield i;
	}
}

let elems = func();

for (let elem of elems) {
	console.log(elem);
}
for (let elem of elems) {
	console.log(elem);
}

*/

// function *func() {
// 	for (let i = 1; i <= 3; i++) {
// 		yield i;
// 	}
// }

// let elems1 = func();
// let elems2 = func();

// for (let elem of elems1) {
// 	console.log(elem);
// }
// for (let elem of elems2) {
// 	console.log(elem);
// }




////////////////Итератор объекта в JavaScript///////////////////////////

/*
 Давайте создадим итератор, с помощью которого можно будет перебрать обьект. Для начала сделаем генератор, параметром принимающий объект и перебирающий его:
function *func(obj) {
	for (let key in obj) {
		yield obj[key];
	}
}

Создадим теперь итератор:
let iter = func({a: 1, b: 2, c: 3});

Переберем итератор циклом:
for (let elem of iter) {
	console.log(elem); // 1, 2, 3
}
*/

/*
 Сделайте итератор, который будет перебирать объект и каждым вызовом возвращать массив, в нулевом элементе которого будет лежать ключ, а в первом элементе - значение элемента объекта. Пример:
let iter = func({a: 1, b: 2, c: 3});

for (let elem of iter) {
	console.log(elem); // ['a', 1], ['b', 2], ['c', 3]
}

*/

// function *func(obj) {
// 	for(let key in obj) {
// 		yield [key, obj[key]];
// 	}
// }
// let iter = func({a: 1, b: 2, c: 3});

// for(let elem of iter) {
//   console.log(elem);
// }
 

// function* func(obj) {
//   // 1. Получаем массив всех ключей объекта
//   let keys = Object.keys(obj); 

//   // 2. Перебираем этот массив ключей
//   for (let key of keys) {
//     // 3. А теперь отдай (yield) массив, где первый элемент - ключ,
//     // а второй - значение, которое лежит в obj по этому ключу
//     yield [key, obj[key]];
//   }
// }
// let iter = func({a: 1, b: 2, c: 3});

// for(let elem of iter) {
//   console.log(elem);
// }





///////////////Создание итерируемого объекта в JavaScript///////////////////////

/*
 Давайте создадим настоящий итерируемый объект, который можно будет перебрать через цикл for-of. Для этого объекту нужно добавить соответствующую функцию в Symbol.iterator.

Давайте реализуем. Пусть у нас есть следующий объект:
let obj = {
	a: 1,
	b: 2,
	c: 3,
};

Добавим функцию в Symbol.iterator:
obj[Symbol.iterator] = function() {

}

Превратим эту функцию в генератор:
obj[Symbol.iterator] = function *() {

}

Внутри нашей функции this будет ссылаться на сам объект:
obj[Symbol.iterator] = function *() {
	console.log(this); // сам объект
}

Запустим в итераторе перебор объекта:
obj[Symbol.iterator] = function *() {
	for (let key in this) {
		yield obj[key];
	}
}

Все, объект можно перебирать циклом for-of:
for (let elem of obj) {
	console.log(elem); // 1, 2, 3
}

*/
/*
 Сделайте объект, который можно перебрать циклом for-of. Пусть в элемент цикла попадает объект, в ключе key которого будет ключ перебираемого объекта, а в ключе val - значение. Пример:
let obj = {a: 1, b: 2, c: 3};

for (let elem of obj) {
	console.log(elem);
}

Выведет:
{key: 'a', val: 1}
{key: 'b', val: 2}
{key: 'c', val: 3}

*/
// let obj = {a: 1, b: 2, c: 3};

// obj[Symbol.iterator] = function *() {
// 	for(let key in this) {
// 		yield {key: key, val: this[key]};
// 	}
// }

// for (let elem of obj) {
// 	console.log(elem);
// }

//////////////////Генератор через вычисляемое свойство в JavaScript//////////////////

/*
 В предыдущем уроке мы генератор для объекта присваивали отдельной командой. Таким был наш объект:
let obj = {
	a: 1,
	b: 2,
	c: 3,
};

Так мы задавали генератор:
obj[Symbol.iterator] = function *() {
	for (let key in this) {
		yield obj[key];
	}
}

На самом деле можно переписать наш код по-другому через вычисляемое свойство:
let obj = {
	a: 1,
	b: 2,
	c: 3,
	[Symbol.iterator]: function *(){
		for (let key in this){
			yield this[key];
		}
	}
};

Проверим перебор:
for (let elem of obj) {
	console.log(elem); // 1, 2, 3
}

*/


// let obj = {
// 	a: 1,
// 	b: 2,
// 	c: 3,
// 	[Symbol.iterator]: function *() {
// 	for(let key in this) {
// 		yield {key: key, val: this[key]};
// 	}
// }
// };



// for (let elem of obj) {
// 	console.log(elem);
// }




/////////////Встроенный итератор values в JavaScript/////////////////////
/*
 Все итерируемые объекты имеют встроенный итератор values, позволяющий перебирать значения. Давайте проверим его на коллекции Map:
let map = new Map;

map.set('a', 1);
map.set('b', 2);
map.set('c', 3);

Получим итератор:
let iter = map.values();

Переберем его циклом:
for (let elem of iter) {
	console.log(elem); // 1, 2, 3
}

*/

//Проверьте работу данного итератора на массиве. 

// let arr = [1, 2, 3];

// let iter = arr.values();
// for(let elem of iter) {
// 	console.log(elem);
// }

//Проверьте работу данного итератора на коллекции Set. 

// let set = new Set();
// set.add(1);
// set.add(2);
// set.add(3);

// let iter = set.values();

// for(let elem of iter) {
// 	console.log(elem);
// }


//////////////////////Встроенный итератор keys в JavaScript/////////////////

/*
 Все итерируемые объекты имеют встроенный итератор keys, позволяющий перебирать ключи. Давайте проверим его на массиве:
let arr = ['a', 'b', 'c'];

Получим итератор:
let iter = arr.keys();

Переберем его циклом:
for (let elem of iter) {
	console.log(elem); // 0, 1, 2
}

*/

//Проверьте работу данного итератора на коллекции Map. 

// let map = new Map();
//  map.set('a', 1);
//  map.set('b', 2);
//  map.set('c', 3);

//  let iter = map.keys();
//  for(let key of iter) {
// 	console.log(map.get(key));
//  }

//Проверьте работу данного итератора на коллекции Set. 

// let set = new Set();
// set.add(1);
// set.add(2);
// set.add(2);
// set.add(4);

// let iter = set.keys();
// for(let elem of iter) {
// 	console.log(elem);
// }



////////////////Встроенный итератор entries в JavaScript/////////////////
