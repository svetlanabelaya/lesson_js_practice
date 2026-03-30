////////////Получение атрибутов в JavaScript///////////////////////

/////////Метод getAttribute/////////////////////////////////////

/*
Метод getAttribute считывает значение заданного атрибута у тега.


Давайте выведем содержимое атрибута value элемента:

<input id="elem" value="abcde">
let elem = document.querySelector('#elem');
let value = elem.getAttribute('value');

console.log(value);
Результат выполнения кода:

'abcde'
*/


/*
Дан элемент:

<input id="elem" value="text">
Получите значение его атрибута value.

*/

// let elem = document.querySelector('#elem');
// let value = elem.getAttribute('value');

//////////////////////////////////////////////
// Дан элемент:

// <input id="elem" class="www zzz">
//Получите значение его атрибута class.

// let elem = document.querySelector('#elem');
// let className = elem.getAttribute('className');

// console.log(elem.className);


/////////////////////Установка атрибутов в JavaScript////////////

///////Метод setAttribute///////////////////////
/*
Метод setAttribute позволяет изменить значение заданного атрибута какого-либо тега.
*/

/*
Давайте элементу поменяем значение атрибута value:

<input id="elem" value="abcde">
let elem = document.querySelector('#elem');
elem.setAttribute('value', '!!!');
HTML код станет выглядеть так:

<input id="elem" value="!!!">
*/



/*
Дан элемент:

<input id="elem">
Установите его атрибут value в значение 'text'.
*/

// let elem = document.querySelector('#elem');
//   elem.setAttribute('value', 'text');


/*
Дан элемент:

<input id="elem">
Установите ему атрибут class в значение 'valid'.
*/

// let elem = document.querySelector('#elem');
// elem.setAttribute('class', 'valid');


///////////////Удаление атрибутов в JavaScript//////////////////

//////////////Метод removeAttribute//////////////////////

/////////Метод removeAttribute удаляет заданный атрибут у какого-либо тега.

/*
Давайте для элемента удалим атрибут value:

<input id="elem" value="abcde">
let elem = document.querySelector('#elem');
elem.removeAttribute('value');
HTML код станет выглядеть так (исчезнет атрибут value):

<input id="elem">
*/

/*
Дан элемент:

<input id="elem" value="text">
Удалите у него атрибут value.
*/

// let elem = document.querySelector('#elem');
// elem.removeAttribute('value');


/////////////////Проверка наличия атрибутов в JavaScript/////////

//////Метод hasAttribute//////////////////////////////

/*
Метод hasAttribute проверяет наличие заданного атрибута у элемента. Если атрибут есть - выведет true, если нет - выведет false.
*/


/*
Дан элемент:

<input id="elem" value="text">
Проверьте наличие у него атрибута value.v
*/
// let elem = document.querySelector('#elem');
// console.log(elem.hasAttribute('value'));




/*
<input type="number"></input>
<button id="elem">Оценить</button>
<div id="res"></div>
*/
// let elem = document.querySelector('#elem');
// let res = document.querySelector('#res');
// let input  = document.querySelector('input');

// elem.addEventListener('click', function() {
   //     res.textContent = res.textContent + input.value * 5000;
   // });
   
   
   
//////////////Пользовательские атрибуты в JavaScript//////////
//10 марта 2026 года


/*
В HTML разрешено добавлять свои, пользовательские атрибуты тегам. Такие атрибуты должны начинаться с data-, а затем должно идти любое название атрибута, которое вам удобно.

Обращение к таким атрибутам устроено не стандартным образом. Нельзя просто обратиться к одноименному свойству элемента, как мы делали это раньше, а следует использовать специальное свойство dataset, после которого через точку пишется имя атрибута без data-. Например, если наш атрибут называется data-test, то для обращения к нему мы будем писать elem.dataset.test, где elem - переменная с нашим элементом.
*/

/*
Дан следующий код:

<div id="elem" data-text="str">text</div>
Сделайте так, чтобы по клику на див в конец его текста добавилось содержимое его атрибута data-text.Дан следующий код:

*/

// let elem =document.querySelector('#elem');
// elem.addEventListener('click', function() {
//    elem.textContent = elem.textContent + '-' + 'elem.gataset.text';
// });

/*
Даны дивы, содержащие в атрибуте data-num свой порядковый номер:

<div data-num="1">text</div>
<div data-num="2">text</div>
<div data-num="3">text</div>
<div data-num="4">text</div>
<div data-num="5">text</div>
Сделайте так, чтобы по клику на любой из дивов ему в конец записывался его порядковый номер.
*/

// let elems = document.querySelectorAll('div');

// for(let elem of elems) {
//    elem.addEventListener('click', function func() {
//      this.textContent = this.textContent + this.dataset.num;
//      this.removeAttribute('click', func);
//    });
// }


/*
Дана кнопка. Сделайте так, чтобы эта кнопка считала количество кликов по ней, записывая их в какой-нибудь пользовательский атрибут. Пусть по клику на другую кнопку на экран выводится, сколько кликов было сделано по первой кнопке.

<button id="elem1" data-num="">кнопка1</button>
<button id="elem2">кнопка2</button>

*/
// let elem1 = document.querySelector('#elem1');
// let elem2 = document.querySelector('#elem2');
// let text = document.querySelector('p');
// let sum = 0;

// elem1.addEventListener('click', function() {
//    sum++;
//    this.dataset.num = sum; 
// });

// elem2.addEventListener('click', function() {
//   let currentVal = elem1.dataset.num || 0;  
//   text.textContent = text.textContent + ', ' + currentVal;
   
// });



/*
Дан инпут:

<input id="elem" data-length="5">
В этом инпуте в атрибуте data-length содержится количество символов, которое нужно ввести в инпут. Сделайте так, чтобы по потери фокуса, если количество введенных символов не совпадает с заданным, выводилось сообщение об этом.
*/

// let elem = document.querySelector('#elem');
// elem.addEventListener('blur', function() {
//    let num = Number(this.dataset.length);
//    let znach = elem.value.length;
//    if(znach === num) {
//       console.log('количество введеных символов совпадает');
//    } else {
//       console.log('количество введеных символов не совпадает');
//    }
// });

/*
Дан инпут:

<input id="elem" data-min="5" data-max="10">
В этом инпуте атрибуты data-min и data-max содержат диапазон. Сделайте так, чтобы по потери фокуса, если количество введенных символов не попадает в этот диапазон, выводилось сообщение об этом.
*/
// let elem = document.querySelector('#elem');

// elem.addEventListener('blur', function() {
//    let min = Number(this.dataset.min);
//    let max = Number(this.dataset.max);
//    let len = this.value.length;

//    if(len >= min && len <= max) {
//       console.log('количество введеных символов не выходит за диапазон');
//    } else {
//       console.log('количество введеных символов выходит за диапазон ');
//    }
// });




///////////Имена атрибутов с дефисами в JavaScript/////////////////

/*
Дан следующий код:

<div id="elem" data-product-price="1000" data-product-amount="5">
	товар яблоки
</div>
Сделайте так, чтобы по клику на див в конец его текста добавлялась стоимость покупки, равная цене, умноженной на количество.
*/

// let elem = document.querySelector('#elem');
// let originalText = elem.textContent;
// elem.addEventListener('click', function() {
//    let price = Number(this.dataset.productPrice); 
//    let amout = Number(this.dataset.productAmount); 
//    let pocupka = price * amout;

//    this.textContent = originalText + pocupka;
// });


///////Обращение к атрибутам через методы в JavaScript////////////

/*
К пользовательским атрибутам можно также обращаться с помощью методов типа getAttribute, в этом случае следует писать полное название атрибута:

<div id="elem" data-num="1000" data-my-num="2000"></div>
let elem = document.querySelector('#elem');

console.log(elem.getAttribute('data-num'));    // выведет 1000
console.log(elem.getAttribute('data-my-num')); // выведет 2000
*/

/*/////РЕШИ ЗАДАЧУ 11.03.2026 10:31ч
Даны абзацы. Переберите их циклом и каждому абзацу в атрибут data-num запишите порядковый номер этого абзаца. Используйте метод setAttribute.

<p id="elem" data-num="">text</p>
<p id="elem" data-num="">text</p>
<p id="elem" data-num="">text</p>
<p id="elem" data-num="">text</p>
<p id="elem" data-num="">text</p>
*/

// let elems = document.querySelectorAll('.elem');

// for (let i = 0; i < elems.length; i++) {
// let res = i + 1;
// elems[i].setAttribute('data-num', res);
// }

// let elems = document.querySelectorAll('.elem');

// // el — это сам абзац, а i — его индекс (автоматически!)
// elems.forEach((el, i) => {
//     el.setAttribute('data-num', i + 1);
// });




//////////Манипулирование массивом CSS классов в JavaScript/////

/////////////Свойство classList///////////////////////////////

/*
Свойство classList содержит псевдомассив CSS классов элемента, а также позволяет добавлять и удалять классы элемента, проверять наличие определенного класса среди классов элемента.

Речь идет об атрибуте class, внутри которого можно писать несколько классов через пробел, например www ggg zzz. С помощью classList можно удалить, к примеру, класс ggg, не затронув остальные классы.
*/

/*
Дан элемент:

<p id="elem" class="www ggg zzz"></p>
Узнайте количество его классов.
*/

// let elem = document.querySelector('#elem');
// let length = elem.classList.length;
// console.log(length);

/*
Дан элемент:

<p id="elem" class="www ggg zzz"></p>
Переберите в цикле его классы.
*/

// let elem = document.querySelector('#elem');
// let classNames = elem.classList;

// for(let className of classNames) {
//    console.log(className);
// }



//////////////Добавление CSS классов в JavaScript////////////////

/////////////////Метод add объекта classList//////////////////

//Метод add объекта classList позволяет добавлять CSS классы элементу. дубли классов не добавляются



/*
Дан элемент:

<p id="elem" class="www ggg zzz"></p>
Добавьте ему класс xxx.
*/

// let elem = document.querySelector('#elem');
// elem.classList.add('xxx');



/////////////////Удаление CSS классов в JavaScript/////////////////
/////////////Метод remove объекта classList////////////////

//Метод remove объекта classList удаляет заданный CSS класс элемента.


/*
Дан элемент:

<p id="elem" class="www ggg zzz"></p>
Удалите у него класс www и класс zzz.
*/
// let elem =document.querySelector('#elem');
// elem.classList.remove('www','zzz');


///////////////Проверка CSS классов в JavaScript//////////////

/////////////Метод contains объекта classList////////////////

//Метод contains объекта classList проверяет наличие CSS класса элемента.

/*
Дан элемент:

<p id="elem" class="www ggg zzz"></p>
Проверьте наличие у него класса ggg.
*/

// let elem = document.querySelector('#elem');

// let contains = elem.classList.contains('ggg55');
// console.log(contains);



//////////Чередование CSS классов в JavaScript//////////////////
//////////Метод toggle объекта classList////////////////////////

//Метод toggle объекта classList чередует заданный CSS класс элемента: добавляет класс, если его нет иудаляет, если есть.




/*
Дан элемент. Добавьте ему класс www, если его нет и удалите - если есть.
*/

// let elem = document.querySelector('#elem');
// elem.classList.toggle('zzz');