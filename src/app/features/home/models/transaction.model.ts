export type TransactionType = 'income' | 'expenses';

export type Transaction = {
  type: TransactionType;
  value: number;
};
