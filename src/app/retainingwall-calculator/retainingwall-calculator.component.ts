import { Component } from '@angular/core';

@Component({
  selector: 'app-retainingwall-calculator',
  templateUrl: './retainingwall-calculator.component.html',
  styleUrls: ['./retainingwall-calculator.component.css']
})
export class RetainingwallCalculatorComponent {
  wallHeight: number=0;
  wallWidth: number=0;
  soilType: string = 'clay';
  loadOnWall: number=0;
  wallDesign: string='';

  calculateWallDesign() {
    // Assuming wall design is determined based on soil properties, wall dimensions, and loads
    // Wall design could involve stability analysis and determining required reinforcement

    // Sample logic to determine wall design based on inputs (not complete)
    if (this.soilType === 'clay') {
      if (this.wallHeight * this.wallWidth > 10) {
        this.wallDesign = 'Reinforced Concrete Wall';
      } else {
        this.wallDesign = 'Masonry Wall';
      }
    } else if (this.soilType === 'sand') {
      this.wallDesign = 'Gabion Wall';
    } else if (this.soilType === 'gravel') {
      this.wallDesign = 'Gravity Retaining Wall';
    } else {
      this.wallDesign = 'Unknown';
    }
  }
}
