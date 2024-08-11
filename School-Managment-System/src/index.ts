export class Student {
  private static idCounter: number = 1000;
  public name: string;
  private courses: string[];
  private balance: number;
  public studentId: string;

  constructor(name: string) {
    this.name = name;
    this.courses = [];
    this.balance = 0;
    this.studentId = this.generateId();
  }

  public enroll(course: string) {
    this.courses.push(course);
  }

  public payTuitionFee(amount: number) {
    this.balance -= amount;
  }

  public addBalance(amount: number) {
    this.balance += amount;
  }

  public checkBalance(): number {
    return this.balance;
  }

  private generateId(): string {
    return (Student.idCounter++).toString();
  }

  public showStudentDetails(): void {
     let id = this.generateId();
    console.log(
      `Student ${this.name}'s details:\nName: ${this.name}\nStudent Id: ${this.studentId}\nCourses: ${this.courses.join(", ")}\nBalance: ${this.balance}`
    );
  }
}
