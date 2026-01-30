import { Component, input } from '@angular/core';

import { Transaction } from '@features/home/models/transaction.model';

import { TransactionItem } from './transaction-item/transaction-item';

@Component({
  selector: 'app-transaction-list',
  imports: [TransactionItem],
  templateUrl: './transaction-list.html',
  styleUrl: './transaction-list.scss'
})
export class TransactionList {
  readonly transactions = input.required<Transaction[]>();
}
