import { MarketData, TickerResponse, TickersInfo, IdMap } from "./types.js";

const CG_URL = `https://${
  process.env.is_cg_pro ? "pro-api" : "api"
}.coingecko.com/api/v3`;

const cg_headers: { [key: string]: string } = {
  accept: "application/json",
};

if (process.env.is_cg_pro) {
  if (process.env.cg_pro_api_key === undefined) {
    console.error("Missing coingecko pro api key");
  }
  cg_headers["x-cg-pro-api-key"] = process.env.cg_pro_api_key || "";
} else {
  if (process.env.cg_api_key === undefined) {
    console.error("Missing coingecko api key");
  }
  cg_headers["x-cg-demo-api-key"] = process.env.cg_api_key || "";
}

const getMarketData = async (
  ids: string[],
  vs: string = "usd"
): Promise<MarketData | null> => {
  const url = `${CG_URL}/coins/markets?vs_currency=${vs}&ids=${ids.join(
    "%2C"
  )}`;
  const options = {
    method: "GET",
    headers: cg_headers,
  };

  try {
    console.log("getMarketData", url);
    const res = await fetch(url, options);
    const json: MarketData[] = await res.json();
    if (json.length === 0) {
      return null;
    }
    const coin = json[0];
    return coin;
  } catch (err) {
    console.error("error:" + err);
    return null;
  }
};

// Not used
const getTickerData = async (id: string): Promise<TickersInfo[]> => {
  const url = `${CG_URL}/coins/${id}/tickers`;
  const options = {
    method: "GET",
    headers: cg_headers,
  };
  try {
    console.log("getTickerData", url);
    const res = await fetch(url, options);
    const json: TickerResponse = await res.json();
    return json.tickers;
  } catch (err) {
    console.error("error:" + err);
    return [];
  }
};

const getListData = async (): Promise<IdMap[]> => {
  const url = `${CG_URL}/coins/list`;
  const options = {
    method: "GET",
    headers: cg_headers,
  };
  try {
    console.log("getListData", url);
    const res = await fetch(url, options);
    const json: IdMap[] = await res.json();
    return json;
  } catch (err) {
    console.error("error:" + err);
    return [];
  }
};

export { getListData, getMarketData };
