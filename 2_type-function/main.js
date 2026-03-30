
// Исходный код функции и ее результат в JavaScript/////////////////////////////////




//Запустите приведенный код у себя и убедитесь в том, что в консоль выводится исходный код функции.
// function func() {
// 	return '!';
// }

// console.log(func); // увидим код функц


/////////////////////Функция как переменная в JavaScript/////////////


//Cделайте функцию func, которая будет возвращать через return какую-либо строку.
// function func() {
//    return 'var';
// }

//Выведите результат работы функции func в консоль.
// console.log(func());

//Выведите исходный код функции func в консоль.
// console.log(func);

//Запишите в переменную func число 123, тем самым затерев функцию из этой переменной. Выведите новое значение переменной func в консоль.
// func = 123;
// console.log(func);




////////////Запись функции в другую переменную в JavaScript/////////////////////

//Сделайте функцию func1, которая будет возвращать через return число 3.

// function func1() {
//    return 3;
// }

//Скопируйте исходный код функции func1, в переменную func2..

// let func2 = func1;

//Выведите в консоль сумму результатов работы функций func1 и func2.Выведите в консоль сумму результатов работы функций func1 и func2.
// let sum = func1() + func2();
// console.log(sum);

/////////////////Присваивание функций в переменные в JavaScript///////////////////////////

//Сделайте безымянную функцию, которая будет возвращать через return число 1. Запишите эту функцию в переменную func1.

// let func1 = function() {
//    return 1;
// }

//Сделайте безымянную функцию, которая будет возвращать через return число 2. Запишите эту функцию в переменную func2.
// let func2 = function() {
//    return 2;
// }

//Найдите сумму значений функций func1 и func2. Выведите эту сумму в консоль.

// let sum = func1() + func2();
// console.log(sum);



//////////////Совпадение имени функции и переменной в JavaScript/////////////////////

////////////////Function expression и Function declaration в JavaScript//////////////

///////////////////////Разница объявлений функции///////////////////////////////////////

/*
Оба способа объявления функции эквивалентны, но есть существенная разница: функции, объявленные как Function Declaration, будут доступны, даже если обратится к ним до того, как они были объявлены.
*/

//Создайте функцию как Function Declaration. Проверьте то, что она будет доступна выше места своего объявления.

// let res = func();
// console.log(res);

// function func() {
//    return 'rus';
// }

//Создайте функцию как Function Expression. Проверьте то, что она не будет доступна выше места своего объявления.


// let func1 = function() {
//    return 'en';
// };
// let res1 = func1();
// console.log(res1);

////////////////////////////////Toчка с запятой при объявлении функций в JavaScript//////////////////////////////////////

/*

При объявлении функции как Function Declaration после фигурной скобки } точка с запятой не ставится:
Почему: потому что в JavaScript любое выражение должно заканчиваться точкой с запятой, а в данном случае у нас как раз-таки выражение. Эта точка с запятой не обязательна, так как JavaScript вообще разрешает их не ставить, но желательна. Ставьте всегда:)
*/

//Расставьте точки с запятой во всех необходимых местах:

// let func1 = function() {console.log('!')};
// let func2 = function() {
// 	console.log('!')
// };
// function func3() {
// 	console.log('!')
// }

///////////////////////////////Нюансы функциональных выражений в JavaScript/////////////////////////////////////

/*
  Hазвание Function Expression дано не просто так. Оно действительно означает то, что такие функции являются частью какого-либо выражения.

  To есть название функциональное выражение обозначает то, что такая функция принимает участие в каком-нибудь выражении.
*/

/////////////////Функция с именем, но Function Expression в JavaScript////////////////////////////////////

// +function func() {
// 	console.log('!');
// }

// // func(); // выдаст ошибку

// //Чтобы иметь возможность вызвать нашу функцию, ее нужно присвоить какой-нибудь переменной:


// let test = function func() {
// 	console.log('!');
// };
// test(); // выведет '!'

/*
функция, являющаяся функциональным выражением не может быть вызвана по ее имени. Такая функция может быть вызвана только с использованием переменной, в которую была записана эта функция.

Но тем не менее, функциональное выражение может иметь имя функции, это будет синтаксически корректно. Зачем такое нужно, мы будем разбираться в следующих уроках.

Подведем итог: функции являются Function Declaration или Function Expression не потому, что имеют имя или не имеют, а потому, что являются участниками выражений или не являются.

Как вы видели выше, функция без имени может быть воспринята как Function Declaration, а функции с именем может быть Function Expression.
*/


//////////////////Именованные функциональные выражения в JavaScript////////////////////////

// let test = function func() {
// 	console.log('!');
// };

// test(); // выведет '!'
// func(); // выдаст ошибку


/*
Зачем же давать имя функции, если оно не будет доступно? Дело в том, что это имя будет недоступно снаружи функции, но доступно внутри этой функции.
*/

/////////////////////Как проверить тип функции в JavaScript//////////////////////////////////////


/*
   test(); // выведет ошибку в консоль, значит Function Expression

   let test = function() {
      console.log('!');
   }
      
*/
/*
/*
   func(); // выведет '!', значит Function Declaration

   function func() {
      console.log('!');
   }
*/

// console.log(
// 	function func() {
// 		console.log('!');
// 	}
// );

//////////////////////Выражение слева функции в JavaScript/////////////////////////


// //Наша функция фанкшион экспресион
// +function func() {
// 	console.log('!');
// }

// //Наша функция фанкшион экспресион
// +
// function func() {
// 	console.log('!');
// }

// //Наша функция фанкшион декорэйшен
// +1;
// function func() {
// 	console.log('!');
// }
// //А вот если после 1 влепить еще один плюс, то функция станет Function Expression:

// +1+
// function func() {
// 	console.log('!');
// }


//////////////////////////Выражение справа функции в JavaScript/////////////////////////////////

/*
Учтите, что выражение, в котором участвует функция, должно быть слева от нее. Если мы что-то пытаемся сделать справа от функции, это не сделает ее функциональным выражением. Пример:

function func() { // это Function Declaration
	console.log('!');
} + 1;

Почему так: потому что в данном случае этот +1 является просто новой командой, написанной после функции.
*/


//////////////////////////////Массив с анонимными функциями в JavaScript////////////////////////////////////////

// let arr = [
// 	function() {console.log('1')},
// 	function() {console.log('2')},
// 	function() {console.log('3')},
// ];
// console.log(arr[0]);// увидим исходный код первой функции

// //Чтобы происходил вызов функции, к ней нужно дописать круглые скобки. Так как наша функция хранится в arr[0], то круглые скобки нужно будет написать после квадратных, вот так: arr[0]().
// // console.log(arr[1]());

// for (let func of arr) {
//    func();
// }

/*
Сделайте массив arr с тремя функциями. Пусть первая возвращает через return число 1, вторая - число 2, третья - число 3.
*/

// let arr = [
//    function() {return 1000},
//    function() {return 2000},
//    function() {return 3000},
// ];
// for(let func of arr) {
//    console.log(func());
// }

// //Используя созданный вами массив arr выведите в консоль число 3, вызвав соответствующую функцию.
// console.log(arr[2]())

// //Используя созданный вами массив arr найдите сумму результатов функций (без цикла).

// console.log(arr[0]() + arr[1]() + arr[2]());

// //Переберите созданный вами массив arr циклом и выведите результаты работы всех функций в консоль.
// for(let func of arr) {
//    console.log(func());
// }


//////////////////////Объект с анонимными функциями в JavaScript//////////////////////////////////

// let obj = {
// 	func1: function() {console.log(1)},
// 	func2: function() {console.log(2)},
// 	func3: function() {console.log(3)},
// };

// let obj = {
// 	func1: function() {console.log(1)},
// 	func2: function() {console.log(2)},
// 	func3: function() {console.log(3)},
// };

// obj.func1(); // выведет 1

/*
Сделайте объект с тремя функциями. Пусть первая возвращает через return число 1, вторая - число 2, третья - число 3. С помощью созданных функций выведите в консоль сумму возвращаемых чисел.
*/
// let obj = {
//    func1: function() {return 1},
//    func2: function() {return 2},
//    func3: function() {return 3},
// };

// console.log(obj.func1() + obj.func2() + obj.func3());

// //Переберите созданный объект циклом и выведите результаты работы функций в консоль.

// for(let func in obj) {
//    console.log(obj[func]());
// }


//////////////////////Применение объекта с функциями в JavaScript//////////////////////


/*
Давайте сделаем объект с двумя функциями, каждая из которых параметром будет принимать число. Пусть первая функция возводит переданное число в квадрат, а вторая функция - в куб. Реализуем:

let math = {
	square: function(num) {return num * num},
	cube: function(num) {return num * num * num},
};

Воспользуемся нашими функциями:

let math = {
	square: function(num) {return num * num},
	cube: function(num) {return num * num * num},
};

console.log( math.square(2) ); // выведет 4
console.log( math.cube(2) ); // выведет 8
*/

//Сделайте объект с тремя функциями, каждая из которых будет принимать параметром массив с числами. Сделайте так, чтобы первая функция возвращала сумму элементов массива, вторая функция - сумму квадратов, а третья - сумму кубов.


// let math = {
//    sum: function(arr) {
//      let res = 0;
//      for(let elem of arr) {
//       res += elem;
//      }
//      return res;
//    },
//    square: function(arr) {
//      let res1 = 0;
//      for(let elem of arr) {
//       res1 += elem ** 2;
//      }
//      return res1;
//    },
//    cube: function(arr) {
//      let res2 = 0;
//      for(let elem of arr) {
//       res2 += elem ** 3;
//      }
//      return res2;
//    },
   
// }
// console.log(math.sum([1, 2, 3]));
// console.log(math.square([1, 2, 3]));
// console.log(math.cube([1, 2, 3]));




///////////////////////////////////////Вложенные функции///////////////////////////////////////

//Передача функций параметрами в JavaScript

//Сделайте функцию test, параметрами принимающую 3 функции. Передайте в нее первым параметром функцию, возвращающую 1, вторым - функцию, возвращающую 2, третьим - функцию, возвращающую 3. Выведите в консоль сумму результатов функций.

// test(
//    function(){return 1},
//    function(){return 2},
//    function(){return 3},
// )

// function test(func1, func2, func3) {
//    console.log(func1() + func2() + func3());
// }

////////////////////////////Именованные функции-параметры в JavaScript//////////////////////////////////

//Сделайте функцию test, параметрами принимающую 3 функции и возвращающую сумму результатов переданных функций.

// let get1 = function() {
//    return 3;
// }
// let get2 = function() {
//    return 6;
// }
// let get3 = function() {
//    return 10;
// }

// test(get1, get2, get3);

// function test(func1, func2, func3) {
//    console.log(func1() + func2() +func3());
// }

//Сделайте 3 функции, объявив их как Function Declaration и дав им имена func1, func2 и func3. Пусть первая функция возвращает 1, вторая - 2, а третья - 3. Передайте эти функции параметром в функцию test из предыдущей задачи.

// function func1() {
//    return 1;
// }

// function func2() {
//    return 2;
// }

// function func3() {
//    return 3;
// }

// test(func1, func2, func3);

// function test(func1, func2, func3) {
//    console.log(func1() + func2() +func3());
// }

//Модифицируйте предыдущую задачу так, чтобы функции были объявлены как Function Expression с теми же именами.

// let func1 = function() {
//    return 1;
// }

// let func2 = function() {
//    return 2;
// }

// let func3 = function() {
//    return 300;
// }

// test(func1, func2, func3);

// function test(func1, func2, func3) {
//    console.log(func1() + func2() +func3());
// }

///////////////////////////////Параметры передаваемых функций в JavaScript////////////////////////////

//Скопируйте код моей функции test. Вызовите эту функцию, передав ей параметром анонимную функцию, которая параметром будет принимать число и возвращать его куб.


// test(function(num) {
//    return num ** 3;
// });

// function test(func) {
// 	console.log(func(3));
// }

//Переделайте ваш код так, чтобы передаваемая функция была не анонимной, а была определена как Function Declaration с именем func.

// function func(num) {
//    return num ** 3;
// }

// test(func);

// function test(func) {
// 	console.log(func(3));
// }

//Переделайте передаваемую функцию на Function Expression с тем же именем func.



// test(function func(num) {
//    return num ** 3;
// });

// function test(func) {
// 	console.log(func(3));
// }


//Пусть передаваемая функция теперь принимает два параметра и возвращает их сумму. При вызове передаваемой функции внутри test передайте в передаваемую функцию число 2 и число 3. Выведите результат.

// test(function func(num1, num2) {
//   return num1 + num2;
// });

// function test(func) {
//    console.log(func(2, 3));
// }

/////////////////////////////// Передача числа параметром в JavaScript///////////////////////////////////////////////

/*
   Пусть функция test первым параметром принимает число, а вторым и третьим параметрами - функции, также параметром принимающие числа. Пусть функция test возвращает сумму результатов переданных функций:

function test(num, func1, func2) {
	return func1(num) + func2(num);
}
Вызовите функцию test, первым параметром передав число 3, вторым параметром функцию, возводящую число в квадрат, а третьим - функцию, возводящую число в куб. Выведите результат работы в консоль.
*/


// function test(num, func1, func2) {
// 	return func1(num) + func2(num);
// }



// function func1(num) {
//    return num ** 2;
// }
// function func2(num) {
//    return num ** 3;
// }


// console.log(test(3, func1, func2));

//////////////////Применение передачи функции параметром в JavaScript//////////////////////////////////////

// function test(arr, func) {
// 	// Запускаем цикл:
// 	for (let i = 0; i < arr.length; i++) {
// 		arr[i] = func(arr[i]); // применяем функцию к каждому элементу
// 	}
	
// 	return arr; // возвращаем измененный массив
// }

// // Преобразуем массив чисел в массив их квадратов:
// // Оформим код изящнее:
// let result = test([1, 2, 3], function(num) {
// 	return num * num;
// });

// console.log(result); // выведет [1, 4, 9]

//Не подсматривая в мой код реализуйте такую же функцию test самостоятельно.

// function test(arr, func) {
//    for(let i = 0; i < arr.length; i++) {
//       arr[i] = func(arr[i]);
//    }
//    return arr;
// }

// let res = test([3, 5, 4], function(num) {
//    return num ** 3;
// });

// console.log(res);

//Вызовите созданную вами функцию test, передав ей параметром массив с числами. Сделайте так, чтобы функция вернула массив с кубами этих чисел.


////////////////////Вложенные функции в JavaScript/////////////////////

/*
Сделайте функцию func, которая параметрами будет принимать два числа, а возвращать сумму квадрата первого числа с кубом второго числа. Сделайте для этого вспомогательную функцию square, возводящую число в квадрат, и вспомогательную функцию cube, возводящую число в куб.
*/

// function func(num1, num2) {
//    function square(num) {
//       return num * num;
//    }
//    function cub(num) {
//       return num * num * num;
//    }
//    return square(num1) + cub(num2);
// }

// console.log(func(2, 3));

////////////////Область видимости вложенных функций в JavaScript//////////
// function test() {
// 	let num;
	
// 	function func() {
// 		console.log(num);
// 	}
	
// 	num = 1
// 	func();
	
// 	num = 2
// 	func();
// }

// test();

/////////////////Параметры внешней функции в JavaScript///////////////////////

// function test(num1, num2) {
// 	function func() {
// 		console.log(num1 + num2);
// 	}
	
// 	func();
// }

// test(1, 2);

// function test(num1, num2) {
// 	function func() {
// 		console.log(num1 + num2);
// 	}
	
// 	num1 = 2;
// 	func();
// }

// test(1, 2);

//////////////Параметры внешней и внутренней функций в JavaScript////////////


// function test(num) {
// 	function func(localNum) {
// 		console.log(localNum);
// 	}
	
// 	func(num);
// }

// test(1);

// function test(num) {
// 	function func(localNum) {
// 		console.log(localNum);
// 	}
	
// 	func(num + 1);
// }

// test(1);

// function test(num) {
// 	function func(localNum) {
// 		console.log(num);
// 	}
	
// 	func(num + 1);
// }

// test(1);

// function test(num) {
// 	function func(localNum) {
// 		localNum = 2;
// 	}
	
// 	func(num);
// 	console.log(num);
// }

// test(1);

// function test(num) {
// 	function func(localNum) {
// 		localNum = 2;
// 	}
	
// 	func(num);
// 	console.log(localNum);
// }

// test(1);

// function test(num) {
// 	function func(localNum) {
// 		num = 2;
// 	}
	
// 	func(num);
// 	console.log(num);
// }

// test(1);

/////////////Одноименные параметры в JavaScript//////////////////////////

// function test(num) {
// 	function func(num) {
// 		console.log(num);
// 	}
	
// 	func(num);
// }

// test(1);

// function test(num) {
// 	function func(num) {
// 		num = 2;
// 	}
	
// 	func(num);
// 	console.log(num);
// }

// test(1);

// function test(num) {
// 	function func(num) {
// 		console.log(num);
// 	}
	
// 	num = 2;
// 	func(num);
// }

// test(1);


// function test(num) {
// 	function func(num) {
// 		console.log(num);
// 	}
	
//    func(num);
//    num = 2;//переменная num должна быть выше func(num); получтися 2
// }

// test(1); //выведет 1


//Функция, возвращающая функцию в JavaScript

// function func() {
// 	return function() {
// 		return '!';
// 	};
// }

// let result = func(); // в переменной result будет функция
// console.log(result()); // выведет 'function() {return '!';}'

// function func() {
// 	return function() {
// 		return '!';
// 	};
// }

// // let result = func();
// console.log( result() ); // выведет '!'

// function func() {
// 	return function() {
// 		return 'Привет!!!';
// 	};
// }

// console.log( func()() ); // выведет '!'


//Сделайте функцию func1, которая будучи вызвана вот так: func1()(), вернет число 1. Сделайте аналогичную функцию func2, возвращающую число 2. Найдите сумму результатов этих функций.

// function func1() {
//    return function() {
//       return 1;
//    }
// }


// function func2() {
//    return function() {
//       return 2;
//    }
// }
// console.log(func1()() + func2()());


///////////////Любой уровень вложенности в JavaScript/////////////////

//Сделайте функцию func, которая будучи вызвана вот так: func()()()()(), вернет '!'.

// function func() {
//    return function() {
//       return function() {
//          return function() {
//             return function() {
//                return '!!!!';
//             }
//          }
//       }
//    }
// }
// console.log(func()()()()());

////////////////////Параметры возвращаемой функции в JavaScript////////////



/*
Сделайте функцию func, которая будучи вызвана вот так: func(2)(3)(4), вернет сумму переданных в параметры чисел.
*/

// function func(num1) {
//    return function(num2) {
//       return function(num3) {
//          return num1 + num2 + num3;
//       }
//    }
// }
// console.log(func(2)(3)(4));
/*
Сделайте функцию func, которая будучи вызвана вот так: func(2)(3)(4)(5)(), вернет массив переданных в параметры чисел.
*/


// function func(num1) {
//    return function(num2) {
//       return function(num3) {
//          return function(num4) {
//             return function() {
//                 return [num1, num2, num3, num4];
//             }
//          }
//       }
//    }
// }

// let res = func(2)(3)(4)(5)();
// console.log(res);

///////////Функции-коллбэки в JavaScript///////////////////////////

// function each(arr, callback) {
// 	let result = [];
	
// 	for (let elem of arr) {
// 		result.push( callback(elem) ); // вызываем функцию-коллбэк
// 	}
	
// 	return result;
// }

// let result = each([1, 2, 3, 4, 5], function(num) {
// 	return num ** 2;
// });

// console.log(result);

// let result = each([1, 2, 3, 4, 5], function(num) {
// 	return num ** 3;
// });

// console.log(result);

//Дан массив с числами. С помощью созданной нами функции each увеличьте каждый элемент в два раза.

// function each(arr, callback) {
//    let result = [];

//    for(let elem of arr) {
//       result.push(callback(elem));
//    }
//    return result;
// }

// let result = each([2, 3, 4, 5, 6], function(num) {
//    return num ** 2;
// });

// console.log(result);

//Дан массив со строками. С помощью созданной нами функции each переверните символы каждой строки в обратном порядке.

// function each(arr, callback) {
//    let result = [];

//    for(let elem of arr) {
//       result.push(callback(elem));
//    }
//    return result;
// }

// let result = each(['1', '2', '3', '4', '5'], function(num) {
//    return num;
// });
// console.log(result.reverse());

//Дан массив со строками. С помощью созданной нами функции each сделайте заглавным первый символ каждой строки.

// let result = each(['mir', 'svetlana', 'aleksandr'], function(num) {
//   return num.slice(0, 1).toUpperCase() + num.slice(1);

// });

// console.log(result);


//////////////////Нюансы коллбэков в JavaScript//////////////////

//С помощью следующей функции возведите все элементы массива в куб:

// function each(arr, callback) {
//    let result = [];

//    for(let elem of arr) {
//       result.push(callback(elem));
//    }
//    return result;
// }

// function cube(num) {
// 	return num ** 3;
// }

// let result = each([2, 3, 4, 8], cube);
// console.log(result);


////////////Стрелочные функции в JavaScript////////////////
/*
   Стрелочная функция: нет function 

   let func2 = (num1, num2) => {
	let result = num1 * num2;
	return result;

   /////////////////////////////

   Если в функции одна строка кода, то в стрелочных функциях можно не писать return и фигурные скобки:

   let func2 = (num1, num2) => num1 * num2;


////////////////////////////////////////
   Если параметр стрелочной функции один - круглые скобки можно не писать:

   let func2 = num => num * num

   ///////////////////////////////////
   Если в функции вообще нет параметров - нужно писать пустые круглые скобки:
   let func2 = () => console.log('!!!')


*/


//////////////Применение стрелочных функций в JavaScript//////

/*
   Дана следующая функция с коллбэком:

let result = filter([1, 2, 3, 4, 5], function(elem) {
	if (elem > 0) {
		return true;
	} else {
		return false;
	}
});
Упростите коллбэк через стрелочную функцию.
*/

// let result = filter([1, 2, 3, 4, 5], function(elem) {
// 	if (elem > 0) {
// 		return true;
// 	} else {
// 		return false;
// 	}
// });

// let result =  filter([1, 2, 3, 4, 5], elem => elem > 0);




///////////////ЗАМЫКАНИЕ////////////////////////////////

///Доступ к внешним переменным функций в JavaScript

// let num = 1; // задаем значение переменной

// function func() {
// 	console.log(num); // выводим его в консоль
// }

// func(); // вызываем функцию




//Лексическое окружение функций в JavaScript

/*
Когда мы пытаемся обратится к какой-либо переменной внутри функции, эта переменная вначале ищется среди локальных переменных функции и, если такой переменной там нет, то ищется в лексическом окружении функции.
*/

//Применение лексического окружения функций в JavaScript

// function test() {
// 	let num = 1;
	
// 	return function() {
// 		console.log(num);
// 	}
// }

// let func = test();
// func(); // выведет 1

/*
   function test() {
	let num = 1;
	
	return function() {
		console.log(num);
	}
}

console.log(num); // переменная num тут недоступна
*/

// function test() {
// 	let num1 = 1;
// 	let num2 = 2;
	
// 	return function() {
// 		return num1 + num2;
// 	}
// }

// let func = test();
// console.log(func());


// function test() {
// 	let num1 = 1;
// 	let num2 = 2;
	
// 	return function() {
// 		return num1 + num2;
// 	}
// } 

// console.log(test()());// 3

// function test() {
// 	let num1 = 1;
	
// 	return function() {
// 		return num1 + num2;
// 	}
// }

// let num2 = 2;
// let func = test();
// console.log(func());

// function test() {
// 	let num = 1;
	
// 	return function() {
// 		return num;
// 	}
// }

// let num = 2;
// let func = test();
// console.log(func());


///Замыкания в JavaScript

/*
   Итак, замыкание - это функция вместе со всеми внешними переменными, которые ей доступны. Или, другими словами, замыкание - это функция вместе со своим лексическим окружением.

   В JavaScript чаще всего, говоря "замыкание функции", имеют ввиду не саму эту функцию, а именно ее внешние переменные. Если же какая-то функция получает переменную из своего лексического окружения, то говорят "переменная берется из замыкания".

   function test() {
	let num = 1;
	
      return function() {
         console.log(num);
      }
   }

   let func = test();
   func(); // выведет 1
   В данном случае и можно сказать, что функция func получает значение переменной num из замыкания. Также можно сказать, что функция func хранит значение переменной num в замыкании.
*/

/////////////Счетчик на замыканиях в JavaScript////////////////

// function test() {
// 	let num = 1;
	
// 	return function() {
// 		console.log(num);
// 		num++;
// 	}
// }

// let func = test();

// func(); //выведет 1
// func(); //выведет 2
// func(); //выведет 3
// func(); //выведет 4
// func(); //выведет 5



/*
   Учтите, что каждый вызов функции test будет возвращать новую функцию, у которой будет свое замыкание. To есть разные счетчики будут работать независимо:

function test() {
	let num = 1;
	
	return function() {
		console.log(num);
		num++;
	};
}

let func1 = test(); // первый счетчик
func1();  //выведет 1
func1();  //выведет 2

let func2 = test(); // второй счетчик
func2();  //выведет 1
func2();  //выведет 2
Получается, что одна и та же переменная num для разных функций будет иметь разное значение!

To есть если мы вызовем функцию test два раза, то полученные из нее функции будут работать независимым образом и каждая из этих функций будет иметь свою независимую переменную num.
*/

// function test() {
// 	let num = 1;
	
// 	return function() {
// 		console.log(num);
// 		num++;
// 	};
// }

// let func1 = test(); // первый счетчик
// func1();  //выведет 1
// func1();  //выведет 2

// let func2 = test(); // второй счетчик
// func2();  //выведет 1
// func2();  //выведет 2

//Самостоятельно, не подсматривая в мой код, реализуйте счетчик вызова функции, работающий на замыканиях.

// function test() {
//    let  num = 5;
//    return function() {
//       console.log(num);
//       num++;
//    }
// }
// let func1 = test();
// func1();
// func1();
// func1();
// func1();
// func1();
// func1();

// let func2 = test();
// func2();
// func2();
// func2();
// func2();


//Пусть функция в замыкании хранит число 10. Сделайте так, чтобы каждый вызов функции уменьшал это число на 1 и выводил в консоль уменьшенное число.

// function numb() {
//    let num = 10;
//    return function() {
//       console.log(num);
//       num--;
//    }
// }

// let func = numb();
// func();
// func();
// func();
// func();
// func();

//Модифицируйте предыдущую задачу так, чтобы отсчет доходил до 0, а затем каждый последующий вызов функции выводил в консоль сообщение о том, что отсчет окончен.

// function numb() {
//    let num = 10;
//    return function() {

//       if(num >= 0) {
//          console.log(num);
//          num--;
//       } else {
//          console.log('Oтсчет окончен');
//       }
//    }
// }

// let func = numb();

// func();
// func();
// func();
// func();
// func();
// func();
// func();
// func();
// func();
// func();
// func();
// func();

//Локальная переменная счетчика в JavaScript

// function func() {
// 	let num = 0;
	
// 	return function() {
// 		console.log(num);
// 		num++;
// 	};
// }

// func()();
// func()();
// func()();

// function func() {
// 	let num = 0;
	
// 	return function() {
// 		console.log(num);
// 		num++;
// 	};
// }

// let test = func;

// test()();
// test()();
// test()();


//////////Глобальная переменная счетчика в JavaScript/////////////

//В этом случае все возвращаемые функции будут изменять эту глобальную переменную и счетчики будут работать уже зависимо друг от друга:

// let num = 1;

// function test() {
// 	return function() {
// 		console.log(num);
// 		num++;
// 	};
// }

// let func1 = test(); // первый счетчик
// func1();  // выведет 1
// func1();  // выведет 2

// let func2 = test(); // второй счетчик
// func2();  // выведет 3
// func2();  // выведет 4


/*
   Дело в том, что переменная num - локальная внутри функции test. Поэтому каждый вызов test порождает свою локальную переменную.

Поэтому возвращаемые функции будут ссылаться каждая на свою локальную переменную функции test. Именно так и достигается независимость работы.

Если же сделать num глобальной переменной - это тоже будет замыканием. Просто лексические окружения возвращаемых функций ссылаются на одну и ту же переменную num - любые изменения с этой переменной будут видны во всех функциях
*/

// let counter = 0;
		
// function test() {
// 	return function() {
// 		console.log(counter);
// 		counter++;
// 	};
// }

// let func = test;

// let func1 = func();
// let func2 = func();
// func1();
// func2();
// func1();
// func2();
// func2();

// function test() {
// 	let counter = 0;
	
// 	return function() {
// 		return function() {
// 			console.log(counter);
// 			counter++;
// 		};
// 	};
// }

// let func = test()();// — здесь создается то самое замыкание. Теперь в памяти сидит counter = 0.

// let func1 = func;//ты просто создаешь два новых ярлыка (ссылки) на одну и ту же функцию.
// let func2 = func;//ты просто создаешь два новых ярлыка (ссылки) на одну и ту же функцию.
// func1();//видит counter (0), выводит его и делает counter = 1.
// func2();//обращается к тому же counter, видит там уже 1, выводит и делает counter = 2.
// func1();// видит 2, выводит и делает counter = 3.




