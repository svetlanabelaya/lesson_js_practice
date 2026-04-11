////////////////Коллекции Map///////////////////////////

//////Коллекции Map в JavaScript////////////////////////
/////////////Введение///////////////////////////////////

/*
 Коллекции Map представляют собой объекты, в которых в качестве ключей могут выступать как примитивы, так и объекты.

Давайте попробуем на примере. Для начала создадим коллекцию с помощью следующей команды:
let map = new Map;

После этого в коллекцию можно будет добавлять элементы с помощью метода set и получать их с помощью метода get.

Давайте попробуем. Пусть в качестве ключей мы хотим сделать два массива:
let arr1 = [1, 2];
let arr2 = [3, 4];

Присвоим нашим ключам некие значения:
map.set(arr1, 'data1');
map.set(arr2, 'data2');

А теперь прочитаем наши значения по ключам:
console.log(map.get(arr1));
console.log(map.get(arr2));

  
*/

//Пусть даны 3 массива. Создайте коллекцию Map, сделайте ключами коллекции эти массивы, а значениями - какие-нибудь строки. 

// //массивы в качестве ключей
// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];
// let arr3 = [7, 8, 9];

// //создвдим коллекцию map

// let map = new Map;

// //присвоим нашим ключам значения
// map.set(arr1, 'one');
// map.set(arr2, 'two');
// map.set(arr3, 'three');

// console.log(map.get(arr1));
// console.log(map.get(arr2));
// console.log(map.get(arr3));


//Пусть даны 3 объекта и 3 массива. Создайте коллекцию Map, сделайте ключами коллекции объекты, а значениями - соответствующие массивы. 

//ключи 
// let obj1 = {}
// let obj2 = {}
// let obj3 = {}

// //Значения
// let arr1 = ['Svetlana', 45, 200000];
// let arr2 = ['Alexandr', 43, 50000];
// let arr3 = ['Timofey', 11, 100000];

// //создадим коллекцию map
// let map = new Map;

// //присвоим ключам значения
// map.set(obj1, arr1);
// map.set(obj2, arr2);
// map.set(obj3, arr3);

// console.log(map.get(obj1));
// console.log(map.get(obj2));
// console.log(map.get(obj3));


/////////////Полезные возможности коллекций Map///////////////

/*
 Коллекции Map имеют ряд полезных свойств и методов. Давайте их разберем.
Размер коллекции

В свойстве size содержится размер коллекции:
console.log(map.size);
Проверка наличия ключа

Проверить наличие ключа в коллекции можно с помощью метода has:
console.log(map.has(arr1));
Удаление по ключу

Удалить элемент из коллекции можно с помощью метода delete:
map.delete(arr1);
Очистка коллекции

Очистить всю коллекцию можно с помощью метода clear:
map.clear();

*/

//////////////Перебор коллекций Map циклом///////////////////////

/*
 Пусть у нас есть некоторая коллекция Map:
let map = new Map;

let arr1 = [1, 2];
let arr2 = [3, 4];

map.set(arr1, 'data1');
map.set(arr2, 'data2');

Эту коллекцию можно перебрать с помощью цикла for-of:
for (let elem of map) {
	
}

При этом в elem будут попадать массивы пар ключ-значение. В первом элементе будет ключ, а во втором - значение:
for (let elem of map) {
	console.log(elem); // сначала 
		[[1, 2], 'data1'], потом [[3, 4], 'data2'] 
}

Можно отделить ключи и значения с помощью деструктуризации:
for (let [key, elem] of map) {
	console.log(key);
	console.log(elem);
}

*/
// let map = new Map;

// let arr1 = [1, 2];
// let arr2 = [3, 4];

// map.set(arr1, 'data1');
// map.set(arr2, 'data2');

// // for (let elem of map) {
// // 	console.log(elem); // сначала 
// // 		//[[1, 2], 'data1'], потом [[3, 4], 'data2'] 
// // }

// for (let [key, elem] of map) {
// 	console.log(key);
// 	console.log(elem);
// }

///////////Ключи и значения в коллекциях Map////////////////
/*
 Чтобы получить только ключи или только значения, существуют специальные методы. Для получения значений метод values:
let values = map.values();

Аналогично с ключами:
let keys = map.keys();

Существует также метод entries, возвращает набор пар ключ-значение:
let entries = map.entries();
*/

//Пусть дана коллекция Map. Получите массив ее ключей и переберите их циклом for-of. 

// let map = new Map;

// let arr1 = [1, 2];
// let arr2 = [3, 4];
// let arr3 = [5, 6];

// map.set(arr1, 'svetlana');
// map.set(arr2, 'alexandr');
// map.set(arr3, 'timofey');

// let keys = [...map.keys()];
// for(let elem of keys) {
//   console.log(elem);
// }


// let map = new Map;

// let arr1 = [1, 2];
// let arr2 = [3, 4];
// let arr3 = [5, 6];

// map.set(arr1, 'svetlana');
// map.set(arr2, 'alexandr');
// map.set(arr3, 'timofey');

// let val = [...map.values()];
// for(let elem of val) {
//   console.log(elem);
// }


// let map = new Map;

// let arr1 = [1, 2];
// let arr2 = [3, 4];
// let arr3 = [5, 6];

// map.set(arr1, 'svetlana');
// map.set(arr2, 'alexandr');
// map.set(arr3, 'timofey');

// let entry = [...map.entries()];
// for(let [key, elem] of entry) {
//  console.log(key);
//  console.log(elem);
// }







///////////////////Применение коллекций Map//////////////////
/*
 Пусть у нас есть абзацы:
<p>aaa</p>
<p>bbb</p>
<p>ccc</p>
<p>ddd</p>
<p>eee</p>

Давайте сделаем так, чтобы по клику на каждый абзац ему в конец записывался его порядковый номер в списке абзацев. Решим задачу через Map.

Приступим. Для начала получим наши абзацы в переменную:
let elems = document.querySelectorAll('p');

Создадим новую коллекцию Map:
let map = new Map;

Заполним нашу коллекцию так, чтобы ключами были наши абзацы, а их значениями - порядковые номера:
let i = 1;
for (let elem of elems) {
	map.set(elem, i++);
}

Переберем абзацы циклом и повесим на них обработчик клика:
for (let elem of elems) {
	elem.addEventListener('click', function() {
		
	});
}

Давайте теперь по клику будем добавлять порядковый номер в конец текста абзаца. При этом будем получать этот номер из нашей коллекции:
for (let elem of elems) {
	elem.addEventListener('click', function() {
		this.textContent += map.get(this);
	});
}

*/
// let elems = document.querySelectorAll('p');
// let map = new Map;

// let i = 1;
// for (let elem of elems) {
// 	map.set(elem, i++);
// }

// for (let elem of elems) {
// 	elem.addEventListener('click', function() {
// 		this.textContent += map.get(this);
// 	});
// }




/*
Даны инпуты. Переберите эти инпуты циклом и создайте коллекцию Map, ключами в которой будут инпуты, а значением - их порядковый номер на странице. Сделайте так, чтобы по клику на любой инпут ему в value записывался его порядковый номер. 

   <input type="text">
   <input type="text">
   <input type="text">
   <input type="text">
   <input type="text">
*/
// let elems = document.querySelectorAll('input');

// let map = new Map;

// let i = 1;
// for(let elem of elems) {
//   map.set(elem, i++);
// }

// for(let elem of elems) {
//   elem.addEventListener('click', function() {
//     this.value += map.get(this);
//   });
// }

/*
Даны инпуты. В каждый инпут можно ввести число. Пусть по нажатию на Enter инпут запоминает введенное число. Сделайте так, чтобы по потери фокуса в инпуте в консоль выводился массив всех введенных ранее в инпут чисел. 
*/

//получим ссылку на инпут
// let elems = document.querySelectorAll('input'); 
// let map = new Map;

// for(let elem of elems) {
//   elem.addEventListener('keydown', function(event) {
//     if(event.key == 'Enter') {
//       if(!map.has(elem)) {
//         map.set(elem, []);
//       }
//       map.get(elem).push(this.value);
//       this.value = '';
//     }
//   });

//   elem.addEventListener('blur', function() {
//     if(map.has(elem)) {
//       console.log(map.get(elem));
//     } else {
//       console.log([]);
//     }
//   });
// }

/*
Задача:
Даны инпуты. По нажатию на Enter в инпут добавляется число. В Map для каждого инпута хранится сумма всех введенных в него чисел. По клику на инпут выводи в консоль его текущую сумму.
Подсказка:
Здесь, как и в задаче с восклицательными знаками, нужно будет:

    Взять старую сумму из Map (get).
    Прибавить к ней новое число.
    Записать обратно (set).
*/

// let elems = document.querySelectorAll('input');
// let map = new Map;

// for(let elem of elems) {
//   elem.addEventListener('keydown', function(event) {
//     if(event.key == 'Enter') {
//       let val = Number(this.value);

//       if(!map.has(elem)) {
//         map.set(elem, val);
//       } else {
//         let sum = map.get(elem);
//         map.set(elem, sum + val);

//       }
//       this.value = '';
//     }
//   });


//   elem.addEventListener('click', function() {
//     console.log(map.get(this));
//   });
// }
  

/*
Дан массив имен: ['Svetlana', 'Alex', 'Timofey', 'Svetlana', 'Alex'].
Создай Map, где ключом будет имя, а значением — количество раз, которое оно встретилось в массиве.
*/

// let naims = ['Svetlana', 'Alex', 'Timofey', 'Svetlana', 'Alex'];

// let map = new Map;

// for(let name of naims) {
//   //Если в map ещё нет такого имени !map.has(name)
//   if(!map.has(name)) {
//  //Чтобы записать имя с числом, мы используем метод .set(ключ, значение) set это добавить элемент
//     // 1. Если имени нет — просто записываем его и ставим 1
//    console.log( map.set(name, 1));; 
//   } else {
//     // 2. Если имя есть — достаем старое число
//     let count = map.get(name);
//      // И записываем обратно это же имя, но число увеличиваем
//     console.log(map.set(name, count + 1));
//   }
// }
/*
Дан массив цен: [100, 200, 100, 300].
Создай Map, где ключом будет цена, а значением — слово "товар". (Тут даже считать ничего не надо, просто записывать).
*/
// let prices = [100, 200, 100, 300];
// let map = new Map();

// for(let price of prices) {
//    // Просто запиши каждую цену в Map со значением 'товар'
//    map.set(price, 'товар');
//    // Подсказка: map.set(ключ, значение)
// }

/*
Задача №2
Дан массив: ['яблоко', 'банан', 'яблоко'].
Нужно посчитать, сколько каких фруктов.
*/

// let fruts = ['яблоко', 'банан', 'яблоко'];
// let map = new Map;

// for(let frut of fruts) {
//   //если такого фрукта нет то добавим 1
//   if(!map.has(frut)) {
//     map.set(frut, 1);
//   }else{
//     //если фрукт есть получим старое значение map.get(frut)
//     //если такой фрукт есть сщздадим счетчик
//     let count = map.get(frut);
//     //запишем (добавим) обратно этот фрукт но увеличим значение
//     map.set(frut, count + 1);
//   }
//   console.log(map);
// }

/*
Задача №3: «Учёт постов»
Представь, что ты делаешь админку для блога. У тебя есть массив категорий статей, которые прочитал пользователь:
let categories = ['JS', 'HTML', 'JS', 'CSS', 'JS', 'HTML', 'React'];

Создай Map, чтобы посчитать, сколько раз каждая категория встречается в массиве.
Но есть условие: если категория встречается больше 2-х раз, выведи в консоль сообщение: "Категория [название] очень популярна!".
*/
// let categories = ['JS', 'HTML', 'JS', 'CSS', 'JS', 'HTML', 'React'];
// let map = new Map;

// for(let category of categories) {
//   //Если такой категории нет то добавим единицу
//   if(!map.has(category)) {
//     map.set(category, 1);
//   } else {
//     //если такая категория есть, то будем считать сколько раз она попадается
//     //сначало возьмем строе значение данные запишем их в счетчик
//     let count = map.get(category);
//     //добавим обратно эту же категорию и будем увеличивать значение
//     map.set(category, count + 1);
//   }
// }

// for(let [name, count] of map) {
//   //если категория встречается больше двух раз
//   if(count > 2) {
//   console.log(`Категория ${name} очень популярна!`);
//   }
// }

/*
Задача: «Список дел по дням недели»
У тебя есть кнопки с названиями дней недели (Пн, Вт, Ср). Нужно сделать так, чтобы при клике на день недели выводилось окно prompt, куда ты вводишь задачу. Map должен запоминать все задачи для каждого дня.
*/

/*
Задача: «Список дел по дням недели»
У тебя есть кнопки с названиями дней недели (Пн, Вт, Ср). Нужно сделать так, чтобы при клике на день недели выводилось окно prompt, куда ты вводишь задачу. Map должен запоминать все задачи для каждого дня.
Условие:

По клику на кнопку — вводим текст задачи через prompt.
Map должен хранить массив строк для каждой кнопки.
По двойному клику (dblclick) на кнопку — выводи в консоль весь список задач для этого дня.

<button>Понедельник</button>
   <button>Вторник</button>
   <button>Среда</button>
   <button>Четверг</button>
   <button>Пятница</button>
   <button>Суббота</button>
   <button>Воскресенье</button>
*/
