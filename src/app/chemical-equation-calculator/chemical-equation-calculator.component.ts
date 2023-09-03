import { Component } from '@angular/core';
import { create, all } from 'mathjs';

@Component({
  selector: 'app-chemical-equation-calculator',
  templateUrl: './chemical-equation-calculator.component.html',
  styleUrls: ['./chemical-equation-calculator.component.css']
})
export class ChemicalEquationCalculatorComponent {
  equation: string = '';
  balancedEquation: string = '';
  math = create(all);

  calculateBalancedEquation() {
    try {
      if (this.equation) {
        this.balancedEquation = this.solveChemicalEquation(this.equation);
      } else {
        this.balancedEquation = '';
      }
    } catch (error) {
      this.balancedEquation = 'Invalid equation';
    }
  }
  parseChemicalEquation(equation: string): { elements: string[], compounds: string[] } {
    const parts = equation.split(' -> ');
    const leftSide = parts[0].split(' + ');
    const rightSide = parts[1].split(' + ');
  
    // Extract unique elements and compounds
    const elements = new Set<string>();
    const compounds = new Set<string>([...leftSide, ...rightSide]);
  
    for (const compound of compounds) {
      const regex = /([A-Z][a-z]*)(\d*)/g;
      let match;
      while ((match = regex.exec(compound))) {
        elements.add(match[1]);
      }
    }
  
    return { elements: [...elements], compounds: [...compounds] };
  }
  

  createCoefficientMatrix(chemicalEquation: { elements: string[], compounds: string[] }): number[][] {
    const { elements, compounds } = chemicalEquation;
    const matrix: number[][] = [];
  
    for (const element of elements) {
      const row: number[] = [];
  
      for (const compound of compounds) {
        const regex = new RegExp(`(${element}\\d*)`, 'g');
        const matches = compound.match(regex);
        const coefficient = matches ? matches.length : 0;
        row.push(coefficient);
      }
  
      matrix.push(row);
    }
  
    return matrix;
  }

  solveChemicalEquation(equation: string): string {
    const { elements, compounds } = this.parseChemicalEquation(equation);
    const matrix = this.createCoefficientMatrix({ elements, compounds });
    const b = this.math.zeros(matrix.length);
    // Use mathjs to solve the system of linear equations
    const coefficients = this.math.lusolve(matrix,b) as number[][];
  
    // Format the balanced chemical equation
    let balancedEquation = '';
    for (let i = 0; i < coefficients.length; i++) {
      const coefficient = coefficients[i][0];
      const element = elements[i];
      let elementWithCoefficient = '';
  
      // Handle special cases where the same element appears in multiple compounds
      if (element.includes('+')) {
        const elementParts = element.split('+');
        elementWithCoefficient = elementParts.map((part) => {
          const trimmedPart = part.trim();
          return `${coefficient > 0 ? coefficient : ''}${trimmedPart}`;
        }).join('+');
      } else {
        elementWithCoefficient = `${coefficient > 0 ? coefficient : ''}${element}`;
      }
  
      balancedEquation += `${elementWithCoefficient} + `;
    }
  
    balancedEquation = balancedEquation.slice(0, -3) + ' -> ';
    balancedEquation += compounds.join(' + ');
  
    return balancedEquation;
  }
  
}
