class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    displayInfo(): string {
        return `Name: ${this.name}, Age: ${this.age}`;
    }
}


class Student extends Person {
    studentId: string;
    course: string;
    semester: number;

    constructor(name: string, age: number, studentId: string, course: string, semester: number) {
        super(name, age); // Call the constructor of the Person class
        this.studentId = studentId;
        this.course = course;
        this.semester = semester;
    }

    displayInfo(): string {
        return `${super.displayInfo()}, Student ID: ${this.studentId}, Course: ${this.course}, Semester: ${this.semester}`;
    }
}

class Staff extends Person {
    staffId: string;
    department: string;
    position: string;

    constructor(name: string, age: number, staffId: string, department: string, position: string) {
        super(name, age); // Call the constructor of the Person class
        this.staffId = staffId;
        this.department = department;
        this.position = position;
    }

    displayInfo(): string {
        return `${super.displayInfo()}, Staff ID: ${this.staffId}, Department: ${this.department}, Position: ${this.position}`;
    }
}
// Create instances of Student and Staff
const student1 = new Student("Alice Johnson", 20, "S12345", "Computer Science", 2);
const staff1 = new Staff("Bob Smith", 35, "ST6789", "IT Department", "System Administrator");

// Display their information
console.log(student1.displayInfo());
console.log(staff1.displayInfo());