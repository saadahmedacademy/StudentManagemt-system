#! /usr/bin/env node
import { Student } from "./index.js";
import readline from "readline";
class StudentManagement {
    students = [];
    start() {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout,
        });
        const mainMenu = () => {
            console.log(`\n1. Add Student\n2. Enroll Student\n3. View Balance\n4. Pay Tuition Fee\n5. See Student Details\n6. Exit\n`);
            rl.question("Enter Your Choice Number: ", (choice) => {
                switch (choice) {
                    case "1":
                        this.addStudent(rl, mainMenu);
                        break;
                    case "2":
                        this.enrollStudent(rl, mainMenu);
                        break;
                    case "3":
                        this.viewBalance(rl, mainMenu);
                        break;
                    case "4":
                        this.payTuitionFee(rl, mainMenu);
                        break;
                    case "5":
                        this.showStudentDetails(rl, mainMenu);
                        break;
                    case "6":
                        rl.close();
                        break;
                    default:
                        console.log("Invalid choice. Try again.");
                        mainMenu();
                }
            });
        };
        mainMenu();
    }
    addStudent(rl, callback) {
        rl.question("Enter Student Name: ", (name) => {
            const student = new Student(name);
            this.students.push(student);
            console.log(`Student ${name} added successfully.`);
            student.showStudentDetails();
            callback();
        });
    }
    enrollStudent(rl, callback) {
        rl.question("Enter Student ID: ", (id) => {
            const student = this.students.find(student => student.studentId === id);
            if (student) {
                rl.question("Enter Course Name: ", (course) => {
                    student.enroll(course);
                    console.log(`Student ${student.name} enrolled in ${course} successfully.`);
                    student.showStudentDetails();
                    callback();
                });
            }
            else {
                console.log("Student not found.");
                callback();
            }
        });
    }
    viewBalance(rl, callback) {
        rl.question("Enter Student ID: ", (id) => {
            const student = this.students.find(student => student.studentId === id);
            if (student) {
                console.log(`Student ${student.name}'s balance is ${student.checkBalance()}`);
            }
            else {
                console.log("Student not found.");
            }
            callback();
        });
    }
    payTuitionFee(rl, callback) {
        rl.question("Enter Student ID: ", (id) => {
            const student = this.students.find(student => student.studentId === id);
            if (student) {
                rl.question("Enter Amount to Pay: ", (amount) => {
                    const parsedAmount = parseFloat(amount);
                    if (!isNaN(parsedAmount)) {
                        student.payTuitionFee(parsedAmount);
                        console.log(`Student ${student.name} paid ${amount} successfully.`);
                    }
                    else {
                        console.log("Invalid amount entered.");
                    }
                    callback();
                });
            }
            else {
                console.log("Student not found.");
                callback();
            }
        });
    }
    showStudentDetails(rl, callback) {
        rl.question("Enter Student ID: ", (id) => {
            const student = this.students.find(student => student.studentId === id);
            if (student) {
                student.showStudentDetails();
            }
            else {
                console.log("Student not found.");
            }
            callback();
        });
    }
}
const studentManagement = new StudentManagement();
studentManagement.start();
