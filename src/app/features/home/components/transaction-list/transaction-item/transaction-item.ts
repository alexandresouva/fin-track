import { CurrencyPipe, DatePipe } from '@angular/common';
import { Component, input } from '@angular/core';
import { MatIcon } from '@angular/material/icon';

import { Transaction } from '@features/home/models/transaction.model';

@Component({
  selector: 'app-transaction-item',
  imports: [DatePipe, CurrencyPipe, MatIcon],
  templateUrl: './transaction-item.html',
  styleUrl: './transaction-item.scss'
})
export class TransactionItem {
  readonly transaction = input.required<Transaction>();
}
