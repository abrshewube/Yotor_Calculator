import { Component } from '@angular/core';

@Component({
  selector: 'app-concrete-mix-design-calculator',
  templateUrl: './concrete-mix-design-calculator.component.html',
  styleUrls: ['./concrete-mix-design-calculator.component.css']
})
export class ConcreteMixDesignCalculatorComponent {
  desiredStrength: number=0;
  waterCementRatio: number=0;
  mixDesignResult: any;

  calculateMixDesign() {
    if (!this.desiredStrength || !this.waterCementRatio) {
      // Display an error message or handle the missing input values
      return;
    }

    // Assuming that the cement content is fixed to 1 bag (50 kg)
    const cementContent = 1;

    // Calculate water content based on the water-cement ratio
    const waterContent = this.waterCementRatio * cementContent;

    // Calculate the total weight of the mix (cement + water + sand + coarse aggregate)
    const totalWeight = cementContent + waterContent + this.calculateAggregatesWeight();

    // Calculate the weight of each ingredient based on the desired strength and total weight
    const cementWeight = (this.desiredStrength / 100) * totalWeight;
    const sandWeight = this.calculateSandWeight(cementWeight);
    const coarseAggregateWeight = this.calculateCoarseAggregateWeight(cementWeight);

    // Store the calculated mix design result
    this.mixDesignResult = {
      cement: cementWeight.toFixed(2),
      water: waterContent.toFixed(2),
      sand: sandWeight.toFixed(2),
      coarseAggregate: coarseAggregateWeight.toFixed(2)
    };
  }

  // Helper methods to calculate weights of sand and coarse aggregate based on typical proportions
  private calculateSandWeight(cementWeight: number): number {
    // Assuming 2 parts sand for each part of cement
    return 2 * cementWeight;
  }

  private calculateCoarseAggregateWeight(cementWeight: number): number {
    // Assuming 4 parts coarse aggregate for each part of cement
    return 4 * cementWeight;
  }

  // Helper method to calculate the total weight of aggregates based on desired strength
  private calculateAggregatesWeight(): number {
    // Assuming 70% of the total weight is aggregates for typical mixes
    return 0.7;
  }
}
