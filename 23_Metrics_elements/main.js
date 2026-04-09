//////////////////Метрики элементов/////////////////////////

///////Расширение элементов в CSS для JavaScript///////////////////

/*
Задание CSS свойств width и height не гарантирует того, что элемент станет заданного размера.
С точки зрения JavaScript описанная ситуация не очень удобна. Ведь получается, что прочитав значение свойства width мы совсем не можем быть уверенными в том, что элемент будет именно этой ширины. 
*/



//////////////Тестовый элемент в JavaScript//////////////////////////

// let elem = document.querySelector('#elem');




//////////////Клиентский размер элемента в JavaScript////////////////
/*
Следующие свойства содержат клиентский размер элемента, включающий в себя размер содержимого и внутреннего отступа, и не включающего в себя полосу прокрутки:
console.log(elem.clientWidth);  // ширина
console.log(elem.clientHeight); // высота
*/

//Дан элемент и кнопка. По нажатию на кнопку выведите в консоль клиентскую ширину и высоту элемента. 
/*
<div id="elem">
Далеко-далеко, за словесными горами в стране гласных и согласных живут рыбные тексты. Безопасную рукописи одна дороге пустился!
Далеко-далеко, за словесными горами в стране гласных и согласных живут рыбные тексты. Безопасную рукописи одна дороге пустился!
   Далеко-далеко, за словесными горами в стране гласных и согласных живут рыбные тексты. Безопасную рукописи одна дороге пустился!
   Далеко-далеко, за словесными горами в стране гласных и согласных живут рыбные тексты. Безопасную рукописи одна дороге пустился!
 </div>
 <button id="btn"></button>
 */


// let elem = document.querySelector('#elem');
// let btn = document.querySelector('#btn');

// btn.addEventListener('click', function() {
   //    console.log(elem.clientWidth);// не включает в себя полосупрокрутки
   //    console.log(elem.clientHeight);
// });




/////////////Полный размер элемента в JavaScript.///////////////////
/*
 Следующие свойства содержат полный размер элемента:
console.log(elem.offsetWidth);  // ширина
console.log(elem.offsetHeight); // высота
*/

//Дан элемент и кнопка. По нажатию на кнопку выведите в консоль полную ширину и высоту элемента. 
/*
<div id="elem">
   Далеко-далеко, за словесными горами в стране гласных и согласных живут рыбные тексты. Безопасную рукописи одна дороге пустился!
   Далеко-далеко, за словесными горами в стране гласных и согласных живут рыбные тексты. Безопасную рукописи одна дороге пустился!
   Далеко-далеко, за словесными горами в стране гласных и согласных живут рыбные тексты. Безопасную рукописи одна дороге пустился!
   Далеко-далеко, за словесными горами в стране гласных и согласных живут рыбные тексты. Безопасную рукописи одна дороге пустился!
 </div>
 <button id="btn"></button>
*/

// let elem = document.querySelector('#elem');
// let btn = document.querySelector('#btn');
// btn.addEventListener('click', function() {
//    console.log(elem.offsetWidth);
//    console.log(elem.offsetHeight);
// });

//Если отнять от полной ширины клиентскую ширину, то получится некоторое число. Какие размеры оно содержит в себе? 

// let elem = document.querySelector('#elem');
// let btn = document.querySelector('#btn');
// btn.addEventListener('click', function() {
//    console.log(elem.offsetWidth - elem.clientWidth);
//    console.log(elem.offsetHeight - elem.clientHeight);
// });



//////////////////Размеры элемента с прокруткой в JavaScript///////////

/*
Следующие свойства содержат размеры элемента с учетом спрятанной под прокруткой части:
console.log(elem.scrollWidth);  // ширина
console.log(elem.scrollHeight); // высота
*/

//Дан элемент и кнопка. По нажатию на кнопку выведите в консоль ширину и высоту элемента с прокруткой. 

// let elem = document.querySelector('#elem');
// let btn = document.querySelector('#btn');
// btn.addEventListener('click', function() {
//    console.log(elem.scrollWidth);
//    console.log(elem.scrollHeight);
// });

//Если отнять от высоты с прокруткой полную высоту, то получится некоторое число. Какие размеры оно содержит в себе? 

// let elem = document.querySelector('#elem');
// let btn = document.querySelector('#btn');
// btn.addEventListener('click', function() {
//    console.log(elem.scrollHeight - elem.offsetHeight);
// });



////////////Прокрутка элементов в JavaScript///////////////////

/*
 Следующие свойства содержат то, на сколько прокручен элемент:
console.log(elem.scrollTop);  // сверху
console.log(elem.scrollLeft); // слева
*/

//Дан элемент и кнопка. По нажатию на кнопку узнайте на сколько прокручен элемент по вертикали. 
/*
<div id="elem">
   Далеко-далеко, за словесными горами в стране гласных и согласных живут рыбные тексты. Безопасную рукописи одна дороге пустился!
   Далеко-далеко, за словесными горами в стране гласных и согласных живут рыбные тексты. Безопасную рукописи одна дороге пустился!
   Далеко-далеко, за словесными горами в стране гласных и согласных живут рыбные тексты. Безопасную рукописи одна дороге пустился!
   Далеко-далеко, за словесными горами в стране гласных и согласных живут рыбные тексты. Безопасную рукописи одна дороге пустился!
 </div>
 <button id="btn"></button>
*/

// let elem = document.querySelector('#elem');
// let btn = document.querySelector('#btn');
// btn.addEventListener('click', function() {
//    console.log(elem.scrollTop);
// });

//Дан элемент и кнопка. По нажатию на кнопку проверьте, прокручен ли элемент по вертикали. 
// let elem = document.querySelector('#elem');
// let btn = document.querySelector('#btn');
// btn.addEventListener('click', function() {
//   if(elem.scrollTop) {
//    console.log('Элемент прокручен по вертикали');
//   } else {
//    console.log('не прокручен');
//   }
// });

//Прокрутите элемент до конца. Нажмите на кнопку, чтобы вывелась величина полной прокрутки. 

// let elem = document.querySelector('#elem');
// let btn = document.querySelector('#btn');
// btn.addEventListener('click', function() {
//   console.log(elem.scrollTop);
// });

//Получите scrollHeight элемента и отнимите от него величину полной прокрутки (из предыдущей задачи). Какое значение получится? Какие размеры оно содержит в себе? 

// let elem = document.querySelector('#elem');
// let btn = document.querySelector('#btn');
// btn.addEventListener('click', function() {
//   console.log(elem.scrollHeight - elem.scrollTop);
// });

//Сложите offsetHeight и величину полной прокрутки. Отнимите эту сумму от значения scrollHeight. Какое число получится? 

// let elem = document.querySelector('#elem');
// let btn = document.querySelector('#btn');
// btn.addEventListener('click', function() {
//   console.log(elem.scrollHeight - (elem.offsetHeight + elem.scrollTop));
// });



//////////Изменение прокрутки элемента в JavaScript///////////////
/*
 Свойства, содержащие прокрутку элементов, можно изменять. В этом случае элемент будет прокручиваться к указанному значению. Давайте например прокрутим элемент на позицию 200px сверху:
elem.scrollTop = 200;

А теперь прокрутим элемент на 100px вниз от текущего значения:
elem.scrollTop = elem.scrollTop + 100;

А теперь прокрутим элемент в конец:
elem.scrollTop = elem.scrollHeight - elem.clientHeight;
*/


//Дан элемент и кнопка. По нажатию на кнопку прокрутите элемент на положение прокрутки 100px по вертикали и 50px по горизонтали. 
/*
<div id="elem">
   Далеко-далеко, за словесными горами в стране гласных и согласных живут рыбные тексты. Безопасную рукописи одна дороге пустился!
   Далеко-далеко, за словесными горами в стране гласных и согласных живут рыбные тексты. Безопасную рукописи одна дороге пустился!
   Далеко-далеко, за словесными горами в стране гласных и согласных живут рыбные тексты. Безопасную рукописи одна дороге пустился!
   Далеко-далеко, за словесными горами в стране гласных и согласных живут рыбные тексты. Безопасную рукописи одна дороге пустился!
 </div>

 <button id="btn">кнопка</button>
*/

// let elem = document.querySelector('#elem');
// let btn = document.querySelector('#btn');
// btn.addEventListener('click', function() {
//    elem.scrollTop = 100;
//    elem.scrollLeft = 50;
// });

//Дан элемент и кнопка. По нажатию на кнопку прокрутите элемент на 50px вниз от текущего положения прокрутки. 

// let elem = document.querySelector('#elem');
// let btn = document.querySelector('#btn');
// btn.addEventListener('click', function() {
//    elem.scrollTop = elem.scrollTop + 50;
// });


//Дан элемент и кнопка. По нажатию на кнопку прокрутите элемент в самый верх.
// let elem = document.querySelector('#elem');
// let btn = document.querySelector('#btn');
// btn.addEventListener('click', function() {
//    elem.scrollTop = elem.clientHeight - elem.scrollHeight;
// });

//Дан элемент и кнопка. По нажатию на кнопку прокрутите элемент в самый низ.
// let elem = document.querySelector('#elem');
// let btn = document.querySelector('#btn');
// btn.addEventListener('click', function() {
//    elem.scrollTop =  elem.scrollHeight - elem.clientHeight;
// });





//////////////Прокрутка элемента до конца в JavaScript/////////////

/*
 Прокрутим элемент до самого низа:
elem.scrollTop = elem.scrollHeight - elem.clientHeight;
*/

//Дан элемент и кнопка. По нажатию на кнопку прокрутите элемент до самого низа. 

// let elem = document.querySelector('#elem');
// let btn = document.querySelector('#btn');
// btn.addEventListener('click', function() {
//    elem.scrollTop =  elem.scrollHeight - elem.clientHeight;
// });

//Дан элемент и кнопка. По нажатию на кнопку проверьте, прокручен ли элемент до конца по вертикали. 

// let elem = document.querySelector('#elem');
// let btn = document.querySelector('#btn');
// btn.addEventListener('click', function() {
//    if(elem.scrollTop === elem.scrollHeight - elem.clientHeight) {
//       console.log('прокручен до конца');
//    } else {
//       console.log('не доконца прокручен');
//    }
// });





////////////////////////Распахивание элемента в JavaScript/////////////


/*
 Распахнем элемент на всю высоту:
elem.style.height = elem.scrollHeight + 'px';

Распахнем элемент на всю ширину:
elem.style.width = elem.scrollWidth + 'px';
*/

/*
Дан элемент и кнопка. По нажатию на кнопку распахните элемент на всю высоту. 
*/

// let elem = document.querySelector('#elem');
// let btn = document.querySelector('#btn');
// btn.addEventListener('click', function() {
//    elem.style.height = elem.scrollHeight + 'px';
// });


///////////////Ширина полосы прокрутки в JavaScript//////////////
/*
 Ширина полосы прокрутки зависит от браузера. Мы можем получить значение этой ширины. Для этого создадим элемент с прокруткой, но без границ и внутренних отступов:
let div = document.createElement('div');

Добавим ему некоторые стили:
div.style.overflowY = 'scroll';
div.style.width = '50px';
div.style.height = '50px';

Вставим элемент в документ, иначе размеры будут равны нулю:
document.body.append(div);

Получим размер полосы прокрутки:
let scrollWidth = div.offsetWidth - div.clientWidth;

Удалим элемент:
div.remove();

*/

//Дана кнопка. По нажатию на кнопку получите ширину полосы прокрутки в вашем браузере.
/*

 <button id="btn">кнопка</button>
*/


// btn.addEventListener('click', function() {
//    let div = document.createElement('div');
   
//    div.style.overflowY = 'scroll';
//    div.style.width = '50px';
//    div.style.height = '50px';
   
//    document.body.append(div);
   
//    let scrollWidth = div.offsetWidth - div.clientWidth;

//    console.log(scrollWidth);

//    div.remove();

// });


