

///////////Деструктуризация////////////////////////////////

//////Деструктуризация массивов в JavaScript////////////////


/*
В следующем коде части массива записываются в соответствующие переменные:

let arr = ['John', 'Smit', 'development', 'programmer', 2000];

let name       = arr[0];
let surname    = arr[1];
let department = arr[2];
let position   = arr[3];
let salary     = arr[4];
Переделайте этот код через деструктуризацию согласно изученной теории.
*/
// let arr = ['John', 'Smit', 'development', 'programmer', 2000];
// let [name, surname, department, position, salary] = arr;
// console.log(surname);
// console.log(department);





///////Деструктуризация массива из функции в JavaScript/////////


/*
function func() {
	return [2025, 12, 31];
}
Деструктуризируем возвращаемое этой функцией значение:

let [year, month, day] = func();
*/

/*
В следующем коде части массива записываются в соответствующие переменные:

function func() {
	return ['John', 'Smit', 'development', 'programmer', 2000];
}

let arr = func();

let name       = arr[0];
let surname    = arr[1];
let department = arr[2];
let position   = arr[3];
let salary     = arr[4];
Переделайте этот код через деструктуризацию согласно изученной теории.
*/

// function func() {
// 	return ['John', 'Smit', 'development', 'programmer', 2000];
// }

// let [name, surname, department, position, salary] = func();
// console.log(name);
// console.log(surname);
// console.log(department);
// console.log(position);


///////////Пропуск элементов массива при деструктуризации в JavaScript//

/*
В следующем коде части массива записываются в соответствующие переменные:

let arr = ['John', 'Smit', 'development', 'programmer', 2000];

let department = arr[2];
let position   = arr[3];
Переделайте этот код через деструктуризацию согласно изученной теории.
*/

// let arr = ['John', 'Smit', 'development', 'programmer', 2000];
// let[,, department, position,,] = arr;
// console.log(position);




//////////Лишние значения при деструктуризации массива в JavaScript///

/*
  Если в массиве меньше элементов, чем переменных, то в "лишние" переменные запишется undefined


  Если в массиве больше элементов, чем переменных - лишние элементы никуда не запишутся и ничего страшного не произойдет. Для примера добавим в наш массив еще часы, минуты и секунды - от этого ничего не поменяется:
*/



/////////////Остаток массива при деструктуризации в JavaScript////////

/*
Если в массиве больше элементов, чем переменных, при необходимости лишние элементы можно записать в массив с помощью оператора rest:

let arr = [2025, 12, 31, 23, 59, 59];
let [year, month, day, ...time] = arr;

console.log(year);  // выведет 2025
console.log(month); // выведет 12
console.log(day);   // выведет 31

console.log(time);  // выведет [23, 59, 59]
*/


/*
В следующем коде части массива записываются в соответствующие переменные:

let arr = ['John', 'Smit', 'development', 'programmer', 2000];

let name    = arr[0];
let surname = arr[1];

let info = arr.slice(2); // все элементы со второго до конца массива
Переделайте этот код через деструктуризацию согласно изученной теории.
*/
// let arr = ['John', 'Smit', 'development', 'programmer', 2000];

// let [name, surname, ...info] = arr;

// console.log(name);
// console.log(surname);
// console.log(info);




///////Значения по умолчанию при деструктуризации массива в JavaScript//

/*
Для переменных можно указывать значения по умолчанию. В этом случае, если переменной не хватит элемента массива - возьмется значение по умолчанию. В следующем примере переменной day по умолчанию указано значение 1:

let arr = [2025, 12];
let [year, month, day = 1] = arr;

console.log(year);  // выведет 2025
console.log(month); // выведет 12
console.log(day);   // выведет 1

А вот если для переменной day будет значение в массиве - значение по умолчанию будет проигнорировано:
*/



/*
В следующем коде части массива записываются в соответствующие переменные:

let arr = ['John', 'Smit', 'development', 'programmer'];

let name       = arr[0];
let surname    = arr[1];
let department = arr[2];

let position;
if (arr[3] !== undefined) {
	position = arr[3];
} else {
	position = 'trainee';
}
Переделайте этот код через деструктуризацию согласно изученной теории.
*/

// let arr = ['John', 'Smit', 'development'];

// let [name, surname, department, position = 'trainee'] = arr;
// console.log(position);


////Функции по умолчанию при деструктуризации массива в JavaScript////

/*
В качестве значения по умолчанию можно также указывать функцию. Пусть, к примеру, у нас есть функция, возвращающая текущий день месяца:

function func() {
	return (new Date).getDate();
}
Давайте укажем эту функцию в качестве значения переменной day:

let [year, month, day = func()] = arr;
*/

// function func() {
// 	return (new Date).getDate();
// }
// let arr = [2026, 12];
// let [year, month, day = func()] = arr;

// console.log(day);


//Модифицируйте полученный выше код так, чтобы при отсутствии в массиве значения для месяца по умолчанию брался текущий месяц, а при отсутствии значения для года - соответственно текущий год.


// function func() {
// 	return (new Date).getDate();
// }
// let arr = [];
// let [year = 2026, month = 2, day = func()] = arr;

// console.log(year);
// console.log(month);
// console.log(day);


/////Объявление переменных при деструктуризации массива в JavaScript///

/*
Не обязательно объявлять переменные при деструктуризации. Они могут быть объявлены заранее и тогда при присваивании не нужно будет писать команду let:

let arr = [2025, 12, 31];
let year;
let month;
let day;

[year, month, day] = arr;


let arr = [2025, 12, 31];
let year;

let [year, month, day] = arr;

Это, однако, приведет к ошибке, так как нельзя одну и туже переменную объявлять два раза через let (получится, что year объявлена два раза).
*/





////////Деструктуризация объектов в JavaScript//////////////


/*
let obj = {
	year:  2025,
	month: 12,
	day:   31,
};

let {year, month, day} = obj;

console.log(year);  // выведет 2025
console.log(month); // выведет 12
console.log(day);   // выведет 31

При деструктуризации объектов имена переменных должны совпадать с ключами объекта, порядок переменных и элементов в объекте не имеет значения
*/

/*
В следующем коде части объекта записываются в соответствующие переменные:

let options = {
	color: 'red',
	width:  400,
	height: 500,
};

let color  = options.color;
let width  = options.width;
let height = options.height;
Передел
*/

// let options = {
// 	color: 'red',
// 	width:  400,
// 	height: 500,
// };

// let {color, width, height} = options;

// console.log(color);
// console.log(width);
// console.log(height);




////Имена переменных при деструктуризации объектов в JavaScript////////

/*
Можно сделать так, чтобы имена переменных не совпадали с именами ключей объекта:

let obj = {
	year:  2025,
	month: 12,
	day:   31,
};

let {year: y, month: m, day: d} = obj;

console.log(y); // выведет 2025
console.log(m); // выведет 12
console.log(d); // выведет 31
*/


/*
В следующем коде части объекта записываются в соответствующие переменные:

let options = {
	color: 'red',
	width:  400,
	height: 500,
};

let c = options.color;
let w = options.width;
let h = options.height;
Переделайте этот код через деструктуризацию согласно изученной теории.
*/

// let options = {
// 	color: 'red',
// 	width:  400,
// 	height: 500,
// };

// let {color: c, width: w, height: h} = options;

// console.log(c);
// console.log(w);
// console.log(h);


//////Значения по умолчанию при деструктуризации объектов в JavaScript//

/*
При деструктуризации объектов можно также указывать значения по умолчанию. При этом, в отличии от деструктуризации массивов, необязательной может быть любая переменная - не обязательно с конца массива. Давайте, например, укажем значение по умолчанию для переменной year:

let obj = {
	month: 12,
	day:   31,
};

let {year = 2025, month, day} = obj;

console.log(year);  // выведет 2025
console.log(month); // выведет 1
console.log(day);   // выведет 31
*/


// let obj = {
// 	month: 12,
// 	day:   31,
// };

// let {year = 2025, month, day} = obj;

// console.log(year);  // выведет 2025
// console.log(month); // выведет 1
// console.log(day);   // выведет 31

/*
В следующем коде части объекта записываются в соответствующие переменные:

let options = {
	width:  400,
	height: 500,
};

let color;
if (options.color !== undefined) {
	color = options.color;
} else {
	color = 'black';
}

let width  = options.width;
let height = options.height;
Переделайте этот код через деструктуризацию согласно изученной теории.
*/

// let options = {
// 	width:  400,
// 	height: 500,
// };

// let {color = 'black', width, height} = options;

// console.log(color);
// console.log(width);
// console.log(height);




////////////Переменные и значения по умолчанию в JavaScript////////

/*
Можно также менять названия переменных на свои при этом задавая значения по умолчанию:

let obj = {
	month: 12,
	day:   31,
};

let {year:y = 2025, month, day} = obj;

console.log(y);     // выведет 2025
console.log(month); // выведет 1
console.log(day);   // выведет 31

*/



/*
В следующем коде части объекта записываются в соответствующие переменные:

let options = {
	width:  400,
	height: 500,
};

let c;
if (options.c !== undefined) {
	c = options.color;
} else {
	c = 'black';
}

let w = options.width;
let h = options.height;
Переделайте этот код через деструктуризацию согласно изученной теории.

*/

// let options = {
// 	width:  400,
// 	height: 500,
// };

// let c;
// if (options.c !== undefined) {
// 	c = options.color;
// } else {
// 	c = 'black';
// }

// let w = options.width;
// let h = options.height;


// let options = {
// 	width:  400,
// 	height: 500,
// };

// let {color:c = 'black', width, height} = options;

// console.log(c);





/////Объявление переменных при деструктуризации объектов в JavaScript///

/*
Не обязательно объявлять переменные при деструктуризации. Они могут быть объявлены заранее:

let obj = {
	year:  2025,
	month: 12,
	day:   31,
};

let year, month, day; // объявим переменные заранее
Тут, однако, в отличии от массивов, есть нюансы. Без команды let перед фигурными скобками эти фигурные скобки не будут восприняты JavaScript как команда на деструктуризацию (а будут восприняты как блок кода):

{year, month, day} = obj; // не будет работать
Для решения проблемы команду на деструктуризацию объекта нужно брать в круглые скобки:

({year, month, day} = obj);
*/



///////////////Деструктуризация параметров функций в JavaScript//////

/*
   Переделайте следующий код через деструктуризацию согласно изученной теории:

   function func(employee) {
      let name       = employee[0];
      let surname    = employee[1];
      let department = employee[2];
      let position   = employee[3];
      let salary     = employee[4];
   }

   func( ['John', 'Smit', 'development', 'programmer', 2000] );


*/

// func( ['John', 'Smit', 'development', 'programmer', 2000] );

// function func([name, surname, department, position, salary]) {
//      console.log(name);
//      console.log(surname);
//      console.log(department);
//      console.log(position);
//      console.log(salary);
// }


/*
Переделайте следующий код через деструктуризацию согласно изученной теории:

function func(employee) {
	let name     = employee[0];
	let surname  = employee[1];
	let info     = employee[2];
}

func( ['John', 'Smit', 'development', 'programmer', 2000] );


*/


// func( ['John', 'Smit', 'development', 'programmer', 2000] );

// function func([name, surname, info]) {
//      console.log(name);
//      console.log(surname);
//      console.log(info);
// }


/*
Переделайте следующий код через деструктуризацию согласно изученной теории:

function func(employee) {
	let name       = employee[0];
	let surname    = employee[1];
	let department = employee[2];
	
	let position;
	if (arr[3] !== undefined) {
		position = arr[3];
	} else {
		position = 'junior';
	}
}

func( ['John', 'Smit', 'development'] );
*/

// func( ['John', 'Smit', 'development'] );

// function func([name, surname, department, position = 'junior']) {
//      console.log(name);
//      console.log(surname);
//      console.log(department);
//      console.log(position);
// }


/*
Переделайте следующий код через деструктуризацию согласно изученной теории:

function func(department, employee, hired) {
	let name     = employee[0];
	let surname  = employee[1];
	
	let year  = hired[0];
	let month = hired[1];
	let day   = hired[2];
}

func( 'development', ['John', 'Smit'], [2018, 12, 31] );
*/

// func( ['development', ['John', 'Smit'], [2018, 12, 31]] );

// function func([department, employee, hired]) {
//      console.log(department);
//      console.log(employee);
//      console.log(hired);
// }






//////////Деструктуризация oбъектов параметров функций в JavaScript/////////


/*
Аналогичным образом можно деструктуризировать параметры-объекты:

function func({year, month, day}) {
	console.log(year);  // выведет 2025
	console.log(month); // выведет 12
	console.log(day);   // выведет 31
}

func({year: 2025, month: 12, day: 31,});
*/

/*
Переделайте следующий код через деструктуризацию согласно изученной теории:

function func(options) {
	let color  = options.color;
	let width  = options.width;
	let height = options.height;
}

func( {color: 'red', width: 400, height: 500} );
*/

// function func({color, width, height}) {
// 	console.log(color);
// 	console.log(width);
// 	console.log(height);
// }

// func( {color: 'red', width: 400, height: 500} );


/*Переделайте следующий код через деструктуризацию согласно изученной теории:

function func(options) {
	let width  = options.width;
	let height = options.height;
	
	let color;
	if (options.color !== undefined) {
		color = options.color;
	} else {
		color = 'black';
	}
}

func( {color: 'red', width: 400, height: 500} );
*/

// function func({color, width, height}) {
//    console.log(color);
//    console.log(width);
//    console.log(height);
// }

// func( {color: 'black', width: 400, height: 500} );

