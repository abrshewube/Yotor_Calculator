import { Component } from '@angular/core';

@Component({
  selector: 'app-determinant-calculator',
  templateUrl: './determinant-calculator.component.html',
  styleUrls: ['./determinant-calculator.component.css']
})
export class DeterminantCalculatorComponent {
  matrixOrder: number = 2;
  matrixData: number[][] = this.getInitialMatrixData();
  determinant: number | null = null;

  calculateDeterminant() {
    try {
      // Calculate the determinant using recursion (Laplace expansion)
      this.determinant = this.getDeterminant(this.matrixData);
    } catch (error) {
      this.determinant = null;
      alert('Error: Invalid input. Please enter a valid square matrix.');
    }
  }

  private getInitialMatrixData(): number[][] {
    return Array.from({ length: this.matrixOrder }, () =>
      Array.from({ length: this.matrixOrder }, () => 0)
    );
  }


  private getDeterminant(matrix: number[][]): number {
    if (matrix.length !== matrix[0].length) {
      throw new Error('Matrix must be square (rows = columns).');
    }

    const order = matrix.length;

    if (order === 1) {
      return matrix[0][0];
    }

    if (order === 2) {
      return matrix[0][0] * matrix[1][1] - matrix[0][1] * matrix[1][0];
    }

    let determinant = 0;
    for (let i = 0; i < order; i++) {
      const minor = this.getMinor(matrix, 0, i);
      determinant += matrix[0][i] * this.getDeterminant(minor) * (i % 2 === 0 ? 1 : -1);
    }

    return determinant;
  }

  private getMinor(matrix: number[][], row: number, col: number): number[][] {
    return matrix
      .filter((_, rowIndex) => rowIndex !== row)
      .map(rowData => rowData.filter((_, colIndex) => colIndex !== col));
  }

  // Function to update the matrixData when matrixOrder changes
  updateMatrixData() {
    this.matrixData = this.getInitialMatrixData();
  }
}
