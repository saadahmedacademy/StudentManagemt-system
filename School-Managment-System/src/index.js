export class Student {
    static idCounter = 1000;
    name;
    courses;
    balance;
    studentId;
    constructor(name) {
        this.name = name;
        this.courses = [];
        this.balance = 0;
        this.studentId = this.generateId();
    }
    enroll(course) {
        this.courses.push(course);
    }
    payTuitionFee(amount) {
        this.balance -= amount;
    }
    addBalance(amount) {
        this.balance += amount;
    }
    checkBalance() {
        return this.balance;
    }
    generateId() {
        return (Student.idCounter++).toString();
    }
    showStudentDetails() {
        let id = this.generateId();
        console.log(`Student ${this.name}'s details:\nName: ${this.name}\nStudent Id: ${this.studentId}\nCourses: ${this.courses.join(", ")}\nBalance: ${this.balance}`);
    }
}
