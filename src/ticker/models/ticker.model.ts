export class Ticker {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  total_supply: number;
  max_supply: number;
  beta_value: number;
  first_data_at: string;
  last_updated: string;
  quotes: Quote;

  constructor(data: Partial<Ticker>) {
    Object.assign(this, data);
  }
}

export class Quote {
  USD: USDQuote;

  constructor(data: Partial<Quote>) {
    Object.assign(this, data);
  }
}

export class USDQuote {
  price: number;
  volume_24h: number;
  volume_24h_change_24h: number;
  market_cap: number;
  market_cap_change_24h: number;
  percent_change_15m: number;
  percent_change_30m: number;
  percent_change_1h: number;
  percent_change_6h: number;
  percent_change_12h: number;
  percent_change_24h: number;
  percent_change_7d: number;
  percent_change_30d: number;
  percent_change_1y: number;
  ath_price: number;
  ath_date: string;
  percent_from_price_ath: number;

  constructor(data: Partial<USDQuote>) {
    Object.assign(this, data);
  }
}