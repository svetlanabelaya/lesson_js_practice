

///////////////ВРЕМЯ//////////////////////

///////////////////////Работа с объектом Date в JavaScript//////////////


/*
Объект с датой создается следующим образом:

new Date();

let date = new Date();
После проделанной операции переменная date будет представлять собой объект, хранящий в себе текущий момент времени (секунду, минуту, час и так далее).

Используя этот объект с помощью специальных методов мы можем получить нужные нам характеристики времени, например, текущий час, текущий день или текущий месяц.


let date = new Date();

console.log(date.getFullYear()); // год
console.log(date.getMonth());    // месяц //Учтите, что месяц, который возвращает метод getMonth, начинается с нуля - январь нулевой, февраль первый и так далее.
console.log(date.getDate());     // день

console.log(date.getHours());    // часы
console.log(date.getMinutes());  // минуты
console.log(date.getSeconds());  // секунды

*/

//Выведите на экран текущий день, Месяц, год.

// let date = new Date;

// console.log(date.getDate());
// console.log(date.getMonth());
// console.log(date.getFullYear());




//////////Форматирование даты в JavaScript//////////////////

/*
Выведите на экран текущую дату-время в формате 12:59:59 31.12.2014. Используйте для всех частей даты (кроме года) созданную нами функцию для добавления нуля при необходимости.
*/

// function addZero(num) {
//    if(num >= 0 && num <=9) {
//       return '0' + num;
//    } else {
//       return num;
//    }
// }


// let date = new Date;
// console.log(
//    date.getHours() + ':' +
//    date.getMinutes() + ':' +
//    date.getSeconds() + ' ' +
//    addZero(date.getDate()) + '.' +
//    addZero(date.getHours() + 1) + '.' +
//    addZero(date.getFullYear())
// );



/////////////////Смена формата даты в JavaScript//////////////////////


/*
let str = '2025-12-31';
let arr = str.split('-');
console.log(arr); // получим массив ['2025', '12', '31']

Теперь, обращаясь к разным элементам массива по их ключам, сформируем нужную нам строку:

let str = '2025-12-31';
let arr = str.split('-');
let res = arr[2] + '/' + arr[1] + '/' + arr[0];

console.log(res); // получим строку '31/12/2025'


Можно также использовать комбинацию методов split, reverse и join:

let str = '2025-12-31';
let res = str.split('-').reverse().join('/');

console.log(res); // получим строку '31/12/2025'
*/

//Дана дата в формате год-месяц-день. Преобразуйте эту дату в формат день.месяц.год.

// let str = '2026-02-24';
// let res = str.split('-').reverse().join('.');
// console.log(res);




////////////Получения дня недели на JavaScript/////////////////////////

/*
С помощью объекта Date можно также получить номер текущего дня недели. Делается это с помощью метода getDay. Этот метод возвращает числа от 0 до 6-ти, причем неделя начинается с воскресенья и этот день имеет номер 0. Понедельник - это день номер 1, вторник - номер 2 и так далее.

Давайте посмотрим работу метода getDay на примере. Пусть, к примеру, сегодня вторник. Toгда следующий код выведет число 2:

let date = new Date();
console.log(date.getDay());
*/


//Выведите на экран номер текущего дня недели.

// let date = new Date;



//Определите, является ли текущий день недели выходным или рабочим днем.


// if(date.getDay() !== 0 && date.getDay() !== 6) {
//    console.log('Текущий день является рабочим днем');
// } else {
//    console.log('Текущий день Выходной');
// }

//Определите сколько дней осталось до ближайшего воскресенья.
// let date = new Date;

// let dayOfWeek = date.getDay();


// //Вычисляем дни
// let daysLeft = dayOfWeek === 0 ? 0 : 7 - dayOfWeek;

// console.log(daysLeft);


//////////////Вывод частей даты словом в JavaScript

/*
Пусть дан следующий массив:

let months = [
	'янв', 'фев', 'мар', 'апр', 'май', 'июн',
	'июл', 'авг', 'сен', 'окт', 'ноя', 'дек'
];
Выведите с помощью этого массива название текущего месяца.
*/
// let date = new Date;
// let monthnew = date.getMonth();
// let months = [
// 	'янв', 'фев', 'мар', 'апр', 'май', 'июн',
// 	'июл', 'авг', 'сен', 'окт', 'ноя', 'дек'
// ];

// console.log(months[monthnew]);


//////////////Установка времени в объекте Date в JavaScript////

//объект с датой вот таким образом: new Date(), - мы оставляли круглые скобки пустыми. В этом случае мы получали текущий момент времени.

/*
в формате new Date(год, месяц, день, часы, минуты, секунды, миллисекунды) и в этом случае в переменную date запишется не текущий момент времени, а тот, который мы указали в параметрах. При этом при передаче параметром отсчет месяцев начинается с нуля.

Параметры можно опускать с конца. При этом отсутствующие параметры для миллисекунд, секунд и часов считаются равными нулю, а для дней - единице. Год и месяц опускать нельзя.
*/

// let date = new Date(2025, 10, 5); // установим 5 ноября 2025 года
// let day  = date.getDay();
// let days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];

// console.log(days[day]);


//Узнайте, какой день недели был в ваш день рождения.

// let date = new Date(1981, 0, 9);
// let day = date.getDay();
// let days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];

// console.log(days[day]);


///////////////////Получение времени в формате timestamp в JavaScript//


/*
формат timestamp, который в JavaScript показывает количество миллисекунд, прошедшее с 1-го января 1970 года по текущий (или заданный) момент времени.

Существует специальный метод getTime, с помощью которого можно получить время в формате timestamp. Давайте, например, получим текущий момент времени в этом формате:
*/

// let date = new Date();
// console.log(date.getTime());

//Получим заданный момент времени в формате timestamp:

// let date = new Date(2015, 11, 4, 23, 59, 59);
// console.log(date.getTime());


//Выведите на экран timestamp, соответствующий дате 1 января 2025 года.

// let date = new Date(2026, 0, 1);
// console.log(date.getTime());




/////////////Разность между датами в формате timestamp в JavaScript///

//Выведите на экран количество дней, прошедшее между 1 марта 1988 года и 10 января 2000 года.

// let now = new Date(1988, 2, 1);
// let date = new Date(2000, 0, 1);
// let result = date.getTime() - now.getTime();
// console.log(result / (1000 * 60 * 60 * 24));

//Выведите на экран количество месяцев, прошедшее между вашим рождением и текущим моментом времени.

// let now = new Date();
// let date = new Date(1981, 0, 9);

// let result = now.getTime() - date.getTime();

// console.log(result / (1000 * 60 * 60 * 24));


/////Разница между объектами с датой в JavaScript////////////////////

/*
let now  = new Date();
let date = new Date(2015, 4, 25, 12, 59, 59);

let diff = now - date; // вычитаем два объекта с датами друг от друга
console.log(diff);     // увидим разницу в миллисекундах
*/

//Выведите на экран количество миллисекунд, прошедшее между 1 сентября 2000 года и 15 февраля 2010 года.

// let now = new Date(2000, 8, 1);
// let date = new Date(2010, 1, 15);

// let result = date - now;
// console.log(result / (1000 * 60 * 60 * 24 * 365));


// let now = new Date(2000, 8, 1);
// let date = new Date(2010, 1, 15);

// let result = date - now;
// console.log(result / (1000 * 60 * 60 * 24));


// let now = new Date(2000, 8, 1);
// let date = new Date(2010, 1, 15);

// let result = date - now;
// console.log(result / (1000 * 60 * 60 * 24));


//Модифицируйте предыдущую задачу так, чтобы на экран выводилась разница в месяцах.

// let now = new Date(2000, 8, 1);
// let date = new Date(2010, 1, 15);

// let result = date - now;
// console.log(result / (1000 * 60 * 60 * 24 * 30));

//Модифицируйте предыдущую задачу так, чтобы на экран выводилась разница в годах.
// let now = new Date(2000, 8, 1);
// let date = new Date(2010, 1, 15);

// let result = date - now;
// console.log(result / (1000 * 60 * 60 * 24 * 365));


///Автоматическая корректировка дат в JavaScript//////////

//Определите, в какую дату JavaScript преобразует следующий момент времени:

// let date = new Date(2018, 1, 35);
// console.log(date); // 7 марта

// let date = new Date(2018, 15, 1);
// console.log(date)

// let date = new Date(2018, 3, 31);
// console.log(date); 

// let date = new Date(2018, 1, 31);
// console.log(date); // какая дата будет?


// let date = new Date(2018, 12, 33);
// console.log(date); // какая дата будет?

// let date = new Date(2018, 33, 33);
// console.log(date); // какая дата будет?

// let date = new Date(2018, 5, 0);
// console.log(date); // какая дата будет?

// let date = new Date(2018, 0, 0);
// console.log(date); // какая дата будет?

// let date = new Date(2018, -12, -33);
// console.log(date); // какая дата будет?




////////Нахождение последнего дня месяца в JavaScript////////////////

/*
Для примера определим количество дней в марте 2020 года. Для этого при создании объекта с датой укажем нулевой день апреля (он имеет номер 3, так как нумерация месяцев с нуля):

let date = new Date(2020, 3, 0);
console.log(date.getDate());
*/


//Оформите этот способ решения проблемы в виде функции, которая параметрами будет принимать месяц и год и возвращать номер последнего дня этого месяца.

// function func(year, month, day) {
//    let date = new Date(year, month, day);
//    return date.getDate();
// }
// console.log(func(2020, 5, 0));

//Определите, какой день недели будет в последнем дне пятого месяца 2025 года.

// function func(year, month, day) {
//    let date = new Date(year, month, day);
//    return date.getDay();
// }
// console.log(func(2025, 5, 0));

/////////Определение високосного года в JavaScript//////////////////

// let date = new Date(2020, 2, 0);

// if (date.getDate() == 29) {
// 	console.log('високосный');
// } else {
// 	console.log('обычный');
// }

//Сделайте функцию isLeap, которая параметром будет принимать год и возвращать true, если этого год високосный, и false - если нет.

// function isLeap(year) {
//    let date = new Date(year, 2, 0);
//    return date.getDate() === 29;
// }

// console.log(isLeap(2028));


///////////Проверка корректности даты в JavaScript////////////////

/*
Сделайте функцию checkDate, которая будет выполнять описанную проверку. Пусть функция возвращает true, если дата корректна и false, если нет. Пример работы этой функции для 31 января и 32 января:

console.log(checkDate(2025, 0, 31)); // выведет true
console.log(checkDate(2025, 0, 32)); // выведет false
*/




// function checkDate(year, month, day) {

//    let date = new Date(year, month, day);

//    if (date.getFullYear() == year && date.getMonth() == month && date.getDate() == day) {
//      return true;
//    } else {
//       return false;
//    }
// }
// console.log(checkDate(2025, 0, 30)); // выведет true
// console.log(checkDate(2025, 0, 32)); // выведет false


////////////Получение дня текущего года в JavaScript//////////


//Определите, какой день недели будет 31 декабря текущего года.

// let now = new Date();
// let date = new Date(now.getFullYear(), 11, 31);

// console.log(date.getDay());



////День следующего или предыдущего месяца/////////////

// let now = new Date();
// let date = new Date(now.getFullYear(), 0 - 1, 1);

// console.log(date.getDay());


//Определите, какой день недели был месяц назад в такой же день месяца, как сегодня.

// let now = new Date();
// let date = new Date(now.getFullYear(), 1, 1);

// console.log(date.getDay());


//День следующего или предыдущего года

//Определите, какой день недели будет 31 декабря следующего года.

// let now = new Date();
// let date = new Date(now.getFullYear() + 1, 11, 31);
// console.log(date.getDay());

//Определите, какой день недели будет через год в такую же дату, как сегодня.
// let now = new Date();
// let date = new Date(now.getFullYear() + 1, 2, 1);
// console.log(date.getDay());



//Определите, какой день недели был год назад в такую же дату, как сегодня.

// let now = new Date();
// let date = new Date(now.getFullYear() - 1, 2, 1);
// console.log(date.getDay());





////////Разность моментов///////////////////////////////////

//Определите, сколько дней между 1 января и 10 сентября текущего года.

// let date1 = new Date(2026, 8, 10);
// let date2 = new Date(2026, 0, 1);
// console.log(date1 - date2);

//Определите, сколько дней между 20 числом текущего месяца и 10 числом следующего.

// let date1 = new Date(2026, 3, 20);
// let date2 = new Date(2026, 2, 1);
// console.log((date1 - date2) / (1000 * 60 * 60 *24));


//////////////////Момент времени дня//////////////////////

//Определите, сколько часов прошло между вчерашним полднем и текущим моментом времени.

// let now1 = new Date();
// let date1 = new Date(now1.getFullYear(), now1.getMonth(), now1.getDate() - 1, 12);

// let now2 = new Date();
// let date2 = new Date(now2.getFullYear(), now2.getMonth(), now2.getDate(), 16, 29, 30);
// console.log((date2 - date1) / (1000 * 60 * 60)); 





////////////////Начало дня в JavaScript///////////////////////

//Определите, сколько часов прошло между началом дня и текущим моментом времени.


// let now1 = new Date();
// let date1 = new Date(now1.getFullYear(), now1.getMonth(), now1.getDate(), 0, 0, 0);

// let now2 = new Date();
// let date2 = new Date(2026, 2, 1, 16, 52, 0);
// console.log((date2 - date1) / (1000 * 60 * 60));



///////////////Конец дня в JavaScript////////////////////////////


//Определите, сколько часов осталось до конца дня.

// let now2 = new Date();
// let date2 = new Date(2026, 2, 1, 17, 0, 0); //Текущее время


// let now1 = new Date();
// let date1 = new Date(now1.getFullYear(), now1.getMonth(), now1.getDate() + 1); //

// console.log((date1 - date2) / (1000 * 60 * 60));





////////Циклическая проверка моментов времени в JavaScript//////////


// let now  = new Date();
// let year = now.getFullYear();

// for (let month = 0; month <= 11; month++) {
// 	let date = new Date(year, month, 1);
	
// 	if (date.getDay() == 0) {
// 		console.log(year + '-' + month + '-1');
// 	}
// }


//Рассмотрите промежуток от 2000 года до текущего года. Определите, сколько раз 1 января в этом промежутке попадало на выходной день, то есть на субботу или на воскресенье.

// let now = new Date();
// let year = new Date(year.getFullYear());

// for(let YearC = 2000; YearC <= year; YearC++) {
//    let date = new Data(2026, 0, 1);


// }


/////////////////Практика на получение моментов времени в JavaScript//

//////////Строковое сравнение дат на JavaScript/////////////////////

/*
Напишите код, который сравнит две приведенные ниже даты и выведет сообщение о том, какая из них больше:

let date1 = '2020-11-30';
let date2 = '2020-12-01';
*/

// let date1 = '2020-11-30';
// let date2 = '2020-12-01';

// console.log(date1 > date2);


//////////Сравнение даты без года в JavaScript/////////////////

/*
Напишите код, который сравнит две приведенные ниже даты и выведет сообщение о том, какая из них больше:

let date1 = '09-21';
let date2 = '09-23';
*/

// let date1 = '09-21';
// let date2 = '09-23';

// console.log(date1 < date2);




///////////////Попадание даты в промежуток////////////////////////

//Дана дата, содержащая месяц и день. Определите знак Зодиака, на которую приходится эта дата.

// let date = '01-09';

// if(date >= '03-21' && date <= '04-19') {
//    console.log('Овен');
// }
// if(date >= '04-20' && date <= '05-20') {
//    console.log('Телец');
// }
// if(date >= '05-21' && date <= '06-21') {
//    console.log('Близнецы');
// }
// if(date >= '06-22' && date <= '07-22') {
//    console.log('Рак');
// }
// if(date >= '07-23' && date <= '08-22') {
//    console.log('Лев');
// }
// if(date >= '08-23' && date <= '09-22') {
//    console.log('Дева');
// }
// if(date >= '09-24' && date <= '10-23') {
//    console.log('Весы');
// }
// if(date >= '10-24' && date <= '11-21') {
//    console.log('Скорпион');
// }
// if(date >= '11-22' && date <= '12-21') {
//    console.log('Стрелец');
// }
// if(date >= '12-22' || date <= '01-20') {
//    console.log('Козерог');
// }
// if(date >= '01-21' && date <= '02-20') {
//    console.log('Водолей');
// }
// if(date >= '02-21' && date <= '03-20') {
//    console.log('Рыбы');
// }



//////////Сравнение объектов с датами в JavaScript//////////

//Получите объект с датой, содержащий текущий момент времени. Получите объект с датой, содержащий полдень текущего дня. Сравните два этих объекта и определите, был ли уже полдень или нет.

// let now = new Date();
// let date = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 12, 0, 0);



// if(now >= date) {
//   console.log('Полдень уже был');
// } else {
//    console.log('Полдень позади');
// }

//Получите объект с датой, содержащий текущий момент времени. Получите объект с датой, содержащий 15 число текущего месяца. Сравните два этих объекта и определите, прошла ли уже половина месяца или нет.

// let now = new Date();
// let date = new Date(now.getFullYear(), now.getMonth(), 16);

// if(now < date) {
//    console.log('Половина месяца еще не наступила');
// } else {
//    console.log('Половина месяца наступила');
// }



/////////Практика на получение моментов времени в JavaScript////


//Определите, сколько секунд прошло с начала дня до настоящего момента времени.

// let now = new Date();
// let date = new Date(2026, 2, 3, 0, 0, 0);
// console.log((now - date));



//Определите, сколько секунд осталось до конца дня.

// let now = new Date();
// let date = new Date(2026, 2, 3, 24, 0, 0);
// console.log(date - now);


//Определите, сколько дней осталось до нового года.

// let now = new Date();
// let date = new Date(2026, 11, 31, 24, 0, 0);
// console.log(date - now);

//Определите, сколько пятниц 13-е в текущем году.

// let now = new Date(); //текущий дат
// let year = now.getFullYear();//текущий год

//  for(let month = 0; month <= 11; month++) { // перебор каждого месяца 0-11
//    let date = new Date(year, month, 13);
   
//    if(date.getDay() == 5) { //если деньнедели равен пятнице
//       console.log(year + '-' + (month + 1) + '-13');
//    }
//  }

//Определите, какой год был 3 месяца назад.

// let date = new Date();
// let now = new Date(2026, 2 - 3, 5);
// console.log(now);

//Определите, какой день недели будет в последнем дне текущего месяца.
//  let year = 2026;
//  let month = 3;
// let date = new Date(year, month + 1, 0);
// console.log(date.getDay());



//Напишите код, который будет определять, високосный ли текущий год.

// let date = new Date(2020, 2, 0);


// if(date.getDate() === 29) {
//    console.log('Высокосный');
// } else {
//    console.log('Обычный');
// }

//Напишите код, который будет находить предыдущий високосный год.

//  let date = new Date(2020 - 1, 2, 0);


// if(date.getDate() === 29) {
//    console.log('Высокосный');
// } else {
//    console.log('Обычный');
// }

//Напишите код, который будет находить следующий високосный год.

// let year = new Date().getFullYear(); // Берем текущий год (2026)

// while (true) {
//     year++; // Начинаем проверку со следующего года
//     let date = new Date(year, 2, 0); // 0-е марта = последний день февраля

//     if (date.getDate() === 29) {
//         console.log('Следующий високосный год: ' + year);
//         break; // Нашли 2028-й и остановились
//     }
// }