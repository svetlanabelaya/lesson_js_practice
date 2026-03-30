//////////////////Таймеры///////////////////////////////////////

/////////////Основы работы с функцией setInterval в JavaScript/////
////////////Запуск таймера/////////////////////////////////////

// setInterval(timer, 1000);

// function timer() {
// 	console.log('!');
// }

// setInterval(function() {
//    console.log('Hello!');
// }, 1000);


//Запустите таймер, который каждые 3 секунды будет что-нибудь выводить в консоль.

// setInterval(function() {
//    console.log('Привет');
// }, 3000);




////////////////Счетчикна таймере///////////////////////////////////
//////////Счетчик через функцию setInterval в JavaScript/////////////

/*
Конечно же, не очень интересно то, что наш таймер каждый раз выводит одно и тоже. Давайте усложним нашу задачу и сделаем так, чтобы каждую секунду в консоль выводились числа по возрастанию: сначала 1, потом 2, потом 3 и так далее.

Для этого нам понадобится переменная-счетчик, которая будет хранить свои значения между запусками функции. Несложно понять, что можно просто сделать глобальную переменную:
*/
// let i = 0; // глобальная переменная

// setInterval(function() {
// 	i++;
// 	console.log(i);
// }, 1000);

// let i = 0;
// setInterval(function() {
// 	console.log(++i);
// }, 1000);

//Или еще более компактно через стрелочную функцию:

// let i = 0;
// setInterval(() => console.log(++i), 1000);



//Пусть дана переменная, в которой изначально хранится число 100. Запустите таймер, который каждую секунду будет уменьшать значение этой переменной на 1 и выводить это значение в консоль.

// let num = 10;
// setInterval(() => console.log(--num), 1000);


//////////////Остановка таймера JavaScript/////////////////////////

/*
Вы уже знаете, как запустить таймер, давайте теперь научимся его останавливать. Для этого вам необходимо знать, что каждый таймер, запущенный с помощью функции setInterval, имеет уникальный номер. Этот номер возвращает функция setInterval в момент запуска таймера:

let timerId = setInterval(function() {
	console.log('!')
}, 1000);

alert(timerId); // выведет номер таймера
Для остановки таймера используется функция clearInterval, которая принимает уникальный номер того таймера, который нужно остановить.

Для примера давайте запустим таймер, выводящий в консоль числа по возрастанию, начиная с 1. Остановим таймер, как только на экран будет выведено число 10:

let i = 0;

let timerId = setInterval(function() {
	console.log(++i);
	
	if (i >= 10) {
		clearInterval(timerId);
	}
}, 1000);
*/


/*
Пусть дана переменная, в которой изначально хранится число 10. Запустите таймер, который каждую секунду будет уменьшать значение этой переменной на 1 и выводить это значение в консоль. Как только значение переменной достигнет нуля - остановите таймер.
*/

// let i = 10;

// let timerId = setInterval (function() {
//    console.log(--i);

//    if(i <= 0) {
//       clearInterval(timerId);

//    }
// }, 1000);


///////////////////Кнопка для запуска таймера на JavaScript///////////

/*
В предыдущих уроках наш таймер начинал свою работу сразу по загрузке страницы. Давайте теперь сделаем кнопку, по нажатию на которую будет запускаться наш таймер:

<button id="start">start</button>
Напишем соответствующий JavaScript:

let start = document.querySelector('#start');

start.addEventListener('click', function() {
	let i = 0;
	
	setInterval(function() {
		console.log(++i);
	}, 1000);
});
*/

//Сделайте кнопку, по нажатию на которую в консоль будет выводится обратный отсчет, начиная с 100.

//<button id="button">restart</button>

// let button = document.querySelector('#button');

// button.addEventListener('click', function() {
//    let i = 100;

//    let timerId = setInterval(function() {
//       console.log(--i);
      
//       if(i <= 0) {
//          clearInterval(timerId);
//       }
//    }, 1000);
// });



///Многократное нажатие на кнопку для запуска таймера на JavaScript///

/*
Код, приведенный мною выше, на самом деле имеет некоторую проблему. Эта проблема проявляется в том случае, если на нашу кнопку сделать несколько кликов. В этом случае каждый клик будет приводить к запуску нового таймера.

To есть, к примеру, три нажатия на кнопку приведут к тому, что будет запущено три таймера, и каждый из этих таймеров будет выводить значение счетчика в консоль. Это значит, что значения будут меняться в три раза быстрее!

Для решения описанной проблемы нужно просто сделать так, чтобы повторное нажатие на кнопку не приводило к новому запуску таймера. Например, можно после старта таймера отвязывать от кнопки привязанный обработчик клика:

let start = document.querySelector('#start');

start.addEventListener('click', function func() {
	let i = 0;
	
	setInterval(function() {
		console.log(++i);
	}, 1000);
	
	this.removeEventListener('click', func); // отвязываем обработчик
});
*/

///Возьмите ваше решение предыдущей задачи. Проверьте, что многократное нажатие на кнопку приводит к ускорению отсчета. Исправьте эту проблему.

//<button id="button">restart</button>

// let button = document.querySelector('#button');

// button.addEventListener('click', function func() {
//    let i = 100;

//    setInterval(function() {
//       console.log(--i);

//    }, 1000);

//    this.removeEventListener('click', func);
// });




///////////////Кнопка для запуска таймера на JavaScript////////////
////////////////кнопки для запуска и остановки таймера////////////


/*
Давайте теперь сделаем две кнопки: по нажатию на первую пусть таймер запускается, а по нажатию на вторую - останавливается. Здесь уже все будет не так просто и нас ждет подвох. Для того, чтобы понять суть этого подвоха, распишу создание кода по шагам.

Итак, делаем две кнопочки:

<button id="start">start</button>
<button id="stop">stop</button>
Получаем ссылки на эти кнопки в переменные:

let start = document.querySelector('#start');
let stop  = document.querySelector('#stop');
По нажатию на первую кнопку стартуем таймер, записав его номер в переменную:

start.addEventListener('click', function() {
	let timerId = setInterval(function() {
		console.log('!')
	}, 1000);
});
А теперь остановим таймер по нажатию на вторую кнопку:

start.addEventListener('click', function() {
	let timerId = setInterval(function() {
		console.log('!')
	}, 1000);
});

// Останавливаем таймер:
stop.addEventListener('click', function() {
	clearInterval(timerId);
});
Однако, если попытаться запустить приведенный выше код, нас ждет сюрприз: при попытке остановить таймер окажется, что переменная timerId равна undefined! Почему так произошло? Потому при запуске таймера мы сделали нашу переменную timerId локальной внутри функции, привязанной к кнопке start.

Для решения проблемы сделаем переменную timerId глобальной - в этом случае она будет доступна как в функции запуска таймера, так и в функции остановки:

let timerId; // сделаем переменную глобальной

start.addEventListener('click', function() {
	timerId = setInterval(function() {
		console.log('!')
	}, 1000);
});

stop.addEventListener('click', function() {
	clearInterval(timerId);
});
*/

/*
Пусть дана переменная, в которой изначально хранится число 100. Даны также две кнопки. По нажатию на первую кнопку запустите таймер, который каждую секунду будет уменьшать значение переменной на 1 и выводить новое значение в консоль. Как только значение переменной достигнет нуля - остановите таймер.

По нажатию на вторую кнопку остановите таймер. Также остановите таймер, если вторая кнопка не была нажата, но значение переменной достигло нуля.

   <button id="start">start</button>
   <button id="stop">stop</button>
*/

// let timerId;
// let num = 10;

// let start = document.querySelector('#start');
// let stop = document.querySelector('#stop');

// start.addEventListener('click', function func() {
//    timerId = setInterval(function() {
//       console.log(--num);
//       if( num <= 0) {
//          clearInterval(timerId);
//       }
//    }, 1000);
   
//    this.removeEventListener('click', func);
// });

// stop.addEventListener('click', function() {
//    clearInterval(timerId);
// });

/*
Некоторый программист написал код, который по нажатию на кнопку запускает таймер, выводящий в консоль текущий момент времени:

После запуска кода, однако, оказалось, что кнопка остановки не работает. Исправьте ошибку автора кода.
*/

//<input type="submit" id="start" value="start">
//<input type="submit" id="stop"  value="stop">

// let timerId;
// let start = document.querySelector('#start');
// let stop = document.querySelector('#stop');

// start.addEventListener('click', function() {
// 	   timerId = setInterval(function() {
// 		let date = new Date;
// 		console.log(date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds());
// 	}, 1000);
// });

//  stop.addEventListener('click', function() {
//    clearInterval(timerId);
// });

/*
Еще один программист также написал код для решения предыдущей задачи:

После запуска кода, однако, опять оказалось, что кнопка остановки не работает. Исправьте ошибку автора кода.
*/

//<input type="submit" id="start" value="start">
//<input type="submit" id="stop"  value="stop">

// let start = document.querySelector('#start');
// let stop  = document.querySelector('#stop');

// let timerId;

// start.addEventListener('click', function func() {
// 	timerId = setInterval(function() {
// 		let date = new Date;
// 		console.log(date.getMinutes() + ':' + date.getSeconds());
// 	}, 1000);
//    this.removeEventListener('click', func)
// });

// stop.addEventListener('click', function() {
// 	clearInterval(timerId);
// });

/*
Приведенный мною в теоретической части код не учитывает то, что на кнопку старт можно сделать несколько нажатий. Для исправления этой проблемы можно по нажатию на кнопку старт отвязывать событие от этой кнопки, а по нажатию на кнопку стоп - привязывать обратно. Исправьте проблему.
*/

// let start = document.querySelector('#start');
// let stop  = document.querySelector('#stop');

// let timerId; // сделаем переменную глобальной

// start.addEventListener('click', function func() {
// 	timerId = setInterval(function() {
// 		console.log('!');
// 	}, 1000);
//    this.removeEventListener('click', func);
// });

// stop.addEventListener('click', function() {
// 	clearInterval(timerId);
// });


///////////Практика на таймеры и работу с DOM в JavaScript/////////

//Объясните, зачем в приведенном выше коде используется функция Number. Что будет, если не написать эту функцию в данном коде?

/*
<input id="elem" value="1">
let elem = document.querySelector('#elem');

setInterval(function() {
	elem.value = Number(elem.value) + 1;
}, 1000);
*/

//Ответ: Выведет undefined, отому что, elem.value - всегда строка;

/*Пусть в инпуте в атрибуте value изначально записано число 10. Запустите таймер, который каждую секунду будет уменьшать это число на единицу.
<input id="elem" value="10">
*/
/*
Модифицируйте предыдущую задачу так, чтобы, как только содержимое инпута станет равно нулю, таймер прекратил свою работу.
*/

// let elem = document.querySelector('#elem');
// let timerId;
//    timerId = setInterval(function() {
//    elem.value = Number(elem.value) - 1;
   
//    if(elem.value <= 0) {
//       clearInterval(timerId);
//    }
// },1000);




//////////////Таймеры и потеря контекста в JavaScript/////////////////

/*
При использовании таймеров в обработчиках событий нас поджидают проблемы с потерей контекста. Давайте посмотрим на примере.

Пусть у нас есть инпут:

<input id="elem" value="text">
Пусть по клику на этот инпут сработает анонимная функция и внутри этой функции запустится таймер, каждую секунду выводящий что-нибудь в консоль:

let elem = document.querySelector('#elem');

elem.addEventListener('click', function() {
	setInterval(function() {
		console.log('!!!'); // что-нибудь выводим в консоль
	}, 1000);
});
Пока все работает верно. Но пусть теперь мы хотим выводить в консоль value нашего инпута - нас ждет сюрприз: в консоль будет выводится undefined:

elem.addEventListener('click', function() {
	setInterval(function() {
		console.log(this.value); // будет выводится undefined
	}, 1000);
});
Все дело в том, что у нас получается функция в функции: есть внешняя анонимная функция, которая вызывается по клику и внутренняя анонимная функция, которую запускает таймер. Во внешней функции this указывает на инпут, но во внутренней - нет. Имеет место потеря контекста.

Почему выводится undefined, а не вываливается ошибка в консоль, как это было в предыдущих уроках? Потому что this внутри функции, вызываемой через setInterval, указывает на window.

Это значит, что мы пытаемся прочитать свойство value у объекта window, вот так: window.value, а такого свойства в нем нет, и мы получаем undefined (не ошибку).

Поправим проблему введением self:

elem.addEventListener('click', function() {
	let self = this;
	
	setInterval(function() {
		console.log(self.value);
	}, 1000);
});
*/

/*
Пусть дан такой код:

<input type="button" id="elem" value="1">
let elem = document.querySelector('#elem');

elem.addEventListener('click', function() {
	setInterval(function() {
		this.value = Number(elem.value) + 1;
	}, 1000);
});
Автор кода хотел, чтобы по нажатию на кнопку, значение этой кнопки каждую секунду увеличивалось на 1. Однако, по нажатию на кнопку вообще ничего не происходит. Исправьте ошибку автора кода. Напишите текст, в котором вы дадите объяснение автору кода, почему возникла его ошибка.
*/

// let elem = document.querySelector('#elem');
// let timerId;
// elem.addEventListener('click', function() {
//    let self = this;
// 	timerId = setInterval(function() {
// 		self.value = Number(self.value) + 1;
// 	}, 1000);
// });

//Твоя ошибка в том что ты не учел потерюконтекста. Первая анонимная функция прочитает вэлью но внутри этой функции таймер айди не увидит вэлью инпуту, чтобы это обойти, нужно вщо внешней функции присвоить к перемненной дзис, и эту переменню использовать в локальной функйии.





//////////Практика на таймеры и работу с DOM в JavaScript//////

/*
Дана кнопка. Дан абзац, текстом которого является число. По нажатию на кнопку запустите таймер, который каждую секунду будет увеличивать текст абзаца на 1.

   <button id="elem">start</button>
   <p id="text">5</p>
*/

// let text = document.querySelector('#text');
// let elem = document.querySelector('#elem');

// let timerId;
// elem.addEventListener('click', function() {
//    let self = this;
//    timerId = setInterval(function() {
//       text.textContent = Number(text.textContent) + 1;
//    }, 1000);
// });

/*
Дана кнопка. Дан абзац, текстом которого является число, например, 10. По нажатию на кнопку запустите таймер, который каждую секунду будет уменьшать текст абзаца на 1. Как только значение абзаца станет равно нулю - остановите таймер.


   <button id="elem">start</button>
   <p id="text">10</p>
*/
// let elem = document.querySelector('#elem');
// let text = document.querySelector('#text');

// let timerId;
// elem.addEventListener('click', function() {
//    timerId = setInterval(function() {
//       text.textContent = Number(text.textContent) - 1;

//       if(Number(text.textContent) <= 0) {
//          clearInterval(timerId);
//       }
//    }, 1000);
// });


/*
Дан инпут с числом. Сделайте так, чтобы каждую секунду в нем появлялся квадрат того числа, которое в нем записано.

 <input type="text" id="elem" value="1">
*/

// let elem = document.querySelector('#elem');
// let timerId;
// elem.addEventListener('click', function() {
//    let self = this;
//    timerId = setInterval(function() {
//       self.value = Number(self.value) * 2;
//    }, 1000);
// });

/*
Дан инпут. В него вводится число. По потери фокуса сделайте так, чтобы в абзаце ниже начал тикать обратный отсчет, начиная с введенного числа. Когда отсчет дойдет до нуля - он должен закончится.


   <input type="text" id="elem">
   <p id="text"></p>
*/
// let elem = document.querySelector('#elem');
// let text = document.querySelector('#text');
// let timerId;
// elem.addEventListener('blur', function() {
//     let self = this;

//     text.textContent = Number(self.value);

//      timerId = setInterval(function() {
//      text.textContent = Number(text.textContent) - 1;

//       if(Number(text.textContent) <= 0) {
//          clearInterval(timerId);
//       }
//    }, 1000);

// });


/*
Дан инпут, кнопка и абзац. В инпут вводится какое-то число. По нажатию на кнопку запишите введенное число в текст абзаца и запустите обратный отсчет в абзаце: пусть каждую секунду число в абзаце уменьшается на единицу, пока не дойдет до нуля.

   input type="text" id="elem" value="">
   <button id="btn">click</button>
   <p id="text"></p>
*/
// let elem = document.querySelector('#elem');
// let btn = document.querySelector('#btn');
// let text = document.querySelector('#text');

// let timerId;

// btn.addEventListener('click', function() {
//    let self = this;
//    text.textContent = elem.value;
//    timerId = setInterval(function() {
//       text.textContent = Number(text.textContent) - 1;

//       if(Number(text.textContent <= 0)) {
//          clearInterval(timerId);
//       }
//    }, 1000);


// });

/*
Дан абзац и две кнопки. Сделайте так, чтобы по нажатию на первую кнопку в абзаце начал тикать таймер от 1 до бесконечности, а по нажатию на вторую таймер останавливался.



   <button id="start">start</button>
   <button id="stop">stop</button>
   <p id="text"></p>
*/

// let start = document.querySelector('#start');
// let stop = document.querySelector('#stop');
// let text = document.querySelector('#text');

// let timerId;
// start.addEventListener('click', function() {
//    timerId = setInterval(function() {
//       text.textContent = Number(text.textContent) + 1;
//    }, 1000);
// });
// stop.addEventListener('click', function() {
//     clearInterval(timerId);
// });

/*
Дан абзац. Сделайте так, чтобы каждую секунду он менял свой цвет с красного на зеленый и наоборот.

   <p id="text">Далеко-далеко за словесными горами в стране гласных и согласных, живут рыбные тексты.</p>
*/

// let text = document.querySelector('#text');

// setInterval(function() {
//    text.classList.toggle('colorgreen'); 
// }, 1000);

/*
Если выводить на экран каждую секунду текущий момент времени, то можно сделать тикающие часы. Реализуйте такие же часики, как показано ниже в образце:


*/

// let div = document.querySelector('div');

// function addZero(num) {
//    if(num >= 0 && num <= 9) {
//       return '0' + num;
//    } else {
//       return num;
//    }
// }
// setInterval(function() {
//    let date = new Date();
//    div.textContent = addZero(date.getHours()) + ':' + addZero(date.getMinutes()) + ':' + addZero(date.getSeconds()); 

// }, 1000);



/////////////Задержка перед выполнением в JavaScript/////////////

/*
Давайте теперь разберем функцию setTimeout, которая позволяет сделать задержку перед запуском кода. Эта задержка, в отличии от функции setInterval, случится только один раз.

Первым параметром setTimeout принимает исходный код функции, а вторым - задержку в миллисекундах перед запуском этой функции.
*/
// let elem = document.querySelector('#elem');

// elem.addEventListener('click', function() {
// 	setTimeout(function() {
// 		alert('!');
// 	}, 3000);
// });


/*
Дан абзац. Напишите код, который выведет сообщение в этот абзац через 10 секунд после загрузки страницы.

<p id="text"></p>
*/

// let text = document.querySelector('#text');

// setTimeout(function() {
//    text.textContent = 'massege';
// }, 10000);


////////////Запуск таймера в JavaScript/////////////////////////

/*
Хотя функция setTimeout и не предназначена для создания таймеров, однако их все равно можно делать с ее помощью, если воспользоваться рекурсией:
*/

// let i = 0;

// function timer() {
// 	setTimeout(function() {
// 		console.log(++i);
		
// 		if (i < 10) { // запускаем, только если счетчик меньше 10
// 			timer();
// 		}
// 	}, 1000);
// }
// timer();


/*
Выведите в консоль число 0. Через секунду выведите число 1, через две секунды выведите число 2, через 3 секунды выведите число 3. И так далее до бесконечности.
*/


// function timer(num) {
//     console.log(num);
//    setTimeout(function() {
//       timer(num + 1);
      
//     }, (num + 1) * 1000);
// }


// timer(0);
