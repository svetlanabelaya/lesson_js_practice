///////////////Стилизация//////////////////////////////////

//////////Стилизация элементов через атрибут style в JavaScript///

/*
Дан див и кнопка. По клику на кнопку добавьте диву ширину, высоту и границу.

   <div id="elem"></div>
   <button id="button">Кнопка</button>
*/

// let elem = document.querySelector('#elem');
// let button = document.querySelector('#button');
// button.addEventListener('click', function() {
//    elem.style.width = '800px';
//    elem.style.height = '300px';
//    elem.style.border = '1px solid blue';
// });

///////////////Стилизация свойств с дефисом в JavaScript///////////

/*
Свойства, которые записываются через дефис, например font-size, преобразуются в camelCase. To есть font-size станет fontSize:

elem.style.fontSize = '20px';
*/

/*
Дан див с текстом и кнопка. По клику на кнопку установите диву размер шрифта в 20px, а также верхнюю границу и фон.
*/

// let elem = document.querySelector('#elem');
// let button = document.querySelector('#button');
// button.addEventListener('click', function() {
//    elem.style.fontSize = '20px';
//    elem.style.borderTop = '5px solid blue';
//    elem.style.backgroundColor = 'green';

// });


//////////////Исключение при стилизации элементов в JavaScript/////

/*
Свойство float является исключением, так как оно является специальным в JavaScript. Для него следует писать cssFloat:
*/

/*
Дан список ul и кнопка. По клику на кнопку добавьте тегам li свойство float в значении left.


   <ul id="elem">
      <li id="item"></li>
      <li id="item"></li>
      <li id="item"></li>
   </ul>
   <button id="button">Кнопка</button>
*/

// let item = document.querySelectorAll('#item');
// let button = document.querySelector('#button');
// button.addEventListener('click', function() {
//    item.forEach(function(item) {
//       item.style.cssFloat = 'left';
//    });
// });


/////////Стилизация с помощью CSS классов на JavaScript////////

/*
Дан абзац. Даны кнопки 'перечеркнуть', 'сделать жирным', 'сделать красным'. Пусть по нажатию на каждую кнопку заданное действие происходит с абзацем (становится красным, например).


   <p class="elem">Lorem ipsum dolor sit amet.</p>
   <button id="button">перечеркнуть</button>
   <button id="button">сделать жирным</button>
   <button id="button">сделать красным</button>
*/

// let elem = document.querySelector('.elem');
// let button1 = document.querySelector('#button1');
// let button2 = document.querySelector('#button2');
// let button3 = document.querySelector('#button3');

// button1.addEventListener('click', function() {
//    elem.classList.add('lineth');
// });
// button2.addEventListener('click', function() {
//    elem.classList.add('bolder');
// });
// button3.addEventListener('click', function() {
//    elem.classList.add('colored');
// });


///Преимущество стилизации с помощью CSS классов в JavaScript///

/*
Модифицируйте предыдущую задачу так, чтобы повторное нажатие на кнопку отменяло действие этой кнопки.
*/

// let elem = document.querySelector('.elem');
// let button1 = document.querySelector('#button1');
// let button2 = document.querySelector('#button2');
// let button3 = document.querySelector('#button3');



// button1.addEventListener('click', function() {
//    elem.classList.toggle('lineth');
// });
// button2.addEventListener('click', function() {
//    elem.classList.toggle('bolder');
// });
// button3.addEventListener('click', function() {
//    elem.classList.toggle('colored');
// });


///////Применение cтилизации в JavaScript//////////////////////

/*
Давайте сделаем кнопку, по нажатию на которую элемент будет то показываться, то скрываться. Пусть по умолчанию элемент скрыт (это реализуем с помощью display: none), а покажется он с помощью добавления класса active. Этот класс будем то добавлять, то убирать с помощью classList.toggle:

<button id="button">click me</button>
<div id="elem"></div>
#elem {
	display: none;
	width: 200px;
	height: 200px;
	border: 1px solid green;
}
#elem.active {
	display: block;
}
let button = document.querySelector('#button');
let elem = document.querySelector('#elem');

button.addEventListener('click', function() {
	elem.classList.toggle('active');
});
*/