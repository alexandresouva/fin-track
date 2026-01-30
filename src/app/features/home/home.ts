import { Component, signal } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';

import { Balance } from './components/balance/balance';
import { TransactionList } from './components/transaction-list/transaction-list';
import { Transaction } from './models/transaction.model';

@Component({
  selector: 'app-home',
  imports: [MatGridListModule, Balance, TransactionList],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
  readonly transactions = signal<Transaction[]>([
    {
      id: '1',
      title: 'Salary',
      date: '2025-01-10',
      value: 3000,
      type: 'income'
    },
    {
      id: '2',
      title: 'Rent',
      date: '2025-01-12',
      value: 1200,
      type: 'expenses'
    },
    {
      id: '3',
      title: 'Groceries',
      date: '2025-01-15',
      value: 300,
      type: 'expenses'
    }
  ]);
}
