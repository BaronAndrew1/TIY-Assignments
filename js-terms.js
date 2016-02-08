/**
 * For each of the following Array methods,

 * 1. use them in an example
 * 2. use console.log() to make the code run in the console!

 **/

// .sort()

var numbers = [1,5,2,4,3]
numbers.sort()
console.log(numbers)

// .concat()

var numberOdd = [1,3,5,7,9]
var numberEven = [2,4,6,8,10]
var numberAll = numberOdd.concat(numberEven)
console.log(numberAll)

// .indexOf()

var stringone = 'This is a string!';
console.log(+ stringone.indexOf('r'))

// .split()

var myString = 'This is my world! Leave it alone you bum!';
var splits = myString.split(' ', 9);

console.log(splits);

// .join()

var blah = ['one', 'two', 'three', 'four', 'five']
var numbers = blah.join()
console.log(numbers)

// .pop()

var dog = ['cat', 'tiger', 'fly', 'jump', 'dog']
var popped = dog.pop()
console.log(popped)

// .push()

var components = ['door', 'window']
components.push('wall', 'ceiling')
console.log(components)

// .slice()

var cinnamon = ['blue', 'green', 'yellow', 'teal', 'mango'];
var blueberry = cinnamon.slice(2, 4);
console.log(blueberry)

// .splice()

var myArray = ['fig', 'prawn', 'lilly', 'lemon'];
var removed =myArray.splice(2,1)
console.log(removed)

// .shift()

var funk = ['zero', 'one', 'two', 'three']
var shifted = funk.shift()
console.log(shifted)

// .unshift()

var raw = [3,4,5,6,7]
raw.unshift(0,1,2)
console.log(raw)

// .filter()

function zero(value) {
  return value >= 10;
}
var filtered = [14, 50, 18, 207, 1260].filter(zero);
console.log(filtered)

// .map()

var numbers = [1, 4, 9, 16, 25, 36];
var roots = numbers.map(Math.sqrt);
console.log(numbers);
console.log(roots);
