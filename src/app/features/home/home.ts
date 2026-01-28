import { Component, signal } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';

import { Balance } from './components/balance/balance';
import { BalanceCardData } from './models/balance-card.model';

@Component({
  selector: 'app-home',
  imports: [MatGridListModule, Balance],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
  protected readonly balanceData = signal<BalanceCardData[]>([
    { header: 'Income', amount: 5000, type: 'income' },
    { header: 'Expenses', amount: 2000, type: 'expenses' },
    { header: 'Balance', amount: 2003000, type: 'balance' }
  ]);
}
