export interface MarketData {
  id: string;
  symbol: string;
  name: string;
  image: string;
  current_price: number;
  market_cap: number;
  market_cap_rank: number | null;
  fully_diluted_valuation: number | null;
  total_volume: number;
  high_24h: number;
  low_24h: number;
  price_change_24h: number;
  price_change_percentage_24h: number;
  market_cap_change_24h: number;
  market_cap_change_percentage_24h: number;
  circulating_supply: number;
  total_supply: number | null;
  max_supply: number | null;
  ath: number;
  ath_change_percentage: number;
  ath_date: string;
  atl: number;
  atl_change_percentage: number;
  atl_date: string;
  roi: any | null;
  last_updated: string;
  tickers: TickersInfo[];
}

export interface IdMap {
  id: string;
  symbol: string;
  name: string;
}

export interface TickerResponse {
  name: string;
  tickers: TickersInfo[];
}
export interface TickersInfo {
  base: string;
  target: string;
  market: MarketInfo;
  last: number;
  volume: number;
  converted_last: ConvertedObject;
  converted_volume: ConvertedObject;
  trust_score: string;
  bid_ask_spread_percentage: number;
  timestamp: string;
  last_traded_at: string;
  last_fetch_at: string;
  is_anomaly: boolean;
  is_stale: boolean;
  trade_url: string;
  token_info_url: string | null;
  coin_id: string;
  target_coin_id: string;
}

interface MarketInfo {
  name: string;
  identifier: string;
  has_trading_incentive: boolean;
}

interface ConvertedObject {
  btc: number;
  eth: number;
  usd: number;
}
