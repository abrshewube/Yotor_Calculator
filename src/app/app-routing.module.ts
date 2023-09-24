import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { InverseCalculatorComponent } from './inverse-calculator/inverse-calculator.component';
import { MainhomeComponent } from './mainhome/mainhome.component';
import { BeamCalculatorComponent } from './beam-calculator/beam-calculator.component';
import { BreakEvenCalculatorComponent } from './break-even-calculator/break-even-calculator.component';
import { LoanAmortizationCalculatorComponent } from './loan-amortization-calculator/loan-amortization-calculator.component';
// Import your calculator components here
import { DerivativeCalculatorComponent } from './derivative-calculator/derivative-calculator.component';
import { DescriptiveStatisticsCalculatorComponent } from './descriptive-statistics-calculator/descriptive-statistics-calculator.component';
import { DeterminantCalculatorComponent } from './determinant-calculator/determinant-calculator.component';
import { IntegralCalculatorComponent } from './integral-calculator/integral-calculator.component';
import { PermutationCalculatorComponent } from './permutation-calculator/permutation-calculator.component';
import { CombinationCalculatorComponent } from './combination-calculator/combination-calculator.component';
import { ColumnCalculatorComponent } from './column-calculator/column-calculator.component';
import { HydrologyCalculatorComponent } from './hydrology-calculator/hydrology-calculator.component';

import { SlopeStabilityCalculatorComponent } from './slope-stability-calculator/slope-stability-calculator.component';
import { StormwaterRunoffCalculatorComponent } from './stormwater-runoff-calculator/stormwater-runoff-calculator.component';
import { AreaConversionComponent } from './area-conversion/area-conversion.component';
import { ConverterComponent } from './converter/converter.component';
import { LengthConversionComponent } from './length-conversion/length-conversion.component';
import { TemperatureConversionComponent } from './temperature-conversion/temperature-conversion.component';
import { TimeConversionComponent } from './time-conversion/time-conversion.component';
import { WeightConversionComponent } from './weight-conversion/weight-conversion.component';
import { VolumeConversionComponent } from './volume-conversion/volume-conversion.component';
import { BitwiseCalculatorComponent } from './bitwise-calculator/bitwise-calculator.component';

import { InvestmentReturnCalculatorComponent } from './investment-return-calculator/investment-return-calculator.component';

import { LoanCalculatorComponent } from './loan-calculator/loan-calculator.component';
import { NpvCalculatorComponent } from './npv-calculator/npv-calculator.component';
import { PayrollCalculatorComponent } from './payroll-calculator/payroll-calculator.component';
import { MolarMassCalculatorComponent } from './molar-mass-calculator/molar-mass-calculator.component';
import { PhCalculatorComponent } from './ph-calculator/ph-calculator.component';
import { PohCalculatorComponent } from './poh-calculator/poh-calculator.component';
import { GdpCalculatorComponent } from './gdp-calculator/gdp-calculator.component';
import { InflationCalculatorComponent } from './inflation-calculator/inflation-calculator.component';
import { GpaCalculatorComponent } from './gpa-calculator/gpa-calculator.component';
import { PregnancyDueDateCalculatorComponent } from './pregnancy-due-date-calculator/pregnancy-due-date-calculator.component';
import { RandomNumberGeneratorComponent } from './random-number-generator/random-number-generator.component';

import { CharacterCountCalculatorComponent } from './character-count-calculator/character-count-calculator.component';
import { WordCountCalculatorComponent } from './word-count-calculator/word-count-calculator.component';
import { RetainingwallCalculatorComponent } from './retainingwall-calculator/retainingwall-calculator.component';
import { NewPageComponent } from './new-page/new-page.component';
import { EngineerComponent } from './engineer/engineer.component';
import { MeasureComponent } from './measure/measure.component';
import { BusinessComponent } from './business/business.component';
import { ChemoComponent } from './chemo/chemo.component';
import { EconomicsComponent } from './economics/economics.component';

const routes: Routes = [
  { path: '', component:  MainhomeComponent },
  { path: 'calculator/area', component:  AreaConversionComponent },
  { path: 'calculator/beam', component: BeamCalculatorComponent },
  { path: 'calculator/break-even', component: BreakEvenCalculatorComponent },
  { path: 'calculator/loan-amortization', component: LoanAmortizationCalculatorComponent },
  // Add routes for other calculators here
  { path: 'calculator/derivative', component: DerivativeCalculatorComponent },
  { path: 'calculator/descrpitive', component: DescriptiveStatisticsCalculatorComponent },
  { path: 'calculator/determinant', component: DeterminantCalculatorComponent },
  { path: 'calculator/integral', component: IntegralCalculatorComponent },
  { path: 'calculator/permutation', component: PermutationCalculatorComponent },
  { path: 'calculator/combination', component: CombinationCalculatorComponent },
  { path: 'calculator/inverse', component: InverseCalculatorComponent },
// Engineering
  { path: 'calculator/beam', component: BeamCalculatorComponent },
  { path: 'calculator/column', component: ColumnCalculatorComponent },
  { path: 'calculator/hydrology', component: HydrologyCalculatorComponent },
  { path: 'calculator/rwc', component: RetainingwallCalculatorComponent },
  { path: 'calculator/slope', component:SlopeStabilityCalculatorComponent },
  { path: 'calculator/strm', component: StormwaterRunoffCalculatorComponent },
  
  
  
  
  
  { path: 'slope-stability-calculator', component: SlopeStabilityCalculatorComponent },
  { path: 'stormwater-runoff-calculator', component: StormwaterRunoffCalculatorComponent },
  
  // Measurement/Unit Conversion
  { path: 'area-conversion', component: AreaConversionComponent },
  { path: 'converter', component: ConverterComponent },
  { path: 'length-conversion', component: LengthConversionComponent },
  { path: 'temperature-conversion', component: TemperatureConversionComponent },
  { path: 'time-conversion', component: TimeConversionComponent },
  { path: 'weight-conversion', component: WeightConversionComponent },
  { path: 'volume-conversion', component: VolumeConversionComponent },
  
  // Computer Science/Programming
  { path: 'bitwise-calculator', component: BitwiseCalculatorComponent },
  
  // Business/Finance
  { path: 'break-even-calculator', component: BreakEvenCalculatorComponent },
  { path: 'investment-return-calculator', component: InvestmentReturnCalculatorComponent },
  { path: 'loan-amortization-calculator', component: LoanAmortizationCalculatorComponent },
  { path: 'loan-calculator', component: LoanCalculatorComponent },
  { path: 'npv-calculator', component: NpvCalculatorComponent },
  { path: 'payroll-calculator', component: PayrollCalculatorComponent },
  
  // Chemistry
  { path: 'molar-mass-calculator', component: MolarMassCalculatorComponent },
  { path: 'ph-calculator', component: PhCalculatorComponent },
  { path: 'poh-calculator', component: PohCalculatorComponent },
  
  // Economics
  { path: 'gdp-calculator', component: GdpCalculatorComponent },
  { path: 'inflation-calculator', component: InflationCalculatorComponent },
  
  // Education
  { path: 'gpa-calculator', component: GpaCalculatorComponent },
  
  // Text Processing/Word Analysis
  { path: 'character-count-calculator', component: CharacterCountCalculatorComponent },
  { path: 'word-count-calculator', component: WordCountCalculatorComponent },
  
  // Health
  { path: 'pregnancy-due-date-calculator', component: PregnancyDueDateCalculatorComponent },
  
  // Random
  { path: 'random-number-generator', component: RandomNumberGeneratorComponent },

  // Catagory Pages
  { path: 'catagory/mathematics', component: NewPageComponent },
  { path: 'catagory/engineer', component: EngineerComponent },
  { path: 'catagory/measure', component: MeasureComponent },
  { path: 'catagory/business', component: BusinessComponent },
  { path: 'catagory/chemo', component: ChemoComponent},
  { path: 'catagory/economics', component: EconomicsComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
