import { Component, signal } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';

import { Balance } from './components/balance/balance';
import { Transaction } from './models/transaction.model';

@Component({
  selector: 'app-home',
  imports: [MatGridListModule, Balance],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
  protected readonly transactions = signal<Transaction[]>([
    { type: 'income', value: 1000 },
    { type: 'expenses', value: 500 },
    { type: 'expenses', value: 2000 },
    { type: 'income', value: 300 }
  ]);
}
