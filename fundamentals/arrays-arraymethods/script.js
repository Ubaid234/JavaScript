// Create some arrays
const numbers = [43,56,33,23,44,36,5];
const numbers2 = new Array(22,45,33,76,54);
const fruit = ['Apple', 'Banana', 'Orange', 'Pear'];
const mixed = [22, 'Hello', true, undefined, null, {a:1, b:1}, new Date()];

let val;

// Get array length
val = numbers.length;
// Check if is array
val = Array.isArray(numbers);
// Get single value
val = numbers[3];
val = numbers[0];
// Insert into array
numbers[2] = 100;
// Find index of value
val = numbers.indexOf(36);

// MUTATING ARRAYS
// // Add on to end
// numbers.push(250);
// // Add on to front
// numbers.unshift(120);
// // Take off from end
// numbers.pop();
// // Take off from front
// numbers.shift();
// // Splice values
// numbers.splice(1,3);
// // Reverse
// numbers.reverse();

// Concatenate array
val = numbers.concat(numbers2);

// Sorting arrays
val = fruit.sort();
// val = numbers.sort();

//  Use the "compare function"
// val = numbers.sort(function(x, y){
//   return x - y;
// });

//  Reverse sort
// val = numbers.sort(function(x, y){
//   return y - x;
// });

// Find
function under50(num){
  return num < 50;
}

val = numbers.find(under50);

// console.log(numbers);
// console.log(val);


// forEach() Array Method

const nams = [20,21,22,23,24,25,26,27,28];

nams.forEach(function(nam){
  console.log( nam * 2 );
});

// MAP

const texts = ['rofl', 'lol', 'omg' , 'ttyl']
const caps = texts.map(function(t){
  return t.toUpperCase();
})


// FILTER()

const nums = [34,35,67,54,109,102,32,9];

const odds = nums.filter(n => n % 2 === 1);
const evens = nums.filter(n => n % 2 === 0);

const bigNums = nums.filter(n => n > 50);

// SOME & EVERY

// EVERY

const words = ['dog','dig', 'log', 'bag', 'wag'];

const all3Lets = words.every(word => word.length === 3);

const all3Endings = words.every(word => {
  const last = words.length - 1;
  return word[last] === 'g'
})

// SOME

const someStartWithD = words.some(word => word[0] === 'd');


// Revisting sorts 

const prices = [400.50, 3000, 99.99, 35.99, 12.00,9500];

prices.sort();

const badSort = prices.slice().sort();
const ascSort = prices.slice().sort((a,b) => a - b);
const descSort = prices.sort((a,b) => b - a);

// REDUCE 

const first = [3,4,5,6,7];
const product = first.reduce((total , currentVal) =>{
  return total * currentVal;
})

// total                currentVal
// 3                        4
// 12                       5
// 60                       6
// 360                      7

// 2520





