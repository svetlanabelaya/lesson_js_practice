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

 let res = math.avg1([1, 2, 3]);
 console.log(res);

 /*
На фрилансе ты часто будешь встречать чужой код без defer. Чтобы твои скрипты не выдавали ошибку Cannot read property of null (когда JS ищет кнопку, которой еще нет), ты будешь «оборачивать» свой код в это событие.
Итог:

    Если используешь defer — всё ок, расслабься.
    Если пишешь скрипт прямо в HTML — используй DOMContentLoaded.
 */