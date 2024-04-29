import { Button, FrameContext, Frog, TextInput } from "frog";
import { devtools } from "frog/dev";
import { serveStatic } from "frog/serve-static";
import {
  encodeToBase64,
  decodeFromBase64,
  formatCurrency,
  formatDate,
} from "./helpers.js";

import { SimpleCache } from "./cache.js";
import { getMarketData, getListData } from "./network.js";

import {
  Box,
  Heading,
  Text,
  HStack,
  Rows,
  Row,
  Columns,
  Column,
  vars,
  VStack,
} from "./ui.js";

import { MarketData, IdMap } from "./types.js";

const LIST_CACHE = new SimpleCache<IdMap[]>(120);
const MARKET_CACHE = new SimpleCache<MarketData>(120);

export const app = new Frog({
  ui: { vars },
});

const getIntents = (c: FrameContext, ticker: string, coin: MarketData) => {
  const now = new Date();
  const path = `/snapshot/${encodeToBase64(
    ticker + "_" + (now.getTime() / 1000).toFixed(0)
  )}`;

  return [
    <TextInput placeholder="Change ticker: btc, eth, etc" />,
    <Button value="inUsd">Refresh/Change</Button>,
    c.status === "response" && (
      <Button.Link
        href={`https://warpcast.com/~/compose?text=${coin.name} price now https://coinframes.xyz${path}`}
      >
        Cast Update
      </Button.Link>
    ),
  ];
};

const dataLabelComponent = (
  label: string,
  value: string,
  align: "left" | "center" | "right"
) => (
  <Column width="1/2" justifyContent="center">
    <VStack gap="2">
      <Text size="24" align={align} color="grey">
        {value}
      </Text>
      <Text size="24" align={align} color="purple">
        {label}
      </Text>
    </VStack>
  </Column>
);

const tickerFrame = async (c: FrameContext) => {
  const now = new Date();
  const { inputText } = c;

  const snapshotHash = c.initialPath.split("/snapshot/");

  const decodedData =
    snapshotHash.length == 2 ? decodeFromBase64(snapshotHash[1]) : null;

  const ticker =
    inputText ||
    (decodedData && decodedData.includes("_")
      ? decodedData.split("_")[0]
      : null) ||
    "btc";

  const cachedCoinList = LIST_CACHE.get("entire_list");
  if (!cachedCoinList) {
    let coinList = await getListData();
    if (coinList.length > 0) {
      LIST_CACHE.set("entire_list", coinList);
    }
  }

  const coinList = LIST_CACHE.get("entire_list");
  if (!coinList) {
    return c.res({
      image: <Text>Issue</Text>,
      intents: [],
    });
  }

  const idList = coinList
    .filter((item: IdMap) => item.symbol === ticker)
    .map((i: IdMap) => i.id);

  const key = idList.join("%2C");
  const cachedCoin = MARKET_CACHE.get(key);
  if (!cachedCoin) {
    let coin = await getMarketData(idList);
    if (coin) {
      MARKET_CACHE.set(key, coin);
    }
  }
  const coin = MARKET_CACHE.get(key);

  MARKET_CACHE.cleanup();

  if (!coin) {
    return c.res({
      image: <Text>Invalid ticker</Text>,
      intents: [
        <TextInput placeholder="Change ticker" />,
        <Button value="inUsd">Change Ticker</Button>,
      ],
    });
  }

  const decimalPoints =
    coin.current_price < 1 ? (coin.current_price < 0.001 ? 8 : 4) : 2;

  return c.res({
    image: (
      <Box
        grow
        alignVertical="center"
        backgroundColor="light"
        padding="18"
        paddingBottom="26"
        marginTop="2"
        marginBottom="2"
        borderColor="purple"
        borderWidth="4"
        borderRadius="10"
      >
        <Rows gap="4">
          <Row height="1/5">
            <Columns gap="4">
              {dataLabelComponent(
                "MCAP",
                `${formatCurrency(coin.market_cap, 0)}`,
                "left"
              )}
              {dataLabelComponent("UTC", `${formatDate(now)}`, "right")}
            </Columns>
          </Row>
          <Row flexDirection="column" justifyContent="center" grow>
            <Columns></Columns>
            <HStack gap="4" paddingTop="20">
              <img
                src={coin.image}
                width={54}
                height={54}
                style={{ marginTop: 12 }}
              />
              <Heading size="32">{coin.name}</Heading>
              <svg
                focusable="false"
                aria-hidden="true"
                viewBox="0 0 18 18"
                data-testid="ArrowDropDownIcon"
                style={{
                  width: 54,
                  height: 54,
                  marginRight: 10,
                  marginLeft: 10,
                }}
              >
                {coin.price_change_percentage_24h > 0 ? (
                  <path d="m7 14 5-5 5 5z" fill="#00a83e" />
                ) : (
                  <path d="m7 10 5 5 5-5z" fill="#ff3a33" />
                )}
              </svg>

              <Heading
                size="32"
                color={coin.price_change_percentage_24h > 0 ? "up" : "down"}
              >
                {coin.price_change_percentage_24h.toFixed(2)}%
              </Heading>
            </HStack>

            <Heading size="48">
              {formatCurrency(coin.current_price, decimalPoints)}
            </Heading>
          </Row>
          <Row height="1/4">
            <Columns paddingBottom="6">
              <Column
                background="white"
                height="16"
                width="1/1"
                borderRadius="8"
              >
                <Columns>
                  {coin.current_price < coin.low_24h ? (
                    <Column
                      background="gradient"
                      height="16"
                      borderRadius="8"
                      width="0/1"
                    ></Column>
                  ) : (
                    <Column
                      background="gradient"
                      height="16"
                      borderRadius="8"
                      width={`${coin.current_price - coin.low_24h}/${
                        coin.high_24h - coin.low_24h
                      }`}
                    ></Column>
                  )}
                </Columns>
              </Column>
            </Columns>
            <Columns>
              <Column width="1/3">
                <Text size="24" color="grey">
                  {formatCurrency(coin.low_24h, decimalPoints)}
                </Text>
              </Column>
              <Column width="1/3">
                <Text size="24" align="center" color="purple">
                  24H RANGE
                </Text>
              </Column>
              <Column width="1/3">
                <Text size="24" color="grey" align="right">
                  {formatCurrency(coin.high_24h, decimalPoints)}
                </Text>
              </Column>
            </Columns>
          </Row>
        </Rows>
      </Box>
    ),
    intents: getIntents(c, ticker, coin),
  });
};

app.frame("/snapshot", tickerFrame);
app.frame("/snapshot/:hash", tickerFrame);
app.use("/*", serveStatic({ root: "./public" }));
devtools(app, { serveStatic });

const NODE_ENV = process.env.NODE_ENV ?? "development";
const PORT: number = +(process.env.PORT || 8081);

if (typeof Bun !== "undefined") {
  Bun.serve({
    fetch: app.fetch,
    port: PORT,
  });
  console.log(`[${NODE_ENV}] Serving http://localhost:${PORT}`);
}
