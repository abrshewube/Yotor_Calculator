import { Component } from '@angular/core';

@Component({
  selector: 'app-word-count-calculator',
  templateUrl: './word-count-calculator.component.html',
  styleUrls: ['./word-count-calculator.component.css']
})
export class WordCountCalculatorComponent {
  inputText: string = '';
  wordCount: number | undefined;

  countWords() {
    // Split the input text into words by spaces
    const words = this.inputText.split(/\s+/).filter(word => word.trim() !== '');
    
    // Calculate the word count
    this.wordCount = words.length;
  }
}
