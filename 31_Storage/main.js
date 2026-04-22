//////////////////Хранилище///////////////////////

////////////Локальное хранилище браузера в JavaScript//////////////

/*
 В браузере существует так называемое локальное хранилище, позволяющее хранить данные между заходами пользователя на сайт (5-10 мегабайт информации).

Доступ к данным производится по ключу: вы сохраняете данные с каким-то ключом, а затем можете получить их по этому ключу или удалить. При этом разрешено сохранять только строки. Для работы с данными есть специальные методы. Давайте их рассмотрим.

Для хранения данных используется два типа хранилищ: sessionStorage и localStorage. Первое хранит данные только до закрытия браузера, а второе - всегда.

В следующих уроках мы будем разбираться с возможностями локального хранилища. 
*/


///////////////Хранилище в отладчике в JavaScript////////////////////////

/*
Содержимое локального хранилища можно изучать и редактировать в отладчике браузера. Для этого нужно зайти во вкладку Application: 

Там нужно выбрать вкладку Local Storage: 

В этой вкладке вы увидите ключи ваших данных: И значения ваших данных: 
*/




//////////////Работа с данными в localStorage в JavaScript///////////////

/*
 Метод setItem предназначен для сохранения данных. Первым параметром он принимает ключ, а вторым - значение. Метод getItem предназначен для получения данных. Он принимает один параметр - ключ, под которым эти данные были сохранены.

Давайте попробуем эти методы на практике. Для начала давайте сохраним какую-нибудь строку с каким-нибудь ключом:
localStorage.setItem('key', 'text');

Давайте теперь получим нашу строку из локального хранилища:
let str = localStorage.getItem('key');
console.log(str); // выведет 'text'
*/

// localStorage.setItem('key', 'text');

// let str = localStorage.getItem('key');
// console.log(str);


/*
Напишите скрипт, который сохранит в локальном хранилище три числа под тремя разными ключами. Запустите этот скрипт, чтобы данные сохранились. Затем напишите скрипт, который получит ваши три числа из локального хранилища и найдет их сумму. Запустите второй скрипт и убедитесь в его работоспособности. 
*/

// localStorage.setItem('key1', 1);
// localStorage.setItem('key2', 2);
// localStorage.setItem('key3', 3);

// let str1 = localStorage.getItem('key1');
// let str2 = localStorage.getItem('key2');
// let str3 = localStorage.getItem('key3');
// let sum = (Number(str1) + Number(str2) + Number(str3));
// console.log(sum);




///////////////Однократное сохранение в localStorage в JavaScript////////

/*
 Если попытаться прочитать ключ, для которого не были записаны данные, то результатом будет null. Это можно использовать для того, чтобы выполнить однократное сохранение данных.

К примеру, давайте запишем в локальное хранилище момент первого захода пользователя на сайт. А если пользователь зайдет не первый раз, то ничего делать не будем:
let time = localStorage.getItem('time');

if (time === null) {
	let now = Date.now();
	localStorage.setItem('time', now);
}

Перепишем условие в более коротком виде:
let time = localStorage.getItem('time');

if (!time) {
	let now = Date.now();
	localStorage.setItem('time', now);
}

*/

/*
По заходу пользователя на сайт запишите в локальное хранилище текущий момент времени. Затем по повторному заходу выведите, сколько прошло времени с предыдущего захода пользователя на сайт. 
*/
//Достанем время последнего визита пользователя


/*
// 1. Пытаемся достать из "журнала" (хранилища) время последнего визита
let time = localStorage.getItem('time');

if (!time) { 
   // ЭТА ВЕТКА СРАБОТАЕТ, ЕСЛИ ПОЛЬЗОВАТЕЛЬ ТУТ ВПЕРВЫЕ (в журнале пусто)
   
   let now = Date.now();           // Берем текущее время (в миллисекундах)
   localStorage.setItem('time', now); // Записываем его в журнал
   console.log('Добро пожаловать в первый раз!');

} else {
   // ЭТА ВЕТКА СРАБОТАЕТ ПРИ ПОВТОРНОМ ЗАХОДЕ (когда запись в журнале уже есть)

   let now = Date.now();           // Снова берем текущее время
   
   // Считаем разницу: (Сейчас) МИНУС (То, что нашли в журнале)
   // Number() нужен, потому что из хранилища данные выходят как текст ("123")
   let diff = now - Number(time); 

   // Выводим результат. Делим на 1000, чтобы превратить миллисекунды в секунды
   console.log('Вы не были здесь ' + (diff / 1000) + ' секунд');

   // Обновляем запись в журнале текущим временем, 
   // чтобы в следующий раз считать разницу от ЭТОГО момента
   localStorage.setItem('time', now); 
}
*/

// let time = localStorage.getItem('time');

// if(!time) {
//    let now = Date.now();
//    localStorage.setItem('time', now);
// } else {
//    let now = Date.now();
//    let res = now - Number(time);
//    console.log('С прошлого захода прошло: ' + (Math.floor(res / 1000)) + ' сек.');
//    localStorage.setItem('time', now);
// }

/*
По заходу пользователя на сайт спросите у него дату рождения. При следующем заходе пользователя на сайт, если у него в этот день будет День Рождения - поздравьте его с этим праздником. 
*/

// // 1. Пытаемся получить дату из "памяти" браузера
// let savedBirthday = localStorage.getItem('userBirthday');

// // 2. Проверяем: если даты там нет (первый заход)
// if (savedBirthday === null) {
//     // Спрашиваем дату
//     let input = prompt("Добро пожаловать! Введите дату вашего рождения в формате ММ-ДД (например, 05-20)");
    
//     // Если пользователь что-то ввел, сохраняем это
//     if (input) {
//         localStorage.setItem('userBirthday', input);
//         alert("Спасибо, я запомнил!");
//     }
// } 
// // 3. Если дата уже есть (повторный заход)
// else {
//     // Получаем текущую дату (сегодня)
//     let now = new Date();
    
//     // Форматируем месяц и день, чтобы они всегда были из 2 цифр (например, "05-09")
//     let month = String(now.getMonth() + 1).padStart(2, '0'); 
//     let day = String(now.getDate()).padStart(2, '0');
    
//     let today = `${month}-${day}`; // Собираем строку "ММ-ДД"

//     // 4. Сравниваем сохраненную дату с сегодняшней
//     if (savedBirthday === today) {
//         alert("С Днем Рождения! 🎂 Поздравляем вас!");
//     } else {
//         console.log("Сегодня не ваш день рождения. Ждем праздника!");
//     }
// }



/*
Дан инпут. По потери фокуса в этом инпуте сохраните его значение в локальное хранилище. При следующем заходе пользователя на страницу установите в инпуте сохраненный ранее текст. 
*/
//Получим ссылку на инпут в  переменную
// let input = document.querySelector('input');

//получим данные из хранилища
// let str = localStorage.getItem('val');
//если данные есть запишем их в инпут
// if(str) {
   //    input.value = str;
   // }
   // input.addEventListener('blur', function() {
      //по потере фокуса запишем в хранилище value из инпутаа
//    localStorage.setItem('val', input.value);
// });




////////////////Перезапись данных в localStorage в JavaScript////////////
/*
 Можно перезаписывать данные, хранящиеся в хранилище под определенным ключом. Давайте попробуем. Запишем какие-нибудь данные:
localStorage.setItem('key', '1');
let value1 = localStorage.getItem('key');

console.log(value1); // выведет '1'

А теперь перезапишем эти данные::
localStorage.setItem('key', '2');
let value2 = localStorage.getItem('key');

console.log(value2); // выведет '2'
*/

/*
Пользователь заходит на сайт, затем обновляет страницу, затем еще раз обновляет и так далее. Сделайте счетчик обновления страницы. Каждый раз при обновлении выводите значение счетчика на экран. 
*/

// //Достаем то что уже  есть в хранилище
// let num = localStorage.getItem('keyN');

// //проверим если в хранилище что то было
// if(num) {
//  num = Number(num) + 1;
// } else {
//    //если пользователь зашел в самый первый раз
//    num = 1;
// }

// //сохраняем результат обратно
// localStorage.setItem('keyN', num);
// console.log(num);


// //Достать из localStorage.
// let res = localStorage.getItem('keyMy');

// //Прибавить 1.
// if(res) {
//    res = Number(res) + 1;
// } else {
//    res = 1;
// }

// //Положить обратно в localStorage.
// localStorage.setItem('keyMy', res);
// console.log(res);


//////////////////////////////////////////////////
//Достать из localStorage.
// let res = localStorage.getItem('keyMy');

// res = Number(res);
// if(res < 10) {
//    res += 1;
//    localStorage.setItem('keyMy', res);

// }

// //Положить обратно в localStorage.
// console.log(res);




///////////////////Удаление данных в localStorage в JavaScript//////////

/*
 С помощью метода removeItem можно удалять данные и связанный с ними ключ. Давайте для примера удалим содержимое какого-нибудь ключа:
localStorage.removeItem('key');

Проверим теперь наличие данных:
let value = localStorage.getItem('key');
console.log(value); // выведет null
*/

/*
Сделайте счетчик обновления страницы. Пусть счетчик обнуляется после того, как дойдет до 10. 
*/

// let num = (localStorage.getItem('myKey')) || 0;

// num = Number(num);
// if(num < 10) {
//    num = num + 1;

//    localStorage.setItem('myKey', num);
// } else {
//    let value = localStorage.removeItem('myKey');
//    num = 1;
// }

// console.log(num);



//////////////////Очистка хранилища в localStorage в JavaScript//////////

/*
 С помощью метода clear можно очистить все хранилище. Смотрите пример:
localStorage.clear();

*/
//Очистите хранилище. Проверьте, что все ранее установленные вами ключи пропали. 






////////////////Количество записей в localStorage в JavaScript//////////

/*
 С помощью свойства length можно узнать количество записей в локальном хранилище:
let num = localStorage.length;
console.log(num);

*/

/*
По нажатию на кнопку выведите количество записей в локальном хранилище. 
*/
// localStorage.setItem('key1', 'text1');
// localStorage.setItem('key2', 'text2');
// localStorage.setItem('key3', 'text3');

// let num = localStorage.length;
// console.log(num);


////////////Получение ключа по номеру в localStorage в JavaScript///////////

/*

Получение ключа по номеру в localStorage в JavaScript

Каждая запись в локальном хранилище имеет свой номер. По номеру можно получить ключ этой записи:
let key = localStorage.key(0);
console.log(key);

Зная ключ, можно получить значение этой записи:
let key = localStorage.key(0);
let val = localStorage.getItem(key);

console.log(val);

*/

//Получите значение записей с различными номерами. 

// let key = localStorage.key(1);
// let val = localStorage.getItem(key);
// console.log(val);


/////////////Перебор хранилища по индексам в JavaScript////////////////
/*
 Объект localStorage не является итерируемым. Тем не менее в нем есть индексы и длина. Это значит, что можно выполнить перебор записей через обычный цикл for со счетчиком:
for (let i = 0; i < localStorage.length; i++) {
	let key = localStorage.key(i);
	let val = localStorage.getItem(key);
	
	console.log(val);
}

*/

//По нажатию на кнопку выведите циклом все записи из локального хранилища. 

// let button = document.querySelector('button');

// button.addEventListener('click', function() {
//    for(let i = 0; i < localStorage.length; i++) {
//       let key = localStorage.key(i);
//       let val = localStorage.getItem(key);
//       console.log(val);
//    }
// });



///////////////Массивы ключей и значений хранилища в JavaScript/////////

/*
 Можно получить массив ключей всех записей из локального хранилища:
let keys = Object.keys(localStorage);

Можно также получить массив значений всех записей из локального хранилища:
let values = Object.values(localStorage);

*/

//По нажатию на кнопку выведите циклом ключи всех записей из локального хранилища. 
// let button = document.querySelector('button');

// button.addEventListener('click', function() {
//    for(let i = 0; i < localStorage.length; i++) {
//     let key = localStorage.key(i);
//    //  let val = localStorage.getItem(key);
//    let values = Object.keys(localStorage);

//     console.log(values);
//    }
// });

//По нажатию на кнопку выведите циклом значения всех записей из локального хранилища. 
// let button = document.querySelector('button');

// button.addEventListener('click', function() {
//    for(let i = 0; i < localStorage.length; i++) {
//     let key = localStorage.key(i);
//     let val = localStorage.getItem(key);
//    let values = Object.values(localStorage);

//     console.log(values);
//    }
// });



/////////////Хранение структур в localStorage в JavaScript./////////////

/*
 В локальном хранилище можно хранить только строки. Однако, есть возможность хранить массивы и объекты - для этого просто можно использовать формат JSON.

Давайте сохраним массив:
let arr = [1, 2, 3, 4, 5];
localStorage.setItem('arr', JSON.stringify(arr));

А теперь получим его обратно:
let str = localStorage.getItem('arr');
let res = JSON.parse(str);

console.log(res);


*/


/*
Даны инпуты и кнопка. По нажатию на кнопку получите тексты всех инпутов в виде массива и сохраните этот массив в локальное хранилище. 

<input type="text">
<input type="text">
<input type="text">
 <button>кнопка</button>
*/

// let button = document.querySelector('button');
// let elems = document.querySelectorAll('input');


// button.addEventListener('click', function() {
//    let arr = [];
//    for(let elem of elems) {
//       arr.push(elem.value);
//    }
//    localStorage.setItem('arr', JSON.stringify(arr));
// });



//Модифицируйте предыдущую задачу. Сделайте так, чтобы при следующем заходе на страницу в инпутах стояли сохраненные в локальном хранилище значения. 

// let button = document.querySelector('button');
// let elems = document.querySelectorAll('input');

// //Возьмем излокального хранилища нашь массив
// let str = localStorage.getItem('arr');

// //Если массив существует
// if(str) {
//    //Мы преобразуем массив из формата джейсон в обычный
//    let res = JSON.parse(str);
//    //Переберем циклом наши инпуты
//    for(let i = 0; i < elems.length; i++) {
//       //В value итого инпута запишем елемент массива 
//       elems[i].value = res[i];
//    }
// }
// button.addEventListener('click', function() {
//    let arr = [];
//    for(let elem of elems) {
//       arr.push(elem.value);
//    }
//    localStorage.setItem('arr', JSON.stringify(arr));
// });





////////Модификация хранимых структур в localStorage в JavaScript///////

/*
 Дан следующий массив с юзерами:
let users = [
	{
		surn: 'surn1',
		name: 'name1',
		age: 31,
	},
	{
		surn: 'surn2',
		name: 'name2',
		age: 32,
	},
	{
		surn: 'surn',
		name: 'name3',
		age: 33,
	},
];

Сохраните его в локальное хранилище. Затем сделайте 3 инпута и кнопку. Пусть в инпуты вводятся фамилия, имя и возраст. По нажатию на кнопку запишите нового юзера в конец сохраненного в хранилище массива. 

<input id="surname" type="text">
<input id="name" type="text">
<input id="age" type="text">
 <button>кнопка</button>
*/

// let users = [
// 	{
// 		surn: 'surn1',
// 		name: 'name1',
// 		age: 31,
// 	},
// 	{
// 		surn: 'surn2',
// 		name: 'name2',
// 		age: 32,
// 	},
// 	{
// 		surn: 'surn3',
// 		name: 'name3',
// 		age: 33,
// 	},
// ];
// //Преобразуем наш массив в строку записав в локальное хранилище
// localStorage.setItem('data', JSON.stringify(users));

// //Получим ссылки на кнопку и инпуты в переменную
// let button = document.querySelector('button');
// let surname =document.querySelector('#surname');
// let name =document.querySelector('#name');
// let age =document.querySelector('#age');

// //Получим нашу строку из хранилища
// let json = localStorage.getItem('data');

// //Преобразуем в массив
// let data = JSON.parse(json);


// button.addEventListener('click', function() {
//    let newUser = {
//       //запишемв ключи объекта значения из инпутов
//       surn: surname.value,
//       name: name.value,
//       age: age.value
//    }
//    //добавим шаблон в наш массив 
//    data.push(newUser);
//    //Запишем в хранилище измененный массив и преобразуем в формат json
//    localStorage.setItem('data', JSON.stringify(data));

//    //Очистим инпуты после клика как данные из инпута попадут в хранилище
//    surname.value = '';
//    name.value ='';
//    age.value = '';
// });


////////////Практика на localStorage в JavaScript////////////////

/*
Сделайте чеклист, представляющий собой список дел. Дела можно добавлять, изменять, удалять и помечать сделанными.

  <input type="text">
  <button>кнопка</button>
*/
// let input = document.querySelector('input');
// let button = document.querySelector('button');

// button.addEventListener('click', function() {
//    let json = localStorage.getItem('data');
//    //получили массив
//    let data = JSON.parse(json);
   
//    //Если в хранилище пусто
//    if(data == null) {
//       //Создадим пустой массив
//       data = [];
//    } 
//    //создадим объект с делами взятыми из инпута
//    let newDelo = {
//       text: input.value,
//       status: false
//    }
//    //запушим сщзданный объект с делом в массив
//    data.push(newDelo);
//    //Запишем преобразованный массив в хранилище
//    localStorage.setItem('data', JSON.stringify(data));

// });
