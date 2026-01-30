import { TestBed } from '@angular/core/testing';

import { Transaction } from '@features/home/models/transaction.model';
import { transactionsMock } from '@testing/mock-data/transactions.mock';

import { TransactionList } from './transaction-list';

function setup(transactions: Transaction[] = transactionsMock) {
  TestBed.configureTestingModule({
    imports: [TransactionList]
  });

  const fixture = TestBed.createComponent(TransactionList);
  const component = fixture.componentInstance;
  fixture.componentRef.setInput('transactions', transactions);
  fixture.detectChanges();

  return { component, fixture };
}

describe('TransactionList', () => {
  it('should create', () => {
    const { component } = setup();
    expect(component).toBeTruthy();
  });
});
