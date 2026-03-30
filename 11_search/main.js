//////// Поиск //////////////////////////////////////////////

//////////Нахождение потомков элементов в JavaScript///////////////

//Свойство firstElementChild///////////////////////////////////////

/*
Свойство firstElementChild содержит первый дочерний элемент. Дочерними элементами считаются все теги, которые непосредственно расположены внутри блока. Если у элемента нет дочерних элементов - возвращается null.


//Свойство lastElementChild/////////////////////////////////

Свойство lastElementChild хранит в себе последний дочерний элемент. Дочерними элементами считаются все теги, которые непосредственно расположены внутри блока. Если у элемента нет дочерних элементов - возвращается null.


///Свойство children///////////////////////////////////////

Свойство children хранит в себе псевдомассив дочерних элементов. Дочерними элементами считаются все теги, которые непосредственно расположены внутри блока.
*/



/*
Дан элемент #elem:

<ul id="elem">
	<li>text</li>
	<li>text</li>
	<li>text</li>
	<li>text</li>
	<li>text</li>
</ul>
Найдите первого потомка этого элемента и сделайте его текст красного цвета.
*/

// let elem = document.querySelector('#elem');
// let textColored = elem.firstElementChild.classList.add('colored');


/*
Дан элемент #elem:

<ul id="elem">
	<li>text</li>
	<li>text</li>
	<li>text</li>
	<li>text</li>
	<li>text</li>
</ul>
Найдите последнего потомка этого элемента и сделайте его текст красного цвета.
*/

// let elem = document.querySelector('#elem');
// let coloR = elem.lastElementChild.classList.add('red');

/*
Дан элемент #elem:

<ul id="elem">
	<li>text</li>
	<li>text</li>
	<li>text</li>
	<li>text</li>
	<li>text</li>
</ul>
Найдите всех потомков этого элемента и добавьте им в конец текст '!'.
*/

// let elem = document.querySelector('#elem');
// let arrs = elem.children;

// for(let arr of arrs) {
//    arr.textContent += '!';
// }


//////////////////Нахождение родителей элементов в JavaScript/////

/////////Свойство parentElement

//Свойство parentElement содержит родительский элемент.





/*
Дан элемент #elem:

<div>
	<ul>
		<li>text</li>
		<li>text</li>
		<li id="elem">text</li>
		<li>text</li>
		<li>text</li>
	</ul>
</div>
Найдите его родителя и задайте ему красную границу.
*/

// let elem = document.querySelector('#elem');
// elem.parentElement.classList.add('border-red');



//////////Поиск всех родителей элементов в JavaScript///////


/////////////Метод closest//////////////////////////////////
/*
Метод closest ищет ближайший родительский элемент, подходящий под указанный CSS селектор, при этом сам элемент тоже включается в поиск.
*/

/*
Дан элемент:

<header>
	<div>
		<p>
			<span id="elem"></span>
		</p>
	</div>
</header>
Найдите ближайшего родителя этого элемента, являющегося тегом div.
*/

// let elem = document.querySelector('#elem');
// let parent = elem.closest('div');
// console.log(parent);

/*
Дан элемент:

<header>
	<div class="www">
		<p class="www">
			<span id="elem"></span>
		</p>
	</div>
</header>
Найдите ближайшего родителя этого элемента, являющегося элементом с классом www.
*/

// let elem = document.querySelector('#elem');
// let parent = elem.closest('.www');
// console.log(parent);



/////Поиск соседей элементов в JavaScript////////////////////////

//////////Свойство previousElementSibling/////////////////

/*
Свойство previousElementSibling содержит предыдущий элемент, находящийся в этом же родителе. Если такого элемента нет - возвращается null.
*/

////////////Свойство nextElementSibling////////////////////////
/*
Свойство nextElementSibling содержит следующий элемент, находящийся в этом же родителе. Если такого элемента нет - возвращается null.
*/

/*
Дан элемент #elem:

<ul>
	<li>text</li>
	<li>text</li>
	<li id="elem">text</li>
	<li>text</li>
	<li>text</li>
</ul>
Найдите его соседа сверху и добавьте ему в конец текст '!'.
*/

// let elem = document.querySelector('#elem');
// let text = elem.previousElementSibling.textContent + 'new text';
// console.log(text);

/*
Дан элемент #elem:

<ul>
	<li>text</li>
	<li>text</li>
	<li id="elem">text</li>
	<li>text</li>
	<li>text</li>
</ul>
Найдите его соседа снизу и добавьте ему в конец текст '!'.
*/

// let elem = document.querySelector('#elem');
// let text = elem.nextElementSibling.textContent =+ '!';
// console.log(text); 

/*
Дан элемент #elem:

<ul>
	<li>text</li>
	<li>text</li>
	<li id="elem">text</li>
	<li>text</li>
	<li>text</li>
</ul>
Найдите его соседа снизу его соседа снизу (следующий элемент за соседним) и добавьте ему в конец текст '!'.

*/
// let elem = document.querySelector('#elem');
// let text = elem.nextElementSibling.nextElementSibling.textContent += '!';
// console.log(text);

/*
Дан элемент #elem:

<ul>
	<li>text1</li>
	<li>text2</li>
	<li id="elem">text3</li>
	<li>text4</li>
	<li>text5</li>
</ul>
Поменяйте местами текст его соседа сверху и текст его соседа снизу.
*/

// let elem = document.querySelector('#elem');
// let textPrevious = elem.previousElementSibling;
// let textNext = elem.nextElementSibling;

// let timeVariable = textPrevious.textContent; //временная переменная
// textPrevious.textContent = textNext.textContent;
// textNext.textContent = timeVariable;




///////////////////Поиск элемента по id в JavaScript////////////

/*
Дан элемент #elem:

<div id="elem"></div>
Получите этот элемент с помощью метода getElementById и установите ему какой-нибудь текст.
*/

// let elem = document.getElementById('elem');
// elem.textContent = 'какой тотекст';


/////////Поиск элемента по имени тега в JavaScript///////////////

///////Метод getElementsByTagName///////////////////////////////


/*
Метод getElementsByTagName позволяет получить элементы страницы по имени тега. С полученными элементами можно производить различные манипуляции: менять их текст, атрибуты, CSS стили и так далее.
*/

/*
Дан список:

<ul>
	<li>text</li>
	<li>text</li>
	<li>text</li>
	<li>text</li>
	<li>text</li>
</ul>
Получите все теги li по имени тега и сделайте их текст красного цвета.
*/
// let elems = document.getElementsByTagName('li');

// for(let elem of elems) {
//    elem.classList.add('color-blue');
// }


////Поиск элемента по имени класса в JavaScript//////////////////

/*
Метод getElementsByClassName позволяет получить элементы страницы по их классу, заданному в атрибуте class. С полученными элементами можно будет производить различные манипуляции: менять их текст, атрибуты, CSS стили и так далее.
*/

/*
Даны элементы:

<p class="www">elem 1</p>
<p class="www">elem 2</p>
<p class="www">elem 3</p>
Получите эти элементы по имени класса и сделайте их текст красного цвета.
*/
// let elems = document.getElementsByClassName('www');

// for(let elem of elems) {
//    elem.classList.add('color-blue');
// }




///////Поиск элементов внутри другого элемента в JavaScript//////

/*
Дан элемент #parent:

<div id="parent">
	<p class="www">text</p>
	<p class="www">text</p>
	<p class="www">text</p>
	<p class="ggg">text</p>
	<p class="ggg">text</p>
	<p class="ggg">text</p>
</div>

let parent = document.querySelector('#parent');

Найдите внутри родителя элементы с классом www и запишите их в переменную elems1. Затем найдите внутри родителя элементы с классом ggg и запишите их в переменную elems2.
*/

// let parent = document.querySelector('#parent');
// let elems1 = parent.querySelectorAll('.www');
// let elems2 = parent.querySelectorAll('.ggg');

// console.log(elems2);




