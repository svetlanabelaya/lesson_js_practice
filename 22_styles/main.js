////////////////Стилизация через атрибут style в JavaScript/////////////////

/*
<div id="elem">
	text
</div>
*/
// let elem = document.querySelector('#elem');
// elem.style.color = 'blue';
// console.log(elem.style.color);

/////////////Единицы измерения в атрибуте style в JavaScript////////////////

/*
 При указании значений свойств через атрибут style мы должны указывать единицы измерения:
elem.style.width = '100px';

При чтении значений они также будут получаться с единицами измерений:
let width = elem.style.width;
console.log(width); // выведет '100px';

При необходимости мы можем избавиться от единиц измерения с помощью parseInt:
let width = elem.style.width;
console.log(parseInt(width)); // выведет 100

Если предполагаются дробные значения, можно воспользоваться функцией parseFloat:
let width = elem.style.width;
console.log(parseFloat(width));

*/

/*
Дан див и кнопка. По нажатию на кнопку задайте диву ширину в 400px, а высоту в 300px. 


   <div id="elem">
	  text
   </div>
   <button id="btn">кнопка</button>
*/
// let elem = document.querySelector('#elem');
// let btn = document.querySelector('#btn');

// btn.addEventListener('click', function() {
//    elem.style.width = '400px';
//    elem.style.height = '300px';
//    elem.style.border = '1px solid blue';
// });


/*
 Дан див:
<div id="elem" style="width: 300px; height: 200px;">
	text
</div>
<button id="btn">кнопка</button>

Дана также кнопка. По клику на кнопку выведите ширину и высоту дива без единиц измерения. 
*/
// let elem = document.querySelector('#elem');
// let btn = document.querySelector('#btn');
// btn.addEventListener('click', function() {
//    let width = elem.style.width;

//    console.log(parseInt(width));
// });

/*
 Дан див:
<div id="elem" style="font-size: 1.5em;">
	text
</div>

Дана также кнопка. По клику на кнопку выведите размер шрифта дива без единиц измерения. 
*/
// let elem = document.querySelector('#elem');
// let btn = document.querySelector('#btn');
// btn.addEventListener('click', function() {
//    let fontSize = elem.style.fontSize;

//    console.log(parseInt(fontSize));
// });




/////////////////Ошибки с единицами измерения в JavaScript////////////

/*
 Часто легко ошибиться и забыть про единицы измерения. Например, так:
let width = 100;
elem.style.width = width; // упс...

Правильно будет указать значение в пикселях:
let width = 100;
elem.style.width = width + 'px';

Представим себе, что мы хотим увеличить ширину на некоторое значение. Для этого нам сначала нужно прочитать ширину, затем извлечь число, прибавить к нему нужное значение, добавить 'px' и только потом записать обратно:
let widthPx = elem.style.width;
let widthNm = parseInt(widthPx);
elem.style.width = (widthNm + 30) + 'px';
*/

//Объясните, в чем ошибка в следующем коде: 
/*
<div style="font-size: 16px;">
	text
</div>
let elem = document.querySelector('div');
elem.style.fontSize = elem.style.fontSize + 2;
*/
// let elem = document.querySelector('div');
// //сначала нужно прочитать размер шрифта
// let sizFont = elem.style.fontSize;
// //затем извлечь число
// let sizFontNum = parseInt(sizFont);
// //прибавить к нему нужное значение, добавить 'px' и только потом записать обратно
// elem.style.fontSize =(sizFontNum + 2) + 'px';



// let elem = document.querySelector('div');
// let fontSiz = elem.style.fontSize;
// let numSize = parseInt(fontSiz);
// elem.style.fontSize = (numSize + 20) + 'px';


/*
 Объясните, в чем ошибка в следующем коде:
<div style="font-size: 2.5em;">
	text
</div>
let elem = document.querySelector('div');
elem.style.fontSize = parseInt(elem.style.fontSize) + 2 + 'em';
*/
// let elem = document.querySelector('div');
// let fontSiz = elem.style.fontSize;
// let fontNum = parseFloat(fontSiz);

// elem.style.fontSize = (fontNum + 2) + 'em';



/*
 Дан див:
   <div id="elem" style="width: 300px; height: 200px; border: 1px solid red;">
      text
   </div>
   <button id="btn">кнопка</button>

Дана также кнопка. По клику на кнопку увеличьте ширину и высоту дива на 50px. 
*/

// let elem = document.querySelector('#elem');
// let btn = document.querySelector('#btn');

// btn.addEventListener('click', function() {
//     //сначала нужно прочитать размер ширины и высоты
//    let width = elem.style.width;
//    let height = elem.style.height;

//    //извлечем число из ширины и высоты
//    let widthNum = parseInt(width);
//    let heightNum = parseInt(height);

//    //прибавить к ним нужное значение, добавить 'px' и только потом записать обратно
//    elem.style.width = (widthNum + 50) + 'px';
//    elem.style.height = (heightNum + 50) + 'px';
// });


/*
 Дан див:
<div id="elem" style="width: 300px; height: 200px; border: 1px solid red;">
	text
</div>
<button id="btn">кнопка</button>

Дана также кнопка. По клику на кнопку увеличьте ширину и высоту дива на 10%. 
*/

// let elem = document.querySelector('#elem');
// let btn = document.querySelector('#btn');
// btn.addEventListener('click', function() {
//    //Сначала прочитаем разьеры ширины и высоты
//    let width = elem.style.width;
//    let height = elem.style.height;

//    //Извлечем числа
//    let widthNum = parseInt(width);
//    let heightNum = parseInt(height);

//    //добавим к этим числам 10% после добавим px
//    elem.style.width = (widthNum + (widthNum / 100) * 10) + 'px';
//    elem.style.height = (heightNum + (heightNum /100) * 10) + 'px';
// });



/////////////Распаковка значений CSS свойств в JavaScript////////////

/*
 При чтении атрибута style сокращенные CSS свойства распаковываются в свои полные свойства. Давайте посмотрим, что имеется ввиду. Пусть у нас задан отступ для всех сторон:
elem.style.margin = '20px';

Выведем его:
console.log(elem.style.margin); // выведет '20px';

При этом чтение свойств для отдельных сторон также будет доступно:
console.log(elem.style.marginLeft); // выведет '20px';
*/

/*
 Дан див:
<div id="elem" style="width: 300px; height: 200px; border: 1px solid red;">
	text
</div>
   <button id="btn">кнопка</button>


Дана также кнопка. По клику на кнопку выведите толщину границы, ее тип и цвет. 
*/
// let elem = document.querySelector('#elem');
// let btn = document.querySelector('#btn');
// btn.addEventListener('click', () => {
//    console.log(elem.style.border);
// });



///////////Сброс стилей через style в JavaScript////////////////

/*
 Пусть мы по некоторому событию решили скрыть элемент:
elem.style.display = 'none';

Пусть теперь мы решили показать его обратно. Это значит, что свойству display нужно вернуть его исходное значение. Например, так:
elem.style.display = 'block';

Проблема в том, что это не удобно. Ведь исходное значение не обязательно было именно block. Оно могло быть и flex, и inline-block, и чем-то еще. Оно могло быть задано нами в CSS файле, а могло браться браузером по умолчанию. Отслеживать правильное значение сложно.

К счастью, есть способ легко вернуть исходное значение свойства обратно. Просто нужно в качестве значения свойства присвоить ему пустую строку:
elem.style.display = '';

*/

/*
Дан див и две кнопки. По клику на первую кнопку спрячьте див, а по клику на вторую - покажите.

   <div></div>
   <button id="btn_1">спрятать</button>
   <button id="btn_2">показать</button>
*/

// let div = document.querySelector('div');
// let btn_1 = document.querySelector('#btn_1');
// let btn_2 = document.querySelector('#btn_2');


// btn_1.addEventListener('click', function()  {
//    div.style.display = 'none';
// });
// btn_2.addEventListener('click', function() {
//    div.style.display = '';
// });

/*
Дан див и две кнопки. По клику на первую кнопку покрасьте цвет дива в красный цвет, а по клику на вторую - верните исходный цвет. 

<div></div>
   <button id="btn_1">покрасить</button>
   <button id="btn_2">убрать цвет</button>
*/
// let div = document.querySelector('div');
// let btn_1 = document.querySelector('#btn_1');
// let btn_2 = document.querySelector('#btn_2');

// btn_1.addEventListener('click', function()  {
  
//    div.style.background = 'blue';
// });
// btn_2.addEventListener('click', function() {
//    div.style.background = '';
// });



//////////////Массовая установка стилей в JavaScript////////////////

/*
 Можно задать сразу несколько стилей одной командой. Это делается с помощью свойства cssText:
elem.style.cssText = `
	width: 100px;
	height: 100px;
	display: block;
`;

Это свойство редко используется, потому что такое присваивание удаляет все существующие стили: оно не добавляет, а заменяет их. Можно случайно удалить что-то нужное. Но его можно использовать, к примеру, для новых элементов, когда мы точно знаем, что не удалим существующий стиль. 
*/

/*
 Перепишите код через изученное свойство:
elem.style.width  = '100px';
elem.style.height = '100px';
elem.style.margin = '10px auto';
elem.style.color  = 'red';

*/
// let div = document.querySelector('div');

// div.style.cssText = `
//    width: 300px;
//    height: 300px;
//    margin: 10px auto;
//    color: blue;
// `


///////////////////Проблемы чтения стилей в JavaScript////////////

/*
 Через свойство style можно прочитать только стили, заданные через атрибут style. Это значит, что стили заданные в CSS файле, прочитать нельзя.

Давайте посмотрим на примере. Пусть у нас есть следующий элемент:
<div id="elem">
	text
</div>

Пусть в CSS файле для него задаются следующие стили:
#elem {
	color: red;
}

Получим ссылку на элемент в переменную:
let elem = document.querySelector('#elem');

Попробуем прочитать значение стиля:
console.log(elem.style.color); // выведет ''
*/



///////////////Чтение свойств из CSS файлов в JavaScript/////////////

/*
 Свойства, заданные в CSS файле, можно прочитать с помощью специальной функции getComputedStyles.

Давайте посмотрим, как это делается. Пусть у нас есть следующий элемент:
<div id="elem">
	text
</div>

Пусть для этого элемента заданы следующие стили:
#elem {
	width: 100px;
	color: red;
	font-size: 20px;
}

Получим ссылку на элемент в переменную:
let elem = document.querySelector('#elem');

Теперь передадим ссылку на полученный элемент в качестве параметра функции getComputedStyles:
 let computedStyle = getComputedStyle(elem);

В результате мы получим объект, содержащий значения CSS свойств для нашего элемента. Давайте с его помощью прочитаем, например, цвет:
console.log(computedStyle.color); // выведет 'red'

А теперь ширину:
console.log(computedStyle.width); // выведет '100px'

А теперь размер шрифта:
console.log(computedStyle.fontSize); // выведет '20px'
*/


/*
 <div id="elem">
      
</div>
 Для элемента заданы следующие стили:
#elem {
	width: 200px;
	height: 200px;
}
<button id="btn">убрать цвет</button>

По клику на кнопку выведите ширину и высоту элемента. 
*/

// let elem = document.querySelector('#elem');
// let btn = document.querySelector('#btn');

// btn.addEventListener('click',function() {
//    let computedStyle = getComputedStyle(elem);
//    console.log('Ширина: ' + computedStyle.width);
//    console.log('Высота: ' + computedStyle.height);
// });




/*
   <div id="elem">
      
   </div>
   <button id="btn">click</button>

 Для элемента заданы следующие стили:
#elem {
	width: 200px;
	height: 200px;
}

По клику на кнопку увеличьте ширину и высоту элемента в два раза. 
*/

// let elem = document.querySelector('#elem');
// let btn = document.querySelector('#btn');

// btn.addEventListener('click',function() {
//    let computedStyle = getComputedStyle(elem);
   
//    let width = parseInt(computedStyle.width);
//    let height = parseInt(computedStyle.height);

//    elem.style.width = (width * 2) + 'px';
//    elem.style.height = (height * 2) + 'px';
// });



/////////Преобразование прочитанных значений в JavaScript//////////

/*
 Функция getComputedStyles не получает именно те значения, которые были заданы в CSS. Она преобразует их в абсолютные значения, обычно в пиксели.

Давайте посмотрим на примере. Пусть у нас задана ширина в процентах:
#elem {
	width: 100%;
}

Однако при чтении ширины мы получим значение не в процентах, а в пикселях:
console.log(computedStyle.width); // значение в px
*/

/*
   <p id="elem">
      text text text
   </p>
   <button id="btn">click</button>

 Для элемента заданы следующие стили:
#elem {
	font-size: 2em;
}

По клику на кнопку выведите размер шрифта элемента. 
*/
// let elem = document.querySelector('#elem');
// let btn = document.querySelector('#btn');

// btn.addEventListener('click',function() {

//    let computedStyle = getComputedStyle(elem);
//    console.log(computedStyle.fontSize)
// });


//////////////Стилизация классами в JavaScript///////////////

/*
 Стилизовать элементы через атрибут style иногда удобно, но чаще всего - не самая удачная идея. Проблема в том, что стили будут разбросаны по JavaScript файлу и их трудоемко будет изменять. Гораздо удобнее задавать стили в CSS файлах, чтобы их легко можно было изменять, не копаясь в JavaScript коде.

Пусть для примера у нас есть элемент, выводящий некоторое сообщение. Сообщение может быть "хорошим" и выводиться зеленым цветом и "плохим" и выводиться красным цветом. Лучшим решением в таком случае будет сделать для этого соответствующие CSS классы:
.success {
	color: green;
}
.error {
	color: red;
}

Теперь при выводе "хорошего" сообщения мы будем давать элементу "хороший" класс:
elem.textContent = 'good';
elem.classList.add('success');

А при выводе "плохого" сообщения мы будем давать элементу "плохой" класс:
elem.textContent = 'bad';
elem.classList.add('error');

*/

/*

   <p>1</p>
   <p>2</p>
   <p>3</p>
   <p>4</p>
   <p>5</p>
   <p>6</p>
   <p>7</p>
   <p>8</p>
   <p>9</p>

Даны абзацы с числами. Переберите эти абзацы циклом и абзацы, содержащие четные числа, покарасьте в красный цвет, а содержащие нечетные - в зеленый. 
*/
// let elems = document.querySelectorAll('p');

// for(let elem of elems) {
//    if(Number(elem.textContent) % 2 === 0) {
//       elem.classList.add('redColor');
//    } else {
//       elem.classList.add('greenColor');
//    }
// }


/////////////Один класс для стилизации в JavaScript////////////////

/*
 Пусть у нас есть два класса, которые мы даем элементу в зависимости от его состояния:
div.active {
	color: red;
}
div.passive {
	color: black;
}

На самом деле наличие двух классов здесь может мешать. В этом случае мы можем переписать стили следующим образом через селектор :not:
div.active {
	color: red;
}
div:not(active) {
	color: black;
}

В этом случае мы сможем удобным образом тогглить наш класс, делая элемент активным или неактивным:
elem.classList.toggle('active');

*/

/*
Даны абзацы. Сделайте так, чтобы каждый абзац по первому клику на него красился в красный цвет, а по второму клику - красился обратно в черный. 
*/

// let elems = document.querySelectorAll('p');

// for(let elem of elems) {
//    elem.addEventListener('click', function() {
//       elem.classList.toggle('active');
//    });
// }



/////////////Неудобство классов в JavaScript/////////////////

/*
 Пусть у нас есть несколько классов для стилизации сообщений:
.success {
	color: green;
}
.warning {
	color: orange;
}
.error {
	color: red;
}

Пусть в некотором элементе мы вывели успешное сообщение и назначили ему соотвестсвующий класс для успеха:
elem.classList.add('success');

Пусть теперь мы в этом же элементе вывели сообщение об ошибке и назначили ему соотвестсвующий класс для ошибки:
elem.classList.add('error');

В результате получится, что в элементе будет два конфликтующих друг с другом класса:
<div id="elem" class="success error">
	text
</div>

Получается, что перед добавлением нового класса, нам придется сначала удалить предыдущий:
elem.classList.remove('success');
elem.classList.add('error');

Это не очень удобно, так как мы можем не знать, какой именно был предыдущий класс и нам придется удалять все классы подряд:
elem.classList.remove('success');
elem.classList.remove('warning');
elem.classList.add('error');

*/

/*
Дан инпут. По потери фокуса проверьте, что в него введено не более 9-ти символов. Если это так, покрасьте границу инпута в зеленый цвет, а если не так - в красный. 

 <input id="elem" type="text">
*/

// let elem = document.querySelector('#elem');

// elem.addEventListener('blur', function() {
//    //Получим количество символов
//    let len = this.value.length;

//    if(len <= 9) {
//       this.classList.add('colgreen');
//       this.classList.remove('colred');
//    } else {
//       this.classList.remove('colgreen');
//       this.classList.add('colred');
//    }
// });



///////////Чередование стилей через data- атрибут в JavaScript////////

/*
 Для решения проблемы, описанной в предыдущем уроке, мы не будем задавать элементу классы, а будем менять значение data- атрибута. Это будет удобно тем, что такой атрибут может иметь только одно значение и при записи новое значение само будет затирать старое.

Для примера вот так мы зададим успешный стиль:
<div id="elem" data-type="success">
	text
</div>

А так стиль для ошибки:
<div id="elem" data-type="error">
	text
</div>

Стили наших состояний мы зададим через селекторы атрибутов:
[data-type="success"] {
	color: green;
}
[data-type="warning"] {
	color: orange;
}
[data-type="error"] {
	color: red;
}

Теперь мы легко можем покрасить наш элемент в успешный цвет:
elem.dataset.type = 'success';

А так мы покрасим в цвет ошибки:
elem.dataset.type = 'error';

*/

/*
Дан инпут. По потери фокуса проверьте введенное в него число. Если это число до десяти, то покрасьте инпут в зеленый цвет, если от десяти до двадцати - в желтый, а если более двадцати - в красный. 

 <input id="elem" type="text">
*/

// let elem = document.querySelector('#elem');

// elem.addEventListener('blur', function() {
//    if(Number(elem.value) < 10) {
//     elem.dataset.type = 'green';
//    }
//    if(Number(elem.value) >= 10 && Number(elem.value) <= 20) {
//       elem.dataset.type = "yellow";
//    }
//     if(Number(elem.value) > 20) {
//       elem.dataset.type = "red";
//    }
// });