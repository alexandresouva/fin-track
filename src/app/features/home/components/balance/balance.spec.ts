import { TestBed } from '@angular/core/testing';

import { Transaction } from '@features/home/models/transaction.model';
import { transactionsMock } from '@testing/mock-data/transactions.mock';
import { TestHelper } from '@testing/test-helper/test-helper';

import { Balance } from './balance';
import { BalanceCard } from './balance-card/balance-card';

type SetupParams = {
  transactions?: Transaction[];
};

const defaultParams: SetupParams = {
  transactions: []
};

function setup({ transactions = [] }: SetupParams = defaultParams) {
  TestBed.configureTestingModule({
    imports: [Balance]
  });

  const fixture = TestBed.createComponent(Balance);
  const component = fixture.componentInstance;
  const testHelper = new TestHelper(fixture);

  fixture.componentRef.setInput('transactions', transactions);
  fixture.detectChanges();

  return { fixture, component, testHelper };
}

describe('Balance', () => {
  it('should create', () => {
    const { component } = setup();
    expect(component).toBeTruthy();
  });

  describe('should pass amounts', () => {
    it('should pass correct amounts to balance cards based on transactions', () => {
      const { testHelper } = setup({ transactions: transactionsMock });
      const getCard = (testId: string) =>
        testHelper.queries.getComponentInstance<BalanceCard>(testId);

      const incomesCard = getCard('balance-card-income');
      const expensesCard = getCard('balance-card-expenses');
      const balanceCard = getCard('balance-card-balance');

      expect(incomesCard?.amount()).toBe(4050);
      expect(expensesCard?.amount()).toBe(1795);
      expect(balanceCard?.amount()).toBe(2255);
    });
  });
});
