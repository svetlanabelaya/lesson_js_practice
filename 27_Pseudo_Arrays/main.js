//////////////////////Псевдомассивы в JavaScript//////////////////////
/*

Псевдомассивы в JavaScript

Кроме массивов в JavaScript есть объекты, которые похожи на массивы, но не поддерживают все их возможности. Такие объекты называются псевдомассивами.

Псевдомассивы чаще всего возникают при работе с DOM элементами.
*/




///////////////////Сходство с массивами в JavaScript//////////////////
/*
Индексы

К элементам псевдомассива, как и к элементам обычного массива, можно обратиться по их номеру:
console.log(elems[0]);
console.log(elems[1]);
console.log(elems[2]);


Длина

Можно также узнать количество элементов с помощью свойства length:
console.log(elems.length);


Цикл

Можно перебрать элементы псевдомассива циклом:
for (let elem of elems) {
	console.log(elem);
}

*/

/*
 Даны абзацы:
let elems = document.querySelectorAll('p');

Проверьте для переменной elems описанные возможности псевдомассивов. 
*/

// let elems = document.querySelectorAll('p')

// for(let elem of elems) {
//    // console.log(elem);
// //    console.log(elems.length);
// //    console.log(elems[0]);
// //    console.log(elems[1]);
// //    console.log(elems[2]);
// // 
// }



//////////////Отличия от массивов в JavaScript///////////////////

/*
    Хотя псевдомассивы и похожи на массивы, но все же это обычные объекты. У них нет методов массивов, таких как map, join, slice.

   К примеру, если попытаться взять срез из DOM элементов, то это так просто не получится:
   console.log(elems.slice(1, 3)); // будет ошибка
*/

//Проверьте, будут ли работать методы массивов для переменной elems. 
// let elems = document.querySelectorAll('p');

// elems.forEach((ind) => {
//    console.log(ind + 2);
// });
// //нет



/////////////////Проверка на массив в JavaScript///////////////////

/*
 Существует специальный метод Array.isArray, с помощью которого можно проверить переменную на то, содержит ли она настоящий массив или нет. Давайте проверим работу метода.

Массив:
let test = [1, 2, 3];
let res  = Array.isArray(test);

console.log(res); // выведет true

Объект:
let test = {a: 1, b: 2, c: 3};
let res  = Array.isArray(test);

console.log(res); // выведет false

Примитив:
let test = 'abcde';
let res  = Array.isArray(test);

console.log(res); // выведет false

Псевдомассив:
let test = document.querySelectorAll('p');
let res  = Array.isArray(test);

console.log(res); // выведет false
*/

//Дан двухмерный массив: 

// let test = [
// 	[1, 2, 3],
// 	{a: 1, b: 2, c: 3},
// 	[3, 4, 5],
// 	{x: 1, y: 2, z: 3},
// ];

// for(let elem of test) {
//    let res = Array.isArray(elem);
//    for(let elemAr of elem) {
//       let res2 = Array.isArray(elemAr);
//       console.log(res2);
//    }
   
//    console.log(res);
// }





////////Преобразование к массиву в JavaScript//////////////////////

/*
 Пусть у нас есть псевдомассив абзацев:
let elems = document.querySelectorAll('p');

Давайте преобразуем его в обычный массив.
Способ первый

Самое очевидное, что можно сделать, это перебрать наш псевдомассив циклом, формируя в этом цикле новый массив:

let arr = [];

for (let elem of elems) {
	arr.push(elem);
}

Способ второй

Можно воспользоваться деструктуризацией:
let arr = [...elems];

Способ третий

Можно воспользоваться методом Array.from:
let arr = Array.from(elems);

*/

//Каким-нибудь способом получите псевдомассив элементов. Преобразуйте его в массив тремя описанными способами. 

// let elems = document.querySelectorAll('p');

//получение массива методомдеструктуризации
// let arr = [...elems];
// console.log(arr);


//Метод frray.From()

// let arr = Array.from(elems);
// console.log(arr);

// с помощью цикла сформировать массив
// let arr = [];
// for(let elem of elems) {
//    arr.push(elem);
// }
// console.log(arr);



//С помощью метода slice получите все абзацы, кроме первого и последнего.


// let elems = document.querySelectorAll('p');

// let arr = [...elems]; //получим массивиз элементов

// console.log(arr.slice(1, 5));





/////////////Типы псевдомассивов в JavaScript///////////////////////

/*
 Псевдомассивы бывают различных типов. Тип зависит от способа получения.

В следующем примере мы получим коллекцию одного типа:
let elems = document.querySelectorAll('p');
console.log(elems); // NodeList

А следующем примере - коллекцию другого типа:
let elems = document.getElementsByTagName('p');
console.log(elems); // HTMLCollection
*/

//Проверьте, какой тип коллекции будет в свойстве childNodes. 

// let elems = document.querySelectorAll('p');
// let node = elems[0].childNodes;
// console.log(node);


//Проверьте, какой тип коллекции будет в свойстве children. 

// let div =document.querySelector('div');
// let elems = div.children;
// console.log(elems);


//Проверьте, какой тип коллекции будет получен через метод getElementsByClassName. 

// let elems = document.getElementsByClassName('.new');
// console.log(elems);



//////////////Разница между типами псевдомассивов в JavaScript////////////

/*
 Разница между двумя типами псевдомассивов в различном поведении при изменении DOM элементов. Пусть, к примеру, мы получили коллекцию абзацев в виде HTMLCollection и в виде NodeList. Затем мы создадим и добавим еще один абзац в наш DOM. В этом случае он автоматически появится в HTMLCollection, но коллекция NodeList останется без изменений.

   Давайте посмотрим на примере. Пусть у нас будет див, а в нём абзацы. Получим наш див и одни и те же абзацы в виде коллекций двух разных типов:
   let parent = document.querySelector('div');
   let elems1 = document.getElementsByTagName('p'); // HTMLCollection
   let elems2 = document.querySelectorAll('p');     // NodeList

   Добавим еще один абзац в наш див:
   let p = document.createElement('p');
   parent.append(p);

   В результате одна из коллекций изменится, а вторая - нет:
   console.log(elems1); // 4 абзаца - с новым
   console.log(elems2); // 3 начальных абзаца
*/

//Проверьте, как будет вести себя свойство children при добавлении нового элемента. 
// let div = document.querySelector('div');
// let elem1 = document.getElementsByTagName('p');
// let elem2 = document.querySelectorAll('p');

// //Добавим еще абзац в нашь див
// let p = document.createElement('p');
// div.append(p);

// let elems = div.children;
// console.log(elems);//htmlcollection добавит новый абзац

//Проверьте, как будет вести себя свойство childNodes при добавлении нового элемента. 

// let div = document.querySelector('div');
// let elem1 = document.getElementsByTagName('p');
// let elem2 = document.querySelectorAll('p');

// //Добавим еще абзац в нашь див
// let p = document.createElement('p');
// div.append(p);

// let nodes  = div.childNodes;
// console.log(nodes);//nodeList


/*
Если кратко подытожить ваш тест:
childNodes (NodeList) — «живая» коллекция, видит всё (текст, комменты, элементы).
children (HTMLCollection) — «живая» коллекция, видит только теги.
querySelectorAll (NodeList) — статичный «снимок», сам не обновляется.
*/
