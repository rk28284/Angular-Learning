"use strict";
let age = 25;
let largeNumber = 9007199254740991n;
let name = "John Doe";
let isStudent = true;
let scores = [85, 90, 95];
let colors = ["red", "green", "blue"];
let answers = [true, false, true];
let person = ["Alice", 30];
var Direction;
(function (Direction) {
    Direction[Direction["North"] = 0] = "North";
    Direction[Direction["East"] = 1] = "East";
    Direction[Direction["South"] = 2] = "South";
    Direction[Direction["West"] = 3] = "West";
})(Direction || (Direction = {}));
let currentDirection = Direction.North;
let randomValue = "Hello";
function logMessage(message) {
    console.log(message);
}
let emptyValue = null;
let notAssigned = undefined;
// Function with parameter and return type annotations
function add(a, b) {
    return a + b;
}
// Function with no return value (void)
function greet(name) {
    console.log(`Hello, ${name}`);
}
let person1 = {
    name: "Alice",
    age: 30,
    isStudent: false
};
let point = {
    x: 10,
    y: 20
};
// Numeric Types
let age = 25;
let largeNumber = 9007199254740991n;
// String Type
let name = "John Doe";
// Boolean Type
let isStudent = true;
// Array Types
let scores = [85, 90, 95];
let colors = ["red", "green", "blue"];
let answers = [true, false, true];
// Tuple Type
let person = ["Alice", 30];
// Enum Type
(function (Direction) {
    Direction[Direction["North"] = 0] = "North";
    Direction[Direction["East"] = 1] = "East";
    Direction[Direction["South"] = 2] = "South";
    Direction[Direction["West"] = 3] = "West";
})(Direction || (Direction = {}));
let currentDirection = Direction.North;
// Any Type
let randomValue = "Hello";
// Void Type
function logMessage(message) {
    console.log(message);
}
// Null and Undefined Types
let emptyValue = null;
let notAssigned = undefined;
// Function Declarations
function add(a, b) {
    return a + b;
}
function greet(name) {
    console.log(`Hello, ${name}`);
}
let person1 = {
    name: "Alice",
    age: 30,
    isStudent: false
};
let point = {
    x: 10,
    y: 20
};
