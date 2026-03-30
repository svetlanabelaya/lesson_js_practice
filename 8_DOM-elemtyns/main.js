//////////////////Фокус текстовых полей в JavaScript///////////////////

/*
cобытие focus позволяет отловить получение фокуса инпутом

событие blur - потерю
*/

//Дан инпут. По получению фокуса запишите в него число 1, а по потери фокуса - число 2.

// let elem = document.querySelector('.elem');

// elem.addEventListener('focus', function() {
//    console.log(1);
// });
// elem.addEventListener('blur', function() {
//    console.log(2);
// });

//Дан инпут. Пусть в него вводится число. По потери фокуса выведите на экран квадрат этого числа.

// let elem = document.querySelector('.elem');
// elem.addEventListener('blur', function() {
//    elem.value = elem.value ** 2;
// });


//Дан инпут, в котором изначально есть какой-то текст. По получению фокуса инпутом очистите содержимое этого инпута.

// let elem = document.querySelector('.elem');
// elem.addEventListener('focus', function() {
//    elem.value = '';
// });


/////////////Исключения при работе с атрибутами в JavaScript//////////////////

/*
При работе с атрибутами существует исключение - это атрибут class. Это слово является специальным в JavaScript и поэтому мы не можем просто написать elem.class, чтобы считать значение атрибута class. Вместо этого следует писать elem.className.

Существуют и другие исключения, например, атрибут for. К нему следует обращаться через htmlFor.
*/

/*
Дан див:

<div id="elem" class="content no-gap"></div>
Дана также кнопка. По нажатию на кнопку прочитайте и выведите на экран значение атрибута class нашего дива.
*/

// let elem = document.querySelector('#elem');
// let btn = document.querySelector('.btn');
// btn.addEventListener('click', function() {
//    console.log(elem.className);
// });


/*
Дан див:

<div id="elem"></div>
Дана также кнопка. По нажатию на кнопку запишите в атрибут class нашего дива какой-нибудь класс.
*/

// let elem = document.querySelector('#elem');
// let btn = document.querySelector('.btn');
// btn.addEventListener('click', function() {
//   elem.className = 'newClass'; //добавим новый класс элемерту див
// });


/*
Дан див с несколькими CSS классами, записанными через пробел:

<div id="elem" class="aaa bbb ccc"></div>
Дана также кнопка. По нажатию на кнопку получите массив CSS классов нашего дива.
*/

// let elem = document.querySelector('#elem');
// let btn = document.querySelector('.btn');
// btn.addEventListener('click', function() {
//   console.log([elem.className]);
// });




//////////////////Цепочки методов и свойств в JavaScript///////////////////


/*
Дан следующий код:

<img id="image" src="avatar.png">
let image = document.querySelector('#image');
console.log(image.src);
Переделайте приведенный выше код так, чтобы вместо введения переменной image использовалась цепочка.
*/
// console.log(document.querySelector('#image').src);




////Преимущества и недостатки цепочек в JavaScript////////

/*
Дан следующий код:

<img id="image" src="avatar.png" width="300" height="500">
console.log(document.querySelector('#image').src);
console.log(document.querySelector('#image').width);
console.log(document.querySelector('#image').height);
Укажите на недостатки данного кода. Исправьте их.
*/



//////////////Объект this в JavaScript////////////////////////////////////

/*
объект this, доступен в функции-обработчике события

Этот объект указывает на элемент, в котором произошло событие.

Объект this удобен, когда элемент, в котором произошло событие, и элемент, с которым совершаются действия в результате события, - это один и тот же элемент.
*/



/*
Дан инпут. По получению фокуса этим инпутом запишите в него число 1, а по потери фокуса - число 2. Для обращения у инпуту внутри функции-обработчика используйте объект this.
*/



// let elem = document.querySelector('.elem');
// elem.addEventListener('focus', func1);

// elem.addEventListener('blur', func2);


// function func1() {
//    this.value = '1';
// }
// function func2() {
//    this.value = '2';
// }


/*
   Дана кнопка, значением которой служит число 1. Сделайте так, чтобы по клику на эту кнопку ее значение каждый раз увеличивалось на единицу.

   <button class="elem" type="button">1</button>

*/

// let elem = document.querySelector('.elem');
// elem.addEventListener('click', func);

// function func() {
//    this.value = elem.textContent ++;
// }


////////////////Преимущество this в JavaScript/////////////////////////////////

/*
особое преимущество this? Оно проявляется, когда у нас несколько элементов, и к каждому привязана одна и та же функция.
*/


//Даны 5 абзацев с какими-то текстами. По клику на любой абзац запишите в конец его текста восклицательный знак.
/*
   <p class="text1">какойто текст</p>
   <p class="text2">какойто текст</p>
   <p class="text3">какойто текст</p>
   <p class="text4">какойто текст</p>
   <p class="text5">какойто текст</p>
*/

// let text1 = document.querySelector('.text1');
// let text2 = document.querySelector('.text2');
// let text3 = document.querySelector('.text3');
// let text4 = document.querySelector('.text4');
// let text5 = document.querySelector('.text5');

// text1.addEventListener('click', func);
// text2.addEventListener('click', func);
// text3.addEventListener('click', func);
// text4.addEventListener('click', func);
// text5.addEventListener('click', func);



// function func() {
//   this.textContent = this.textContent  + '!';
// }

/*
Даны 3 инпута, в которых записаны какие-то числа. По потери фокуса в любом из инпутов возведите стоящее в нем число в квадрат.
*/

// let elem1 =document.querySelector('.elem1');
// let elem2 =document.querySelector('.elem2');
// let elem3 =document.querySelector('.elem3');

// elem1.addEventListener('blur', func);
// elem2.addEventListener('blur', func);
// elem3.addEventListener('blur', func);


// function func() {
//    this.value = Number(this.value) ** 2;
// }



//////////////Получение группы элементов в JavaScript//////////////////
/*
существует метод querySelectorAll, получающий все теги, подпадающие под CSS селектор, в виде массива элементов. Чтобы сделать что-нибудь с найденными элементами, нужно поработать с полученным массивом, например, перебрать его циклом и в цикле выполнить какую-либо операцию с каждым элементом по отдельности.
*/


//Даны абзацы и кнопка. По нажатию на кнопку найдите все абзацы, переберите их циклом и установите текст каждого абзаца в значение 'text'.
/*

   <p class="paragrahp"></p>
   <p class="paragrahp"></p>
   <p class="paragrahp"></p>
   <p class="paragrahp"></p>
   <p class="paragrahp"></p>
   <button class="btn">кнопка</button>
*/
// let paragrahps = document.querySelectorAll('.paragrahp');
// let btn = document.querySelector('.btn');

// btn.addEventListener('click', function() {
//    for(let elem of paragrahps) {
//       elem.textContent = 'text';
//    }
// });


//Даны абзацы с текстом и кнопка. По нажатию на кнопку запишите в конец текста каждого абзаца его порядковый номер.

// let paragrahps = document.querySelectorAll('.paragrahp');
// let btn = document.querySelector('.btn');

// btn.addEventListener('click', function() {
//  for(let i = 0;  i < paragrahps.length;  i++) {
//    paragrahps[i].textContent = paragrahps[i].textContent + ( i + 1);
//  }
// });


//Даны инпуты с числами, абзац и кнопка. По нажатию на кнопку найдите сумму чисел из инпутов и запишите эту сумму в текст абзаца.

/*

   <input class="elem" type="number" value="1">
   <input class="elem" type="number" value="2">
   <input class="elem" type="number" value="3">
   <input class="elem" type="number" value="4">
   <input class="elem" type="number" value="5">
   <p class="text">abzac</p>
   <button class="btn">кнопка</button>
*/

// let elems = document.querySelectorAll('.elem');
// let text = document.querySelector('.text');
// let btn = document.querySelector('.btn');

// btn.addEventListener('click', function() {
//    let sum = 0;
//    for(let elem of elems) {
//      sum += Number(elem.value);
//    }
//    text.textContent = sum;
// });







//////////Добавление обработчиков в цикле в JavaScript//////////////////

/*
Дана следующая функция:

function func() {
	this.value = Number(this.value) + 1;
}
Даны также инпуты. Сделайте так, чтобы по потери фокуса в любом из наших инпутов выполнялась приведенная выше функция.
*/

// let elems = document.querySelectorAll('.elem');

// for(let elem of elems) {
//    elem.addEventListener('blur', func);
// }
// function func() {
// 	this.value = Number(this.value) + 1;
// }

//Даны абзацы с числами. Сделайте так, чтобы по клику на любой абзац его число в нем возводилось в квадрат.

/*

   <p class="num">2</p>
   <p class="num">5</p>
   <p class="num">10</p>
   <p class="num">55</p>
   <p class="num">3</p>
*/

// let elems = document.querySelectorAll('p');

// for(let elem of elems) {
//    elem.addEventListener('click', func);
// }
// function func() {
//    this.textContent = Number(this.textContent) ** 2;
// }


//////////////Добавление анонимных обработчиков в цикле в JavaScript////////

/*
Дан следующий код:

<div>1</div>
<div>2</div>
<div>3</div>
<div>4</div>
<div>5</div>
let divs = document.querySelectorAll('div');

for (let div of divs) {
	div.addEventListener('click', func);
}

function func() {
	this.textContent++;
}
Сделайте функцию-обработчик анонимной.
*/

// let divs = document.querySelectorAll('div');

// for (let div of divs) {
// 	div.addEventListener('click', function() {
//       console.log(Number(this.textContent++));
      
//    });
// }  



////////////Отвязывание событий в JavaScript////////////////////////////

//метод removeEventListener.
//метод первым параметром принимает тип события, а вторым - ссылку на функцию, которую нужно отвязать.
//this.removeEventListener('click', func) отвязывание


/*
Дана ссылка и кнопка. По нажатию на кнопку добавьте в конец текста ссылки содержимое ее атрибута href в круглых скобках. Сделайте так, чтобы это добавление происходило лишь по первому нажатию.

   <button class="btn">кнопка</button>
   <a href="http//www.code.mu" class="link">link</a>
*/
// let link = document.querySelector('.link');
// let btn = document.querySelector('.btn');

// btn.addEventListener('click', func);

// function func() {
//    link.textContent = link.textContent + ' - ' + link.href;
//    this.removeEventListener('click', func);
// }





///////////Отвязывание обработчиков событий в цикле в JavaScript/////////////

/*
Даны абзацы. По нажатию на любой из абзацев добавьте ему в конец восклицательный знак. Сделайте так, чтобы это добавление происходило лишь по первому нажатию.


<p>text1</p>
<p>text2</p>
<p>text3</p>
*/

// let elems = document.querySelectorAll('.text');

// for(let elem of elems) {
//    elem.addEventListener('click', func);
// }

// function func() {
//    this.textContent = this.textContent + '!';
//    this.removeEventListener('click', func);
// }



///////Отвязывание анонимных функций в JavaScript///////////////////

/*
Дан список ul, в каждом пункте которого записано число. Сделайте так, чтобы по клику на любую li ее число увеличивалось на единицу.


   <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
   </ul>
*/
// let elements = document.querySelectorAll('ul li');

// for(let element of elements) {
//      element.addEventListener('click', function func() {
//       this.textContent = Number(this.textContent) + 1;
//    });
// }


///Модифицируйте предыдущую задачу так, чтобы каждая li увеличивала свое значение только по первому нажатию на нее.

// for(let element of elements) {
//      element.addEventListener('click', function func() {
//       this.textContent = Number(this.textContent) + 1;
//       this.removeEventListener('click', func);
//    });
// }

//Модифицируйте предыдущую задачу так, чтобы каждая li увеличивала свое значение только если ее значение меньше 10.


// let elements = document.querySelectorAll('ul li');
// for(let element of elements) {
//      element.addEventListener('click', function func() {
//       if(Number(this.textContent) < 10) {
//          this.textContent = ++this.textContent;
//       } else {
//          this.removeEventListener('click', func);
//       }
//    });
// }


/*
Дан список с годами:

<ul>
	<li>2000</li>
	<li>2004</li>
	<li>2021</li>
	<li>2022</li>
	<li>2025</li>
	<li>2031</li>
</ul>
Получите года, сумма цифр которых равна 6. Найдите сумму полученных годов.
*/



// let items = document.querySelectorAll('li');
// let total = 0;

// for (let i = 0; i < items.length; i++) {
//     let year = items[i].textContent; // берем год как текст "2004"
//     let digitsSum = 0;

//     // Складываем цифры года
//     for (let char of year) {
//         digitsSum += Number(char);
//     }

//     // Если сумма подошла, прибавляем год к итогу
//     if (digitsSum === 6) {
//         total += Number(year);
//     }
// }

// console.log(total);



/////////////Поиск ошибок в коде с DOM в JavaScript/////////////////////////

// let elems = document.querySelectorAll('p');
//    for(let elem of elems) {
//       elem.textContent += '!';
// }


// let elems = document.querySelectorAll('p');

// for (let elem of elems) {
// 	elem.addEventListener('click', function() {
// 		this.textContent = Number(++this.textContent);
// 	});
// }

// let button = document.querySelector('button');
// let elem   = document.querySelector('p');

// button.addEventListener('click', function() {
//    elem.innerHTML = '<b>' + elem.textContent + '</b>';
// });

//По клику на кнопку должна вывестись сумма чисел из абзацев:

// let button = document.querySelector('button');
// let elems  = document.querySelectorAll('p');

// button.addEventListener('click', function() {
// 	let sum = 0;
	
// 	for (let elem of elems) {
// 		sum += Number(elem.textContent);
// 	}
	
// 	console.log(sum);
// });

//По клику на абзац ему в конец должен добавиться заданный текст:

// let elems = document.querySelectorAll('p');

// for (let elem of elems) {
// 	elem.addEventListener('click', function() {
// 		this.textContent += '!';
// 	});
// }

//По клику на кнопку текст каждого абзаца должен стать жирным:

// let button = document.querySelector('button');
// let elems  = document.querySelectorAll('p');

// button.addEventListener('click', function() {
// 	for (let elem of elems) {
// 		elem.innerHTML = '<b>' + elem.textContent + '</b>';
// 	}
// });

//По клику на кнопку в консоль должна вывестись сумма чисел из абзацев:

// let button = document.querySelector('button');
// let elems = document.querySelectorAll('p');
// let sum = 0;

//   button.addEventListener('click', function() {
//    sum = 0;

      
//    for(let elem of elems) {
//       sum += Number(elem.textContent);
//    }
   
//    console.log(sum);
//   });

//В инпуты вводятся числа. По клику на кнопку в консоль должна вывестись сумма чисел из инпутов:

// let button = document.querySelector('button');
// let elems  = document.querySelectorAll('input');
// let sum = 0;



// button.addEventListener('click', function() {
//    for (let elem of elems) {
// 	sum += Number(elem.value);
//    }
// 	console.log(sum);
// });


///В первые два инпута вводятся числа. По клику на кнопку в третий инпут должна вывестись сумма этих чисел:

// let btn  = document.querySelector('#btn');
// let inp1 = document.querySelector('#inp1');
// let inp2 = document.querySelector('#inp2');
// let inp3 = document.querySelector('#inp3');

// btn.addEventListener('click', function() {
// 	inp3.value = Number(inp1.value) + Number(inp2.value);
// });

//В первые два инпута вводятся числа. По клику на кнопку в абзац должна вывестись сумма этих чисел:

// let btn  = document.querySelector('#btn');
// let res  = document.querySelector('#res');
// let inp1 = document.querySelector('#inp1');
// let inp2 = document.querySelector('#inp2');

// btn.addEventListener('click', function() {
// 	res.textContent = Number(inp1.value) + Number(inp2.value);
// });















//не знаю как  решать
// //По клику на кнопку нужно проверить, что текст в каждом инпуте совпадает с текстом его data атрибута:

// let inputs = document.querySelectorAll('input')
// let btn = document.querySelector('#btn')

// btn.addEventListener('click',function() {
// 	for (let input of inputs) {
// 		if (input.value === input.dataset.text) {
// 			input.classList.add('right');
// 		} else {
// 			input.classList.add('wrong');
// 		}
// 	}
// });


//////////Поиск ошибок в коде с DOM в JavaScript


//////////////Отработка изученного материала на работу с DOM/////
