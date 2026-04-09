/////////////Метрики окна////////////////////////

//////////Размеры окна в JavaScript////////////////////////

/*
 Следующие свойства содержат размеры окна браузера, не включающие в себя полосу прокрутки:
let w = document.documentElement.clientWidth;  // ширина
let h = document.documentElement.clientHeight; // высота

Следующие свойства включают в себя полосу прокрутки:
let w = window.innerWidth;  // ширина
let h = window.innerHeight; // высота

Разница между двумя типами свойств дает размер полосы прокрутки:
let w1 = document.documentElement.clientWidth;
let w2 = window.innerWidth;

console.log(w2 - w1);

*/

/*
По нажатию на кнопку выведите ширину и высоту окна. 

<button id="btn">кнопка</button>
*/
// let btn = document.querySelector('#btn');

// btn.addEventListener('click', function() {
//  let w =  document.documentElement.clientWidth;
//  let h = document.documentElement.clientHeight;

//  console.log(`высота: ${w}  ширина: ${h}`);
// });

//По нажатию на кнопку проверьте наличие вертикальной прокрутки у окна. 
// let btn = document.querySelector('#btn');

// btn.addEventListener('click', function() {
//  let h1 = document.documentElement.scrollHeight;
//  let h2 = document.documentElement.clientHeight;

 
//  if(h1 > h2) {
//    console.log('yes');
//  }else{
//    console.log('no');
//  }

// });

//По нажатию на кнопку проверьте наличие горизонтальной прокрутки у окна. 

// let btn = document.querySelector('#btn');

// btn.addEventListener('click', function() {
//  let h1 = document.documentElement.scrollWidth;
//  let h2 = document.documentElement.clientWidth;

 
//  if(h1 > h2) {
//    console.log('yes');
//  }else{
//    console.log('no');
//  }

// });


/////////Размеры окна с учетом прокрутки в JavaScript///////////////

/*

Размеры окна с учетом прокрутки в JavaScript

Давайте получим размеры окна с учетом прокрученной части. К сожалению, удобного способа, работающего во всех браузерах - нет. Ниже приводятся работающие решения. Вникать в них не стоит, просто используйте.

Высота с учетом прокрученной части:
let scrollHeight = Math.max(
	document.body.scrollHeight, document.documentElement.scrollHeight,
	document.body.offsetHeight, document.documentElement.offsetHeight,
	document.body.clientHeight, document.documentElement.clientHeight
);

console.log(scrollHeight);

Ширина с учетом прокрученной части:
let scrollWidth = Math.max(
	document.body.scrollWidth, document.documentElement.scrollWidth,
	document.body.offsetWidth, document.documentElement.offsetWidth,
	document.body.clientWidth, document.documentElement.clientWidth
);

console.log(scrollWidth);

*/

//По нажатию на кнопку выведите высоту с учетом прокрученной части. 