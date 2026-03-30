//////////////Вызов функции на месте в JavaScript/////////////

//Сейчас мы разберем прием, который позволяет вызвать функцию прямо на месте ее объявления. Такая конструкция называется Immediately Invoked Function Expression (IIFE).

/*
   let func = function() {
	console.log('!');
   };

   func(); // выведет '!'

//////////////////////////////////
   +function() {
	console.log('!'); // выведет '!'
   }();


   /////////////////////////////////

   Наличие плюса в данном случае является обязательным условием, так как без него функция станет Function Declaration, а их на месте (да еще без имени) вызывать нельзя. Конечно же, вместо плюса может быть все, что угодно, - главное, чтобы наша функция была функциональным выражением.
*/
// !function() {
// 	console.log('!');
// }();



////////////////Присваивание функции в переменную в JavaScript//////


// let result = function() {
// 	return '!';
// }();

// console.log(result); // выведет '!'

// let result = function() {
// 	return '!';
// }();
		
// console.log(result);

// let result = function() {
// 	return '!';
// };
		
// console.log(result());

////////////Применение вызова функции на месте в JavaScript/////////

/*
Давайте применим вызов функции на месте в качестве одного из слагаемых:

let sum = 1 + function() {
	return 2;
}();

console.log(sum); // выведет 3
№1
*/

//Определите, не запуская код, что выведется в консоль:

// let result = function() {return 1;}() + function() {return 2;}();
// console.log(result); //выведет 3


/////////////Круглые скобки в IIFE в JavaScript///////////////

/*
   Обычно при вызове функции на месте вместо плюса используются круглые скобки, так как такой способ оформления считается более очевидным:

(function() {
	console.log('!');
}());
Чаще всего круглые скобки вызова функции ставят снаружи, вот так:

(function() {
	console.log('!');
})();
*/

// let result = (function() {
// 	return '!';
// }());

// console.log(result);

// let result = (function() {
// 	return '!';
// });

// console.log(result);

// let result = (function() {
// 	return '!';
// });

// console.log(result());

//////////Параметры функции при вызове на месте в JavaScript///////


// (function(str) {
// 	console.log(str); // выведет '!!!'
// })('!!!');

/////////Множественные вызовы IIFE в JavaScript//////////////

// (function() {
// 	return function() {
// 		console.log('!');
// 	};
// })()(); // выведет '!'

// (function() {
// 	return function() {
//       return function() {
//          console.log('123');
//       }
//    }
// })()()();

// (function(num1) {
// 	return function(num2) {
//       console.log(num1 + num2);
//    }
// })(1)(2);

// (function(num1) {
// 	return function(num2) {
//       return function(num3) {
//          console.log(num1 * num2 * num3);
//       }
//    }
// })(1)(2)(3);


///////////Подводные камни IIFE в JavaScript////////////////////
//Всегда ставь точки сзапятой


// let result = 1
// +function() {
// 	return 2;
// }(); 

// console.log(result);//выведет 3


// let result1 = 1;
// +function() {
// 	return 2;
// }();

// console.log(result1);// выведет 1++

///////////////////Toчка с запятой для безопасности в IIFE//////////

// let num = 1; // точка с запятой стоит

// (function() {
// 	console.log(num); // выведет 1
// })();

// let num1 = 1

// (function() {
// 	console.log(num1); // выдаст ошибку
// })();


/*
перед вызовом функции на месте всегда необходимо ставить точку с запятой, вот так:

let num = 1

;(function() {
	console.log(num); // выведет 1
})();
*/

// ;(function() {
// 	console.log(1); // выведет 1
// })();

// let str = 'str';

// (function() {
// 	console.log(1);
// })();

// let str = 'str'

// (function() {
// 	console.log(1);
// })();

//////////Замыкания и вызов функции на месте в JavaScript///////////

// let func = (function() {
// 	return function() {
// 		console.log('!');
// 	}
// })();

// func(); // выведет '!'


// let func = (function() {
// 	let num = 1;
	
// 	return function() {
// 		console.log(num);
// 		num++;
// 	}
// })();

// func(); //выведет 1
// func(); //выведет 2
// func(); //выведет 3
// func(); //выведет 4
// func(); //выведет 5

///Не подсматривая в мой код, самостоятельно реализуйте такой же счетчик.

// let func = (function() {
//    let num = 5;
//    return function() {
//       console.log(num);
//       num++;
//    }
// })();
// func();
// func();
// func();
// func();
// func();
// func();

//Модифицируйте работу счетчика так, чтобы он считал до 5, а потом отсчет начинался сначала.

// let func = (function() {
//    let num = 1;
//    return function() {
//       console.log(num);
//       // num = num >= 5 ? 1 : num + 1;
//       if(num >= 5) {
//          num = 1;
//       }
//       else {
//          num = num + 1;
//       }
//    }
// })();
// func();
// func();
// func();
// func();
// func();
// func();
// func();
// func();






