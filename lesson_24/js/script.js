'use strict';

// function showName() {
// 	console.log('Вася!');
// }
// setTimeout(showName, 0);
// console.log('Коля!');

// for (let i = 2; i <= 10; i++) {
// 	if (i % 2) {
// 		continue;
// 	}
// 	console.log(`Число: ${i}`);
// 	if (i == 12) break;
// }

// for (let i = 0; i < 3; i++) {
// 	alert(`number ${i}!`);
// }
// let i = 0;
// while (i < 3) {
// 	i++;
// 	console.log(`number: ${i}`);
// }

// let number = prompt('Введите число больше 100')

// if(number = 0; number < 100; i++){
// 	prompt('Введите число больше 100');
// }else{
// 	alert('Вы ввели число больше 100')
// }

// let num;
// do {
// 	num = prompt('Введите число больше 100');
// 	if (num === null) {
// 		alert('Вы не ввели число (');
// 		break;
// 	}
// 	console.log(num);
// } while (num <= 100 && num !== null);
// {
// 	num++;
// 	alert('Вы ввели число больше 100!');
// }

// function createMessage(name, text) {
// 	return `${name}, ${text}`;
// }

// function showMessage(message) {
// 	console.log(message);
// }

// function initMessage(name, text) {
// 	showMessage(createMessage(name, text));
// }

// initMessage('Вася', 'Фрилансер');

// showMessage('Привет');

// Задача 4
// let showMessageTwo;
// if (2 > 1) {
// 	showMessageTwo = function () {
// 		console.log('Повідомлення');
// 	};
// }
// showMessageTwo();

// Масивы

// let arr = ['Вася', 'выфывыф', 'фывафыа'];
// let newArr = arr;
// newArr.push('Петя');
// console.log(arr.length);
// console.log(newArr);

// Задача 2
// let users = ['Ваня', 'Иштван'];
// let addUser = users;
// addUser.push('Оля');
// console.log(users);

// let removedUsers = users.splice(0, 1);
// console.log(removedUsers);
// console.log(users);

// let addMoreUsers = users;
// addMoreUsers.splice(0, 0, 'Маша', 'Паша');
// console.log(addMoreUsers);

// Задача 3
// let arr = ['Ваня', 'Иштван', 'Оля'];
// let removed = arr;
// console.log(removed);
// removed.splice(1, 1);
// console.log(removed);

// Задача 4
// let str = 'Ваня,Иштван,Оля';
// let result = str.split(',');
// console.log(str);
// console.log(result);
// Задача 5

// let arr = [9, 2, 8];
// let reduceValue = arr.reduce(function (previousValue, item, idex, array) {
// 	console.log(previousValue);
// });

// DOM
// Задача 1
// const block = document.querySelector('.page__homework');
// let result = block.getAttribute('data-say-hi');
// console.log(result);

// const elements = document.querySelectorAll('.get-elem__item');
// console.log(elements);

// elements.forEach((element) => {
// 	console.log(element);
// });
// console.log('__________________');

// let resultElem = elements[1];
// console.log(resultElem);

// let result = resultElem.textContent;
// console.log(result);

// const elements = document.querySelectorAll('.like');

// console.log(elements);

// Узнать ширину прокрутки
// function scrollbarWidth() {
// 	let documentWidth = parseInt(document.documentElement.clientWidth);
// 	let windowsWidth = parseInt(window.innerWidth);
// 	let scrollbarWidth = windowsWidth - documentWidth;
// 	return scrollbarWidth;
// }
// let element = document.querySelector('.example-4');
// console.log(element);

// console.log(`Ширина прокрутики = ${scrollbarWidth(element)}`);

// Завантаження;
// window.addEventListener('DOMContentLoaded', domLoaded);
// function domLoaded(e) {}

// Задача 2
window.addEventListener('load', pageLoaded);
function pageLoaded(e) {
	document.documentElement.classList.add('loaded');
}
let result = document.querySelector('.loaded');

setTimeout(() => {
	window.scrollTo({
		top: 100,
		left: 0,
		behavior: 'smooth',
	});
}, 1000);

setTimeout(result);

// Задача 3
const blockOne = document.querySelector('.page__example-1');
const blockTwo = document.querySelector('.page__example-2');
const blockThree = document.querySelector('.page__example-3');

console.log(blockOne);
console.log(blockTwo);
console.log(blockThree);

// const elementOneOffsetParent = blockOne.offsetParent;
// console.log(elementOneOffsetParent);

const elementOneOffsetLeft = blockOne.offsetLeft;
const elementTwoOffsetLeft = blockTwo.offsetLeft;
const elementThreeOffsetLeft = blockThree.offsetLeft;

const elementOneOffsetTop = blockOne.offsetTop;
const elementTwoOffsetTop = blockTwo.offsetTop;
const elementThreeOffsetTop = blockThree.offsetTop;

console.log(elementOneOffsetLeft);
console.log(elementTwoOffsetLeft);
console.log(elementThreeOffsetLeft);

console.log(elementOneOffsetTop);
console.log(elementTwoOffsetTop);
console.log(elementThreeOffsetTop);
