// molar-mass-calculator.component.ts
import { Component } from '@angular/core';
import { create, all } from 'mathjs';

@Component({
  selector: 'app-molar-mass-calculator',
  templateUrl: './molar-mass-calculator.component.html',
  styleUrls: ['./molar-mass-calculator.component.css']
})
export class MolarMassCalculatorComponent {
  chemicalFormula: string = '';
  molarMass: number | null = null;
  math = create(all);

  calculateMolarMass() {
    try {
      if (this.chemicalFormula) {
        this.molarMass = this.calculateMolarMassForFormula(this.chemicalFormula);
      } else {
        this.molarMass = null;
      }
    } catch (error) {
      this.molarMass = null;
    }
  }

  calculateMolarMassForFormula(formula: string): number {
    const { elements } = this.parseChemicalFormula(formula);
    let totalMolarMass = 0;

    for (const element of elements) {
      const { symbol, count } = element;
      const atomicWeight = this.getAtomicWeightForElement(symbol);
      totalMolarMass += count * atomicWeight;
    }

    return totalMolarMass;
  }

  parseChemicalFormula(formula: string): { elements: { symbol: string, count: number }[] } {
    const elements: { symbol: string, count: number }[] = [];
    const regex = /([A-Z][a-z]*)(\d*)/g;
    let match;

    while ((match = regex.exec(formula))) {
      const symbol = match[1];
      const count = match[2] ? parseInt(match[2], 10) : 1;
      elements.push({ symbol, count });
    }

    return { elements };
  }

  getAtomicWeightForElement(symbol: string): number {
    const atomicWeights: { [symbol: string]: number } = {
      'H': 1.008,
      'He': 4.003,
      'Li': 6.941,
      'Be': 9.012,
      'B': 10.81,
      'C': 12.01,
      'N': 14.01,
      'O': 16.00,
      'F': 19.00,
      'Ne': 20.18,
      'Na': 22.99,
      'Mg': 24.31,
      'Al': 26.98,
      'Si': 28.09,
      'P': 30.97,
      'S': 32.06,
      'Cl': 35.45,
      'K': 39.10,
      'Ar': 39.95,
      'Ca': 40.08,
      'Sc': 44.96,
      'Ti': 47.87,
      'V': 50.94,
      'Cr': 52.00,
      'Mn': 54.94,
      'Fe': 55.85,
      'Ni': 58.69,
      'Co': 58.93,
      'Cu': 63.55,
      'Zn': 65.38,
      'Ga': 69.72,
      'Ge': 72.63,
      'As': 74.92,
      'Se': 78.96,
      'Br': 79.90,
      'Kr': 83.80,
      'Rb': 85.47,
      'Sr': 87.62,
      'Y': 88.91,
      'Zr': 91.22,
      'Nb': 92.91,
      'Mo': 95.94,
      'Tc': 98.00,
      'Ru': 101.1,
      'Rh': 102.9,
      'Pd': 106.4,
      'Ag': 107.9,
      'Cd': 112.4,
      'In': 114.8,
      'Sn': 118.7,
      'Sb': 121.8,
      'I': 126.9,
      'Te': 127.6,
      'Xe': 131.3,
      'Cs': 132.9,
      'Ba': 137.3,
      'La': 138.9,
      'Ce': 140.1,
      'Pr': 140.9,
      'Nd': 144.2,
      'Pm': 145.0,
      'Sm': 150.4,
      'Eu': 151.9,
      'Gd': 157.3,
      'Tb': 158.9,
      'Dy': 162.5,
      'Ho': 164.9,
      'Er': 167.3,
      'Tm': 168.9,
      'Yb': 173.0,
      'Lu': 175.0,
      'Hf': 178.5,
      'Ta': 180.9,
      'W': 183.8,
      'Re': 186.2,
      'Os': 190.2,
      'Ir': 192.2,
      'Pt': 195.1,
      'Au': 197.0,
      'Hg': 200.6,
      'Tl': 204.4,
      'Pb': 207.2,
      'Bi': 208.9,
      'Th': 232.0,
      'Pa': 231.0,
      'U': 238.0,
      'Np': 237.0,
      'Pu': 244.0,
      'Am': 243.0,
      'Cm': 247.0,
      'Bk': 247.0,
      'Cf': 251.0,
      'Es': 252.0,
      'Fm': 257.0,
      'Md': 258.0,
      'No': 259.0,
      'Lr': 262.0,
      'Rf': 267.0,
      'Db': 270.0,
      'Sg': 271.0,
      'Bh': 270.0,
      'Hs': 277.0,
      'Mt': 276.0,
      'Ds': 281.0,
      'Rg': 280.0,
      'Cn': 285.0,
      'Nh': 284.0,
      'Fl': 289.0,
      'Mc': 288.0,
      'Lv': 293.0,
      'Ts': 294.0,
      'Og': 294.0,
    };

    return atomicWeights[symbol] || 0; // Return 0 for unknown elements
  }
}