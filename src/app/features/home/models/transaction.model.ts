export type TransactionType = 'income' | 'expenses';

export interface Transaction {
  id: string;
  title: string;
  date: string;
  value: number;
  type: TransactionType;
}
