//LEVEL 1
// question 1

var stringVariable = "This is a string";

// question 2

var person = {
  name: "Håkon",
  age: 28
};

// question 3

var outOfStock = true;

if (outOfStock === true) {
  console.log("Out of stock.");
} else {
  console.log("In stock.");
}

// question 4

var randomNumbers = [3, 6, 1, 73, 55];

for (var i = 0; i < randomNumbers.length; i++) {
  console.log(randomNumbers[i]);
}

// question 5
var count;

for (var count = 15; count <= 25; count++) {
  console.log(count);
}

// question 6

for (var count = 15; count <= 25; count++) {
  if (count === 20) {
    console.log(count);
  }
}

// question 7

var familyMembers = [
  {
    name: "Ingunn",
    age: 56,
    mother: true
  },
  {
    name: "Eirik",
    age: 25,
    mother: false
  }
];

for (var i = 0; i < familyMembers.length; i++) {
  console.log(familyMembers[i].age);
  console.log(familyMembers[i].mother);
}

// question 8

function whatIDontLike(food) {
  console.log("I don't like " + food);
}

whatIDontLike("shrimp");

// question 9

function subtraction(x, y) {
  console.log(y - x);
}

subtraction(10, 6);

// question 10

var voluntary = [];

function newVoluntary(firstname) {
  voluntary.push(firstname);
}

newVoluntary("Håkon");

console.log(voluntary);

//LEVEL 2

//question 1
for (var count = 15; count <= 25; count++) {
  if (count % 2 == 0) {
    console.log(count);
  }
}

//question 2
function testName() {
  console.log("I am a function");
}

var innerFunction = testName();

function outerFunction(argument) {
  console.log();
}

outerFunction(innerFunction);
