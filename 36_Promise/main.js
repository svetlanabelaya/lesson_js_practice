///////////Промисы/////////////////////

///////////Введение в промисы в JavaScript/////////////

/*
 Вы уже знаете, что использование коллбэк-модели асинхронности легко приводит к ситуации callback hell. Поэтому в JavaScript была введена новая модель под названием промисы (promise). Давайте изучим эту модель.

Промис представляет собой объект, в который параметром передается функция, внутри которой нужно размещать наш асинхронный код:
let promise = new Promise(function() {
	// асинхронный код
});

 Как вы видите, я записал объект с промисом в переменную promise. В каком-то другом месте кода я могу применить к этой переменной метод then, передав в него функцию с кодом, который должен быть выполнен по завершении асинхронного кода, написанного при создании данного промиса:
promise.then(function() {
	// выполнится при завершении асинхронного кода
});

*/

// let promise = new Promise(function(resolve) {
//    setTimeout(function() {
//       resolve([1, 2, 3, 4, 5]);
//    }, 3000);
// });
// promise.then(function(result) {
//    console.log(result);
// });


// /*
// Сделайте промис, внутри которого будет задержка в 5 секунд, после которой промис должен выполнится, своим результатом вернув какой-нибудь текст. Выведите этот текст на экран. 
// */

// let promise = new Promise(function(resolve) {
//    setTimeout(function() {
//       let str = 'Svetlana';
//       resolve(str);
//    }, 5000);
// });

// promise.then(function(res) {
//    console.log(res);
// });



///////////Исключительные ситуации в промисах в JavaScript////

/*
В случае возникновения такой ситуации мы должны отклонить промис с помощью специальной функции отклонения, которая автоматически попадает во второй параметр функции промиса:
let promise = new Promise(function(resolve, reject) {
	setTimeout(function() {
		...
	}, 3000);
});

Внутри функции промиса мы должны вызвать resolve, если все прошло штатно, либо reject, если возникла исключительная ситуация:
let promise = new Promise(function(resolve, reject) {
	setTimeout(function() {
		let isError = false;
		
		if (!isError) {
			resolve([1, 2, 3, 4, 5]);   // данные промиса
		} else {
			reject('error in promise'); // ваш текст ошибки
		}
	}, 3000);
});

Затем в методе then параметрами вы должны передать не одну, а две функции: первая сработает, если промис сработал штатно (зарезолвился), а вторая - если сработал с ошибкой (зареджектился):
promise.then(
	function(result) {
		console.log(result); // выведет результат промиса
	},
	function(error) {
		console.log(error);  // выведет текст ошибки
	}
);

Как правило, приведенный выше код записывают более компактно, вот так:
promise.then(function(result) {
	console.log(result); // выведет результат промиса
}, function(error) {
	console.log(error);  // выведет текст ошибки
});

*/

/*
Сделайте асинхронный код, который будет генерировать случайные числа от 0 до 5. Оберните все это в промис. Пусть промис своим результатом возвращает результат деления единицы на сгенерированное число. Пусть промис выполнится с ошибкой, если произошло деление на ноль, и с успехом во всех остальных случаях. 
*/

// let promise = new Promise(function(resolve, reject) {
//    setTimeout(function() {
//       let rand = (Math.floor(Math.random() * 6));
//          if(rand !== 0) {
//             resolve(1 / rand);
//          } else {
//             reject('error in promise');
//          }
//       }, 2000);
//  });
// promise.then(function(res) {
//    console.log(res);
// }, function(error) {
//    console.log(error);
// });





/////////////Объект с ошибкой промиса в JavaScript/////////////

/*
 Более принято в функцию reject передавать не строку с ошибкой, а объект с ошибкой:
let promise = new Promise(function(resolve, reject) {
	setTimeout(function() {
		reject(new Error('error in promise')); // объект с ошибкой
	}, 3000);
});

Можно также выбрасывать объекты с ошибками с помощью throw - это будет эквивалентно передаче их в reject:
let promise = new Promise(function(resolve, reject) {
	setTimeout(function() {
		throw new Error('error in promise'); // эквивалентно reject
	}, 3000);
});


*/

/*
 Переделайте следующий код в соответствии с изученным:
let promise = new Promise(function(resolve, reject) {
	setTimeout(function() {
		let isError = false;
		
		if (!isError) {
			resolve('success');
		} else {
			reject('error');
		}
	}, 3000);
});

*/
// let promise = new Promise(function(resolve, reject) {
// 	setTimeout(function() {
// 		let isError = false;
		
// 		if (!isError) {
// 			resolve('success');
// 		} else {
// 			reject(new Error('Error in promise'));
// 		}
// 	}, 3000);
// });

// promise.then(function(result) {
//    console.log(result);
// }, function(error) {
//    console.log(error.massege);
// });
   




//////Отдельный перехват исключений в промисах в JavaScript//
/*
 В then можно указать только функцию-обработчик исключительной ситуации, передав вместо первого параметра null:
promise.then(
	null,
	function(error) {
		console.log(error);
	}
);

В таком случае удобно воспользоваться сокращенным синтаксисом через метод catch:
promise.catch(
	function(error) {
		console.log(error);
	}
);

*/


/*
 Перепишите следующий код через метод catch:
let promise = new Promise(function(resolve, reject) {
	setTimeout(function() {
		let isError = false;
		
		if (!isError) {
			resolve('success');
		} else {
			reject(new Error('error'));
		}
	}, 3000);
});

promise.then(
	res => console.log(res),
	err => console.log(err.message),
);

*/
// let promise = new Promise(function(resolve, reject) {
// 	setTimeout(function() {
// 		let isError = false;
		
// 		if (!isError) {
// 			resolve('success');
// 		} else {
// 			reject(new Error('error'));
// 		}
// 	}, 3000);
// });

// promise.catch(
//    function(error) {
//       console.log(error.message);
//    }
// );



///////////Состояния промиса в JavaScript//////////////////




