///////////////Объект Event////////////////////////////

//////////Основы работы с объектом Event в JavaScript//////////

// elem.addEventListener('click', function(event) {
// 	console.log(event); // увидим объект с событием
// });

////////////Координаты события в JavaScript////////////////////

////Свойство event.clientX

/*

При движении мыши по странице будем выводить ее координаты относительно окна браузера (clientX и clientY):

<div id="elem">0 : 0</div>
let elem = document.getElementById('elem');

document.addEventListener('mousemove', function(event) {
	elem.innerHTML = event.clientX + ' : ' + event.clientY;
});
*/

// let elem = document.getElementById('elem');

// document.addEventListener('mousemove', function(event) {
// 	elem.innerHTML = event.clientX + ' : ' + event.clientY;
// });


/*
Сделайте так, чтобы при движении мышки по странице, отображались координаты курсора, подобно тому, как это сделано в следующем образце:

<div id="elem">0 : 0</div>
*/

// let elem = document.getElementById('elem');

// elem.addEventListener('mousemove', function(event) {
//    elem.innerHTML = event.clientX + ' : ' + event.clientY;
// });






/////////Тип события в объекте Event в JavaScript/////////////

/*
В следующем коде к двум событиям привязан один и тот же обработчик:

<button id="elem">text</button>
let elem = document.querySelector('#elem');

elem.addEventListener('click', func);
elem.addEventListener('dblclick', func);

function func() {
	
}
Допишите код функции func так, чтобы при клике на элемент этот элемент красился в зеленый цвет, а при двойном клике - в красный.
*/
// let elem = document.querySelector('.elem');

// elem.addEventListener('click', func);
// elem.addEventListener('dblclick', func);

// function func(event) {
//  if(event.type === 'click') {
//    this.classList.remove('colorRed'); // удаляем старый, если был
//     this.classList.add('colorGreen');
// } else {
//      this.classList.remove('colorGreen'); // удаляем старый
//      this.classList.add('colorRed');
//  }
// }

//////////Элемент события в объекте Event в JavaScript///////////

// let elem = document.querySelector('#elem');

// elem.addEventListener('click', function(event) {
// 	console.log(event.target); // выведет наш абзац
// 	console.log(this);         // выведет наш див
// });

/*
усть у вас есть список ul с тегами li:

ul {
	padding: 30px;
	border: 1px solid red;
}
li {
	list-style-type: none;
	margin-bottom: 20px;
	border: 1px dashed black;
}
<ul id="elem">
	<li>text</li>
	<li>text</li>
	<li>text</li>
	<li>text</li>
	<li>text</li>
</ul>

Привяжите к тегу ul обработчик клика. В этом обработчике проверяйте с помощью свойства tagName, по какому тегу был клик. Если клик был по тегу li - добавьте в конец текста этого тега восклицательный знак. А если клик был по тегу ul - выведите информацию об этом в консоль.
*/
// let elem = document.querySelector('#elem');
// elem.addEventListener('click', function(event) {
//     if(event.target.tagName === 'LI') {
//       event.target.textContent += '!';
//     }
//     if(event.target.tagName === 'UL') {
//       console.log('Клик по самому списку (ul), а не по его пунктам');
//     }
// });


////////////Получение нажатых клавиш в JavaScript////

/*
Сделайте инпут, который будет по вводу выводить значения введенных клавиш и их коды.

Понажимайте в инпуте различные клавиши и посмотрите, какие у них значения и коды.

Определите, какой код будет у клавиши Enter.

Определите, какой код будет у клавиши BackSpace.
*/

// let elem = document.querySelector('input');
// elem.addEventListener('keypress', function(event) {
//    console.log(event.key + ' ' + 'код: ' + event.code);
  
// });

/*
Дан абзац и инпут. В него вводится текст и нажимается клавиша Enter. Сделайте так, чтобы в этот момент введенный текст попадал в абзац под инпутом, а содержимое инпута очищалось.

   <input>
   <p id="text"></p>
*/
// let elem = document.querySelector('input');
// let text = document.querySelector('#text');

// elem.addEventListener('keydown', function(event) {
//    if(event.key == 'Enter') {
//       text.textContent = this.value;
//       elem.value = '';
//    }
// });



//////////////Отслеживание клавиш-модификаторов в JavaScript//////////

/*
Дан элемент. Сделайте так, чтобы по клику на него он красился в красный цвет, но только если в момент клика нажата клавиша Alt.

<button id="elem">кнопка</button>
*/

// let elem = document.querySelector('.elem');

// elem.addEventListener('click', function(event) {
//    if(event.altKey) {
//       elem.classList.add('colorBlue');
//    }
// });


/*
Пусть у вас есть список ul с тегами li:

<ul id="elem">
	<li>text</li>
	<li>text</li>
	<li>text</li>
	<li>text</li>
	<li>text</li>
</ul>
Сделайте так, чтобы по клику на любую li, в конец ее текста добавлялось число 1, если нажата клавиша Ctrl, и число 2, если нажата клавиша Shift.
*/

// let elem = document.querySelector('#elem');
// elem.addEventListener('click', function(event) {
//    if(event.target.tagName === 'LI') {
//       if(event.ctrlKey) {
//          event.target.textContent += '1';
//       }
     
//       if(event.shiftKey) {
//          event.target.textContent += '2';
//       }
//    }
// });



//////////Отмена действия по умолчанию в JavaScript//////////////////
//специальный метод preventDefault(), который следует вызвать в любом месте обработчика события.

/*
Даны ссылки. Сделайте так, чтобы по клику на ссылку ей в конец записывался ее href, а перехода по ссылке не происходило.


    <a href="http://www.code.mu" id="link">code.mu</a>
   <br>
   <br>
   <a href="http://www.youtube" id="link">youtube</a>
*/
// let link1 = document.querySelector('#link1');
// let link2 = document.querySelector('#link2');

// link1.addEventListener('click', function(event){
//    event.preventDefault();
//    link1.textContent += ' - ' + '(' + link1.getAttribute('href') + ')';
// });
// link2.addEventListener('click', function(event){
//    event.preventDefault();
//    link2.textContent += ' - ' + '(' + link2.getAttribute('href') + ')';
// });




/*
Даны два инпута, абзац и ссылка. Пусть в инпуты вводятся числа. Сделайте так, чтобы по клику на ссылку в абзац записалась сумма введенных чисел.

	 <input id="elem1" type="text">
   <input id="elem2" type="text">
	 <p id="text"></p>
   <a href="http://www.code.mu" id="link">code.mu</a>
*/

// //Получим ссылки на элементы
// let elem1 = document.querySelector('#elem1');
// let elem2 = document.querySelector('#elem2');
// let text = document.querySelector('#text');
// let link = document.querySelector('#link');

// //Привяжем обработчик клика к ссылке
// link.addEventListener('click', func);

// //создаем функцию которая отменит переход по ссылке и посчитает сумму из чисел введенных в инпуты
// function func(event) {
// 	event.preventDefault();
// 	text.textContent = Number(elem1.value) + Number(elem2.value);
// }

// function func(event) {
//     event.preventDefault();
//     let val1 = Number(elem1.value);
//     let val2 = Number(elem2.value);
//     //проверкa на пустые инпуты или не-числа, чтобы в абзаце не появлялось странное NaN
//     if (!isNaN(val1) && !isNaN(val2)) {
//         text.textContent = val1 + val2;
//     } else {
//         text.textContent = 'Введите корректные числа!';
//     }
// }

///////////////Всплытие событий в JavaScript////////////////////////////////

	/*
	Самостоятельно напишите код, который будет демонстрировать всплытие событий. Проверьте на нем всплытие различных типов событий.

	#elem1 {
   width: 500px;
   height: 500px;
   background-color: rgb(8, 63, 8);
   display: flex;
   justify-content: center;
   align-items: center;
}
#elem2 {
   width: 380px;
   height: 380px;
   background-color: rgb(231, 15, 202);
   display: flex;
   justify-content: center;
   align-items: center;
}
#elem3 {
   width: 250px;
   height: 250px;
   background-color: rgb(16, 20, 214);
}

   <div id="elem1">
      <div id="elem2">
         <div id="elem3">
            
         </div>
      </div>
   </div>
	*/

	// let elem1 = document.querySelector('#elem1');
	// let elem2 = document.querySelector('#elem2');
	// let elem3 = document.querySelector('#elem3');

	// elem1.addEventListener('change', function() {
	// 	alert('Зелёный');
	// });
	// elem2.addEventListener('change', function() {
	// 	alert('Розовый');
	// });
	// elem3.addEventListener('change', function() {
	// 	alert('Голубой');
	// });


	/*
	Всплывать могут не все события. Экспериментально найдите хотя бы одно событие, которое не будет всплывать.
	*/
	//Это событие focus




	///////////////////////Получение целевого элемента при всплытии событий/////////////////
////Метод matches позволяет проверить, удовлетворяет ли элемент указанному CSS селектору.

	// let div = document.querySelector('div');
	// div.addEventListener('click', function(event) {
	// 	if (event.target.matches('div')) {
	// 	console.log('клик именно по диву');
	// }
	// if (event.target.matches('p')) {
	// 	console.log('клик именно по абзацу');
	// }
	// });

	// let div = document.querySelector('div');
	// div.addEventListener('click', function(event) {
	// 	if (event.target.tagName === 'DIV') {
	// 		console.log('клик именно по диву');
	// 	}
	// 	if (event.target.tagName === 'P') {
	// 		console.log('клик именно по абзацу');
	// 	}
	// });

	/*
	Даны следующие элементы:

		<div>
			<ul>
				<li>1</li>
				<li>2</li>
				<li>3</li>
			</ul>
		</div>
		div, ul, li {
			padding: 20px;
		}

		div {
			border: 1px solid red;
		}
		ul {
			border: 1px solid orange;
		}
		li {
			border: 1px solid green;
		}
		Навешайте на див обработчик клика. В этом обработчике определите, в каком из тегов сработало событие.
	*/
	// let div = document.querySelector('div');
	// div.addEventListener('click', function(event) {
		// if(event.target.tagName === 'DIV') {
		// 	console.log('Клик по диву');
		// }
		// if(event.target.tagName === 'UL') {
		// 	console.log('Клик по ul');
		// }
		// if(event.target.tagName === 'LI') {
		// 	console.log('Клик по li');
		// }

		//////////////////////////////////////////////////
		// if(event.target.matches('div')) {
		// 	console.log('Клик по диву');
		// }
		// if(event.target.matches('ul')) {
		// 	console.log('Клик по ул');
		// }
		// if(event.target.matches('li')) {
		// 	console.log('Клик по ли');
		// }
	// });
	
	/*
	Модифицируйте предыдущую задачу. Сделайте так, чтобы при клике на li, ей в конец добавлялся восклицательный знак, а при клике на ul в консоль выводилась информация об этом.
	*/
	// //навесим обработчик события по клику на див
	// let div = document.querySelector('div');
	
	// div.addEventListener('click', function(event) {
	// 	//добавим к тексту ли восклицательный знак
	// 	//event.target получение того тега куда кликнули
	// 	//Метод matches позволяет проверить, удовлетворяет ли элемент указанному CSS селектору.

  //   if(event.target.matches('li')) {
	// 		event.target.textContent += '!'
	// 	}
	// 	//Выведем в консол сообщение о том что кликнули на ул
	// 	if(event.target.matches('ul')) {
	// 		console.log('Вы кликнули на ul');
	// 	}
	// });





	//////////////Прекращение всплытия событий в JavaScript//////////////////////////

	/*
		Всплытие события можно остановить на любой элемент, через который всплывает событие. Для этого в коде элемента следует вызвать метод stopPropagation объекта Event.

		В следующем примере клик по красному блоку сработает на нем самом, затем на голубом блоке и все - голубой блок прекращает дальнейшее всплытие и зеленый блок уже никак не отреагирует:

				elem1.addEventListener('click', function() {
					console.log('зеленый');
				});
				elem2.addEventListener('click', function(event) {
					console.log('голубой');
					event.stopPropagation(); // остановим всплытие
				});
				elem3.addEventListener('click', function() {
					console.log('красный');
				});
	*/




	/////////////////////Несколько обработчиков на элементе в JavaScript///////////////////////////

	/*
			Если у элемента есть несколько обработчиков на одно событие, то даже при прекращении всплытия все они будут выполнены. To есть, stopPropagation препятствует продвижению события дальше, но на текущем элементе все обработчики отработают. Смотрите пример:

			elem1.addEventListener('click', function() {
				console.log('зеленый');
			});
			elem2.addEventListener('click', function(event) {
				console.log('голубой - первый обработчик');
				event.stopPropagation(); // остановим всплытие
			});
			elem2.addEventListener('click', function() {
				console.log('голубой - второй обработчик'); // все равно 
					сработает 
			});
			elem3.addEventListener('click', function() {
				console.log('красный');
			});
	*/


	/////////////Немедленное прекращение всплытия в JavaScript////////////////////////////

	/*
	Для того, чтобы полностью остановить обработку, современные браузеры поддерживают метод stopImmediatePropagation. Он не только предотвращает всплытие, но и останавливает обработку событий на текущем элементе. Давайте его применим:

			elem1.addEventListener('click', function() {
				console.log('зеленый');
			});
			elem2.addEventListener('click', function(event) {
				console.log('голубой - первый обработчик');
				event.stopImmediatePropagation();     // остановим всплытие
			});
			elem2.addEventListener('click', function() {
				console.log('голубой - второй обработчик'); // уже не 
					сработает 
			});
			elem3.addEventListener('click', function() {
				console.log('красный');
			});
	*/






////////////////////Применение прекращения всплытия событий в JavaScript////////////////////

// let parent = document.querySelector('#parent');
// let button = document.querySelector('button');
// let block  = document.querySelector('#block');
 
// button.addEventListener('click', function() {
// 	block.classList.add('active');
// });
// parent.addEventListener('click', function() {
// 	block.classList.remove('active');
// });






//Самостоятельно реализуйте корректную работу описанной задачи.
/*
  <div id="parent">
      <button>click me</button>
      <div id="block">
         text
      </div>
   </div>
*/

// let parent = document.querySelector('#parent');
// let button = document.querySelector('button');
// let block = document.querySelector('#block');

// //Сделаем так, чтобы по клику на кнопку наш блок показался:
// button.addEventListener('click', function(event) {
//    block.classList.add('active');
// 	// Останавливаем всплытие, чтобы клик не дошел до parent и блок тут же не закрылся
// 	 event.stopPropagation()
// });
// // //А теперь сделаем так, чтобы по клику на любое место родителя наш блок скрывался:
// parent.addEventListener('click', function() {
// 	block.classList.remove('active');
// });


////////////////Погружение событий в JavaScript////////////////////////////

// elem1.addEventListener('click', function() {
// 	console.log('зеленый - погружение');
// }, true);
// elem1.addEventListener('click', function() {
// 	console.log('зеленый - всплытие');
// }, false);

// elem2.addEventListener('click', function() {
// 	console.log('голубой - погружение');
// }, true);
// elem2.addEventListener('click', function() {
// 	console.log('голубой - всплытие');
// }, false);

// elem3.addEventListener('click', function() {
// 	console.log('красный - погружение');
// }, true);
// elem3.addEventListener('click', function() {
// 	console.log('красный- всплытие');
// }, false);






///////////////Навешивание обработчиков на новые элементы в JavaScript//////////////////////////

/*
Пусть у нас есть список ul и кнопка:
<ul>
	<li>item</li>
	<li>item</li>
	<li>item</li>
	<li>item</li>
	<li>item</li>
</ul>

<button>add</button>

Получим наши элементы в соответствующие переменные:

let button = document.querySelector('button');
let list   = document.querySelector('ul');
let items  = list.querySelectorAll('li');


Сделаем так, чтобы по клику на любую li ей в конец добавлялся восклицательный знак:

for (let item of items) {
	item.addEventListener('click', function() {
		this.textContent = this.textContent + '!';
	});
}


Давайте теперь сделаем так, чтобы по нажатию на кнопку в конец списка добавлялся новая li:

button.addEventListener('click', function() {
	let item = document.createElement('li');
	item.textContent = 'item';
	list.appendChild(item);
});


Мы, однако, получим проблему: клик на новую добавленную li не будет приводить к добавлению восклицательного знака в конец. Дело в том, что мы добавляем обработчик клика только на те li, которые существовали изначально, но не на новые.

Исправим проблему, навесив на новую li обработчик клика:

button.addEventListener('click', function() {
	let item = document.createElement('li');
	item.textContent = 'item';
	
	item.addEventListener('click', function() { // обработчик 
		клика 
		this.textContent = this.textContent + '!';
	});
	
	list.appendChild(item);
});
Однако, теперь код функции-обработчика дублируется в двух местах - для изначально существующих li и для новых. Исправим это, вынеся его в отдельную функцию:

function handler() {
	this.textContent = this.textContent + '!';
}

Используем нашу функцию, чтобы избежать дублирования кода:

for (let item of items) {
	item.addEventListener('click', handler);
}

button.addEventListener('click', function() {
	let item = document.createElement('li');
	item.textContent = 'item';
	
	item.addEventListener('click', handler);
	
	list.appendChild(item);
});
Задача в общем-то решена и мы избежали дублирования кода функции-обработчика. Однако, навешивать обработчики событий нам все равно приходится в двух местах: и в цикле для существующих li, и в при клике на кнопку. В следующем уроке мы разберем способ избавится от этого неудобства.
*/


// let button = document.querySelector('button');
// let list   = document.querySelector('ul');
// let items  = list.querySelectorAll('li');

// function handler() {
// 	this.textContent = this.textContent + '!';
// }

// for (let item of items) {
// 	item.addEventListener('click', handler);
// }

// button.addEventListener('click', function() {
// 	let item = document.createElement('li');
// 	item.textContent = 'item';
	
// 	item.addEventListener('click', handler);
	
// 	list.appendChild(item);
// });






/////////////////Делегирование событий в JavaScript////////////////////////////////////

// let button = document.querySelector('button');
// let list   = document.querySelector('ul');
// let items  = list.querySelectorAll('li');

// function handler() {
// 	this.textContent = this.textContent + '!';
// }

// for (let item of items) {
// 	item.addEventListener('click', handler);
// }

// button.addEventListener('click', function() {
// 	let item = document.createElement('li');
// 	item.textContent = 'item';
	
// 	item.addEventListener('click', handler);
	
// 	list.appendChild(item);
// });


////////////////Универсальное делегирование событий в JavaScript////////////////////////


// let list   = document.querySelector('ul');

// list.addEventListener('click', function(event) {
// 	let li = event.target.closest('li');
	
// 	if (li) {
// 		li.innerHTML = li.innerHTML + '!';
// 	}
// });


