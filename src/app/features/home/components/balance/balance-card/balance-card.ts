import { CurrencyPipe } from '@angular/common';
import { Component, input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-balance-card',
  imports: [MatCardModule, CurrencyPipe],
  templateUrl: './balance-card.html',
  styleUrl: './balance-card.scss'
})
export class BalanceCard {
  readonly header = input.required<string>();
  readonly amount = input.required<number>();
  readonly type = input.required<'income' | 'expenses' | 'balance'>();
}
