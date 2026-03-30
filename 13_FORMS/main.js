//////////////////////////ФОРМЫ//////////////////////////////

///////////Работа с текстареа в JavaScript//////////////////////

/*
прочитывать и записывать текст textarea следует не через свойство innerHTML, а через value.
*/

/*
Дан текстареа и абзац. По потери фокуса в текстареа запишите его текст в абзац.

  <textarea id="elem">text</textarea>
   <p id="abzac"></p>
*/
// let elem = document.querySelector('#elem');
// let abzac = document.querySelector('#abzac');
// elem.addEventListener('blur', function() {
//    abzac.textContent += elem.value;
// });


////////////////////Атрибут disabled в JavaScript/////////////////



/*
Атрибут disabled блокирует элемент HTML формы, то есть делает его неактивным. Является атрибутом без значения.

атрибут disabled, используемый для блокировки элементов. Для того, чтобы установить такой атрибут, соответствующему свойству требуется присвоить значение true, а чтобы убрать - значение false.
*/

/*
Дан инпут и кнопка. По нажатию на кнопку заблокируйте инпут.

   <input id="elem" value="введите данные">
   <button id="button"></button>
*/

// let elem = document.querySelector('#elem');
// let button = document.querySelector('#button');
// button.addEventListener('click', function() {
//    elem.disabled = true;
// });


/*
Дан инпут и две кнопки. Пусть нажатие на первую кнопку блокирует инпут, а нажатие на вторую - отблокирует.

   <input id="elem" value="введите данные">
   <button id="button1">заблокировать</button>
   <button id="button2">разблокировать</button>
*/
// let elem = document.querySelector('#elem');
// let button1 = document.querySelector('#button1');
// let button2 = document.querySelector('#button2');
// button1.addEventListener('click', function() {
//    elem.disabled = true;
// });
// button2.addEventListener('click', function() {
//    elem.disabled = false;
// });

/*
Дан инпут и кнопка. По нажатию на кнопку узнайте, заблокирован инпут или нет.

<input id="elem" value="введите данные" disabled>
<button id="button">заблокировать</button>
*/

// let elem = document.querySelector('#elem');
// let button = document.querySelector('#button');

// button.addEventListener('click', function() {
//    if(elem.disabled == true) {
//       console.log('Инпут заблокирован');
//    } else {
//       console.log('Инпут разблокирован');
//    }
// });



////////////Работа с чекбоксами в JavaScript/////////////////

/*
Чтобы сделать чекбокс отмеченным - ему нужно написать атрибут checked:
*/

/*
Дан чекбокс и две кнопки. По нажатию на первую кнопку установите чекбокс в отмеченное состояние, а по нажатию на вторую - в неотмеченное.

   <input type="checkbox" id="elem">
   <button id="button1">заблокировать</button>
   <button id="button2">заблокировать</button>
*/
// let elem = document.querySelector('#elem');
// let button1 = document.querySelector('#button1');
// let button2 = document.querySelector('#button2');
// button1.addEventListener('click', function() {
//    elem.checked = true;
// });
// button2.addEventListener('click', function() {
//    elem.checked = false;
// });


/*
Дан чекбокс, кнопка и абзац. По нажатию на кнопку, если чекбокс отмечен, выведите в абзац слово 'привет', а если чекбокс не отмечен, то слово 'пока'.

   <input type="checkbox" id="elem">
   <button id="button"></button>
   <p id="text"></p>

*/
// let elem = document.querySelector('#elem');
// let button = document.querySelector('#button');
// let text = document.querySelector('#text');

// button.addEventListener('click', function() {
//    if(elem.checked == true) {
//       text.textContent = 'Привет';
//    } else {
//       text.textContent = 'Пока';
//    }
// });


////////////////Чередование атрибутов без значений/////////////////
/*
Объясните, как работает приведенный код.

button.addEventListener('click', function() {
	elem.disabled = !elem.disabled;
});

Приведеный код работает так, не заблокированный элемент приравнивается к состоянию заблокировано с помощьюзнака логического НЕ инвертирование. 
*/

/*
Дан чекбокс и кнопка. Сделайте так, чтобы каждый клик по кнопке приводил к смене состояния чекбокса.

   <input type="checkbox" id="elem">
   <button id="button">кнопка</button>
*/

// let elem = document.querySelector('#elem');
// let button = document.querySelector('#button');

// button.addEventListener('click', function() {
//    elem.checked = !elem.checked;
// });


///////////////Работа с радиокнопками в JavaScript///////////////

/*
Давайте теперь поработаем с радиокнопками. Они представляют собой группу переключателей, из которых может быть выбран только один. Чтобы несколько радиокнопочек были группой, они должны иметь одинаковое значение атрибута name:

<input type="radio" name="elem">
<input type="radio" name="elem">
<input type="radio" name="elem">
А чтобы отличить на JavaScript, какая именно кнопка была выбрана, каждой радиокнопке в группе добавляют атрибуты value с различным значением:

<input type="radio" name="elem" value="1">
<input type="radio" name="elem" value="2">
<input type="radio" name="elem" value="3">
Чтобы сделать какую-нибудь радиокнопку отмеченной по умолчанию, ей необходимо задать атрибут checked:

<input type="radio" name="elem" value="1" checked>
<input type="radio" name="elem" value="2">
<input type="radio" name="elem" value="3">
*/

/*
Даны 3 радиокнопки, абзац и кнопка. По клику на кнопку выведите в абзац value отмеченной радиокнопки.

   <input type="radio" name="elem" value="1">
   <input type="radio" name="elem" value="2" checked>
   <input type="radio" name="elem" value="3">
   <p id="text"></p>
   <button id="button">кнопка</button>
*/

// let radios = document.querySelectorAll('input[type="radio"]');
// let button = document.querySelector('#button');
// let text = document.querySelector('#text');
// button.addEventListener('click', function() {
//   for(let radio of radios) {
//    if(radio.checked) {
//       console.log(text.textContent = radio.value);
//       //Радиокнопки в одной группе подразумевают, что выбрана может быть только одна. Как только мы нашли ту, у которой checked === true, продолжать перебор остальных нет смысла — это экономит ресурсы.
//       break;
//    }
//   }
// });


/////////////Событие change в JavaScript/////////////////////////
/*
В данном уроке вы с вами разберем событие change, возникающее в полях ввода при их изменениях. Что это значит? Пусть, к примеру, у вас есть инпут и в нем есть какой-то текст. Если вы измените этот текст, то в этом случае и возникнет это событие.

   
   <input id="elem" value="text">


   let elem = document.querySelector('#elem');
   
   elem.addEventListener('change', function() {
      console.log(this.value);
   });

*/


/*
Дан инпут и абзац. По изменению инпута выведите его текст в абзац.

 <input id="elem" value="text">
   <p id="text"></p>
*/

// let elem = document.querySelector('#elem');
// let text = document.querySelector('#text');

// elem.addEventListener('change', function() {
//    text.textContent = this.value;
// });

/*
Дан чекбокс. По изменению чебокса выведите на экран его новое состояние.

<input type="checkbox" name="check" id="elem">
*/

// let elem = document.querySelector('#elem');
// elem.addEventListener('change', function() {
//    if(this.checked) {
//       console.log('Включен');
//    } else {
//       console.log('Выключен');
//    }
// });


/*
Дан инпут. По его изменению проверьте, количество символов в нем меньше 5-ти или нет. Если меньше - покрасьте границу инпута в зеленый цвет, а если больше - в красный.

 <input class="elem" type="text" value="text">
*/

// let elem = document.querySelector('.elem');
// elem.addEventListener('change', function() { 
//   if(this.value.length < 5) {
//    this.classList.add('cologreen');
//    this.classList.remove('colored');
//   } else {
//    this.classList.add('colored');
//    this.classList.remove('cologreen');
//   }
// });

///////////////////////Событие input в JavaScript/////////////////////////////
/*
Следующее событие, которое мы изучим, называется input. Оно возникает каждый раз при вводе нового символа в инпут или textarea


//<input id="elem">

// let elem = document.querySelector('#elem');

// elem.addEventListener('input', function() {
// 	console.log(this.value);
// });
*/


/*
  Дан инпут. Пусть в него вводится текст. Как только длина текста достигнет 5-ти, выведите на экран сообщение об этом. 

  <input id="elem">
*/
// let elem = document.querySelector('#elem');
// elem.addEventListener('input', function() {
//    if(this.value.length == 5) {
//       console.log('Длина текстадостигла 5');
//    }
// });

/*
Дан инпут. Пусть в него разрешено ввести 5 символов. Дан также абзац. По мере ввода символов в инпут пишите, сколько еще символов можно ввести. Когда количество символов превысит 5-ти, то в абзац выводите то, на сколько символов превышена длина текста.

<input id="elem">
*/
// let elem = document.querySelector('#elem');
// let abzac = document.querySelector('#abzac');


// elem.addEventListener('input', function() {
//    let length = this.value.length;
//    if(length <= 5) {
//       let res = 5 - length;
//       abzac.textContent = `Осталось ввести ${res} символа`;
//    } else {
//       let over = length - 5;
//       abzac.textContent = `Вы ввели ${over} лишних символов`;
//    }
// });



////////////////Методы focus и blur в JavaScript////////////////////////////

/*
Даны два инпута. Сделайте так, чтобы после ввода двух символов фокус ввода переходил ко второму инпуту, а после ввода двух символов в этот инпут - фокус из него убирался.

    <input id="elem1" type="text">
    <input id="elem2" type="text">
*/
// let elem1 = document.querySelector('#elem1');
// let elem2 = document.querySelector('#elem2');

// elem1.addEventListener('input', function() {
//   let length1 = this.value.length;
//   if(length1 == 2) {
//      elem2.focus();
//   };
// });
// elem2.addEventListener('input', function() {
//    let length2 = this.value.length;
//   if(length2 == 2) {
//      this.blur();
//   };

// });





// let elem   = document.querySelector('#elem');
// let button = document.querySelector('#button');

// button.addEventListener('click', function() {
// 	elem.blur();
// });

// let textarea = document.querySelector('textarea');
// let div = document.querySelector('div');

// textarea.addEventListener('blur', function() {
// 	div.textContent = textarea.value;
// });


//По клику на кнопку в див должно записаться или одно, или другое значение:
/*

      <input type="checkbox">
      <div></div>
      <button>button</button>
*/

// let input = document.querySelector('input');
// let button = document.querySelector('button');
// let div = document.querySelector('div');

// button.addEventListener('click', function() {
// 	if (input.checked == false) {
// 		div.textContent = '111';
// 	} else {
// 		div.textContent = '222';
// 	};
// });

//По клику на кнопку, если чекбокс отмечен, то должно вывестись одно значение, а если не отмечен - другое:

/*
<input type="checkbox">
<button>button</button>
*/

// let input = document.querySelector('input');
// let button = document.querySelector('button');

// button.addEventListener('click', function() {
// 	if (input.checked == true) {
// 		console.log('+++');
// 	} else {
// 		console.log('---');
// 	}
// });