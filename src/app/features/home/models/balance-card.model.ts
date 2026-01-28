export type BalanceCardType = 'income' | 'expenses' | 'balance';

export type BalanceCardData = {
  header: string;
  amount: number;
  type: BalanceCardType;
};
