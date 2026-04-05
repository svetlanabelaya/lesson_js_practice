
/////////////////////Практика///////////////////////

// const { createElement } = require("react");





//////////Создание элементов из массива на JavaScript///////////////

/*
Пусть у нас есть некоторый массив:

let arr = [1, 2, 3, 4, 5];
Пусть также у нас есть некоторый элемент-родитель:

<div id="parent"></div>
Давайте добавим в наш родитель новые абзацы, текстом которых будут элементы нашего массива.

Реализуем описанное:

let parent = document.querySelector('#parent');

let arr = [1, 2, 3, 4, 5];

for (let elem of arr) {
	let p = document.createElement('p');
	p.textContent = elem;
	
	parent.appendChild(p);
}
*/
// let parent = document.querySelector('#parent');
// let arr = [1, 2, 3, 4, 5];

// for(let elem of arr) {
//    let p = document.createElement('p');
//    p.textContent = elem;

//    parent.appendChild(p);
// }

///Модифицируйте мой код так, чтобы по клику на абзац к его содержимому прибавлялась единица.

// let parent = document.querySelector('#parent');
// let arr = [1, 2, 3, 4, 5];

// for(let elem of arr) {
//   let p = document.createElement('p');
//   p.textContent = elem + '1';

//    parent.appendChild(p);
// }


///////////Практика на создание списков ul на JavaScript///////////


/*
Дан ul:

<ul id="elem"></ul>
Дан массив. Вставьте элементы этого массива в конец ul так, чтобы каждый элемент стоял в своем li.
*/
// let elem = document.querySelector('#elem');
// let arr = ['one', 'two', 'thre', 'fo', 'five'];

// for(let elemm of arr) {
//   let li = document.createElement('li');
//   li.textContent = elemm;

//   elem.appendChild(li);
// }

//Модифицируйте предыдущую задачу так, чтобы по клику на любой из вставленных элементов на экран выводился текст этого элемента.

// let elem = document.querySelector('#elem');
// let arr = ['one', 'two', 'thre', 'fo', 'five'];

// for(let elemm of arr) {
//   let li = document.createElement('li');
//   li.addEventListener('click', function() {
//      li.textContent += li.textContent;
//    });   

//   li.textContent = elemm;
//   elem.appendChild(li);
// }


/*
Модифицируйте предыдущую задачу так, чтобы по клику на li ей в конец добавлялся '!'.


*/

// let elem = document.querySelector('#elem');
// let arr = ['one', 'two', 'thre', 'fo', 'five'];

// for(let elemm of arr) {
//   let li = document.createElement('li');
//   li.addEventListener('click', function() {
//      li.textContent += '!';
//    });   

//   li.textContent = elemm;
//   elem.appendChild(li);
// }

//Модифицируйте предыдущую задачу так, чтобы по повторное нажатие на li не приводило к добавлению второго '!'.

// let elem = document.querySelector('#elem');
// let arr = ['one', 'two', 'thre', 'fo', 'five'];

// for(let elemm of arr) {
//    let li = document.createElement('li');
//    li.textContent = elemm;

//   li.addEventListener('click', function() {
//      this.textContent += '!';
//    },  {once: true });   

//   elem.appendChild(li);
// }


////////////////////практика////////////////////////////////////
////////////////Создание HTML таблиц на JavaScript//////////////

/*
<table id="table"></table>
Пусть у нас есть вот такая пустая HTML таблица:

<table id="table"></table>
Давайте заполним эту таблицу рядами и колонками. Вот пример того, что у нас должно получится:

<table id="table">
	<tr>
		<td></td>
		<td></td>
		<td></td>
	</tr>
	<tr>
		<td></td>
		<td></td>
		<td></td>
	</tr>
	<tr>
		<td></td>
		<td></td>
		<td></td>
	</tr>
</table>
Для решения задачи нам нужно два вложенных цикла. Первый цикл будет создавать ряды таблицы, а второй - ячейки в каждом ряду:

let table = document.querySelector('#table');

for (let i = 0; i < 3; i++) {
	let tr = document.createElement('tr');
	
	for (let i = 0; i < 3; i++) {
		let td = document.createElement('td');
		tr.appendChild(td);
	}
	
	table.appendChild(tr);
}
*/

/*
Дана пустая HTML таблица. С помощью двух вложенных циклов for заполните эту таблицу 5-ю рядами с 5-ю колонками.

<table id="table"></table>
*/
//получим ссылку на таблицу по айди
// let table = document.querySelector('#table');
// //Первый цикл будет создавать ряды таблицы, а второй - ячейки в каждом ряду:

// for(let i = 0; i < 5; i++) {
//    //создадим ряды строки
//    let tr = document.createElement('tr');
//    //создадим цикл для столбцов
//    for(let i = 1; i < 5; i++) {
//       let td = document.createElement('td');
//       td.textContent = 'Hello!'
//       //вставим в  наши созданные td в tr
//       tr.appendChild(td);
//    } 
//    table.appendChild(tr);
// }


/*
Модифицируйте предыдущую задачу так, чтобы таблица создавалась размером 10 рядов на 5 колонок.
*/

// for(let i = 0; i < 10; i++) {
//    //создадим ряды строки
//    let tr = document.createElement('tr');
//    //создадим цикл для столбцов
//    for(let i = 1; i < 5; i++) {
//       let td = document.createElement('td');
//       td.textContent = 'Hello!'
//       //вставим в  наши созданные td в tr
//       tr.appendChild(td);
//    } 
//    table.appendChild(tr);
// }

/*
Модифицируйте предыдущую задачу так, чтобы в каждую td добавлялся текст 'x'.
*/


// for(let i = 0; i < 10; i++) {
//    //создадим ряды строки
//    let tr = document.createElement('tr');
//    //создадим цикл для столбцов
//    for(let i = 1; i < 5; i++) {
//       let td = document.createElement('td');
//       td.textContent = 'x';
//       //вставим в  наши созданные td в tr
//       tr.appendChild(td);
//    } 
//    table.appendChild(tr);
// }

/*
Реализуйте генератор таблиц, ширина и высота таблиц задается в двух инпутах (например, таблица 5 на 10 ячеек).

<input type="number" id="width">   
<input type="number" id="height">   
<table id="table"></table>
*/
// let width = document.querySelector('#width');
// let height = document.querySelector('#height');
// let table = document.querySelector('#table');


// function createTable() {
//   table.innerHTML = '';

//    for(let i = 0; i < width.value; i++) {
//       let tr = document.createElement('tr');
      
//       for(let j = 0; j < height.value; j++) {
//          let td = document.createElement('td');
//          td.textContent = 'x';

//          tr.appendChild(td);
//       }
//       table.appendChild(tr);
//    }
// }

// width.addEventListener('change', createTable);
// height.addEventListener('change', createTable);




///////////Последовательное заполнение HTML таблиц//////////////

/*
Выведите на экран HTML таблицу размером 5 рядов на 5 колонок так, чтобы в ее ячейках последовательно стояли числа от 1 до 25.
*/
// let table = document.querySelector('#table');

// let m = 1;
// for(let i = 0; i < 5; i++) {
//    let tr = document.createElement('tr');
//    for(let j = 0; j < 5; j++) {
//       let td = document.createElement('td');
      
//       td.textContent = m;
//       m++;

//       tr.appendChild(td);

//    }
//    table.appendChild(tr);
// }


/*
Модифицируйте предыдущую задачу так, чтобы в ячейках таблицы были записаны четные числа в промежутке от 2 до 50.
*/

// let table = document.querySelector('#table');

// let k = 2;
// for(let i = 0; i < 3; i++) {
//    let tr = document.createElement('tr');
//    for(let j = 0; j < 8; j++) {
//       let td = document.createElement('td');
//       // if(k % 2 === 0 && k >= 2 && k <= 48) {
//       //    td.textContent = k;
//       //    k+=2;
//       // } else {
//       //   td.innerHTML = k;
//       //   k+=2;
//       // }
     
//       tr.appendChild(td);
//    }
//    table.appendChild(tr);
// }



// let table = document.querySelector('#table');

// let k = 2;
// for(let i = 0; i < 3; i++) {
//    let tr = document.createElement('tr');
//    for(let j = 0; j < 8; j++) {
//       let td = document.createElement('td');
//       td.textContent = k; // Просто пишем число
//       k += 2;             // И сразу готовим следующее
//       tr.appendChild(td);
//    }
//      table.appendChild(tr);
//    }




////////Создание HTML таблицы из массива на JavaScript////////

/*
Дан массив:

let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12]];
Не подсматривая в теоретическую часть урока, выведите элементы приведенного массива в виде HTML таблицы table.
*/

// let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12]];

// let table = document.querySelector('#table');

// for(let subArr of arr) {
//    let tr = document.createElement('tr');
//    for(let elem of subArr) {
//       let td = document.createElement('td');
//       td.textContent = elem;
//       tr.appendChild(td);
//    }
//    table.appendChild(tr);
// }

//Модифицируйте предыдущую задачу так, чтобы в таблицу записывались не элементы, а квадраты этих элементов.

// let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12]];

// let table = document.querySelector('#table');

// for(let subArr of arr) {
//    let tr = document.createElement('tr');
//    for(let elem of subArr) {
//       let td = document.createElement('td');
//       td.textContent = elem ** 2;
//       tr.appendChild(td);
//    }
//    table.appendChild(tr);
// }


///////////////Создание HTML таблицы из массива объектов/////////
/*
<table id="table"></table>
*/
// let users = [
// 	{
// 		name: 'name1',
// 		surname: 'surname1',
// 		patronymic: 'patronymic1'
// 	},
// 	{
// 		name: 'name2',
// 		surname: 'surname2',
// 		patronymic: 'patronymic2'
// 	},
// 	{
// 		name: 'name3',
// 		surname: 'surname3',
// 		patronymic: 'patronymic3'
// 	},
// ];

// let table = document.getElementById('table');

// for (let user of users) {
// 	let tr = document.createElement('tr');
	
// 	let td1 = document.createElement('td');
// 	td1.textContent = user.name;
// 	tr.appendChild(td1);
	
// 	let td2 = document.createElement('td');
// 	td2.textContent = user.surname;
// 	tr.appendChild(td2);
	
// 	let td3 = document.createElement('td');
// 	td3.textContent = user.patronymic;
// 	tr.appendChild(td3);
	
// 	table.appendChild(tr);
// }

/*
Дан следующий массив с работниками:

let employees = [
	{name: 'employee1', age: 30, salary: 400},
	{name: 'employee2', age: 31, salary: 500},
	{name: 'employee3', age: 32, salary: 600},
];
Выведите элементы этого массива в виде HTML таблицы.
*/

// let employees = [
// 	{name: 'employee1', age: 30, salary: 400},
// 	{name: 'employee2', age: 31, salary: 500},
// 	{name: 'employee3', age: 32, salary: 600},
// ];

// let table = document.querySelector('#table');

// for(let employee of employees) {
//    let tr =document.createElement('tr');

//    let td1 = document.createElement('td');
//    td1.textContent = employee.name;
//    tr.appendChild(td1);

//    let td2 = document.createElement('td');
//    td2.textContent = employee.age;
//    tr.appendChild(td2);

//    let td3 = document.createElement('td');
//    td3.textContent = employee.salary;
//    tr.appendChild(td3);

//    table.appendChild(tr);
// }

//Модифицируйте предыдущую задачу так, чтобы по клику на любую ячейку с возрастом ее содержимое увеличивалось на 1.


////Модифицируйте предыдущую задачу так, чтобы по клику на любую ячейку с зарплатой ее содержимое увеличивалось на 10%.

// let employees = [
// 	{name: 'employee1', age: 30, salary: 400},
// 	{name: 'employee2', age: 31, salary: 500},
// 	{name: 'employee3', age: 32, salary: 600},
// ];

// let table = document.querySelector('#table');

// for(let employee of employees) {
//    let tr =document.createElement('tr');

//    let td1 = document.createElement('td');
//    td1.textContent = employee.name;
//    tr.appendChild(td1);

//    let td2 = document.createElement('td');
  
//    td2.textContent = employee.age;
//    td2.addEventListener('click', function() {
//      td2.textContent = (Number(employee.age)) + 1;
//    });
//    tr.appendChild(td2);

//    let td3 = document.createElement('td');
//    td3.textContent = employee.salary;
//    td3.addEventListener('click', function() {
//       let newSalary = (Number(employee.salary)) * 1.1;
//       td3.textContent = newSalary.toFixed(2);
//       employee.salary = newSalary;
//    }); 
//    tr.appendChild(td3);

//    table.appendChild(tr);
// }


//////////////Добавление рядов и колонок в HTML таблицу//////////

//Сделайте кнопку, по нажатию на которую в таблицу будет добавляться новый ряд.

// let btn = document.querySelector('#btn');
// let table = document.querySelector('#table');

// btn.addEventListener('click', func);

// function func() {
//    let tr = document.createElement('tr');
//    for(let i = 1; i <= 3; i++) {
//       let td = document.createElement('td');
//       td.textContent = 'yes';
//       tr.appendChild(td);
//    }
//    table.appendChild(tr);
// }

/////////////Добавление колонок////////////////////////

/*
Дана таблица размером 2 на 2:

<table id="table">
	<tr>
		<td></td>
		<td></td>
	</tr>
	<tr>
		<td></td>
		<td></td>
	</tr>
</table>
td {
	width: 50px;
	height: 50px;
	border: 1px solid black;
}
Дана также кнопка. Сделайте так, чтобы по нажатию на кнопку таблица увеличивалась на один ряд и на одну колонку.
*/

// let btn = document.querySelector('#btn');
// let table = document.querySelector('#table');
// btn.addEventListener('click', func);

// function func() {
//    let tr = document.createElement('tr');
//    for(let i = 0; i < 1; i++) {
      
//       let trs = document.querySelectorAll('#table tr');
//       for (let tr of trs) {
//          let td = document.createElement('td');
//          tr.appendChild(td);
//       }
//          table.appendChild(tr);
//       }
// }





///////////Изменение ячеек HTML таблицы на JavaScript/////////////


// let tds = document.querySelectorAll('#table td');

// for (let td of tds) {
// 	td.textContent = '!';
// }

//Пусть дана некоторая HTML таблица с числами и кнопка. По нажатию на кнопку увеличьте число в каждой ячейки таблицы в два раза.
// let btn = document.querySelector('#btn');
// let tds = document.querySelectorAll('#table td');

// btn.addEventListener('click', function() {
//    for(let td of tds) {
//       td.textContent = td.textContent ** 2;
//    }
// });


/////////////Самоудаление новых элементов на JavaScript///////////

// let parent = document.querySelector('#parent');

// for (let i = 1; i <= 9; i++) {
// 	let p = document.createElement('p');
// 	p.textContent = i;
	
// 	p.addEventListener('click', function() {
// 		this.remove();
// 	});
	
// 	parent.appendChild(p);
// }

/*
<ul id="parent">
	<li>1</li>
	<li>2</li>
	<li>3</li>
</ul>

<input type="submit" id="button">


Сделайте так, чтобы по клику на кнопку в список добавлялся новый элемент. Сделайте так, чтобы любая li удалялась по клику на нее. Речь идет как о тех li, которые уже есть в списке, так о новых, созданных после нажатия на кнопку. 
*/

// let button = document.querySelector('#button');
// let parent = document.querySelector('#parent');

// for(let i = 4; i <= 9; i++) { 
//    let li = document.createElement('li');
//    li.textContent = i;

//    li.addEventListener('click', function() {
//       this.remove();
//    });

//    parent.appendChild(li);
// }


//////Ссылка на удаление элемента на JavaScript/////////////////

// let elem =document.querySelector('#elem');
// let remove = document.querySelector('#remove');

// remove.addEventListener('click', function(event) {
//    //удаляем абзац с текстом
//    elem.remove();
//    //предотвратим переход по ссылке
//    event.preventDefault();
// });

// let elem   = document.querySelector('#elem');
// let remove = document.querySelector('#remove');

// remove.addEventListener('click', function(event) {
// 	elem.remove();
// 	event.preventDefault(); // отменяем переход по ссылке
// });


/////////Создание ссылок для удаление элементов на JavaScript//

 //Для начала давайте просто реализуем добавление ссылок:
// let elems = document.querySelectorAll('#parent p');

// for (let elem of elems) {
// 	let remove = document.createElement('a');
// 	remove.href = '';
// 	remove.textContent = 'remove';
	
// 	elem.appendChild(remove);
// }

 //Давайте теперь сделаем так, чтобы по нажатию на ссылку, удалялся соответствующий ей абзац:

// let elems = document.querySelectorAll('#parent p');

// for (let elem of elems) {
// 	let remove = document.createElement('a');
// 	remove.href = '';
// 	remove.textContent = 'remove';
// 	elem.appendChild(remove);
	
// 	remove.addEventListener('click', function(event) {
// 		elem.remove();
// 		event.preventDefault();
// 	});
// }

/*
Дан тег ul. Добавьте в конец каждого тега li ссылку на удаления этого li из списка. 
*/

// let elems = document.querySelectorAll('#parent li');

// for(let elem of elems) {
//    let remove = document.createElement('a');
//    remove.href = '';
//    remove.textContent = 'удалить';

//    elem.appendChild(remove);
//    remove.addEventListener('click', function(event) {
//       elem.remove();
//       event.preventDefault();
//    });
// }

/*
Дана HTML таблица. Добавьте в нее еще одну колонку, в которой для каждого ряда таблицы будет стоять ссылка на удаление этого ряда. 

*/
// //получим массив сылок на tr-колонки
// let trs = document.querySelectorAll('#parent tr');


// //переберем массив колонок  и создадим колонку
// for (let tr of trs) {
//    let td = document.createElement('td');//сщздание рядов
//    td.textContent = 'remove';
//    //метод DOM API, который добавляет узел (элемент, текст и т.д.) в конец списка дочерних элементов указанного родительского элемента. 
    
//     //сщздадим ссылку 
//    let remove = document.createElement('a');
//    remove.href = '';
//    remove.textContent = 'remove';
//    tr.appendChild(td);

//    tr.addEventListener('click', function(event) {
//       tr.remove();
//       event.preventDefault();
//    });
// }

// let trs = document.querySelectorAll('#parent tr');

// for (let tr of trs) {
//   let td = document.createElement('td'); // Создаем ячейку
//   let removeLink = document.createElement('a'); // Создаем ссылку
  
//   removeLink.href = '#';
//   removeLink.textContent = 'remove';
  
//   // 1. Вкладываем ссылку в ячейку
//   td.appendChild(removeLink); 
  
//   // 2. Вкладываем ячейку в строку
//   tr.appendChild(td); 

//   // 3. Вешаем событие именно на ссылку, а не на всю строку
//   removeLink.addEventListener('click', function(event) {
//     event.preventDefault(); // Чтобы страница не прыгала вверх из-за href="#"
//     tr.remove(); // Удаляем родительскую строку
//   });
// }




/////////////Редактирование отдельного элемента на JavaScript///////


// let elem = document.querySelector('#elem');
// let input = document.querySelector('#input');

// input.value = elem.textContent; // записываем в инпут текст абзаца

// input.addEventListener('blur', function() {
// 	elem.textContent = this.value;
// });

/*
Модифицируйте приведенный выше код так, чтобы текст абзаца менялся не по потери фокуса, а по мере ввода текста в инпут. 
*/
// let elem = document.querySelector('#elem');
// let input = document.querySelector('#input');

// input.value = elem.textContent; // записываем в инпут текст абзаца

// input.addEventListener('input', function() {
// 	elem.textContent = this.value;
// });





////////////////Появление инпута//////////////////////////

/*
 Давайте теперь сделаем так, чтобы инпута изначально не было на странице, а он появлялся по клику на абзац. To есть наш начальный HTML будет выглядеть так:
<div id="parent">
	<p id="elem">text</p>
</div>

*/


//Для начала просто реализуем появление инпута, без редактирования:

// let elem = document.querySelector('#elem');

// elem.addEventListener('click', function() {
// 	let input = document.createElement('input');
// 	input.value = elem.textContent;
	
// 	elem.parentElement.appendChild(input);
// });

//А теперь давайте сделаем так, чтобы по потери фокуса в инпуте менялся текст абзаца: 


// let elem = document.querySelector('#elem');

// elem.addEventListener('click', function() {
// 	let input = document.createElement('input');
// 	input.value = elem.textContent;
	
// 	input.addEventListener('blur', function() {
// 		elem.textContent = this.value;
// 	});
	
// 	elem.parentElement.appendChild(input);
// });

// Наш код, однако, несовершенен, так как каждое нажатие на абзац будет приводить к появлению нового инпута.

//Для решения проблемы просто будем по потери фокуса удалять текущий инпут: 

// let elem = document.querySelector('#elem');

// elem.addEventListener('click', function() {
// 	let input = document.createElement('input');
// 	input.value = elem.textContent;
	
// 	input.addEventListener('blur', function() {
// 		elem.textContent = this.value;
// 		this.remove(); // удалим инпут
// 	});
	
// 	elem.parentElement.appendChild(input);
// });

//Самостоятельно, не подсматривая в мой код, решите описанную задачу. 

// let elem = document.querySelector('#elem');

// elem.addEventListener('click', function() {
//    let input = document.createElement('input');
//    input.value = elem.textContent;

//    input.addEventListener('blur', function() {
//      elem.textContent = this.value;
//      this.remove();
//    });
//    elem.parentElement.appendChild(input);
// });




////////////Прячем текст при редактировании элемента на JavaScript///

/*
 Давайте теперь сделаем так, чтобы при редактировании инпут появлялся в самом абзаце - вместо текста этого абзаца. Пусть затем при окончании редактирования инпут будет убираться, а вместо него опять появляться текст абзаца.

Приступим к реализации.

Для начала давайте сделаем так, чтобы по клику на абзац ему в конец добавлялся инпут с текстом этого абзаца: 
*/
/*
let elem = document.querySelector('#elem');

elem.addEventListener('click', function() {
	let input = document.createElement('input');
	input.value = elem.textContent;
	
	elem.appendChild(input);
});

 Наш код, однако, очень несовершенен - каждый раз по клику на абзац в него будет добавляться новый инпут.

При этом, если в первом инпуте будет стоять текст абзаца, то во втором инпуте уже будет стоять текст абзаца вместе с первым инпутом, а третьем инпуте уже будет стоять текст абзаца вместе с двумя инпутами и так далее.

Обратите также внимание на то, что клик по добавленному инпуту будет расцениваться как клик по абзацу: дело в том, что инпут находится в абзаце, и клик по инпуту просто всплывет выше к этому абзацу.

Это приведет к тому, что после появления первого инпута при попытке нажать на него для того, чтобы начать редактирование, мы автоматически сделаем клик по абзацу со всеми вытекающими последствиями.

Итак, проблема обрисована. Давайте теперь ее исправим.

Для этого просто при появлении инпута отвяжем от абзаца обработчик клика. В этом случае только первый клик по абзацу будет приводить к появлению инпута, а остальные клики, сделанные после появления инпута, будут проигнорированы.

Реализуем: 

let elem = document.querySelector('#elem');

elem.addEventListener('click', function func() {
	let input = document.createElement('input');
	input.value = elem.textContent;
	
	elem.appendChild(input);
	
	elem.removeEventListener('click', func); // отвяжем событие
});

Давайте теперь сделаем так, чтобы при появлении инпута, текст самого абзаца исчезал. Для этого перед вставкой инпута textContent абзаца присвоим пустой строке: 




let elem = document.querySelector('#elem');

elem.addEventListener('click', function func() {
	let input = document.createElement('input');
	
	input.value = elem.textContent; // сначала записываем текст абзаца в инпут
	elem.textContent = ''; // затем убираем текст абзаца
	elem.appendChild(input); // затем вставляем инпут
	
	elem.removeEventListener('click', func);
});

Давайте теперь сделаем так, чтобы при потери фокуса в инпуте текст этого инпута записывался в абзац: 


let elem = document.querySelector('#elem');

elem.addEventListener('click', function func() {
	let input = document.createElement('input');
	
	input.value = elem.textContent;
	elem.textContent = '';
	elem.appendChild(input);
	
	input.addEventListener('blur', function() {
		elem.textContent = this.value;
	});
	
	elem.removeEventListener('click', func);
});

 Обратите внимание на то, что нам не нужно удалять инпут - он удаляет сам себя, когда записывает свой текст в абзац: так как инпут является частью текста абзаца, то запись какого-то текста в этот абзац просто удаляет наш инпут, и все.

У нас, однако, есть еще одна проблема: текст абзаца будет редактироваться лишь первый раз. После первого редактирования повторное нажатие на текст абзаца ни к чему не приведет.

Дело в том, что в момент появления инпута мы отвязали событие от абзаца по описанным выше причинам. Теперь нам необходимо в момент окончания редактирования привязать событие обратно.

Сделаем это: 
//получим ссылку на обзац
let elem = document.querySelector('#elem');

elem.addEventListener('click', function func() {
   //по клику на абзац создадим инпут
	let input = document.createElement('input');
   //запишем текст абзаца в инпут
	input.value = elem.textContent;
	
	elem.textContent = '';//убираем текст абзаца
	elem.appendChild(input);//вставим вабзац инпут

	//по потери фокуса, текст инпута запишем в абзац
	input.addEventListener('blur', function() {
		elem.textContent = this.value;
		elem.addEventListener('click', func); // повесим событие обратно
	});
	
	elem.removeEventListener('click', func);// отвяжем обработчик клика
});

*/


//Самостоятельно, не подсматривая в мой код, решите описанную задачу. 

/*
Давайте теперь сделаем так, чтобы при редактировании инпут появлялся в самом абзаце - вместо текста этого абзаца. Пусть затем при окончании редактирования инпут будет убираться, а вместо него опять появляться текст абзаца. 
*/

// let elem = document.querySelector('#elem');

// elem.addEventListener('click', function func() {
//    let input = document.createElement('input');
//    input.value = elem.textContent;
   
//    elem.textContent = '';
//    elem.appendChild(input);

//    input.addEventListener('blur', function() {
//       elem.textContent = this.value;
//    });

//    elem.removeEventListener('click', func);
// });


//////////////Редактирование в группе элементов на JavaScript//////

// let elems = document.querySelectorAll('p');

// for (let elem of elems) {
// 	elem.addEventListener('click', function func() {
// 		let input = document.createElement('input');
// 		input.value = elem.textContent;
		
// 		elem.textContent = '';
// 		elem.appendChild(input);
		
// 		input.addEventListener('blur', function() {
// 			elem.textContent = this.value;
// 			elem.addEventListener('click', func);
// 		});
		
// 		elem.removeEventListener('click', func);
// 	});
// }


/*
Дан тег ul. Сделайте так, чтобы по клику на любую li в ней появлялся инпут, с помощью которого можно будет поредактировать текст этой li. 
*/
// let elems = document.querySelectorAll('#parent li');

// for(let elem of elems ) {
//    elem.addEventListener('click', function func() {
//       let input = document.createElement('input');
//       input.value = elem.textContent;

//       elem.textContent = '';
//       elem.appendChild(input);

//       input.addEventListener('blur', function() {
//          elem.textContent = this.value;
//          elem.addEventListener('click', func);
//       });
//       elem.removeEventListener('click', func);
//    });
// }


/*
Дана HTML таблица. Сделайте так, чтобы по клику на любую ячейку в ней появлялся инпут для редактирования текста этой ячейки. 
 <table #parent>
   <tr>
      <td></td>
      <td></td>
      <td></td>
   </tr>
   <tr>
      <td></td>
      <td></td>
      <td></td>
   </tr>
 </table>
*/

// let elems = document.querySelectorAll('td');

// for(let elem of elems) {
//   elem.addEventListener('click', function func() {
//       let input = document.createElement('input');
//       input.value = elem.textContent;

//       elem.textContent = '';
//       elem.appendChild(input);

//       input.addEventListener('blur', function() {
//          elem.textContent = this.value;
//       });
//       elem.removeEventListener('click', func);
//    });
// }



/////////Одновременное редактирование и удаление элементов////////
/*
<div id="parent">
	<p><span>text1</span></p>
	<p><span>text2</span></p>
	<p><span>text3</span></p>
</div>

 Добавьте ссылку на удаление в конец каждого абзаца.

Сделайте так, чтобы по клику на span в нем появлялся инпут для редактирования. 
*/


// let ps = document.querySelectorAll('#parent p');
// for(let p of ps) {
//       let remove =document.createElement('a');
//       remove.href = '#';
//       remove.textContent = 'remove';
      
//       p.appendChild(remove);
      
//       remove.addEventListener('click', function(event) {
//          p.remove();
//          event.preventDefault();
//       });



//       let span = p.querySelector('span');

//       span.addEventListener('click', function func() {
//          let input = document.createElement('input');
//          input.value = input.textContent;
         
//          span.textContent = '';
//          span.appendChild(input);
//          input.focus();
         
//          input.addEventListener('blur', function() {
//             span.textContent = this.value;
//             span.addEventListener('click', func);
//          });
//          span.removeEventListener('click', func);
//       });
// }

/*
 Пусть теперь изначально тегов span нет:
<div id="parent">
	<p>text1</p>
	<p>text2</p>
	<p>text3</p>
</div>

Оберните сначала текст абзаца в теги span, добавьте к этим тегам возможность редактирования, а затем добавьте в конец каждого абзаца ссылку на удаление. 
*/

// let ps = document.querySelectorAll('#parent p');
// for(let p of ps) {
//    let span = document.createElement('span');
//    span.textContent = p.textContent;
//    p.textContent = '';
//    p.appendChild(span);

  
//       span.addEventListener('click', function func() {
//       let input = document.createElement('input');
//       input.value = span.textContent;

//       span.textContent = '';
//       span.appendChild(input);
//       input.focus();

//       input.addEventListener('blur', function() {
//          span.textContent = this.value;
//          span.addEventListener('click', func);
//       });
//       span.removeEventListener('click', func);
//    });



//    let remove = document.createElement('a');
//    remove.href = '#';
//    remove.textContent = 'remove';

//    p.appendChild(remove);

//    remove.addEventListener('click', function func(event) {
//       p.remove();
//       event.preventDefault();
//    });
// }



///////////////Стилизация элементов на JavaScript////////////////

/*
 Дан следующий HTML код:
<p>text1</p>
<p>text2</p>
<p>text3</p>

Добавьте в конец каждого абзаца ссылку, по клику на которую текст абзаца будет перечеркиваться (а ссылка - нет). 
*/

// let elems = document.querySelectorAll('p');

// for(let elem of elems) {
//    let span = document.createElement('span');
//    span.textContent = elem.textContent;
//    elem.textContent = '';
//    elem.appendChild(span);

//    let link = document.createElement('a');
//    link.href = '';
//    link.textContent = 'link';
//    elem.appendChild(link);

//    link.addEventListener('click', function(event) {
//       span.classList.add('line');
//       event.preventDefault();
//    });
// }

/*
Модифицируйте предыдущую задачу так, чтобы после нажатия на ссылку эта ссылка удалялась из абзаца (а текст абзаца становился перечеркнутым). 
*/

// let elems = document.querySelectorAll('p');

// for(let elem of elems) {
//    let span = document.createElement('span');
//    span.textContent = elem.textContent;
//    elem.textContent = '';
//    elem.appendChild(span);

//    let link = document.createElement('a');
//    link.href = '';
//    link.textContent = 'link';
//    elem.appendChild(link);

//    link.addEventListener('click', function(event) {
//       span.classList.add('line');
//       link.remove();
//       event.preventDefault();
//    });
// }

/*
Дана некоторая HTML таблица. Добавьте в эту таблицу еще одну колонку со ссылкой. По нажатию на эту ссылку ряд с этой ссылкой должен стать зеленого фона. 

<table>
   <tr>
      <td></td>
      <td></td>
      <td></td>
   </tr>
   <tr>
      <td></td>
      <td></td>
      <td></td>
   </tr>
   <tr>
      <td></td>
      <td></td>
      <td></td>
   </tr>
</table>


*/
// let trs = document.querySelectorAll('#table tr');

// for(let tr of trs) {
//   let td = document.createElement('td');
//   tr.appendChild(td);

//   let link = document.createElement('a');
//   link.href = '#';
//   link.textContent = 'link';

//   td.appendChild(link);

//   link.addEventListener('click', function(event) {

//     tr.classList.add('color');
//     event.preventDefault();
//   });
// }


/*
Модифицируйте предыдущую задачу так, чтобы первое нажатие по ссылке красило ряд в зеленый фон, а второе нажатие отменяло это действие. 
*/
// let trs = document.querySelectorAll('#table tr');

// for(let tr of trs) {
//   let td = document.createElement('td');
//   tr.appendChild(td);

//   let link = document.createElement('a');
//   link.href = '#';
//   link.textContent = 'link';

//   td.appendChild(link);

//   link.addEventListener('click', function (event) {

//     tr.classList.toggle('color');
//     event.preventDefault();
//   });
// }


////////////Кнопки для скрытия и показа элемента на JavaScript/////

/*
   <p id="elem">text</p>
   <input type="submit" id="show" value="show">
   <input type="submit" id="hide" value="hide">
*/

// let elem = document.querySelector('#elem');
// let show = document.querySelector('#show');
// let hide = document.querySelector('#hide');

// hide.addEventListener('click', function() {
// 	elem.classList.add('hidden');
// });
// show.addEventListener('click', function() {
// 	elem.classList.remove('hidden');
// });


////////////Много элементов с кнопками показа на JavaScript/////////////

/*
 Пусть теперь у нас есть много абзацев и у каждого своя кнопка для сокрытия:
<p>1</p><button>toggle</button>
<p>2</p><button>toggle</button>
<p>3</p><button>toggle</button>

Сделаем так, чтобы по клику на кнопку скрывался или показывался соответствующий ей абзац.

Для этого нам каким-то образом нужно связать кнопки с нашими абзацами. Для этого существует несколько способов. 
*/

///////////////////Первый способ////////////////////////////////////////////

/*
вяжем кнопки и абзацы следующим образом:
<p id="elem1">1</p><button data-elem="elem1">toggle</button>
<p id="elem2">2</p><button data-elem="elem2">toggle</button>
<p id="elem3">3</p><button data-elem="elem3">toggle</button>
*/
/*
Теперь по клику на любую кнопку мы будем читать содержимое ее атрибута data-elem и искать абзац с таким id. Его и будем тоглить. Реализуем описанное: 
*/

// let buttons = document.querySelectorAll('button');

// for (let button of buttons) {
// 	button.addEventListener('click', function() {
// 		let elem = document.querySelector('#' + this.dataset.elem);
// 		elem.classList.toggle('hidden');
// 	});
// }

//Изучите мое решение, а затем самостоятельно, не подсматривая в мой код, решите эту задачу.

/*
<p id="elem1">1</p><button data-elem="elem1">toggle</button>
<p id="elem2">2</p><button data-elem="elem2">toggle</button>
<p id="elem3">3</p><button data-elem="elem3">toggle</button>
*/

// let buttons = document.querySelectorAll('button');

// for(let button of buttons) {
// 	button.addEventListener('click', function() {
// 		let elem = document.querySelector('#' + this.dataset.elem);
// 		elem.classList.toggle('hidden');
// 	});
// }



//////////////////////////Второй способ//////////////////////////////

// let buttons = document.querySelectorAll('button');
// let elems = document.querySelectorAll('p');

// for(let i = 0; i < buttons.length; i++) {
// 	buttons[i].addEventListener('click', function() {
// 		elems[i].classList.toggle('hidden');
// 	});
// }


////////////////////////Третий способ////////////////////////////////////

/*
Как можно увидеть, абзац, связанный с кнопкой, является ее соседом слева. Можно это использовать в качестве связи: 

previousElementSibling - Свойство previousElementSibling содержит предыдущий элемент, находящийся в этом же родителе. Если такого элемента нет - возвращается null.
*/

// let buttons = document.querySelectorAll('button');

// for(let button of buttons) {
// 	button.addEventListener('click', function() {
// 		this.previousElementSibling.classList.toggle('hidden');
// 	});
// }




///////////////Активация элементов на JavaScript/////////////////////////////
/*
td {
	width: 50px;
	height: 50px;
	border: 1px solid rgb(17, 46, 211);
}


.active {
   background: #0426e7;
}
*/


// let tds = document.querySelectorAll('#table td');
//  for(let td of tds) {
// 	td.addEventListener('click', function() {
// 		this.classList.add('active');
// 	});
//  }


/*
Дана HTML список ul. Сделайте так, чтобы по нажатию на любой пункт списка он активировался красным фоном. 
*/

// let lis = document.querySelectorAll('#list li');

// for(let li of lis) {
// 	li.addEventListener('click', function() {
// 		this.classList.add('active');
// 	});
// }


/*
Модифицируйте предыдущую задачу так, чтобы по нажатию на активированный пункт списка активация с него снималась. 
*/

// let lis = document.querySelectorAll('#list li');

// for(let li of lis) {
// 	li.addEventListener('click', function() {
// 		this.classList.toggle('active');
// 	});
// }


///////////////////////Чередование стилей активации на JavaScript///////////////

//Разберите мой код, а затем самостоятельно повторите решение этой задачи. 

// let tds = document.querySelectorAll('table td');
// let color = 'color1';

// for(let td of tds) {
// 	td.addEventListener('click', function() {
// 		if(color == 'color1') {
// 			color = 'color2';
// 		} else {
// 			color = 'color1';
// 		}
// 		this.classList.add(color);
// 	});
// }


//////////////////Чередование многих цветов из массива///////////////////////


// let tds = document.querySelectorAll('table td');
// let colors = ['color1', 'color2', 'color3'];
// let i = 0;

// for(let td of tds) {
// 	td.addEventListener('click', function() {
// 		this.classList.add(colors[i]);

// 		i++;
// 		if(i == colors.length) {
// 			i = 0;
// 		}
// 	});
// }



/*
.color1 {
   background: #bd1eee;
}

.color2 {
   background: #09502d;
}
.color3 {
   background: #ccee09;
}


      <table id="table">
         <tr>
            <td></td>
            <td></td>
            <td></td>
         </tr>
         <tr>
            <td></td>
            <td></td>
            <td></td>
         </tr>
         <tr>
            <td></td>
            <td></td>
            <td></td>
         </tr>
      </table>
*/

// let tds = document.querySelectorAll('#table td');

// let i = 0;
// let colors = ['color1', 'color2', 'color3'];

// for (let td of tds) {
// 	td.addEventListener('click', function() {
// 		this.classList.add(colors[i]);
		
// 		i++;
// 		if (i == colors.length) {
// 			i = 0;
// 		}
// 	});
// }

//Расскажите, как работает приведенный мною код. 
/*
 получим массив из ячеек. создадим счетчик i, и массив из произвольных цветов colors. Переберем наши ячейки циклом for. При клике на одну из ячеек, будет присваиваться класс с цветом из массива. Счетчик будет крутится до тех пор пока не сравняется с длиной массива и сбрасывается и цикл повторяется.
*/




///////////////////Практика на изменение элементов на JavaScript//////////////////

/*
Дан массив. Выведите его элементы в виде списка ul. 
*/

// let arr = ['Svetlana', 'Alexandr', 'Ura', 'Anastasiya'];

// let parent = document.querySelector('#parent');

// for(let elem of arr) {
// 	let li = document.createElement('li');
// 	li.textContent = elem;

// 	parent.appendChild(li);
// }


/*
Модифицируйте предыдущую задачу так, чтобы по клику на любую li в ней появлялся инпут, с помощью которого ее можно будет поредактировать. 
*/


// let arr = ['Svetlana', 'Alexandr', 'Ura', 'Anastasiya'];
// //Получим ссылку на наш ul
// let parent = document.querySelector('#parent');

// //Переберем элементы массива в цикле
// for(let elem of arr) {
// // создадим наши новые ли
// 	let li = document.createElement('li');
// //запишем в наши ли елементы массива
// 	li.textContent = elem;

// 	//Запишем в наш ul все li
// 	parent.appendChild(li);
// //У нас в браузере выведется список элементов нашего массива в каждой ли


// //чтобы по клику на любую li в ней появлялся инпут, с помощью которого ее можно будет поредактировать

// //Навесим на наш ли обработчик клика
// //Именуем функцию для того чтобы можно было обратиться к ней снова внутри нее самой (рекурсия)
// 	li.addEventListener('click', function func() {
// 		//Создадим инпут
// 		let input = document.createElement('input');
// 		//приравняем текст инпута к тексту ли. т.е в инпута будут наши элементы записаны
// 		input.value = li.textContent;
		
// 		//уберем текст с наших ли
// 		li.textContent = '';
// 		//И запишем в ли сам инпут
// 		li.appendChild(input);
// 		//Зафиксируем курсор в поле инпута
// 		input.focus();
		
		
// 		//На наш инпут навесим обработчик потери фокуса
// 		input.addEventListener('blur', function() {
// 			//в ли можно запишется новый текст и сохранится в нем
// 			li.textContent = this.value;

// 			//Когда редактирование закончится верни все как было и снова разреши кликать
// 			li.addEventListener('click', func);
// 		});
// 		//Отвяжем обработчик клика от нашего ли
// 		//Чтобы удалить обработчик события, браузеру нужно точно знать, какую именно функцию удалять. Если бы функция была анонимной (без имени), ты бы не смогла её «отцепить», и при клике на инпут у тебя бесконечно плодились бы новые инпуты.
// 		li.removeEventListener('click', func);
// 	});

// }


/*
Модифицируйте предыдущую задачу так, чтобы под списком был инпут, с помощью которого можно будет добавить новый элемент в конец списка ul. Сделайте так, чтобы новые li также можно было редактировать. 

      <ul id="parent"></ul>
      <input id="enter" type="text">
      <button id="button"></button>
*/

// let arr = ['Svetlana', 'Alexandr', 'Ura', 'Anastasiya'];
// let parent = document.querySelector('#parent');
// let enter = document.querySelector('#enter');
// let button = document.querySelector('#button');

// for(let elem of arr) {
// 	let li = document.createElement('li');
// 	li.textContent = elem;
		//logic(li);
// }

// button.addEventListener('click', function() {
// 	let li = document.createElement('li');
// 	li.textContent = enter.value;

// 	 parent.appendChild(li);
// 	 logic(li);
// });

// function logic(li) {
// 	li.addEventListener('click', function func() {
// 		let input = document.createElement('input');
// 		input.value = li.textContent;
		
// 		li.textContent = '';
// 		li.appendChild(input);

// 		input.focus();
		
// 		input.addEventListener('blur', function() {
// 			li.textContent = this.value;
// 			li.addEventListener('click', func);
// 		});

// 		li.removeEventListener('click', func);
//   });

// }

/*
Модифицируйте предыдущую задачу так, чтобы в конце каждой li стояла ссылка 'удалить', с помощью которой можно будет удалить эту li из ul. 

*/

// let arr = ['Svetlana', 'Alexandr', 'Ura', 'Anastasiya'];
// let parent = document.querySelector('#parent');
// let enter = document.querySelector('#enter');
// let button = document.querySelector('#button');




// for(let elem of arr) {
// 	let li = document.createElement('li');
// 	li.textContent = elem;
// 		logic(li);
// }

// button.addEventListener('click', function() {
// 	let li = document.createElement('li');
// 	li.textContent = enter.value;

// 	 parent.appendChild(li);
// 	 logic(li);
//   });

// function logic(li) {
// 	 let remove = document.createElement('a');
// 		remove.href = '#';
// 		remove.textContent = 'remove';
// 		li.appendChild(remove);
		
// 		// 2. Создаем span для текста (чтобы отделить его от ссылки!)
// 		let span = document.createElement('span');
// 		span.textContent = li.textContent;

// 		li.textContent = '';
// 		li.appendChild(span);
// 		li.appendChild(remove);

// 		remove.addEventListener('click', function(event) {
// 			li.remove();
// 			event.preventDefault();
// 		});

//   // Редактирование (вешаем теперь не на весь li, а на SPAN!)
// 	  span.addEventListener('click', function func() {
// 		let input = document.createElement('input');
// 		input.value = span.textContent;
		
// 		li.textContent = '';
// 		li.appendChild(input);
    
// 		input.focus();
	
		
// 		input.addEventListener('blur', function() {
// 			span.textContent = this.value;
// 			span.addEventListener('click', func);
// 		});

// 		span.removeEventListener('click', func);
// 	});

// }

/*
Модифицируйте предыдущую задачу так, чтобы в конце каждой li также стояла ссылка 'перечеркнуть', с помощью которой можно будет перечеркнуть текст данного тега li. 
*/

// let arr = ['Svetlana', 'Alexandr', 'Ura', 'Anastasiya'];
// let parent = document.querySelector('#parent');
// let enter = document.querySelector('#enter');
// let button = document.querySelector('#button');




// for(let elem of arr) {
// 	let li = document.createElement('li');
// 	li.textContent = elem;
// 		logic(li);
// }

// button.addEventListener('click', function() {
// 	let li = document.createElement('li');
// 	li.textContent = enter.value;

// 	 parent.appendChild(li);
// 	 logic(li);
//   });

// function logic(li) {
// 	 let remove = document.createElement('a');
// 		remove.href = '#';
// 		remove.textContent = 'remove';
// 		li.appendChild(remove);
		
// 		// 2. Создаем span для текста (чтобы отделить его от ссылки!)
// 		let span = document.createElement('span');
// 		span.textContent = li.textContent;

// 		li.textContent = '';
// 		li.appendChild(span);
// 		li.appendChild(remove);

// 		remove.addEventListener('click', function(event) {
// 			li.remove();
// 			event.preventDefault();
// 		});


// 		//ссылка с перечеркиванием
// 	 let line = document.createElement('a');
// 		line.href = '#';
// 		line.textContent = 'crossed';
// 		line.href = '#';
// 		li.appendChild(line);


// 		line.addEventListener('click', function(event) {
// 			span.classList.add('line');

// 		});

//   // Редактирование (вешаем теперь не на весь li, а на SPAN!)
// 	  span.addEventListener('click', function func() {
// 		let input = document.createElement('input');
// 		input.value = span.textContent;
		
// 		li.textContent = '';
// 		li.appendChild(input);
    
// 		input.focus();
	
		
// 		input.addEventListener('blur', function() {
// 			span.textContent = this.value;
// 			span.addEventListener('click', func);
// 		});

// 		span.removeEventListener('click', func);
// 	});

// }
// let elems = document.querySelectorAll('p');



//////////////Массив объектов и таблица//////////////////////////////

/*
 Дан следующий массив с работниками:
let employees = [
	{name: 'employee1', age: 30, salary: 400},
	{name: 'employee2', age: 31, salary: 500},
	{name: 'employee3', age: 32, salary: 600},
];

Выведите этих работников в HTML таблице. 

При такой структуре хранения данных обычно запускают один цикл по массиву и создают каждую ячейку таблицы в ручную,
*/

/*
Добавьте ячейкам созданной таблицы возможность редактирования. 
*/

// let employees = [
// 	{name: 'employee1', age: 30, salary: 400},
// 	{name: 'employee2', age: 31, salary: 500},
// 	{name: 'employee3', age: 32, salary: 600},
// ];

// let table = document.querySelector('#table');

// for(let employ of employees) {
// 	let tr = document.createElement('tr');

// 	let td1 = document.createElement('td');
// 	td1.textContent = employ.name;
// 	tr.appendChild(td1);
	

//   let td2 = document.createElement('td');
// 	td2.textContent = employ.age;
// 	tr.appendChild(td2);
	
	
	
//   let td3 = document.createElement('td');
// 	td3.textContent = employ.salary;
// 	tr.appendChild(td3);

// 	table.appendChild(tr);

	// ticher(td1);
	// ticher(td2);
	// ticher(td3);
// }

// function ticher(td) {
// 		td.addEventListener('click', function func() {
// 			let input = document.createElement('input');
// 			input.value = td.textContent;
	
// 			td.textContent = '';
// 			td.appendChild(input);
// 			input.focus();
	
// 			input.addEventListener('blur', function(event) {
// 				td.textContent = this.value;
// 			});
// 		});
// }

//////второй вариант решения предыдущей задачи делегирование/////////////
// // Вешаем клик на ВСЮ таблицу
// table.addEventListener('click', function(event) {
// 	// 1. Проверяем, что кликнули именно по тегу td
// 	let td = event.target.closest('td');
	
// 	// Если кликнули мимо ячейки (например, по самой таблице) — игнорируем
// 	if (!td) return; 
	
// 	// Если внутри ячейки УЖЕ есть инпут (ты уже редактируешь) — тоже игнорируем
// 	if (td.querySelector('input')) return;

// 	// 2. Наш привычный алгоритм
// 	let input = document.createElement('input');
// 	input.value = td.textContent;

// 	td.textContent = '';
// 	td.appendChild(input);
// 	input.focus();

// 	input.addEventListener('blur', function() {
// 		td.textContent = this.value;
// 		// Здесь НЕ нужен removeEventListener и возвращение клика! 
// 		// Таблица всегда продолжает слушать клики.
// 	});
// });


/*
 Дан следующий массив с работниками:
let employees = [
	{name: 'employee1', age: 30, salary: 400},
	{name: 'employee2', age: 31, salary: 500},
	{name: 'employee3', age: 32, salary: 600},
];

Выведите этих работников в HTML таблице. 

При такой структуре хранения данных обычно запускают один цикл по массиву и создают каждую ячейку таблицы в ручную,
*/
/*
Добавьте в вашу таблицу новую колонку со ссылкой на удаления ряда из таблицы. 
*/

// let employees = [
// 	{name: 'employee1', age: 30, salary: 400},
// 	{name: 'employee2', age: 31, salary: 500},
// 	{name: 'employee3', age: 32, salary: 600},
// ];

// let table = document.querySelector('#table');

// for(let employ of employees) {
// 	let tr = document.createElement('tr');

// 	let td1 = document.createElement('td');
// 	td1.textContent = employ.name;
// 	tr.appendChild(td1);
	

//   let td2 = document.createElement('td');
// 	td2.textContent = employ.age;
// 	tr.appendChild(td2);
	
	
	
//   let td3 = document.createElement('td');
// 	td3.textContent = employ.salary;
// 	tr.appendChild(td3);

// 	table.appendChild(tr);
// }
// /*
// closest - Метод closest ищет ближайший родительский элемент, подходящий под указанный CSS селектор, при этом сам элемент тоже включается в поиск.
// */
// table.addEventListener('click', function(event) {
// 	// ШАГ 1: Проверка на ссылку! СТАВИМ СЮДА
//     if (event.target.tagName === 'A') return;


// 	// 1. Проверяем, что кликнули именно по тегу td
// 	let td = event.target.closest('td');

// 		if(td.querySelector('a')) return; 

// 	// Если кликнули мимо ячейки (например, по самой таблице) — игнорируем
// 	if(!td) return;
// 	// Если внутри ячейки УЖЕ есть инпут (ты уже редактируешь) — тоже игнорируем
// 	if(td.querySelector('input')) return;

// 	// 2. Наш привычный алгоритм
// 	let input = document.createElement('input');
// 	input.value = td.textContent;

// 	td.textContent = '';
// 	td.appendChild(input);
// 	input.focus();

// 	input.addEventListener('blur', function() {
// 			td.textContent = this.value;
// 	});
// });
// let trs = document.querySelectorAll('#table tr');

// for (let tr of trs) {


// 	let td = document.createElement('td');
//   tr.appendChild(td);

// 	let remove = document.createElement('a');
	
// 	remove.textContent = 'remove';
// 	remove.href = '#';
// 	td.appendChild(remove);

	
	
// 	remove.addEventListener('click', function(event) {
//     event.stopPropagation(); 

// 		tr.remove();
// 		event.preventDefault();
// 	});
	
// }

/*
Сделайте под таблицей 3 инпута и кнопку для добавление нового работника. Пусть в инпуты вводятся имя, возраст и зарплата, и по нажатию на кнопку новый работник добавляется в таблицу. Реализуйте редактирование ячеек для вновь добавленных работников. 
      <table id="table"></table>
      <input id="name" type="text">
      <input id="suname" type="text">
      <input id="salary" type="text">
      <button id="button"></button>
*/

// let table = document.querySelector('#table');
// let button = document.querySelector('#button');
// let name = document.querySelector('#name');
// let surname = document.querySelector('#surname');
// let salary = document.querySelector('#salary');

// button.addEventListener('click', function() {
// 	let tr = document.createElement('tr');

// 	let td1 = document.createElement('td');
// 	let td2 = document.createElement('td');
// 	let td3 = document.createElement('td');

// 	td1.textContent = name.value;
// 	tr.appendChild(td1);
// 	td2.textContent = surname.value;
// 	tr.appendChild(td2);
// 	td3.textContent = salary.value;
// 	tr.appendChild(td3);


// 	let td4 = document.createElement('td');
  
// 	let remove = document.createElement('a');
// 	remove.textContent = 'удалить';
// 	remove.href = '#';

//   td4.appendChild(remove);
//   tr.appendChild(td4);

// 	remove.addEventListener('click', function(event) {
// 		tr.remove();
// 		event.stopPropagation();
// 		event.preventDefault();
// 	});

// 	name.value = '';
// 	surname.value = '';
// 	salary.value = '';
// 	table.appendChild(tr);

// 	redact(td1);
// 	redact(td2);
// 	redact(td3);
// });

// function redact(td) {
// 	td.addEventListener('click', function() {
// 		let input = document.createElement('input');
// 		input.value = td.textContent;

// 		td.textContent = '';
// 		td.appendChild(input);
// 		input.focus();

// 		input.addEventListener('blur', function() {
// 			td.textContent = this.value;

// 		});
// 	});
// }


/*
table.addEventListener('click', function(event) {
	let target = event.target; // КТО нажат?
	
	// Если это ссылка "удалить"
	if (target.tagName == 'A') {
		target.closest('tr').remove();
    }
		
	// Если это ячейка с данными (не последняя с кнопкой)
	if (target.tagName == 'TD' && target.textContent !== 'удалить') {
		// Вызываем функцию редактирования для этой ячейки
		redact(target);
		}
		});
		*/
		
		/*
		Сделайте под таблицей 3 инпута и кнопку для добавление нового работника. Пусть в инпуты вводятся имя, возраст и зарплата, и по нажатию на кнопку новый работник добавляется в таблицу. Реализуйте редактирование ячеек для вновь добавленных работников. 
		<table id="table"></table>
		<input id="name" type="text">
		<input id="suname" type="text">
		<input id="salary" type="text">
		<button id="button"></button>
		*/
		
		//получим ссылки на наши id
		// let table = document.querySelector('#table');
		// let button = document.querySelector('#button');
		// let name = document.querySelector('#name');
		// let surname = document.querySelector('#surname');
		// let salary = document.querySelector('#salary');
		
		
		/*
		Функция redact(td): она просто умеет превращать одну конкретную ячейку в инпут и обратно (ты её уже написала, она супер).
		Клик по кнопке: теперь он стал очень коротким. Его задача — только создать tr, наполнить td текстом из инпутов и добавить в таблицу. Никаких обработчиков событий вешать на ячейки здесь больше не нужно.
		Блок делегирования: один table.addEventListener, который следит за всеми кликами внутри таблицы.
		*/
		
// 		//1. Кто слушает КНОПКА, внутри обработчика мы будем создавать таблицу. кнопка батон будет добавлять работника в таблицу по нажатию на кнопку
// 			button = addEventListener('click', function() {
// 			let tr = document.createElement('tr'); //строка
			
// 			//создадим на каждый наш инпут свою ячейку. В текст ячейки нужно записать текст наших инпутов и эти ячейки записать в столбец. то есть при клике на кнопку будут создаваться ячейки и записываться в них текст из инпутов которые введет пользователь.
// 			let td1 = document.createElement('td');//ячейки
// 			td1.textContent = name.value;
// 			tr.appendChild(td1);
// 			let td2 = document.createElement('td');
// 			td2.textContent = surname.value;
// 			tr.appendChild(td2);
// 			let td3 = this.document.createElement('td');
// 			td3.textContent = salary.value;
// 			tr.appendChild(td3);
			
// 			//Создадим ячейку для нашей ссылки на удаление
// 			let td4 = document.createElement('td');
// 			tr.appendChild(td4);

// 			let remove = document.createElement('a');
// 			remove.textContent = 'удалить';
// 			remove.href = '#';

// 			td4.appendChild(remove);// Кладём ссылку в ячейку
// 			tr.appendChild(td4);     // Кладём ячейку в строку

// 			//запишем всю строку в таблицу
// 			table.appendChild(tr);

// 			//Очистим наши инпуты для удобства пользователя 
// 			name.value = '';
// 			surname.value = '';
// 			salary.value = '';
// 		});

// 		//2 - БЛОК ДЕЛЕГИРОВАПНИЯ (Один на всю таблицу)

// 		table.addEventListener('click', function(event) {
// 			let target = event.target; //Укажет на элемент, в котором случилось событие

// 			// Если кликнули по ссылке "удалить"
// 			if(target.tagName === 'A') {
// 				event.preventDefault();// Чтобы страница не прыгала вверх
// 				target.closest('tr').remove();
// 			}

// 				// Если кликнули по ячейке (но не той, где кнопка "удалить")
// 				if(target.tagName === 'TD' && target.firstElementChild === null) {
// 						redact(target); // вызываем функцию
// 				}

// 				/*
// 				target.tagName === 'A': Мы проверяем, что клик пришелся именно на ссылку. Метод .closest('tr') сам найдет родительскую строку и удалит её целиком.
// 			target.firstElementChild === null: Это хитрая проверка. В ячейках с именем/зарплатой внутри только текст (детей-элементов нет). А в ячейке с удалением внутри лежит ссылка <a>. Так мы запретим редактировать ячейку с кнопкой «удалить».

// 				*/
// 		});
// 	//////БЛОК ФУНКЦИИ РЕДАКТИРОВАНИЕ Ячейки
// 		function redact(td) {
// 	    td.addEventListener('click', function() {
// 		  let input = document.createElement('input');
// 		  input.value = td.textContent;

// 		  td.textContent = '';
// 		  td.appendChild(input);
// 		  input.focus();

// 		  input.addEventListener('blur', function() {
// 			td.textContent = this.value;

// 		});
// 	});
// }

///////////////////////Массив объектов и список////////////////////////

/*
 Дан следующий массив с работниками:
let employees = [
	{name: 'employee1', age: 30, salary: 400},
	{name: 'employee2', age: 31, salary: 500},
	{name: 'employee3', age: 32, salary: 600},
];

Выведите на экран каждого работника в своем теге li тега ul. 

      <ul id="list"></ul>
      */
     
     // let list = document.querySelector('#list');
     // let employees = [
      //       {name: 'employee1', age: 30, salary: 400},
      //       {name: 'employee2', age: 31, salary: 500},
      //       {name: 'employee3', age: 32, salary: 600},
      // ];
      
      // for(let employ of employees) {
         //    let li = document.createElement('li');
         
         //    for(let key in employ) {
            //       let span = document.createElement('span');
            //       span.textContent = employ[key];
            
            //       li.appendChild(span);
            //       li.append(' ');
            //    }
            //    list.appendChild(li);
            // }
            
               
   /*
   //    Дан следующий массив с работниками:
   // let employees = [
   //    {name: 'employee1', age: 30, salary: 400},
   //    {name: 'employee2', age: 31, salary: 500},
   //    {name: 'employee3', age: 32, salary: 600},
   // ];

         <ul id="list"></ul>
   */


   //Сделайте так, чтобы по клику на имя, возраст или зарплату работника появлялся инпут для редактирования этого поля. 
      
      

   // let list = document.querySelector('#list');
   // let employees = [
   //       {name: 'employee1', age: 30, salary: 400},
   //       {name: 'employee2', age: 31, salary: 500},
   //       {name: 'employee3', age: 32, salary: 600},
   // ];

   // for(let employ of employees) {
   //    let li = document.createElement('li');

   //    for(let key in employ) {
   //       let span = document.createElement('span');
   //       span.textContent = employ[key];

   //       li.appendChild(span);
   //       li.append(' ');

   //       span.addEventListener('click', function func() {
   //          let input = document.createElement('input');
   //          input.value = span.textContent;

   //          span.textContent = '';
   //          span.appendChild(input);
   //          input.focus();

   //          input.addEventListener('blur', function() {
   //             span.textContent = this.value;
   //             span.addEventListener('click', func)
   //          });
   //          span.removeEventListener('click', func);
   //       });
   //    }
   //    list.appendChild(li);
   // }
         
   ///Добавьте в конец каждого тега li ссылку на удаление этого li из списка. 

   // let list = document.querySelector('#list');
   // let employees = [
   //       {name: 'employee1', age: 30, salary: 400},
   //       {name: 'employee2', age: 31, salary: 500},
   //       {name: 'employee3', age: 32, salary: 600},
   // ];

   // for(let employ of employees) {
   //    let li = document.createElement('li');

   //    for(let key in employ) {
   //       let span = document.createElement('span');
   //       span.textContent = employ[key];

   //       li.appendChild(span);
   //       li.append(' ');

   //       span.addEventListener('click', function func() {
   //          let input = document.createElement('input');
   //          input.value = span.textContent;

   //          span.textContent = '';
   //          span.appendChild(input);
   //          input.focus();

   //          input.addEventListener('blur', function() {
   //             span.textContent = this.value;
   //             span.addEventListener('click', func)
   //          });
   //          span.removeEventListener('click', func);
   //       });
   //    }
   //      let remove = document.createElement('a');

   //       remove.textContent = 'удалить';
   //       remove.href = '#';

   //       li.appendChild(remove);

   //       remove.addEventListener('click', function(event) {
   //          li.remove(); //удалим  ли
   //          event.preventDefault(); //сделаем ссылку не активной
   //       });
   //    list.appendChild(li);
   // }


///Под списком сделайте форму для добавления нового работника. 
/*
      <ul id="list"></ul>
      <input type="text" id="name">
      <input type="text" id="age">
      <input type="text" id="salary">
      <button id="enter">Добавить</button>
*/

//  let list = document.querySelector('#list');
//  let nameInput = document.querySelector('#nameInput');
//  let ageInput = document.querySelector('#ageInput');
//  let salaryInput = document.querySelector('#salaryInput');
//  let enter = document.querySelector('#enter');

//    let employees = [
//          {name: 'employee1', age: 30, salary: 400},
//          {name: 'employee2', age: 31, salary: 500},
//          {name: 'employee3', age: 32, salary: 600},
//    ];

//    //переберем циклом наш массив с объектами

//    for(let employ of employees) {
//       createEmployeesLi(employ);
//    }
//    //Создадим функцию которая будет, создавать новые li, обертывать текст ли в спан, редактировать этот спан и сщздавать рядом ссылку на удаление
//    function createEmployeesLi(employ) {
//       let li = document.createElement('li'); 
//       for(let key in employ) { //перебор ключей объекта
//          let span = document.createElement('span');
//          span.textContent = employ[key];//добавим в спан наш ключи объекта

//          li.appendChild(span);//добавим спан в наши ли
//          li.append(' ');//пробел между элементами
         
//          //Прослушаем спан
//          span.addEventListener('click', function func() {
//             let input = document.createElement('input');
//             input.value = span.textContent;

//             span.textContent = ''; //затрем текст спана
//             span.appendChild(input);//вместо текста добавим инпут
//             input.focus();

//             //прослушаем инпут
//             input.addEventListener('blur', function() {
//                span.textContent = this.value;//В текст спан запишем введеные данные из инпута
//                span.addEventListener('click', func); // отвяжем обработчик клика чтобы чтобы не копировались инпуты
//             });
//             span.removeEventListener('click', func); //удалим обработчик совсем
//          });
//       //создание ссылки на удалениие
//         let remove = document.createElement('a');

//          remove.textContent = 'удалить';//Запишем для ссылки наазначение
//          remove.href = '#';//уберем переход по ссылке

//          li.appendChild(remove);// добавим ссылку в ли

//          remove.addEventListener('click', function(event) {
//             li.remove(); //удалим  ли
//             event.preventDefault(); //сделаем ссылку не активной
//          });
//       list.appendChild(li);
//    }

//    enter.addEventListener('click', function() {
//       //По клику на кнопку будет создаваться новый объект
//       let newEmploy = {
//          name: nameInput.value,
//          age: ageInput.value,
//          salary: salaryInput.value
//       }
//       createEmployeesLi(newEmploy);
      
//       //Очистим инпут
//       nameInput.value = '';
//       ageInput.value = '';
//       salaryInput.value = '';
//    });

 








			
			




