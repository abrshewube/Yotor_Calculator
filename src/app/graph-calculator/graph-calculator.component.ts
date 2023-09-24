import { Component, OnInit, ElementRef } from '@angular/core';
import * as Plotly from 'plotly.js';

@Component({
  selector: 'app-graph-calculator',
  templateUrl: './graph-calculator.component.html',
  styleUrls: ['./graph-calculator.component.css']
})
export class GraphCalculatorComponent implements OnInit {

  constructor(private el: ElementRef) { }

  ngOnInit(): void {
    // Sample data for the box plot
    const data: Partial<Plotly.BoxPlotData>[] = [
      {
        x: ['Category 1', 'Category 2', 'Category 3'],
        y: [3, 4, 1],
        type: 'box', // Set type to 'box' for box plot
        marker: { color: 'blue' },
        boxmean: true // Show mean in the box plot
      }
    ];

    // Layout configuration
    const layout = {
      title: 'Box Plot Example',
      xaxis: { title: 'Categories' },
      yaxis: { title: 'Values' }
    };

    // Create the box plot using Plotly
    Plotly.newPlot(this.el.nativeElement, data, layout);
  }
}
