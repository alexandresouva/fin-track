import { Transaction } from '@features/home/models/transaction.model';

export const transactionsMock: Transaction[] = [
  {
    id: 't-001',
    type: 'income',
    title: 'Salary',
    value: 3200,
    date: '2025-01-05'
  },
  {
    id: 't-002',
    type: 'income',
    title: 'Freelance Project',
    value: 850,
    date: '2025-01-12'
  },
  {
    id: 't-003',
    type: 'expenses',
    title: 'Rent',
    value: 1200,
    date: '2025-01-10'
  },
  {
    id: 't-004',
    type: 'expenses',
    title: 'Groceries',
    value: 320,
    date: '2025-01-15'
  },
  {
    id: 't-005',
    type: 'expenses',
    title: 'Internet & Utilities',
    value: 180,
    date: '2025-01-14'
  },
  {
    id: 't-006',
    type: 'expenses',
    title: 'Gym Membership',
    value: 95,
    date: '2025-01-08'
  }
];
