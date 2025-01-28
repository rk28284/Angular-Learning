let age: number = 25;
let largeNumber: bigint = 9007199254740991n
let name: string = "John Doe";

let isStudent: boolean = true;

let scores: number[] = [85, 90, 95];
let colors: string[] = ["red", "green", "blue"];
let answers: boolean[] = [true, false, true];


let person: [string, number] = ["Alice", 30];

enum Direction {
    North,
    East,
    South,
    West
}

let currentDirection: Direction = Direction.North;

let randomValue: any = "Hello";

function logMessage(message: string): void {
    console.log(message);
}

let emptyValue: null = null;
let notAssigned: undefined = undefined;


// Function with parameter and return type annotations
function add(a: number, b: number): number {
    return a + b;
}

// Function with no return value (void)
function greet(name: string): void {
    console.log(`Hello, ${name}`);
}


interface Person {
    name: string;
    age: number;
    isStudent: boolean;
}

let person1: Person = {
    name: "Alice",
    age: 30,
    isStudent: false
};

type Point = {
    x: number;
    y: number;
};

let point: Point = {
    x: 10,
    y: 20
};


// Numeric Types
let age: number = 25;
let largeNumber: bigint = 9007199254740991n;

// String Type
let name: string = "John Doe";

// Boolean Type
let isStudent: boolean = true;

// Array Types
let scores: number[] = [85, 90, 95];
let colors: string[] = ["red", "green", "blue"];
let answers: boolean[] = [true, false, true];

// Tuple Type
let person: [string, number] = ["Alice", 30];

// Enum Type
enum Direction {
    North,
    East,
    South,
    West
}

let currentDirection: Direction = Direction.North;

// Any Type
let randomValue: any = "Hello";

// Void Type
function logMessage(message: string): void {
    console.log(message);
}

// Null and Undefined Types
let emptyValue: null = null;
let notAssigned: undefined = undefined;

// Function Declarations
function add(a: number, b: number): number {
    return a + b;
}

function greet(name: string): void {
    console.log(`Hello, ${name}`);
}

// Object Types using Interface
interface Person {
    name: string;
    age: number;
    isStudent: boolean;
}

let person1: Person = {
    name: "Alice",
    age: 30,
    isStudent: false
};

// Object Types using Type Alias
type Point = {
    x: number;
    y: number;
};

let point: Point = {
    x: 10,
    y: 20
};