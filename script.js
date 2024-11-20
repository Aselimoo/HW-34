// Домашнее задание к уроку №34: “Массивы”

// Задание 1: Создание массива

let fruits = ["Яблоко", "Банан", "Апельсин"];
console.log(fruits);


// Задание 2: Доступ к элементам массива

console.log(fruits[0]);
console.log(fruits[2]);

fruits.push("Груша");
console.log(fruits);


// Задание 3: Удаление элементов из массива

fruits.pop();
fruits.shift();
console.log(fruits);


// Задание 4: Метод `forEach`

fruits.forEach((fruit) => {
    console.log(fruit)
})


// Задание 5: Метод `map`

let lengths = fruits.map((fruit) => fruit.length);
console.log(lengths);


// Задание 6: Метод `filter`

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let evenNumbers = numbers.filter((number) => number % 2 === 0);
console.log(evenNumbers);


// Задание 7: Метод `reduce`

let sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum);


// Задание 8: Метод `find`

let result = numbers.find((number) => number > 5);
console.log(result);


// Задание 9: Соединение массивов

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

let arr3 = arr1.concat(arr2);
console.log(arr3);


// Задание 10: Проверка существования элемента (метод `includes`)

let fruits2 = ["Яблоко", "Банан", "Апельсин"];
console.log(fruits2.includes("Банан"));


// Задание 11: Обратный порядок массива

fruits2.reverse();
console.log(fruits2);
