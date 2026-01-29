import { TestBed } from '@angular/core/testing';

import { TestHelper } from '@testing/test-helper/test-helper';

import { BalanceCard } from './balance-card';

type SetupParams = {
  header: string;
  amount: number;
  type: 'income' | 'expenses' | 'balance';
};

const initialSetup: SetupParams = {
  header: 'Initial header',
  amount: 100,
  type: 'balance'
};

function setup({ header, amount, type }: SetupParams = initialSetup) {
  const fixture = TestBed.createComponent(BalanceCard);
  const component = fixture.componentInstance;
  const testHelper = new TestHelper(fixture);

  fixture.componentRef.setInput('header', header);
  fixture.componentRef.setInput('amount', amount);
  fixture.componentRef.setInput('type', type);
  fixture.detectChanges();

  return { fixture, component, testHelper };
}

describe('BalanceCard', () => {
  it('should create', () => {
    const { component } = setup(initialSetup);
    expect(component).toBeTruthy();
  });

  describe('rendering', () => {
    const newParams: SetupParams = {
      header: 'Fake header',
      amount: 100,
      type: 'balance'
    };

    it('should render received header', () => {
      const { testHelper } = setup(newParams);

      const title = testHelper.queries.getTextContent('balance-card-title');
      expect(title).toBe('Fake header');
    });

    it('should render received amount', () => {
      const { testHelper } = setup();

      const amount = testHelper.queries.getTextContent('balance-card-amount');
      expect(amount).toContain('100');
    });
  });

  describe('type variations', () => {
    const cases: Array<{
      type: SetupParams['type'];
      expectedClass: string;
    }> = [
      { type: 'income', expectedClass: 'balance-card--income' },
      { type: 'expenses', expectedClass: 'balance-card--expenses' },
      { type: 'balance', expectedClass: 'balance-card--balance' }
    ];

    cases.forEach(({ type, expectedClass }) => {
      it(`should apply "${expectedClass}" when type is "${type}"`, () => {
        const { fixture } = setup({ ...initialSetup, type });

        const host = fixture.nativeElement as HTMLElement;
        const card = host.querySelector('mat-card');
        expect(card?.classList).toContain(expectedClass);
      });
    });
  });
});
