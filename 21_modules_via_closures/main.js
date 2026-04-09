
/////////Модули через замыкания///////////////

/////////////Конфликты переменных в JavaScript//////////////
/*
В реальном сайте у вас чаще всего будет несколько файлов с вашими скриптами, кроме того, вы будете подключать какие-то сторонние плагины. В этом случае переменные и функции одного файла могут конфликтовать с переменными и функциями другого файла. 
*/




//////////Модули через замыкания в JavaScript///////////////
/*
 Описанная выше проблема характерна для любого языка программирования. В качестве решения применяют так называемые модули.

Модуль представляет собой некую конструкцию, сделанную так, чтобы переменные и функции этой конструкции были видны только внутри нее и не мешали никому снаружи.

В JavaScript существуют несколько типов модулей. Самые простые модули через замыкания создаются с помощью вызова функции на месте

 Переменные и функции, созданные в таком модуле, не будут видны снаружи этого модуля:
;(function() {
	let str = 'переменная модуля';
	
	function func() {
		alert('функция модуля');
	}
})();

// Тут переменные и функции модуля недоступны:
alert(str);
alert(func);

*/

/////////////////Практическое применение////////////////////////

/*
<div id="div1">10</div>
<div id="div2">10</div>

Давайте сделаем так, чтобы по клику по первому диву его значение возводилось в квадрат, а по клику по второму диву - в куб. 


;(function() {
   let elem = document.querySelector('#div1');

   function func(num) {
      return num * num;
   }

   elem.addEventListener('click', function() {
      this.textContent = func(elem.textContent);
   });
})();

;(function() {
   let elem = document.querySelector('#div2');

   function func(num) {
      return num * num * num;
   }
   elem.addEventListener('click', function() {
      this.textContent = func(elem.textContent);
   });
})();
 
 Теперь в каждом из модулей мы можем использовать любые переменные и функции, не боясь того, что они будут конфликтовать с другими переменными и функциями нашего скрипта.

Например, оба элемента мы храним в переменной elem - каждый в своей переменной своего модуля. Если бы модулей здесь не было, пришлось бы вводить разные переменные для хранения наши элементов. А с модулями мы можем спокойно использовать нашу переменную, не боясь того, что кто-то захочет также использовать эту переменную. 
*/




//////Передача параметров в модуль через замыкания в JavaScript////////

/*
 Хорошей практикой считается не зашивать какие-то значения в модуль, а передавать их параметром самого модуля (то есть параметром вызывающейся на месте функции):

;(function(arg1, arg2) { // параметры попадают в переменные
	
})(1, 2); // передаем какие-то параметры

Давайте посмотрим на примере. Пусть у нас есть див с числом и кнопка:
<div id="div">3</div>
<button id="btn">click me</button>

 Пусть у нас также есть некоторый модуль:
;(function() {
	let div = document.querySelector('#div');
	let btn = document.querySelector('#btn');
	
	function func(num) {
		return num * num;
	}
	
	btn.addEventListener('click', function() {
		div.textContent = func(div.textContent);
	});
})();

Как вы видите, селекторы наших элементов жестко зашиты в коде модуля. Более удачным решением будет передать их параметрами модуля - так в дальнейшем мы легко сможем их изменить. Исправим наш модуль: 
*/

// ;(function (selector1, selector2){
//    let div = document.querySelector('#div');
//    let btn = document.querySelector('#btn');

//    function func(num) {
//       return num * num;
//    }

//    btn.addEventListener('click', function() {
//       div.textContent = func(div.textContent);
//    });
// })('#div', '#div');

/*
Дана кнопка и три инпута, в которые вводятся числа. По нажатию на кнопку выведите в консоль сумму введенных чисел. Реализуйте задачу с помощью модуля.

   <input id="input1" type="text">
   <input id="input2" type="text">
   <input id="input3" type="text">
   <button id="btn">click me</button>
*/

// ;(function(selector1, selector2, selector3, selector4) {
//    let input1 = document.querySelector(selector1);
//    let input2 = document.querySelector(selector2);
//    let input3 = document.querySelector(selector3);
//    let btn = document.querySelector(selector4);

//    function func(num1, num2, num3) {
//       console.log(num1 + num2 + num3);
//    }

//    btn.addEventListener('click', function() {
//       this.value = func(Number(input1.value), Number(input2.value), Number(input3.value));
//    });
// })('#input1', '#input2', '#input3', '#btn');





///Передача родительского элемента в модуль через замыкания в JavaScript
/*
 Пусть у нас есть следующие элементы:
<div id="div1">1</div>
<div id="div2">2</div>
<div id="div3">3</div>
<div id="res"></div>

<button id="btn">click me</button>

Пусть с этими элементами работает следующий модуль:
;(function(selector1, selector2, selector3, selector4, selector5) {
	let div1 = document.querySelector(selector1);
	let div2 = document.querySelector(selector2);
	let div3 = document.querySelector(selector3);
	let res  = document.querySelector(selector4);
	let btn  = document.querySelector(selector5);
	
	btn.addEventListener('click', function() {
		let num1 = Number(div1.textContent);
		let num2 = Number(div2.textContent);
		let num3 = Number(div3.textContent);
		
		res.textContent = num1 + num2 + num3;
	});
})('#div1', '#div2', '#div3', '#res', '#btn');

Как вы видите, количество передаваемых в модуль параметров несколько великовато и создает неудобства. Обычно в этом случае поступают следующим образом: передают в модуль общего родителя всех элементов, с которыми работает наш модуль, а уже внутри модуля получают из этого родителя различные элементы.

Давайте сделаем нашим тегам общего родителя:
<div id="parent">
	<div id="div1">1</div>
	<div id="div2">2</div>
	<div id="div3">3</div>
	<div id="res"></div>
	
	<button id="btn">click me</button>
</div>

Переделаем теперь код модуля:
;(function(root) {
	let parent = document.querySelector(root);
	
	let div1 = parent.querySelector('#div1');
	let div2 = parent.querySelector('#div2');
	let div3 = parent.querySelector('#div3');
	
	let res  = parent.querySelector('#res');
	let btn  = parent.querySelector('#btn');
	
	btn.addEventListener('click', function() {
		let num1 = Number(div1.textContent);
		let num2 = Number(div2.textContent);
		let num3 = Number(div3.textContent);
		
		res.textContent = num1 + num2 + num3;
	});
})('#parent');

Таким образом получится, что родительский элемент мы передаем в модуль снаружи и легко можем его поменять. А дочерние элементы являются внутренним делом модуля. 
*/



////////////Передача настроек модуля через замыкания в JavaScript/////

// let items = [
//    {name: "Швейная машинка", price: 13000, category: "техника"},
//    {name: "Систеьный блок", price: 10000, category: "IT"},
//    {name: "Телевизор Smart", price: 15000, category: "техника"},
//    {name: "Телефон realme", price: 6000, category: "техника"}
// ]

// let sorted = _.sortBy(items, 'price');
// console.log("Отсортировать", sorted);

// let expensive = _.filter(items, function(item) {
//    return item.price > 10000;
// });

// console.log("Дорогиие вещи:", expensive);

// let grouped = _.groupBy(items, 'category');
// console.log("По категориям", grouped);

// let res = _.pluck(items, 'price');
// console.log(res);
// let maxPrice = _.max(res);
// let minPrice = _.min(res);

// console.log("Самая дорогая вещь стоит", maxPrice);
// console.log("Самая дешовая вещь стоит", minPrice);


////////////Параметры по умолчанию/////////////////////////////////

///Экспорт переменных и функций в модулях через замыкания в JavaScript////
/*
;(function() {
	let str = 'переменная модуля';
	
	function func() {
		alert('функция модуля');
	}
	
	window.func = func;
})();

func(); // выведет 'функция модуля'
*/

/*
 Дан следующий модуль:
;(function() {
	let str1 = 'переменная модуля';
	let str2 = 'переменная модуля';
	let str3 = 'переменная модуля';
	
	function func1() {
		alert('функция модуля');
	}
	function func2() {
		alert('функция модуля');
	}
	function func3() {
		alert('функция модуля');
	}
})();

Экспортируйте наружу одну из переменных и две любые функции. 
*/

// ;(function() {
// 	let str1 = 'переменная модуля';
// 	let str2 = 'переменная модуля';
// 	let str3 = 'переменная модуля';
	
// 	function func1() {
//       alert('функция модуля');
// 	}
// 	function func2() {
//       alert('функция модуля');
// 	}
// 	function func3() {
//       alert('функция модуля');
// 	}
//    window.func1 = func1;
//    window.func3 = func3;
//    window.str3 = str3;
// })();

// console.log(func1());
// console.log(func3());
// alert(window.str3);

/////Экспорт объекта в модулях через замыкания в JavaScript//////////

/*
 Дан следующий модуль:
;(function() {
	let str1 = 'module variable';
	let str2 = 'module variable';
	let str3 = 'module variable';
	
	function func1() {
		alert('module funcion');
	}
	function func2() {
		alert('module funcion');
	}
	function func3() {
		alert('module funcion');
	}
	function func4() {
		alert('module funcion');
	}
	function func5() {
		alert('module funcion');
	}
})();

Экспортируйте наружу объект с первыми пятью функциями и первыми двумя переменными. 
*/


// ;(function() {


// 	let str1 = 'module variable';
// 	let str2 = 'module variable';
// 	let str3 = 'module variable';
	
// 	function func1() {
//       alert('module funcion1');
// 	}
// 	function func2() {
//       alert('module funcion2');
// 	}
// 	function func3() {
//       alert('module funcion3');
// 	}
// 	function func4() {
//       alert('module funcion4');
// 	}
// 	function func5() {
//       alert('module funcion5');
// 	}
   
//    window.module = {
//      func1: func1,
//         func2: func2,
//         func3: func3,
//         func4: func4,
//         func5: func5,
//         str1: str1,
//         str2: str2
//    };
// })();

// console.log(module.func1);


/////////////Библиотеки через замыкания в JavaScript////////////////

/*
function avg1(arr) {
	return sum(arr, 1) / arr.length;
}

function avg2(arr) {
	return sum(arr, 2) / arr.length;
}

function avg3(arr) {
	return sum(arr, 3) / arr.length;
}

// вспомогательная функция
function sum(arr, pow) {
	let res = 0;
	
	for (let elem of arr) {
		res += elem ** pow;
	}
	
	return res;
}

Оформите этот код в виде модуля. Эспортируйте наружу все функции, кроме вспомогательной. 
*/


;(function() {

   function avg1(arr) {
      return sum(arr, 1) / arr.length;
   }
   
   function avg2(arr) {
      return sum(arr, 2) / arr.length;
   }
   
   function avg3(arr) {
      return sum(arr, 3) / arr.length;
   }
   
   // вспомогательная функция
   function sum(arr, pow) {
      let res = 0;
      
      for (let elem of arr) {
         res += elem ** pow;
      }
      
      return res;
   }

   window.math = {avg1, avg2, avg3};

})();




