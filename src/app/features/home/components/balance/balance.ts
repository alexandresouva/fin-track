import { Component, input } from '@angular/core';

import { BalanceCardData } from '@features/home/models/balance-card.model';

import { BalanceCard } from './balance-card/balance-card';

@Component({
  selector: 'app-balance',
  imports: [BalanceCard],
  templateUrl: './balance.html',
  styleUrl: './balance.scss'
})
export class Balance {
  readonly balanceData = input<BalanceCardData[]>([]);
}
