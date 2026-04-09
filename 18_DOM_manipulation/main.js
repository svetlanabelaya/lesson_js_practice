/////////////Манипулирование элементами//////////////////////

// const { createElement } = require("react");

// const { createElement } = require("react");

//////////Создание и вставка элементов на JavaScript/////////


/*
Сейчас мы научимся создавать новые DOM элементы через JavaScript, а затем добавлять их на страницу. Для этого предназначен метод createElement. Параметром этого метода следует передавать имя тега, который должен быть создан.

Если записать результат работы createElement в переменную, то в этой переменной будет такой элемент, как будто бы мы получили его через querySelector.

Единственное отличие - наш элемент не будет размещен на странице. А так мы можем менять ему текст, атрибуты, навешивать обработчики событий и в конце концов разместить его на странице.

Для размещения нового элемента на странице применяется метод appendChild. Этот метод следует применять к тому элементу, в который мы хотим поместить наш элемент. А параметром метода следует передавать наш новый элемент, созданный ранее через createElement.
*/

//Давайте создадим абзац, установим ему текст и поместим на страницу в конец блока #parent:

// let parent = document.querySelector('#parent');
// let p = document.createElement('p');

// p.textContent = '!';

// parent.appendChild(p);

/*
Дан ol:

<ol id="elem"></ol>
Вставьте ему в конец li с текстом 'item'.
*/

// let elem = document.querySelector('#elem');// ссылка на элемент ol

// let li = document.createElement('li');// создадим элемент ли списка ол
// li.textContent = 'item';// запишем текст в нашу созданную ли

// elem.appendChild(li);//размещение созданного ли на странице

/*
Дан ol и кнопка:

<ol id="elem"></ol>
<button id="button">click me</button>
Сделайте так, чтобы по клику на кнопку в конец списка добавлялся li с текстом 'item'.
*/

// let elem = document.querySelector('#elem');
// let button = document.querySelector('#button');

// button.addEventListener('click', function() {
//   let li = document.createElement('li');
//   li.textContent = 'item';

//   elem.appendChild(li);
// });





/////////////////Привязывание событий при вставке элементов////////////////////////////////

/*
Давайте теперь при вставке элементов будем привязывать к ним обработчики событий.

Пусть, к примеру, у нас есть вот такой родительский элемент:

<div id="parent">
	<p>1</p>
	<p>2</p>
	<p>3</p>
</div>
Давайте добавим в конец этого родителя еще один абзац, установив ему обработчик клика:

let parent = document.querySelector('#parent');

let p = document.createElement('p');
p.textContent = '!';

p.addEventListener('click', function() {
	console.log(this.textContent); // по клику выведем текст абзаца
});

parent.appendChild(p);
*/

/*
Дан ol и кнопка. Сделайте так, чтобы по клику на кнопку в конец ol добавлялся тег li. Сделайте так, чтобы по клику на любой из добавленных li в конец его текста записывался восклицательный знак.

<ol id="elem"></ol>
<button id="button">click me</button>
*/
// let elem = document.querySelector('#elem');
// let button = document.querySelector('#button');

// button.addEventListener('click', function() {
//   let li = document.createElement('li');
//   li.textContent = 'item';

//   li.addEventListener('click', function() {
//     li.textContent = li.textContent + '!';
//   });
//   elem.appendChild(li);
// });


////////////////////////Создание элементов в цикле на JavaScript///////////////////////

/*
В предыдущих уроках мы создавали по одному новому элементу. Давайте теперь сделаем так, чтобы новые элементы создавались в цикле.

Пусть для примера у нас есть вот такой див-родитель:

<div id="parent"></div>
Давайте запустим цикл, который добавит в конец нашего дива 9 новых абзацев:

let parent = document.querySelector('#parent');

for (let i = 1; i <= 9; i++) {
	let p = document.createElement('p');
	p.textContent = '!';
	
	parent.appendChild(p);
}
*/

/*
Дан пустой ul. Запустите цикл, который вставит в него 10 тегов li. Сделайте так, чтобы текстом каждой li был ее порядковый номер.

 <ul id="elem"></ul>
*/

    //  let elem = document.querySelector('#elem');

    //  for(let i = 1; i <= 9; i++) {
    //   let li = document.createElement('li');
    //   li.textContent = i + 1;

    //   elem.appendChild(li);
    //  }


    ////////////////////Навешивание обработчиков в цикле на JavaScript//////////////////

    /*
      Дан див. Запустите цикл, который добавит в наш див 5 инпутов. Пусть дан также абзац. Сделайте так, чтобы каждый из новых инпутов по потери фокуса записывал свой текст в абзац.

       <div id="elem"></div>
       <p id="text"></p>
    */

      // let elem = document.querySelector('#elem');
      // let text = document.querySelector('#text');

      // for(let i = 1; i <= 5; i++) {
      //   let input = document.createElement('input');
      //   input.value = 'item';

      //   input.addEventListener('blur', function() {
      //     text.textContent = this.value;
      //   });

      //   elem.appendChild(input);
      // }

      ////////////////////////Удаление элементов на JavaScript//////////////////////////
      /*
          Давайте теперь научимся удалять элементы. Для этого нужно использовать метод remove. Посмотрим на примере, как это делается. Пусть у нас есть абзацы:

          <p>elem 1</p>
          <p>elem 2</p>
          <p>elem 3</p>
          <p>elem 4</p>
          <p>elem 5</p>
          Давайте сделаем так, чтобы любой абзац удалялся по клику на нем:

          let elems = document.querySelectorAll('p');

          for (let elem of elems) {
            elem.addEventListener('click', function() {
              elem.remove();
            });
          }
      */

/*
Дан следующий код:

<ul>
	<li>1</li>
	<li>2</li>
	<li>3</li>
</ul>
Сделайте так, чтобы любая li удалялась по клику на нее.
*/

// let elems = document.querySelectorAll('ul li');

// for(let elem of elems) {
//   elem.addEventListener('click', function() {
//     elem.remove();
//   });
// }

/*
Дан следующий код:

<ul id="parent">
	<li>1</li>
	<li>2</li>
	<li>3</li>
</ul>

<input type="submit" id="button">
Сделайте так, чтобы по каждому клику на кнопку удалялся последний элемент из #parent.
*/

// let button = document.querySelector('#button');
// let parent = document.querySelector('#parent');

//     button.addEventListener('click', function() {
//       let lastChild = parent.lastElementChild;
//       if(lastChild) {
//         lastChild.remove();
//       }
//     });


////////////////////////Вставка элементов в начало или в конец на JavaScript///////////////////////

/*
Метод append
Метод append позволяет вставить в конец какого-либо элемента другой элемент. Параметром метод принимает элемент, как правило созданный через createElement, либо строку. Можно добавить сразу несколько элементов или строк, перечислив их через запятую.

Синтаксис
родитель.append(элемент или строка);


Метод prepend
Метод prepend позволяет вставить в начало какого-либо элемента другой элемент. Параметром метод принимает элемент, как правило созданный через createElement, либо строку. Можно добавить сразу несколько элементов или строк, перечислив их через запятую.

Синтаксис
родитель.prepend(элемент или строка);
*/


/*
Дан ul:

<ul id="elem">
	<li>text</li>
	<li>text</li>
	<li>text</li>
	<li>text</li>
	<li>text</li>
</ul>
Вставьте ему в начало элемент с текстом 'start', а в конец - элемент с текстом 'finish'.
*/

// let elem = document.querySelector('#elem');


// let li_1 = document.createElement('li');
// li_1.textContent = 'start';
// elem.prepend(li_1);



// let li_2 = document.createElement('li');
// li_2.textContent = 'finihs';
// elem.append(li_2);


////////////////////Вставка элементов перед элементами на JavaScript//////////////////

/*
Метод insertBefore
Метод insertBefore позволяет вставить элемент перед другим элементом. Чаще всего используется после создания элемента с помощью createElement. Метод применяется к родителю того элемента, перед которым произойдет вставка.

Синтаксис
родитель.insertBefore(элемент, перед кем вставить);
*/

/*
Дан элемент #elem:

<ul id="parent">
	<li>text</li>
	<li>text</li>
	<li id="elem">text</li>
	<li>text</li>
	<li>text</li>
</ul>
Вставьте перед этим элементом элемент с текстом 'new'.
*/

// let parent = document.querySelector('#parent');
// let elem = document.querySelector('#elem');

// let li = document.createElement('li');
// li.textContent = 'new';

// parent.insertBefore(li, elem);

//Модифицируйте предыдущую задачу так, чтобы клик на вставленный элемент приводил к тому, что в конец его текста будет добавляться '!'.

// let parent = document.querySelector('#parent');
// let elem = document.querySelector('#elem');

// let li = document.createElement('li');
// li.textContent = 'textNew';

// li.addEventListener('click', function() {
//   li.textContent += '!' ;
// });
// parent.insertBefore(li, elem);






/////////////////////Смежная вставка элементов на JavaScript//////////////////////////////

/*
Метод insertAdjacentElement
Метод insertAdjacentElement позволяет вставить элемент в любое место страницы. Чаще всего используется после создания элемента с помощью createElement. Код вставляется относительно опорного элемента. Можно сделать вставку перед опорным элементом (способ вставки beforeBegin), после него (способ вставки afterEnd), а также в начало (способ вставки afterBegin) или в конец (способ вставки beforeEnd) опорного элемента.

Синтаксис
опорный элемент.insertAdjacentElement(способ вставки, код для вставки);
*/

/*
Дан элемент:

<div id="elem" style="border: 1px solid red;">
	<p>text</p>
	<p>text</p>
	<p>text</p>
</div>
Вставьте перед ним абзац с текстом '!!!'.
*/

// let p = document.createElement('p');
// p.textContent = '!!!';

// let elem = document.querySelector('#elem');
// elem.insertAdjacentElement('beforeBegin', p);


/*
 Дан элемент:
<div id="elem" style="border: 1px solid red;">
	<p>text</p>
	<p>text</p>
	<p>text</p>
</div>

Вставьте после него абзац с текстом '!!!'. 
*/

// let p = document.createElement('p');
// p.textContent = '!!!';

// let elem = document.querySelector('#elem');
// elem.insertAdjacentElement('afterend', p);


/*
 Дан элемент:
<div id="elem" style="border: 1px solid red;">
	<p>text</p>
	<p>text</p>
	<p>text</p>
</div>

Вставьте ему в начало абзац с текстом '!!!'. 
*/
// let p = document.createElement('p');
// p.textContent = '!!!';

// let elem = document.querySelector('#elem');
// elem.insertAdjacentElement('afterBegin', p);


/*
 Дан элемент:
<div id="elem" style="border: 1px solid red;">
	<p>text</p>
	<p>text</p>
	<p>text</p>
</div>

Вставьте ему в конец абзац с текстом '!!!'. 
*/
// let p = document.createElement('p');
// p.textContent = '!!!';

// let elem = document.querySelector('#elem');
// elem.insertAdjacentElement('beforeEnd', p);


/////////////////////////Смежная вставка тегов на JavaScript/////////////////////////

//инсе́рт эдже́йсент 
/////////////////////////////Метод insertAdjacentHTML//////////////////////////////////
/*
Метод insertAdjacentHTML позволяет вставить строку HTML кода в любое место страницы. Код вставляется относительно опорного элемента. Можно сделать вставку перед опорным элементом (способ вставки 'beforeBegin'), после него (способ вставки 'afterEnd'), а также в начало (способ вставки 'afterBegin') или в конец (способ вставки 'beforeEnd') опорного элемента. 
*/

/*
 Дан элемент:
<div id="elem" style="border: 1px solid red;">
	<p>text</p>
	<p>text</p>
	<p>text</p>
</div>

Дан элемент. Вставьте перед ним следующий тег:
<div class="www"><p>text</p><p>text</p><input></div>
*/

// let elem = document.querySelector('#elem');
// elem.insertAdjacentHTML('beforeBegin', '<div class="www"><p>text</p><p>text</p><input></div>');

/*
<div id="target">
	<p>elem</p>
</div>
*/
// let target = document.querySelector('#target');
// target.insertAdjacentHTML('beforeEnd', '<p>!</p>');


////////////////////////Клонирование элементов на JavaScript//////////////////////////////////

/*
 В данном уроке мы научимся получать копии элементов. С этими копиями можно будет работать, как с обычными элементами - изменять их и вставлять в нужное место страницы. Процесс получения копий элементов называется клонирование.

Клонировать элемент можно с помощью метода cloneNode. В этот метод нужно передавать параметром true либо false. Если передан true, то элемент клонируется полностью, вместе со всем атрибутами и дочерними элементами, а если false - только сам элемент.

Давайте посмотрим на примере. Пусть у нас есть вот такой код:
<div id="parent">
	<div class="elem">
		<p>первый абзац</p>
		<p>второй абзац</p>
	</div>
</div>

Сделаем копию блока с классом elem и вставим его в конец блока #parent:
let parent = document.querySelector('#parent');
let elem = parent.querySelector('.elem');

let clone = elem.cloneNode(true);
parent.appendChild(clone);

В результате получится следующее:
<div id="parent">
	<div class="elem">
		<p>первый абзац</p>
		<p>второй абзац</p>
	</div>
	<div class="elem">
		<p>первый абзац</p>
		<p>второй абзац</p>
	</div>
</div>

*/

/*
Дан инпут. Дана кнопка. По нажатию на кнопку клонируйте этот инпут. 
*/




//////////////////////////////Проверка элементов в JavaScript///////////////////////////

/*

Метод matches

Метод matches позволяет проверить, удовлетворяет ли элемент указанному CSS селектору.
Синтаксис
элемент.matches('селектор');
Пример

Проверим, является ли наш элемент абзацем с классом www:
<p id="elem" class="www"></p>
let elem = document.querySelector('#elem');
console.log(elem.matches('p.www'));

Результат выполнения кода:
true

*/
/*

Метод contains

Метод contains позволяет проверить, содержит ли один элемент внутри себя другой. Параметром метода передается элемент, который будет проверяться на то, что он находится внутри элемента, к которому применился метод.
Синтаксис
родитель.contains(элемент);
Пример

Проверим, находится ли абзац #child в блоке #parent:
<div id="parent">
	<p id="child"></p>
</div>
let parent = document.querySelector('#parent');
let child = document.querySelector('#child');

let contains = parent.contains(child);
console.log(contains);

Результат выполнения кода:
true
Пример

А теперь в родителе нет переданного элемента и поэтому метод возвращает false:
<div id="parent"></div>
<p id="child"></p>
let parent = document.querySelector('#parent');
let child = document.querySelector('#child');

let contains = parent.contains(child);
console.log(contains);

Результат выполнения кода:
false
Пример

Можно передать тот же элемент, на котором метод был вызван, в этом случае метод также вернет true:
<div id="parent"></div>
let parent = document.querySelector('#parent');
let contains = parent.contains(parent);

console.log(contains);

Результат выполнения кода:
true

*/

/*
 Дан элемент:
<div id="elem" class="www"></div>

Проверьте, является ли этот элемент элементом с классом www. 
*/
// let elem = document.querySelector('#elem');
// console.log(elem.matches('div.www'));

/*
Дан элемент. Проверьте, является ли этот элемент абзацем. 
*/
// let elem = document.querySelector('#elem');
// console.log(elem.matches('p'));

/*
 Даны две переменные elem1 и elem2, содержащие два элемента:
<div id="elem1">
	<p id="elem2"></p>
</div>
let elem1 = document.querySelector('#elem1');
let elem2 = document.querySelector('#elem2');

Проверьте, является ли элемент из elem2 потомком элемента из elem1. 
*/
// let elem1 = document.querySelector('#elem1');
// let elem2 = document.querySelector('#elem2');

// let contains = elem1.contains(elem2);
// console.log(contains);