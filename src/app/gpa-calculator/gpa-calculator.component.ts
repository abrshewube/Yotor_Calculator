import { Component } from '@angular/core';

interface Course {
  creditHours: number;
  grade: number;
}

@Component({
  selector: 'app-gpa-calculator',
  templateUrl: './gpa-calculator.component.html',
  styleUrls: ['./gpa-calculator.component.css'],
})
export class GpaCalculatorComponent {
  numCourses: number = 1;
  courses: Course[] = [{ creditHours: 1, grade: 4 }];
  gpa: number | null = null;

  grades = [
    { name: 'A', value: 4 },
    { name: 'B', value: 3 },
    { name: 'C', value: 2 },
    { name: 'D', value: 1 },
    { name: 'F', value: 0 },
  ];

  updateCourses(): void {
    this.courses = Array.from({ length: this.numCourses }, () => ({ creditHours: 1, grade: 4 }));
    this.calculateGPA();
  }
  

  calculateGPA(): void {
    const totalCreditHours = this.courses.reduce((total, course) => total + course.creditHours, 0);
    const totalGradePoints = this.courses.reduce((total, course) => total + course.creditHours * course.grade, 0);
    this.gpa = totalGradePoints / totalCreditHours;
  }
}
