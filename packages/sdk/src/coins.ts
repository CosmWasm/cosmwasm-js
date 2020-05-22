export interface Coin {
  readonly denom: string;
  readonly amount: string;
}

/** Creates a coin */
export function coin(amount: number, denom: string): Coin {
  return { amount: amount.toString(), denom: denom };
}

/** Creates a list of coins with one element */
export function coins(amount: number, denom: string): Coin[] {
  return [coin(amount, denom)];
}
