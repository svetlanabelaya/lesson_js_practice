///////////////////////////Формат JSON/////////////////////////////


////////////////Введение в формат JSON в JavaScript/////////////////

/*
 Иногда бывает нужно преобразовать некую структуру данных, например, массив или объект, в строку. Это может понадобится, например, чтобы отправить эту структуру через интернет или сохранить в какое-то хранилище.

Для этого в JavaScript был придуман специальный формат JSON.

Формат JSON может содержать одну из двух структур: или массив, или объект с парами ключ-значение. Массивы и объекты строятся так же, как и в JavaScript, но имеют ограничение: все строки и строковые ключи объектов должны быть взяты в двойные кавычки.

Давайте, например, сделаем строку, содержащую массив в формате JSON:
let json = '[1, 2, 3, 4, 5, "a", "b"]';

А теперь сделаем строку, содержащую объект в формате JSON:
let json = `{
	"a": "aaa",
	"b": "bbb",
	"c": "ccc",
	"111": "ddd"
}`;

Можно комбинировать эти структуры в любом порядке:
let json = `[
	{
		"a": "aaa",
		"b": "bbb"
	},
	{
		"c": "ccc",
		"d": "ddd"
	}
]`;

В отличие от структур JavaScript, в JSON не разрешены запятые после последних элементов массивов и объектов:
let json = '[1, 2, 3, 4, 5,]'; // неверно
let json = '[1, 2, 3, 4, 5]';  // верно

Кроме чисел и строк в качестве элементов могут выступать также значения true, false и null:
let json = '[null, true, false]';
*/

/*
 Дан массив:
let arr = [1, 2, 3, 'a', 'b', 'c'];

Вручную преобразуйте этот массив в строку в формате JSON. 
*/

//let json = `[1, 2, 3, "a", "b", "c"]`;


/*
 Дан объект:
let obj = {
	a: 1,
	b: 2,
	c: 'eee',
	d: true,
};

Вручную преобразуйте этот объект в строку в формате JSON. 
*/

// let json = `{
//    "a": "1",
//    "b": "2",
//    "c": "eee",
//    "d": "true"
// }`;

/*
 Дан объект:
let obj = {
	a: ['a', 'b', 'c',],
	b: '111',
	c: 'eee',
};

Вручную преобразуйте этот объект в строку в формате JSON. 
*/

// let json = `{
//    "a": ["a", "b", "c"],
//    "b": "111",
//    "с": "eee"
// }`;





/////////////Преобразование JSON в структуру данных JavaScript////////////
/*
метод JSON.parse - преобразует JSON в стркутутру JS


 Пусть у нас есть строка, содержащая массив в формате JSON:
let json = '[1, 2, 3, 4, 5, "a", "b"]';

Преобразуем нашу строку в массив:
let arr = JSON.parse(json);

В случае, если строка будет содержать некорректный JSON, наш метод выдаст ошибку:
let json = '[1, 2, 3, 4, 5,]'; // некорректный JSON
let arr = JSON.parse(json);    // выдаст ошибку
*/

/*
 Дана строка в формате JSON, содержащая массив с числами:
let json = '[1,2,3,4,5]';

Преобразуйте эту строку в настоящий массив JavaScript и найдите сумму чисел этого массива. 
*/

// let json = '[1,2,3,4,5]';
// let arr = JSON.parse(json);
// let sum = 0;
// for(let elem of arr) {
//    sum += elem;
// }
// console.log(sum);



/*
 Дана строка в формате JSON, содержащая объект с данными:
let json = `{
	"data1": [1,2,3],
	"data2": [4,5,6],
	"data3": [7,8,9]
}`;

Найдите сумму чисел из представленных данных. 
*/
/*
JSON.parse(json) — превратила строку в объект.
Object.values(arr) — достала из объекта только нужные тебе данные (массивы), превратив их в итерируемую структуру.
Вложенный for...of — так как каждый elem сам является массивом, ты «распаковала» его вторым циклом.

*/
// let json = `{
// 	"data1": [1,2,3],
// 	"data2": [4,5,6],
// 	"data3": [7,8,9]
// }`;

// let arr = JSON.parse(json);
// let array = Object.values(arr);
// let sum =0;
// for(let elem of array) {
//    for(let item of elem) {
//       sum += item;
//    }
// }
// console.log(sum);


// let json = `{
// 	"data1": [1,2,3],
// 	"data2": [4,5,6],
// 	"data3": [7,8,9]
// }`;
// let obj = JSON.parse(json);

// function *func(obj) {
//    for(let key in obj) {
//       yield obj[key];
//    }
// }

// let sum = 0;
//  for(let elem of func(obj)) {
//    for(let num of elem) {
//       sum += num;
//    }
// }
// console.log(sum);


/*
Дана строка в формате JSON, содержащая имена юзеров:
let json = '["user1","user2","user3","user4","user5"]';

Выведите эти имена в виде списка ul. 
*/

// let json = '["user1","user2","user3","user4","user5"]';
// let arr = JSON.parse(json);


// function func() {
//    let ul = document.createElement('ul');
   
//    for(let elem of arr) {
//       let li = document.createElement('li');
   
//       li.textContent = elem;
   
//       ul.append(li);
//    }
//    document.body.append(ul);
// }
// let res = func(arr);





/*
 Дана строка в формате JSON, содержащая массив с данными работников:
let json = `[
	{
		"name": "user1",
		"age": 25,
		"salary": 1000
	},
	{
		"name": "user2",
		"age": 26,
		"salary": 2000
	},
	{
		"name": "user3",
		"age": 27,
		"salary": 3000
	}
]`;

Выведите этих работников на экран в виде HTML таблицы. 
*/
// let json = `[
// 	{
// 		"name": "user1",
// 		"age": 25,
// 		"salary": 1000
// 	},
// 	{
// 		"name": "user2",
// 		"age": 26,
// 		"salary": 2000
// 	},
// 	{
// 		"name": "user3",
// 		"age": 27,
// 		"salary": 3000
// 	}
// ]`;
// let arr = JSON.parse(json);

// function func() {
//    let table = document.createElement('table');

//    for(let elem of arr) {
//       let tr = document.createElement('tr');
//       let td = document.createElement('td');
//       td.textContent = elem.name;
//       tr.appendChild(td);
//       let tdAge = document.createElement('td');
//       tdAge.textContent = elem.age;
//       tr.appendChild(tdAge);
//       let tdSal = document.createElement('td');
//       tdSal.textContent = elem.salary;
//       tr.appendChild(tdSal);
//       table.appendChild(tr);
//    }
 
//    document.body.appendChild(table);
// }
// let res = func(arr);





/////////Преобразование структур данных JavaScript в формат JSON//////////

/*
 С помощью метода JSON.stringify можно преобразовать массивы и объекты JavaScript в формат JSON. Давайте посмотрим на примере.

Пусть у нас есть массив с данными:
let arr = [1, 2, 3, 4, 5, 'a', 'b'];

Преобразуем наш массив в строку:
let json = JSON.stringify(arr);

*/

/*
 Дан следующий массив:
let json = ['user1', 'user2', 'user3', 'user4', 'user5'];

Преобразуйте этот массив в формат JSON. 
*/

// let json = ['user1', 'user2', 'user3', 'user4', 'user5'];

// let strin = JSON.stringify(json);
// console.log(strin);


/*
 Дан следующий HTML:
<ul>
	<li>city1</li>
	<li>city2</li>
	<li>city3</li>
	<li>city4</li>
</ul>

Получите список городов в формате JSON. 
*/

// let elems = document.querySelectorAll('li');
// let arr = [];
// for(let elem of elems) {
//    arr.push(elem.textContent);
// }
// let json = JSON.stringify(arr);
// console.log(json);




/*
 Дан следующий HTML:
<table>
	<tr>
		<th>Фамилия</th>
		<th>Имя</th>
		<th>Отчество</th>
	</tr>
	<tr>
		<td>Иванов</td>
		<td>Иван</td>
		<td>Иванович</td>
	</tr>
	<tr>
		<td>Петров</td>
		<td>Петр</td>
		<td>Петрович</td>
	</tr>
	<tr>
		<td>Сидоров</td>
		<td>Сидор</td>
		<td>Сидорович</td>
	</tr>
</table>

Получите представленные данные в формате JSON в виде объекта с ключами surname, name, patronymic. 
*/


// let arr = [];
// let elems = document.querySelectorAll('tr:not(:first-child)');
// for(let row of elems) {
//    let cells = row.querySelectorAll('td');
//    let obj = {
//       surname: cells[0].textContent.trim(),
//       name: cells[1].textContent.trim(),
//       patronymic: cells[2].textContent.trim()
//    }
//    arr.push(obj);
// }
// let json = JSON.stringify(arr);

// console.log(json);


////////////////////Изменение данных в JSON на JavaScript//////////

/*
 Пусть у нас есть строка, содержащая массив в формате JSON:
let json = '[1, 2, 3, 4, 5]';

Давайте добавим в конец этого массива еще один элемент. Для этого нам нужно проделать ряд шагов.

Для начала распакуем JSON в массив JavaScript:
let arr = JSON.parse(json);

Добавим в массив новый элемент:
arr.push(6);

Преобразуем измененный массив обратно в JSON:
let res = JSON.stringify(arr);

Итоговый код будет выглядеть следующим образом:
let json = '[1, 2, 3, 4, 5]';

let arr  = JSON.parse(json);
arr.push(6);

let res = JSON.stringify(arr);
console.log(res);

*/

/*
 Дан следующий JSON:
let json = '["user1","user2","user3","user4","user5"]';

Добавьте в конец строки еще одного юзера. 
*/
// let json = '["user1","user2","user3","user4","user5"]';

// //Для начала распакуем JSON в массив JavaScript: 
// let arr = JSON.parse(json);

// //Добавим в массив новый элемент: 
// arr.push('user6');

// //Преобразуем измененный массив обратно в JSON: 
// let res = JSON.stringify(arr);
// console.log(res);

/*
 Дан следующий JSON:
let json = '["user1","user2","user3","user4","user5"]';

Поменяйте имя второго юзера. 
*/

// let json = '["user1","user2","user3","user4","user5"]';

// let arr = JSON.parse(json);
// // arr[1] = 'userNew';
// arr.splice(1, 1, 'usrNew');

// let res = JSON.stringify(arr);
// console.log(res);


/*
 Дан следующий JSON:
let json = `[
	{
		"name": "user1",
		"age": 25,
		"salary": 1000
	},
	{
		"name": "user2",
		"age": 26,
		"salary": 2000
	},
	{
		"name": "user3",
		"age": 27,
		"salary": 3000
	}
]`;

Добавьте в эту строку еще одного работника. 
*/

// let json = `[
// 	{
// 		"name": "user1",
// 		"age": 25,
// 		"salary": 1000
// 	},
// 	{
// 		"name": "user2",
// 		"age": 26,
// 		"salary": 2000
// 	},
// 	{
// 		"name": "user3",
// 		"age": 27,
// 		"salary": 3000
// 	}
// ]`;

// let arr = JSON.parse(json);
// console.log(arr);

// // arr[3] = {'name': 'user4', 'age':  40, 'salary': 200000};
// arr.splice(3, 0, {'name': 'user4', 'age':  40, 'salary': 200000});
// arr[2].salary = 2500;


// let res = JSON.stringify(arr);
// console.log(res);

