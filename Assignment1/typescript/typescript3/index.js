"use strict";
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    displayInfo() {
        return `Name: ${this.name}, Age: ${this.age}`;
    }
}
class Student extends Person {
    constructor(name, age, studentId, course, semester) {
        super(name, age); // Call the constructor of the Person class
        this.studentId = studentId;
        this.course = course;
        this.semester = semester;
    }
    displayInfo() {
        return `${super.displayInfo()}, Student ID: ${this.studentId}, Course: ${this.course}, Semester: ${this.semester}`;
    }
}
class Staff extends Person {
    constructor(name, age, staffId, department, position) {
        super(name, age); // Call the constructor of the Person class
        this.staffId = staffId;
        this.department = department;
        this.position = position;
    }
    displayInfo() {
        return `${super.displayInfo()}, Staff ID: ${this.staffId}, Department: ${this.department}, Position: ${this.position}`;
    }
}
// Create instances of Student and Staff
const student1 = new Student("Alice Johnson", 20, "S12345", "Computer Science", 2);
const staff1 = new Staff("Bob Smith", 35, "ST6789", "IT Department", "System Administrator");
// Display their information
console.log(student1.displayInfo());
console.log(staff1.displayInfo());
