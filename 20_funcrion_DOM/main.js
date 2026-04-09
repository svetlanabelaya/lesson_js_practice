

/////////////////////////////Функции и DOM/////////////////////



////////Функции для работы с DOM элементом на JavaScript//////////////

/*
 Сейчас мы научимся делать вспомогательные функции, выполняющие какие-либо операции с DOM. Например, давайте сделаем функцию, которая первым параметром будет принимать id элемента, а вторым - текст элемента, и будет устанавливать этому элементу новый текст.

Вот описанная функция:
function setText(id, text) {
	let elem = document.getElementById(id);
	elem.textContent = text;
}

Давайте опробуем ее работу. Пусть у нас есть два абзаца:
<p id="elem1"></p>
<p id="elem2"></p>

Давайте поменяем текст этим абзацам, воспользовавшись созданной нами функцией:
setText('elem1', 'text1');
setText('elem2', 'text2');

*/

// function setText(id, text) {
// 	let elem = document.getElementById(id);
// 	elem.textContent = text;
// }


// setText('elem1', 'text1');
// setText('elem2', 'text2');


/*
Модифицируйте созданную мною функцию так, чтобы параметром она принимала не id элемента, а произвольный CSS селектор. 
*/


// function setText(teg, text) {
//  let element = document.getElementById(teg);
//  element.textContent = text;
// }

// setText('elem1', 'text1');
// setText('elem2', 'text2');


// function setText(selector, text) {
//  let elem = document.querySelector(selector);
//  elem.textContent = text;
// }
// setText('.elem1', 'text1');
// setText('.elem2', 'text2');
// setText('#elem3', 'text3');
// setText('#elem4', 'text4');
// setText('div', 'text');

/*
Сделайте функцию setAttr, которая будет менять атрибут DOM элементу. Пусть первым параметром функция принимает селектор элемента, вторым - имя атрибута, а третьим - его новое значение. 
*/
   // function setAttr(selector, name, value) {
   //    let color = document.querySelector(selector);
   //    color.setAttribute(name, value);
   // }
   // setAttr('#elem', 'class', 'blue');






/////////////////////////////Функции для работы с группой DOM элементов/////////////////////////
/*
 Давайте теперь напишем функцию, которая параметром будет принимать селектор группы элементов и их новый текст. Пусть эта функция устанавливает всем подпадающим под селектор элементам новый текст.

Реализуем описанную функцию:
function setText(selector, text) {
	let elems = document.querySelectorAll(selector);
	
	for (let elem of elems) {
		elem.textContent = text;
	}
}

Давайте проверим ее на группе следующих элементов:
<p class="elem"></p>
<p class="elem"></p>
<p class="elem"></p>

Установим всем элементам с классом elem новый текст:
setText('.elem', 'text');

*/

/*
Сделайте функцию appendText, которая первым параметром будет принимать селектор, а вторым - текст. Сделайте так, чтобы данная функция добавляла текст в конец переданных элементов. 
   
   <p class="elem"></p>
   <p class="elem"></p>
   <p class="elem"></p>
   <p class="elem"></p>
*/



// function appendText(selector, text) {
//    let elems = document.querySelectorAll(selector);

//    for(let elem of elems) {
//       elem.textContent = text;
//    }
// }
// appendText('div', 'text');



/////////Передача коллбэка для работы с DOM на JavaScript//////

/*
 Пусть у нас есть некоторая группа DOM элементов:
<p class="elem">1</p>
<p class="elem">2</p>
<p class="elem">3</p>
<p class="elem">4</p>
<p class="elem">5</p>

Давайте сделаем функцию forEach, которая первым параметром будет принимать селектор группы элементов, а вторым параметром - функцию-коллбэк, которая применится по очереди к каждому из найденных элементов:
forEach('.elem', function() {
	// функция применится к каждому элементу
});

Пусть элементы, попавшие под селектор, по очереди попадают в первый параметр коллбэка:
forEach('.elem', function(elem) {
	console.log(elem); // выведет по очереди найденные элементы
});

Давайте с помощью нашей функции найдем все элементы с классом elem и для каждого найденного элемента применим коллбэк, который возведет в квадрат текст каждого элемента:
forEach('.elem', function(elem) {
	elem.textContent = elem.textContent ** 2;
});

Давайте теперь напишем реализацию задуманной нами функции forEach:
function forEach(selector, func) {
	let elems = document.querySelectorAll(selector);
	
	for (let elem of elems) {
		func(elem);
	}
}

*/

/*
Даны абзацы. С помощью созданной нами функции forEach для каждого абзаца добавьте в конец его текста восклицательный знак. 

   <p class="elem"></p>
   <p class="elem"></p>
   <p class="elem"></p>
   <p class="elem"></p>
*/
// forEach('p', function(elem) {
//    elem.textContent += '!';
// });

// function forEach(selector, func) {
//   let elems = document.querySelectorAll(selector);

//   for(let elem of elems) {
//       func(elem)
//   }
// };






///////Передача порядкового номера в коллбэк на JavaScript////////////

/*
Даны абзацы. С помощью созданной нами функции forEach для каждого абзаца добавьте ему в начало его порядковый номер. 
*/


// forEach('p', function(p, index) {
//    p.textContent = index + p.textContent;
// });

// function forEach(selector, func) {
//    let elems = document.querySelectorAll(selector);

//    for(let i = 0; i < elems.length; i++) {
//       func(elems[i], i);
//    }
// }



////////////Передача DOM элемента параметром функции////////////

// function setText(elem, text){//ссылка на дом елемент в первом параметре, вторым параметром текст элемента
// 	elem.textContent = text;
// }
//Используем созданную нами функцию для установки текста наших абзацев: 

// let elem1 = document.getElementById('elem1');
// setText(elem1, 'text1');

// let elem2 = document.getElementById('elem2');
// setText(elem2, 'text2');

/*
Сделайте функцию appendText, которая первым параметром будет принимать DOM элемент, а вторым - текст. Сделайте так, чтобы данная функция добавляла текст в конец этого элемента. 
*/

// function appendText(elem, text) {
//    elem.textContent += ' ' + text;
// }

// let elem1 = document.querySelector('#elem1');
// let elem2 = document.querySelector('#elem2');
// let elem3 = document.querySelector('#elem3');
// let elem4 = document.querySelector('#elem4');
// let elem5 = document.querySelector('#elem5');
// appendText(elem1, 'text');
// appendText(elem2, 'text');
// appendText(elem3, 'text');
// appendText(elem4, 'text');
// appendText(elem5, 'text');

//Даны абзацы. Получите их, переберите циклом и каждому добавьте в конец '!' с помощью функции appendText, сделанной в предыдущей задаче. 

// function appendText(elem, text) {
//    elem.textContent += text;
// }

// let elems = document.querySelectorAll('.elem');

// for(let elem of elems) {
//   appendText(elem, '!');
// }

/*
Сделайте функцию setValue, которая первым параметром будет принимать ссылку на инпут, а вторым - текст. Сделайте так, чтобы данная функция устанавливала переданный текст в value инпута. 
*/

// function setValue(elem, text) {
//    elem.value = text.textContent;
// }

// let inp = document.querySelector('.inp');
// let elText = document.querySelector('.elText');
// let btn = document.querySelector('.btn');

//    btn.addEventListener('click', function() {
//       setValue(inp, elText);
//    });
   


      
///////Передача группы DOM элементов параметрами функций/////////

// function setText(elems, text) {
// 	for (let elem of elems) {
// 		elem.textContent = text;
// 	}
// }

// let elems = document.querySelectorAll('.elem');
// setText(elems, 'text');

/*
Сделайте функцию appendText, которая первым параметром будет принимать массив DOM элементов, а вторым - текст. Сделайте так, чтобы данная функция добавляла текст в конец переданных элементов. 
*/

// function appendText(elems, text) {
//    for(let elem of elems) {
//       elem.textContent += text; 
//    }
// }

// let elems = document.querySelectorAll('.elem');
// appendText(elems, "  text");



/*
Сделайте функцию appendElem, которая первым параметром будет принимать ссылку на DOM объект, в котором лежит тег ul, а вторым - текст. Сделайте так, чтобы данная функция создавала новую li с переданным текстом и добавляла ее в конец переданного тега ul. 

   <ul class="elem">
      <li></li>
      <li></li>
      <li></li>
      <li></li>
   </ul>
*/
// function appendElem(elem, text) {

//    let li = document.createElement('li');
//    li.textContent = text;
//    elem.append(li);
   
// }
// let elem = document.querySelector('.elem');
// appendElem(elem, 'text');
// appendElem(elem, 'text');
// appendElem(elem, 'text');
// appendElem(elem, 'text');
// appendElem(elem, 'text');



/*
Дан массив и ul. С помощью функции appendElem, созданной в предыдущей задаче, запишите каждый элемент массива в отдельную li в этом ul. 
*/
// let arr = ['sveta', 'sasha', 'ura', 'nastiy'];
// let list = document.querySelector('.list');


// function appendElem(elem, text) {
//    let li = document.createElement('li');
//    li.textContent = text;
//    elem.append(li);   
// }

// for (let elem of arr) {
//    appendElem(list, elem);
   
// }





////////////Функция для создания HTML таблиц на JavaScript/////////

/*
Давайте теперь сделаем функцию createTable, которая будет будет создавать таблицу заданного размера и добавлять ее в конец заданного элемента.

Пусть первым параметром наша функция принимает количество рядов, вторым параметром - количество колонок, а третьим - ссылку на DOM элемент, внутри которого будет создаваться наша таблица.

Давайте посмотрим, как мы будем пользоваться описанной функцией, когда она будет создана. Пусть, к примеру, у нас дан вот такой див:

<div id="elem"></div>
*/

//Давайте сделаем внутри этого дива таблицу 3 на 4:

// let div = document.querySelector('#elem');
// createTable(3, 4, div);

//Пусть теперь у нас даны два дива

/*
<div id="elem1"></div>
<div id="elem2"></div>
*/

//Давайте сделаем свою таблицу в каждом из этих дивов:

// let div1 = document.querySelector('#elem1');
// createTable(3, 4, div1);

// let div2 = document.querySelector('#elem2');
// createTable(5, 6, div2);

//Для того, чтобы создаваемые таблицы сразу были видны, можно добавить какой-нибудь CSS, например, такой:



/*
Вот заготовка описанной функции:

function createTable(rows, cols, parent) {
	let table = document.createElement('table');
	
	// тут создадим таблицу с rows рядами и cols колонками
	for () {
		for () {
			
		}
	}
	
	parent.appendChild(table);
}
Допишите код представленной выше заготовки функции. Потестируйте работу готовой функции.
*/

// function createTable(rows, cols, parent) {
// 	let table = document.createElement('table');
	
// 	// тут создадим таблицу с rows рядами и cols колонками

//     // Внешний цикл для строк (rows)
// 	for (let i = 0; i < rows; i++) {
//       let tr = document.createElement('tr');

//       // Внутренний цикл для колонок (cols)
// 		for (let j = 0; j < cols; j++) {
//          let td = document.createElement('td');
// 			td.textContent = 'ячейка';
//          tr.append(td);
// 		}
//       table.append(tr);
// 	}
	
// 	parent.appendChild(table);
// }

// // Вызов: находим реальный элемент на странице и передаем его

// let div1 = document.querySelector('#elem1');
// createTable(3, 4, div1);
// let div2 = document.querySelector('#elem2');
// createTable(5, 6, div2);

// function createTable(rows, cols, elem) {
//     let table = document.createElement('table');
//     let k = 1; // 1. Создаем счетчик

//     for (let i = 0; i < rows; i++) {
//         let tr = document.createElement('tr');

//         for (let j = 0; j < cols; j++) {
//             let td = document.createElement('td');
            
//             // 2. Используем k и увеличиваем его
//             td.textContent = k;
//             k++; 
            
//             tr.append(td);
//         }
//         table.append(tr);
//     }
//     elem.append(table);
// }

//  let div = document.querySelector('div');
//  createTable(7, 7, elem);

// function createCalendar(elem) {
//     let table = document.createElement('table');
//     let days = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
    
//     // 1. Создаем строку заголовков
//     let headerTr = document.createElement('tr');
//     for (let day of days) {
//         let th = document.createElement('th');
//         th.textContent = day;
//         headerTr.append(th);
//     }
//     table.append(headerTr);

//     let k = 1; 

//     // Рисуем сетку (обычно 5-6 недель)
//     for (let i = 0; i < 6; i++) {
//         let tr = document.createElement('tr');

//         for (let j = 0; j < 7; j++) {
//             let td = document.createElement('td');
            
//             // 2. Условие: пишем число, только если оно <= 31
//             if (k <= 31) {
//                 td.textContent = k;
                
//                 // 3. Выделяем выходные (Сб - индекс 5, Вс - индекс 6)
//                 if (j === 5 || j === 6) {
//                     td.classList.add('weekend');
//                 }
                
//                 k++;
//             }
//             tr.append(td);
//         }
//         table.append(tr);
//     }
//     elem.append(table);
// }

// let div = document.querySelector('div');
// createCalendar(div);

// function createTable(rows, cols, parent) {
// 	let table = document.createElement('table');
	
// 	for (let i = 0; i < 3; i++) {
//       let tr = document.createElement('tr');

// 		for (let j = 0; j < 4; j++) {
// 			let td = document.createElement('td');
         
//          tr.appendChild(td);
// 		}
//       table.appendChild(tr);
// 	}
	
// 	parent.appendChild(table);
// }


// let div = document.querySelector('#elem');
// createTable(3, 4, div);


///Возврат таблицы из функции на JavaScript///////

//Переделайте вашу функцию createTable в соответствии с описанным в теории. 
// function createTable(rows, cols, parent) {
// 	let table = document.createElement('table');
	
// 	for (let i = 0; i < rows; i++) {
//       let tr = document.createElement('tr');

// 		for (let j = 0; j < cols; j++) {
// 			let td = document.createElement('td');
         
//          tr.appendChild(td);
// 		}
//       table.appendChild(tr);
// 	}
   
//     return table;
// }



// let div = document.querySelector('#elem');
// let table = createTable(5, 3);
// div.appendChild(table);

/*
 Пусть у нас есть вот такой див с абзацами:
<div id="elem">
	<p>1</p>
	<p>2</p>
	<p>3</p>
</div>

С помощью функции createTable создайте новую таблицу, а затем вставьте ее в конец дива. 
*/


// function createTable(rows, cols, parent) {
//    let table = document.createElement('table');

//    for(let i = 0; i < rows; i++) {
//       let tr = document.createElement('tr');

//       for(let j = 0; j < cols; j++) {
//          let td = document.createElement('td');

//          tr.appendChild(td);
//       }
//       table.appendChild(tr);
//    }w
//    return table;
// }

// let div = document.querySelector('#elem');
// let table = createTable(2, 3);

// div.append(table);




/////////Функция для создания таблицы из массива/////////////

