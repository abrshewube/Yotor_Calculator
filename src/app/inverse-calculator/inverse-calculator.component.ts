import { Component } from '@angular/core';
import * as math from 'mathjs';

@Component({
  selector: 'app-inverse-calculator',
  templateUrl: './inverse-calculator.component.html',
  styleUrls: ['./inverse-calculator.component.css']
})
export class InverseCalculatorComponent {
  matrixOrder: number = 2;
  matrixData: number[][] = this.getInitialMatrixData();
  inverseMatrix: number[][] | null = null;

  calculateInverse() {
    try {
      // Calculate the determinant of the matrix
      const determinant = this.getDeterminant(this.matrixData);

      if (determinant === 0) {
        throw new Error('The determinant of the matrix is zero. The inverse does not exist.');
      }

      // Calculate the inverse matrix
      this.inverseMatrix = this.getInverse(this.matrixData);
    } catch (error) {
      this.inverseMatrix = null;
      alert(' The determinant of the matrix is zero. The inverse does not exist.');
    }
  }

  private getInitialMatrixData(): number[][] {
    return Array.from({ length: this.matrixOrder }, () =>
      Array.from({ length: this.matrixOrder }, () => 0)
    );
  }

  private getDeterminant(matrix: number[][]): number {
    // ... (Implement code to calculate the determinant of the matrix)
    // For example, you can use math.det(matrix) from mathjs to calculate the determinant.
    // Ensure that you have imported 'mathjs' at the top of the file.
    return math.det(matrix);
  }

  private getInverse(matrix: number[][]): number[][] {
    const inverseMatrix = math.inv(matrix);
    return inverseMatrix;
  }

  // Function to update the matrixData when matrixOrder changes
  updateMatrixData() {
    this.matrixData = this.getInitialMatrixData();
  }
}
