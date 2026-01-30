import { TestBed } from '@angular/core/testing';

import { Transaction } from '@features/home/models/transaction.model';
import { transactionsMock } from '@testing/mock-data/transactions.mock';

import { TransactionItem } from './transaction-item';

function setup(transaction: Transaction = transactionsMock[0]) {
  TestBed.configureTestingModule({
    imports: [TransactionItem]
  });

  const fixture = TestBed.createComponent(TransactionItem);
  const component = fixture.componentInstance;

  fixture.componentRef.setInput('transaction', transaction);
  fixture.detectChanges();

  return { component, fixture };
}

describe('TransactionItem', () => {
  it('should create', () => {
    const { component } = setup();
    expect(component).toBeTruthy();
  });
});
