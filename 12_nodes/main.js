/////////////Узлы/////////////////////////////////////////////

////////////Работа с узлами в JavaScript/////////////////////


/*
Комментарии, тексты и DOM элементы объединяют одним названием - узлы.
Вам уже знакомы свойства firstElementChild, lastElementChild, nextElementSibling, previousElementSibling. Эти свойства работают именно с DOM элементами, игнорируя остальные узлы. Как правило, именно это нам и требуется.
Однако, существуют также свойства firstChild, lastChild, nextSibling, previousSibling. Эти свойства работают аналогичным образом, однако, учитывая все узлы. Давайте посмотрим разницу между этими свойствами на примере. 

*/

//Напишите код, который покажет разницу между lastChild и lastElementChild.
//<div id="elem">Lorem <span>dolor</span> dolor <!--sit--></div>

// let elem = document.querySelector('#elem');
// console.log(elem.lastChild);
// console.log(elem.lastElementChild);


//Напишите код, который покажет разницу между nextSibling и nextElementSibling.
/*

<ul id="parent">
	<li>text1</li>
	<li>text2</li>
	<li id="elem">text3</li>
	<li>text4</li>
	<li>text5</li>
</ul>
*/


// let elem = document.querySelector('#elem');
// console.log(elem.nextSibling);
// console.log(elem.nextElementSibling);

//Напишите код, который покажет разницу между previousSibling и previousElementSibling.

/*
<ul id="parent">
	<li>text1</li>
	<li>text2</li>
	<li id="elem">text3</li>
	<li>text4</li>
	<li>text5</li>
</ul>
*/


// let elem = document.querySelector('#elem');
// console.log(elem.previousSibling);
// console.log(elem.previousElementSibling);




///////////////Перебор узлов циклом в JavaScript////////////////

/*
Как вы уже должны знать, в свойстве children содержатся все DOM элементы, являющиеся непосредственными потомками данного элемента. Существует аналогичное свойство childNodes, которое содержит в себе все потомки-узлы элемента.
*/

/*
Дан див:

<div id="elem">txt<b>tag</b><!--com-->txt<b>tag</b><!--com--></div>
Переберите циклом все узлы этого дива и выведите их в консоль.
*/
// let elem = document.querySelector('#elem');
//       for(let node of elem.childNodes) {
//          if (node.nodeType == 1) {
//          console.log('Это тег: ' + node.nodeName);
//       } else if (node.nodeType == 3) {
//          console.log('Это текст или пробел');
//       }
//    console.log(node);
// }


//////////Название узлов в JavaScript//////////////////////

/*
Все узлы имеют свойство nodeName. Для комментария оно содержит значение 'comment', для текстового узла - значение 'text', а для узла-элемента - имя тега в верхнем регистре. Получается, что nodeName для элементов аналогичен свойству tagName, но работает также и для других типов узлов.
*/

/*
Дан див:

<div id="elem">txt<b>tag</b><!--com-->txt<b>tag</b><!--com--></div>
Переберите циклом все узлы этого дива и выведите в консоль их названия.
*/

// let elem = document.querySelector('#elem');

// for(let node of elem.childNodes) {
//   console.log(node.nodeName);
// }

// for (let node of elem.childNodes) {
//     if (node.nodeType == 3) {
//         console.log("Текст: " + node.nodeValue);
//     }
//     if (node.nodeName == 'B') {
//         console.log("Нашла жирный тег!");
//     }
// }


///////////////Тип узлов в JavaScript//////////////////////////////

/*
Дан див:

<div id="elem">txt<b>tag</b><!--com-->txt<b>tag</b><!--com--></div>
Переберите циклом все узлы этого дива и выведите в консоль только узлы-элементы и текстовые узлы.
*/


// for(let node of elem.childNodes) {
//    if(node.nodeType == 1) {
//       console.log('Узлы элементы: ', node.nodeName);
//    }
   
//    if(node.nodeType == 3) {
//       console.log('Текстовые узлы: ', node.nodeName);
//    }
// }


/////////////Текст узлов в JavaScript///////////////////////////

/*
   Давайте теперь разберемся, как прочитать или изменить текст узлов. Для всех узлов работает свойство textContent. Для текстовых узлов и комментариев есть свойства nodeValue и data (они практически одинаковые, второе - короче, лучше пользоваться им). Для элементов есть свойство innerHTML, прочитывающее текст вместе с тегами.
*/


/*
1
Дан див:

<div id="elem">txt<b>tag</b><!--com-->txt<b>tag</b><!--com--></div>
Переберите циклом все узлы этого дива и выведите в консоль тексты всех узлов.
*/
// let elem = document.querySelector('#elem');

// for(let node of elem.childNodes) {
//    console.log(node.textContent);
// }



/*
2
Дан див:

<div id="elem">txt<b>tag</b><!--com-->txt<b>tag</b><!--com--></div>
Переберите циклом все узлы этого дива и выведите в консоль тексты всех комментариев и текстовых узлов.
*/

// let elem = document.querySelector('#elem');

// for(let node of elem.childNodes) {
//   if(node.nodeType == 3 || node.nodeType == 8) {
//    console.log(node.textContent);
//   }
// }

/*
3
Дан див:

<div id="elem">txt<b>tag</b><!--com-->txt<b>tag</b><!--com--></div>
Переберите циклом все узлы этого дива и выведите в консоль тексты текстовых узлов и элементов.
*/
//let elem = document.querySelector('#elem');

// for(let node of elem.childNodes) {
//    if(node.nodeType == 1 || node.nodeType == 3) {
//       console.log(node.textContent);
//    }
// }

/*
4
Дан див:

<div id="elem">txt<b>tag</b><!--com-->txt<b>tag</b><!--com--></div>
Переберите циклом все узлы этого дива и каждому узлу в конец запишите его тип.
*/

// let elem = document.querySelector('#elem');

// for(let node of elem.childNodes) {
//    node.textContent += `(${node.nodeType})`;
// }
// console.log(elem.innerHTML);


