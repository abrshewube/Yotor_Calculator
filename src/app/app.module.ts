import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IntegralCalculatorComponent } from './integral-calculator/integral-calculator.component';
import { DeterminantCalculatorComponent } from './determinant-calculator/determinant-calculator.component';
import { InverseCalculatorComponent } from './inverse-calculator/inverse-calculator.component';
import { FactoringCalculatorComponent } from './factoring-calculator/factoring-calculator.component';
import { LimitCalculatorComponent } from './limit-calculator/limit-calculator.component';
import { DescriptiveStatisticsCalculatorComponent } from './descriptive-statistics-calculator/descriptive-statistics-calculator.component';
import { LoanCalculatorComponent } from './loan-calculator/loan-calculator.component';
import { ChemicalEquationCalculatorComponent } from './chemical-equation-calculator/chemical-equation-calculator.component';
import { MolarMassCalculatorComponent } from './molar-mass-calculator/molar-mass-calculator.component';
import { DerivativeCalculatorComponent } from './derivative-calculator/derivative-calculator.component';
import { HttpClientModule } from '@angular/common/http';
import { PhCalculatorComponent } from './ph-calculator/ph-calculator.component';
import { PohCalculatorComponent } from './poh-calculator/poh-calculator.component';
import { ConversionCalculatorComponent } from './conversion-calculator/conversion-calculator.component';
import { LengthConversionComponent } from './length-conversion/length-conversion.component';
import { AreaConversionComponent } from './area-conversion/area-conversion.component';
import { VolumeConversionComponent } from './volume-conversion/volume-conversion.component';
import { TemperatureConversionComponent } from './temperature-conversion/temperature-conversion.component';
import { WeightConversionComponent } from './weight-conversion/weight-conversion.component';
import { TimeConversionComponent } from './time-conversion/time-conversion.component';
import { DosageCalculatorComponent } from './dosage-calculator/dosage-calculator.component';
import { PermutationCalculatorComponent } from './permutation-calculator/permutation-calculator.component';
import { CombinationCalculatorComponent } from './combination-calculator/combination-calculator.component';
import { PregnancyDueDateCalculatorComponent } from './pregnancy-due-date-calculator/pregnancy-due-date-calculator.component';
import { GpaCalculatorComponent } from './gpa-calculator/gpa-calculator.component';
import { ConcreteMixDesignCalculatorComponent } from './concrete-mix-design-calculator/concrete-mix-design-calculator.component';
import { BeamCalculatorComponent } from './beam-calculator/beam-calculator.component';
import { ColumnCalculatorComponent } from './column-calculator/column-calculator.component';
import { RetainingwallCalculatorComponent } from './retainingwall-calculator/retainingwall-calculator.component';
import { SlopeStabilityCalculatorComponent } from './slope-stability-calculator/slope-stability-calculator.component';
import { StormwaterRunoffCalculatorComponent } from './stormwater-runoff-calculator/stormwater-runoff-calculator.component';
import { HydrologyCalculatorComponent } from './hydrology-calculator/hydrology-calculator.component';

import { LoanAmortizationCalculatorComponent } from './loan-amortization-calculator/loan-amortization-calculator.component';
import { InvestmentReturnCalculatorComponent } from './investment-return-calculator/investment-return-calculator.component';
import { BreakEvenCalculatorComponent } from './break-even-calculator/break-even-calculator.component';
import { NpvCalculatorComponent } from './npv-calculator/npv-calculator.component';
import { PayrollCalculatorComponent } from './payroll-calculator/payroll-calculator.component';
import { CurrencyConversionCalculatorComponent } from './currency-conversion-calculator/currency-conversion-calculator.component';
import { InflationCalculatorComponent } from './inflation-calculator/inflation-calculator.component';
import { InterestRateCalculatorComponent } from './interest-rate-calculator/interest-rate-calculator.component';
import { GdpCalculatorComponent } from './gdp-calculator/gdp-calculator.component';
import { WordCountCalculatorComponent } from './word-count-calculator/word-count-calculator.component';
import { CharacterCountCalculatorComponent } from './character-count-calculator/character-count-calculator.component';
import { ConverterComponent } from './converter/converter.component';
import { SubnetCalculatorComponent } from './subnet-calculator/subnet-calculator.component';

@NgModule({
  declarations: [
    AppComponent,
    DeterminantCalculatorComponent,
    InverseCalculatorComponent,
    FactoringCalculatorComponent,
    LimitCalculatorComponent,
    DescriptiveStatisticsCalculatorComponent,
    LoanCalculatorComponent,
    ChemicalEquationCalculatorComponent,
    MolarMassCalculatorComponent,
    DerivativeCalculatorComponent,
    IntegralCalculatorComponent,
    PhCalculatorComponent,
    PohCalculatorComponent,
    ConversionCalculatorComponent,
    LengthConversionComponent,
    AreaConversionComponent,
    VolumeConversionComponent,
    TemperatureConversionComponent,
    WeightConversionComponent,
    TimeConversionComponent,
    DosageCalculatorComponent,
    PermutationCalculatorComponent,
    CombinationCalculatorComponent,
    PregnancyDueDateCalculatorComponent,
    GpaCalculatorComponent,
    ConcreteMixDesignCalculatorComponent,
    BeamCalculatorComponent,
    ColumnCalculatorComponent,
    RetainingwallCalculatorComponent,
    SlopeStabilityCalculatorComponent,
    StormwaterRunoffCalculatorComponent,
    HydrologyCalculatorComponent,

    LoanAmortizationCalculatorComponent,
     InvestmentReturnCalculatorComponent,
     BreakEvenCalculatorComponent,
     NpvCalculatorComponent,
     PayrollCalculatorComponent,
     CurrencyConversionCalculatorComponent,
     InflationCalculatorComponent,
     InterestRateCalculatorComponent,
     GdpCalculatorComponent,
     WordCountCalculatorComponent,
     CharacterCountCalculatorComponent,
     ConverterComponent,
     SubnetCalculatorComponent,
     
     
     

    
    
  
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
