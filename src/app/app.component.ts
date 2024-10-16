import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [CommonModule, FormsModule]
})
export class AppComponent {
  tips: number[] = [5, 10, 15, 25, 50];
  billAmount: number = 0;
  tipPercentage: number = 0;
  numberOfPeople: number = 1;
  customTipPercentage: number | null = null;

  billAmountInvalid: boolean = false;
  customTipInvalid: boolean = false;
  numberOfPeopleInvalid: boolean = false;

  get tipAmount(): number {
    if (this.customTipPercentage) {
      this.tipPercentage = 0;
    }
    return this.billAmount * ((this.customTipPercentage !== null ? this.customTipPercentage : this.tipPercentage) / 100);
  }

  get totalAmount(): number {
    return this.billAmount + this.tipAmount;
  }

  get tipAmountPerPerson(): number {
    return this.tipAmount / this.numberOfPeople;
  }

  get totalAmountPerPerson(): number {
    return this.totalAmount / this.numberOfPeople;
  }
  selectTip(percentage: number) {
    this.tipPercentage = percentage;
    this.customTipPercentage = null;
  }
  reset() {
    this.billAmount = 0;
    this.tipPercentage = 0;
    this.customTipPercentage = null;
    this.numberOfPeople = 1;
    this.clearValidations();
  }

  clearValidations() {
    this.billAmountInvalid = false;
    this.customTipInvalid = false;
    this.numberOfPeopleInvalid = false;
  }
}
