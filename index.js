// 1- forEach
// Eseguire console.log() di ogni elemento di array

(function () {
  const array = [1, 2, 3, 4, 5, 6, 7, 8];

  const everyElement = console.log(array);

  const showEveryElement = everyElement.forEach(array);

  console.log(showEveryElement);
})();

// 2 - Lanciare un console.log() di ogni elemento, dopo un setTimeout di elemento * index
// risultato: dopo 0s: console.log(1)
//            dopo 1s: console.log(2)
//            dopo 2s: console.log(3)

(function () {
  console.clear();

  const array = [1, 2, 3, 4, 5, 6, 7, 8];
  const timeMs = 1000;
  const showEveryElement = (element, index, array) => console.log(element);
  
  const setTimeout.forEach(showEveryElement, timeMs * index,_);

  console.log(setTimeout);
})();

// 3- filter
// Tenere dentro l'array solo i numeri pari
// risultato: [2,4,6,8]

(function () {
  console.clear();
  const array = [1, 2, 3, 4, 5, 6, 7, 8];

  showEvenNumbers = (element, index, array) => element % 2 === 0;

  const evenNumbers = array.filter(showEvenNumbers);

  console.log(evenNumbers);
})();

// 4- Tenere solo i numeri in comune con questo array: [10, 1, 2, 5, 6], usare utility come Array.includes oppure Array.indexOf.
// risultato: [1,2,5,6]

(function () {
  console.clear();
  const array = [1, 2, 3, 4, 5, 6, 7, 8];
  const arrayTwo = [10, 1, 2, 5, 6];

  checkElementsInCommon = (element, index, array) => array.includes(element);

  console.log(arrayTwo.filter(checkElementsInCommon));
})();
