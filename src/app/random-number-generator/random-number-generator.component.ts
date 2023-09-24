import { Component } from '@angular/core';

@Component({
  selector: 'app-random-number-generator',
  templateUrl: './random-number-generator.component.html',
  styleUrls: ['./random-number-generator.component.css'],
})
export class RandomNumberGeneratorComponent {
  minRange: number = 1;
  maxRange: number = 100;
  randomNum: number = 0;

  generateRandomNumber() {
    this.randomNum = this.getRandomNumber(this.minRange, this.maxRange);
  }

  private getRandomNumber(min: number, max: number): number {
    return min + Math.random() * (max - min);
  }
}
