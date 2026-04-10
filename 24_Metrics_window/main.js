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

// let btn = document.addEventListener('click', function() {
//    let scrollHeight = Math.max(
//    document.body.scrollHeight, document.documentElement.scrollHeight,
// 	document.body.offsetHeight, document.documentElement.offsetHeight,
// 	document.body.clientHeight, document.documentElement.clientHeight
//    );
//    console.log(scrollHeight);
// });

//По нажатию на кнопку выведите ширину с учетом прокрученной части. 
// let btn = document.addEventListener('click', function() {
   // let scrollWidth = Math.max(
      // 	document.body.scrollWidth, document.documentElement.scrollWidth,
      // 	document.body.offsetWidth, document.documentElement.offsetWidth,
      // 	document.body.clientWidth, document.documentElement.clientWidth
      // );
      
      // console.log(scrollWidth);
      // });
      
      
//По нажатию на кнопку выведите высоту спрятанной под прокруткой части.
// let btn = document.querySelector('#btn');      
// btn = document.addEventListener('click', function() {
//       let scrollHeight = Math.max(//с учетом прокрутки
//       document.body.scrollHeight, document.documentElement.scrollHeight,
//       document.body.offsetHeight, document.documentElement.offsetHeight,
//       document.body.clientHeight, document.documentElement.clientHeight
//       );
//       let h = document.documentElement.clientHeight; //буз прокрутки
//       console.log(scrollHeight - h);

// });


//////////////////Получение прокрутки окна в JavaScript///////////////

/*
 Следующие свойства содержат то, на сколько прокручено окно (только для  чтения):
let x = window.pageXOffset; // слева
let y = window.pageYOffset; // сверху
*/

//По нажатию на кнопку выведите, на сколько прокручено окно по вертикали. 

// let btn = document.querySelector('#btn');
// btn.addEventListener('click', function() {
//    let YHeigth = pageYOffset;
//    console.log(YHeigth);
// });

//По нажатию на кнопку выведите, на сколько осталось до конца прокрутки по вертикали. 

// let btn = document.querySelector('#btn');
// btn.addEventListener('click', function() {
//    let scrollHeight = Math.max(//с учетом прокрутки
//      document.body.scrollHeight, document.documentElement.scrollHeight,
//      document.body.offsetHeight, document.documentElement.offsetHeight,
//      document.body.clientHeight, document.documentElement.clientHeight
//    );
//    let YHeigth = window.pageYOffset; //сколько прокрутили
//    let viewHeight = document.documentElement.clientHeight; // Сколько видим сейчас
//    let res = scrollHeight - YHeigth - viewHeight;
//    console.log(res);
//    if(res <= 1) {
//       btn.remove();
//    }
// });



////////Получение и изменение прокрутки окна в JavaScript//////////

/*
 Следующие свойства содержат то, на сколько прокручено окно:
let t = document.documentElement.scrollTop;  // сверху
let l = document.documentElement.scrollLeft; // слева

Эти свойства можно изменять, прокручивая окно в произвольную позицию:
document.documentElement.scrollTop = 200;
*/

//По нажатию на кнопку прокрутите окно на позицию 300px сверху. 

// let btn = document.querySelector('#btn');
// btn.addEventListener('click', function() {
//    document.documentElement.scrollTop = 300;
// });

//По нажатию на кнопку прокрутите окно на позицию 100px снизу. 
// let btn = document.querySelector('#btn');
// btn.addEventListener('click', function() {
//    document.documentElement.scrollTop =  document.documentElement.scrollTop + 180;
// });

//По нажатию на кнопку прокрутите окно на самый верх. 
// let btn = document.querySelector('#btn');
// btn.addEventListener('click', function() {
//   document.documentElement.scrollTop = 0;
// });

// //По нажатию на кнопку прокрутите окно на самый низ. 
// let btn = document.querySelector('#btn');
// btn.addEventListener('click', function() {
//   document.documentElement.scrollTop = document.documentElement.scrollHeight - document.documentElement.clientHeight;
// });



///////////Метод для прокрутки окна в положение в JavaScript//////////

/*

Метод для прокрутки окна в положение в JavaScript

Метод scrollTo прокручивает окно в заданное положение. Первым параметром он принимает положение по горизонтали, а вторым - по вертикали. Давайте прокрутим окно к заданному положению:
window.scrollTo(100, 200);

Метод имеет альтернативный синтаксис, в котором параметром передается объект. В ключе top этого объекта указывается положение по вертикали, в ключе left - положение по горизонтали, а в ключе behavior - тип прокрутки. Тип может быть 'auto' или 'smooth'. Во втором случае прокрутка будет плавной:
element.scrollTo({
	top: 100,
	left: 100,
	behavior: 'smooth'
});

*/


/*
По нажатию на кнопку прокрутите окно в позицию 300px сверху. 
*/
//По нажатию на кнопку прокрутите окно на самый низ. 
// let btn = document.querySelector('#btn');
// btn.addEventListener('click', function() {
//    window.scrollTo(0, 0);
// });

//По нажатию на кнопку плавно прокрутите окно до самого верха. 
// let btn = document.querySelector('#btn');
// btn.addEventListener('click', function() {

//   window.scrollTo({
//    top: 0,
//    left: 0,
//    behavior: 'smooth'
//   })
// });

//По нажатию на кнопку плавно прокрутите окно до самого низа. 

// let btn = document.querySelector('#btn');
// btn.addEventListener('click', function() {

//   window.scrollTo({
//    top: document.documentElement.scrollHeight,
//    behavior: 'smooth'
//   })
// });


//////////Метод для прокрутки окна на величину в JavaScript/////

/*
Метод scrollBy прокручивает окно на заданную величину от текущего положения. Первым параметром он принимает сдвиг по горизонтали, а вторым - по вертикали. Давайте прокрутим окно на заданные величины:
window.scrollBy(100, 200);

Выполним прокрутку в обратную сторону:
window.scrollBy(-100, -200);

Выполним плавную прокрутку:
window.scrollBy({
	top: 100,
	left: 100,
	behavior: 'smooth'
   });
   
   */

   //По нажатию на кнопку прокрутите окно на 100px вниз. 
//   let btn = document.querySelector('#btn');
//   btn.addEventListener('click', function() {
//   window.scrollBy(0, 100);
// });


//По нажатию на кнопку прокрутите окно на 100px вверх. 
// let btn = document.querySelector('#btn');
//    btn.addEventListener('click', function() {
//    window.scrollBy(0, -100);
// });

//По нажатию на кнопку плавно прокрутите окно на 300px вниз. 

// let btn = document.querySelector('#btn');
//    btn.addEventListener('click', function() {
//    window.scrollBy({
//       top: 150,
//       behavior: 'smooth'
//    });
// });


//По нажатию на кнопку плавно прокрутите окно на 300px вверх. 

// let btn = document.querySelector('#btn');
//    btn.addEventListener('click', function() {
//    window.scrollBy({
//       top: -150,
//       behavior: 'smooth'
//    });
// });




////////////Метод для прокрутки окна к элементу в JavaScript/////////

/*
 Метод scrollIntoView прокручивает окно к заданному элементу. Метод применяется к элементу, к которому следует прокрутить окно. Параметром метода регулируют, где должен оказаться элемент: сверху окна или снизу.

Давайте посмотрим на примерах. Прокрутим окно так, чтобы элемент был сверху окна:
elem.scrollIntoView(true);

А теперь прокрутим окно так, чтобы элемент был снизу окна:
elem.scrollIntoView(false);

Можно также параметром передать объект с настройками. Давайте плавно прокрутим окно к элементу:
elem.scrollIntoView({
	behavior: 'smooth',
});

Объект с настройками имеет также настройки выравнивания страницы по отношению к элементу. Настройка block задает вертикальное выравнивание, а настройка inline - горизонтальное. Они могут принимать следующие значения: 'start', 'center', 'end', 'nearest'.

Давайте попробуем:
elem.scrollIntoView({
	behavior: 'smooth',
	block: 'start',
	inline: 'end',
});

*/

/*
Дан элемент и кнопка. По нажатию на кнопку прокрутите страницу к данному элементу. Опробуйте все описанные возможности. 


#elem {
   width: 300px;
   height: 200px;
   background: #0ffae6;
   border: 2px solid #130ffa;
   text-align: center;
   display: flex;
   flex-direction: column;
   justify-content: center;
}

  <div id="elem"><p>У меня все получится!!!</p></div>
  <button id="btn">кнопка</button>
*/

// let elem = document.querySelector('#elem');
// let btn = document.querySelector('#btn');

// btn.addEventListener('click', function() {
//    elem.scrollIntoView(true);
// });

////////////////////////////////////////////////
// let elem = document.querySelector('#elem');
// let btn = document.querySelector('#btn');

// btn.addEventListener('click', function() {
//    elem.scrollIntoView({
//       behavior: 'smooth',
//       block: 'start',
//       inline: 'end'
//    });
// });


//////////Событие прокрутки в JavaScript////////////////////
/*
 Существует событие scroll, с помощью которого можно поймать момент, когда пользователь прокручивает окно. Давайте попробуем:
window.addEventListener('scroll', function() {
	console.log('!');
});

Будем выводить текущую прокрутку от верха сайта:
window.addEventListener('scroll', function() {
	console.log(window.pageYOffset);
});

*/

//При прокручивании страницы до конца, выведите сообщение об этом. 

// window.addEventListener('scroll', function() {
//    //вычислим на сколько прокручено окно и прибавим высоту
//    let scrollPage = window.pageYOffset + document.documentElement.clientHeight;
//    let scrollMax = document.documentElement.scrollHeight;
//    if(scrollPage >= scrollMax){
//       console.log('конец станицы');
//    }
// });