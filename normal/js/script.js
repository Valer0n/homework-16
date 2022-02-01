// 1. Завдання!
// let yourNumber = prompt('Enter five-digit number!');
// let x = 0;
// while (yourNumber > x) {
//     x *= 10;
//     x += yourNumber % 10;
//     yourNumber = Math.trunc(yourNumber / 10);
// }
// if (yourNumber === x || yourNumber === Math.trunc(x / 10)) {
//     console.log('Yes, it is palindrome!');
// } else console.log('No, it is not palindrome!');

// 2. Завдання!
// let a = 3;
// let b = 5;
// let c = 7;
// let price = +prompt('What is the price of the goods?');
// if (price >= 200 && price <= 300) {
//     a = price * (1 - (a / 100));
//     alert('Discount price will be ' + a);
// } else if (price >= 300 && price < 500) {
//     b = price * (1 - (b / 100));
//     alert('Discount price will be ' + b);
// } else if (price >= 500) {
//     c = price * (1 - (c / 100));
//     alert('Discount price will be ' + c);
// } else {
//     alert('Sorry! You have not discount!');
// }

// 4. Завдання!
// const DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
// let nowDay = 0;
// while (confirm(`${DAYS[nowDay]}. You want to look for next day`)) {
//     nowDay = (nowDay + 1) % DAYS.length;
// }