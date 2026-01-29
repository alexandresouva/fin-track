import { Component, computed, input } from '@angular/core';

import {
  Transaction,
  TransactionType
} from '@features/home/models/transaction.model';

import { BalanceCard } from './balance-card/balance-card';

@Component({
  selector: 'app-balance',
  imports: [BalanceCard],
  templateUrl: './balance.html',
  styleUrl: './balance.scss'
})
export class Balance {
  readonly transactions = input<Transaction[]>([]);

  protected readonly totalIncomes = computed<number>(() =>
    this.sumTransactions(this.transactions(), 'income')
  );
  protected readonly totalExpenses = computed<number>(() =>
    this.sumTransactions(this.transactions(), 'expenses')
  );
  protected readonly finalBalance = computed<number>(
    () => this.totalIncomes() - this.totalExpenses()
  );

  private sumTransactions(
    transactions: Transaction[],
    type: TransactionType
  ): number {
    return transactions
      .filter((transaction) => transaction.type === type)
      .reduce((acc, transaction) => acc + transaction.value, 0);
  }
}
