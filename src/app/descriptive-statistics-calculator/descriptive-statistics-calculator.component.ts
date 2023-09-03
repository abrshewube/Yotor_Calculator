import { Component } from '@angular/core';

@Component({
  selector: 'app-descriptive-statistics-calculator',
  templateUrl: './descriptive-statistics-calculator.component.html',
  styleUrls: ['./descriptive-statistics-calculator.component.css']
})
export class DescriptiveStatisticsCalculatorComponent {
  data: string = '';
  mean: number | null = null;
  median: number | null = null;
  mode: number[] | null = null;
  variance: number | null = null;
  standardDeviation: number | null = null;

  calculateStatistics() {
    try {
      if (this.data) {
        // Parse the input data as an array of numbers
        const dataArray = this.data.split(',').map(Number);

        // Calculate mean
        this.mean = this.calculateMean(dataArray);

        // Calculate median
        this.median = this.calculateMedian(dataArray);

        // Calculate mode
        this.mode = this.calculateMode(dataArray);

        // Calculate variance
        this.variance = this.calculateVariance(dataArray);

        // Calculate standard deviation
        this.standardDeviation = this.calculateStandardDeviation(dataArray);
      }
    } catch (error) {
      this.resetStatistics();
    }
  }

  calculateMean(data: number[]): number {
    const sum = data.reduce((acc, value) => acc + value, 0);
    return sum / data.length;
  }

  calculateMedian(data: number[]): number {
    const sortedData = data.sort((a, b) => a - b);
    const middle = Math.floor(sortedData.length / 2);
    if (sortedData.length % 2 === 0) {
      return (sortedData[middle - 1] + sortedData[middle]) / 2;
    } else {
      return sortedData[middle];
    }
  }

  calculateMode(data: number[]): number[] {
    const countMap: { [key: number]: number } = {};
    data.forEach((value) => {
      countMap[value] = (countMap[value] || 0) + 1;
    });

    let maxCount = 0;
    let modes: number[] = [];

    for (const value in countMap) {
      if (countMap.hasOwnProperty(value)) {
        const count = countMap[value];
        if (count > maxCount) {
          maxCount = count;
          modes = [Number(value)];
        } else if (count === maxCount) {
          modes.push(Number(value));
        }
      }
    }

    return modes;
  }

  calculateVariance(data: number[]): number {
    const mean = this.calculateMean(data);
    const squaredDifferences = data.map((value) => Math.pow(value - mean, 2));
    const sumSquaredDifferences = squaredDifferences.reduce((acc, value) => acc + value, 0);
    return sumSquaredDifferences / data.length;
  }

  calculateStandardDeviation(data: number[]): number {
    return Math.sqrt(this.calculateVariance(data));
  }

  resetStatistics() {
    this.mean = null;
    this.median = null;
    this.mode = null;
    this.variance = null;
    this.standardDeviation = null;
  }
}
