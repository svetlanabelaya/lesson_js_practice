///////////////Асинхронные колбэки///////////////////////////

/////////////Асинхронный код с коллбэками в JavaScript////////

// function make(callback) {
// 	setTimeout(function() {
// 		console.log('1'); // некая асинхронная операция, может не одна
// 		callback();       // затем наш коллбэк
// 	}, 3000);
// }

// make(function() {
// 	console.log('2');
// });

/*
 Расскажите, в каком порядке выведутся числа в консоль:
function make(callback) {
	setTimeout(function() {
		console.log('1');
		callback();
	}, 3000);
}

make(function() {
	console.log('2');
	console.log('3');
});

*/
// function make(callback) {
// 	setTimeout(function() {
// 		console.log('1');
// 		callback();
// 	}, 3000);
// }

// make(function() {
// 	console.log('2');
// 	console.log('3');
// });

//Ответ: Выведутся по порядку. через 3 секунды выведется 1 и следом 2, 3






///Асинхронная передача результата в коллбэк в JavaScript/////

/*
function make(callback) {
	setTimeout(function() {
		let res = [1, 2, 3, 4, 5];
		callback(res); // передаем результат параметром
	}, 3000);
}

make(function(res) {
	console.log(res); // наш массив
});
*/

//Допишите код коллбэка так, чтобы он находил сумму элементов массива с результатом. 

// function make(callback) {
//    setTimeout(function() {
//       let sum = 0;
//       let res = [1, 2, 3, 4, 5];
//       for(let elem of res) {
//          sum += elem;
//       }
// 		callback(sum); // передаем результат параметром
// 	}, 3000);
// }

// make(function(sum) {
// 	console.log(sum); // наш массив
// });





/////Передача параметров в асинхронный коллбэк в JavaScript///

// function make(num, callback) {
// 	setTimeout(function() {
// 		let arr = [1, 2, 3, 4, 5];
// 		callback(arr[num]); // результатом передаем элемент массива
// 	}, 3000);
// }

// make(3, function(res) {
// 	console.log(res); // третий элемент массива
// });

/*
// Сделайте так, чтобы функция make принимала два параметра: номер одного и другого элемента массива. Пусть результатом асинхронной операции эта функция возвращает сумму указанных элементов. 
// */

// function make(num1, num2, callback) {
// 	setTimeout(function() {
//       let arr = [1, 2, 3, 4, 5];
// 		callback(arr[num1] + arr[num2]); // результатом передаем элемент массива
// 	}, 3000);
// }

// make(2, 4, function(res) {
// 	console.log(res); // третий элемент массива
// });





///////Иключения в асинхронных коллбэках в JavaScript////////

// function make(num, callback) {
// 	setTimeout(function() {
// 		let arr = [1, 2, 3, 4, 5];
		
// 		let err;
// 		if (arr[num] === undefined) {
// 			err = 'elem not exists'; // текст ошибки
// 		} else {
// 			err = null; // ошибки нет
// 		}
		
// 		callback(arr[num], err);
// 	}, 3000);
// }
// make(10, function(res, err) {
// 	if (!err) {
// 		console.log(res); // ошибки не возникло, выведем результат
// 	} else {
// 		console.log(err); // ошибка возникла, выведем ее текст
// 	}
// });



///Загрузка картинок через асинхронные коллбэки в JavaScript//

/*
Реализуйте функцию loadImage. Используйте для этого изученный вами ранее код для загрузки картинок. 
*/

// function loadImage(img, callback) {
//    let image = document.createElement('img');
//    image.src = img;
   
//    image.addEventListener('load', function() {
//       callback(image, null);
//    });
//    image.addEventListener('error', function() {
//       callback(null, 'Ошибка загрузки')
//    });
// }


// loadImage('img.png', function(image, err) {
// 	if (!err) {
// 		document.body.append(image);
// 	} else {
// 		console.log('произошла ошибка: ' + err);
// 	}
// });





///////Проблема callback hell в JavaScript//////////////////

/*
Перепишите приведенный код так, чтобы в нем была загрузка 10 картинок плюс обработка исключений. Убедитесь, что у вас получается ситуация callback hell. 
*/

// loadImage('img1', function(image1, err1) {
      
//    loadImage('img2', function(image2, err2) {
      
//       loadImage('img3', function(image3, err3) {

//          loadImage('img4', function(image4, err4) {

//              loadImage('img5', function(image5, err5) {

//                 loadImage('img6', function(image6, err6) {

//                    loadImage('img7', function(image7, err7) {

//                       loadImage('img8', function(image8, err8) {

//                          loadImage('img9', function(image9, err9) {

//                             loadImage('img10', function(image10, err10) {
//                                console.log('все картинки загружены');
//                            });
//                         });
//                      });
//                   });
//                });
//             });
//          });
//       });
//    });
// });
// loadImage('image.png', function(image, err) {
//    if (!err) {
//       document.body.append(image);
// 	} else {
// 		console.log('произошла ошибка: ' + err);
// 	}
// });





/////////Асинхронная загрузка картинок в цикле в JavaScript////////////////

/*
 Пусть пути к картинкам хранятся в массиве:
let arr = ['img1.png', 'img2.png', 'img3.png'];

Мы можем загрузить эти картинки в цикле:
for (let path of arr) {
	loadImage(path, function(image, err) {
		document.body.append(image);
	});
}

Код получился красивый и без callback hell, однако, мы вернулись к двум нашим проблемам: порядок картинок не гарантирован и невозможно поймать момент загрузки всех картинок.

И решения в данной ситуации нет: невозможно запустить цикл, использовать внутри него асинхронную функцию, а потом поймать момент завершения всех функций цикла. Либо вам не нужно ловить этот момент и приведенный выше код вам подойдет либо добро пожаловать в callback hell.

Но, расстраиваться не стоит - решение проблемы возможно через промисы, которые мы будем изучать в следующих уроках. 
*/

// let paths = ['img1.png', 'img2.png', 'img3.png'];

// for (let path of paths) {
//     loadImage(path, function(image, err) {
//         if (!err) {
//             document.body.append(image);
//         } else {
//             console.log('Ошибка с файлом: ' + path);
//         }
//     });
// }