import { Component } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {
  activeDropdown: string | null = null;

  
  mathematicsCalculators = [
    { name: 'Derivative Calculator', route: 'calculator/derivative' },
    { name: 'Descriptive Statistics Calculator', route: 'calculator/descriptive-statistics' },
    // Add other mathematics calculators here
  ];

  isDropdownOpen: { [key: string]: boolean } = {};

  toggleDropdown(category: string) {
    this.isDropdownOpen[category] = !this.isDropdownOpen[category];
  }
  isMobileMenuOpen = false;

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }
}
