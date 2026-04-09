////////////////Выпадающие списки////////////////////////////////

//////////Работа с выпадающими списками в JavaScript/////////////

/*
Дан селект, абзац и кнопка. По клику на кнопку выведите текст выбранного пункта списка в абзац.

   <select id="select">
      <option>one</option>
      <option>two</option>
      <option selected>three</option>
   </select>
   <p id="text"></p>
   <button id="button"></button>
*/
// let select = document.querySelector('#select');
// let text = document.querySelector('#text');
// let button = document.querySelector('#button');

// button.addEventListener('click', function() {
//   text.textContent = select.value;
// });

/*
Сделайте выпадающий список годов от 2020 до 2030. При выборе какого-нибудь пункта списка выведите сообщение о том, високосный этот год или нет.

   <select id="select">
      <option>2020</option>
      <option>2021</option>
      <option>2022</option>
      <option>2023</option>
      <option>2024</option>
      <option>2025</option>
      <option selected>2026</option>
      <option>2027</option>
      <option>2028</option>
      <option>2029</option>
      <option>2030</option>
   </select>
*/
//Если год делится на 100, он обязан делиться и на 400, чтобы остаться високосным.
// let select = document.querySelector('#select');
// select.addEventListener('change', function() {
//    let year = Number(select.value);
//    if((year % 4 == 0 && year % 100 !== 0)|| (year % 400 == 0)) {
//       console.log('Высокосный');
//    } else {
//       console.log('Обычный');
//    }
// });

//////////Атрибут value в выпадающих списках в JavaScript////////

/*
Сделайте выпадающий список с названиями дней недели. В качестве атрибутов value пунктов списка добавьте номера дней недели от 1 до 7. По изменению списка выведите на экран сообщение о том, выбран выходной день или рабочий.

   <select id="select">
      <option value="1">Понедельник</option>
      <option value="2">Вторник</option>
      <option value="3">Среда</option>
      <option value="4">Четверг</option>
      <option value="5">Пятница</option>
      <option value="6">Суббота</option>
      <option value="7" selected>Воскресенье</option>
   </select> 
*/
// let select = document.querySelector('#select');
// select.addEventListener('change', function() {
   
//    if(this.value == 6 || this.value == 7) {
//       console.log('Выбран выходной день');
//    } else {
//       console.log('Выбран рабочий день');
//    }  
// });


///////////Изменение выбранного пункта списка на JavaScript////

/*
Сделайте выпадающий список с названиями месяцев. Сделайте так, чтобы JavaScript по умолчанию выбирал в этом списке текущий месяц.


<select id="select">
      <option value="0" selected>Январь</option>
      <option value="1">Февраль</option>
      <option value="2">Март</option>
      <option value="3">Апрель</option>
      <option value="4">Май</option>
      <option value="5">Июнь</option>
      <option value="6">Июль</option>
      <option value="7">Август</option>
      <option value="8">Сентябрь</option>
      <option value="9">Октябрь</option>
      <option value="10">Ноябрь</option>
      <option value="11">Декабрь</option>
   </select>


*/
// let select = document.getElementById('select');
// select.value = new Date().getMonth();


////////////////Номер выбранного пункта выпадающего списка//////

/*
Дан инпут и селект. В инпут вводится какое-то число. По потери фокуса сделайте выделенным пункт списка, номер которого равен значению из инпута.

   <input id="elem" type="text">
   <select id="select">
      <option value="0">Москва</option>
      <option value="2">Иваново</option>
      <option value="3">Фурманов</option>
      <option value="4">Уфа</option>
      <option value="5">Самара</option>
      <option value="6">Новокуйбышевск</option>
   </select>
*/
// let elem = document.querySelector('#elem');
// let select = document.querySelector('#select');

// elem.addEventListener('blur', function() {
//    select.selectedIndex = Number(elem.value);
// });


/*
Сделайте выпадающий список с названиями дней недели. Сделайте так, чтобы по JavaScript по умолчанию выбирал в этом списке текущий день.

<select id="select">
      <option value="0">Воскресенье</option>
      <option value="1">Понедельник</option>
      <option value="2">Вторник</option>
      <option value="3">Среда</option>
      <option value="4">Четверг</option>
      <option value="5">Пятница</option>
      <option value="6">Суббота</option>
   </select>
*/
//1 вариант
// let select = document.querySelector('#select');

//  select.selectedIndex = new Date().getDay();

//второй вариант решения
// let select = document.querySelector('#select');

//  select.value = new Date().getDay();



   

/////Получение пунктов выпадающего списка на JavaScript/////////

////Массив пунктов выпадающего списка на JavaScript////////////

/*
Переберите все пункты списка циклом и в конец текста каждого пункта добавьте значение его атрибута value.

<select id="select">
      <option value="0">Москва</option>
      <option value="1">Иваново</option>
      <option value="2">Фурманов</option>
      <option value="3">Уфа</option>
      <option value="4">Самара</option>
      <option value="5">Новокуйбышевск</option>
   </select>
*/

// let select = document.querySelector('#select');
// for(let option of select) {
//    option.textContent += ' ' + option.value;  
// }


//////////Работа с пунктами выпадающего списка на JavaScript///

/*
Переберите пункты списка циклом и для выбранного пункта в конец текста добавьте восклицательный знак, а для невыбранных пунктов - вопросительный.

   <select id="select">
      <option value="0">Москва</option>
      <option value="1">Иваново</option>
      <option value="2">Фурманов</option>
      <option value="3">Уфа</option>
      <option value="4">Самара</option>
      <option value="5">Новокуйбышевск</option>
   </select> 
*/

// let select = document.querySelector('#select');
// for(let option of select) {
 
//  if(option.selected) {
//    option.text += '!';
//  }else {
//    option.text += '?';
//  }
// }



////////////Выбор пункта списка в JavaScript////////////////

/*
Дан выпадающий список и кнопка. По клику на кнопку сделайте отмеченным последний пункт списка.

   <select id="select">
      <option value="0">Москва</option>
      <option value="1">Иваново</option>
      <option value="2">Фурманов</option>
      <option value="3">Уфа</option>
      <option value="4">Самара</option>
      <option value="5">Новокуйбышевск</option>
   </select> 
   <button id="btn">Выбери город</button>
*/

// let select = document.querySelector('#select');
// let button = document.querySelector('#btn');

// button.addEventListener('click', function() {
//    let option = select[select.length - 1];
//    option.selected = true;
// });


/////Получение выбранного оптиона в JavaScript//////

/*
Дан селект и кнопка. По нажатию на кнопку выведите на экран текст отмеченного пункта списка.

 <select id="select">
      <option value="0">Москва</option>
      <option value="1">Иваново</option>
      <option value="2">Фурманов</option>
      <option value="3">Уфа</option>
      <option value="4">Самара</option>
      <option value="5">Новокуйбышевск</option>
      <option value="6">Тамбов</option>
   </select> 
   <button id="btn">Выбери город</button>
*/
// let select = document.querySelector('#select');
// let button = document.querySelector('#btn');

// button.addEventListener('click', function() {

//    console.log(select[select.selectedIndex].textContent);
// });


/*
Дан селект и кнопка. По нажатию на кнопку добавьте в конец текста выбранного пункта восклицательный знак.
*/
// let select = document.querySelector('#select');
// let button = document.querySelector('#btn');

// button.addEventListener('click', function() {

//    select[select.selectedIndex].text += '!';
// });