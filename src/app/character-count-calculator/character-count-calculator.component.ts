import { Component } from '@angular/core';

@Component({
  selector: 'app-character-count-calculator',
  templateUrl: './character-count-calculator.component.html',
  styleUrls: ['./character-count-calculator.component.css']
})
export class CharacterCountCalculatorComponent {
  inputText: string = '';
  charCount: number | undefined;

  countCharacters() {
    // Remove whitespaces and count characters
    this.charCount = this.inputText.replace(/\s+/g, '').length;
  }
}
