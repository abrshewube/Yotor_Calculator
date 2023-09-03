import { Component } from '@angular/core';

@Component({
  selector: 'app-pregnancy-due-date-calculator',
  templateUrl: './pregnancy-due-date-calculator.component.html',
  styleUrls: ['./pregnancy-due-date-calculator.component.css'],
})
export class PregnancyDueDateCalculatorComponent {
  lastMenstrualPeriod: string=''; // Store the last menstrual period as a string
  dueDate: Date | null = null; // Initialize dueDate to nu // Store the calculated due date

  calculateDueDate(): void {
    // Check if the last menstrual period is provided
    if (this.lastMenstrualPeriod) {
      // Calculate the due date by adding 280 days (40 weeks) to the last menstrual period
      const lmpDate = new Date(this.lastMenstrualPeriod);
      const dueDateTimestamp = lmpDate.getTime() + 280 * 24 * 60 * 60 * 1000;
      this.dueDate = new Date(dueDateTimestamp);
    } else {
      this.dueDate = null;
    }
  }
}
