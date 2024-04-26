import { Button, Frog, TextInput } from "frog";
import { devtools } from "frog/dev";
import { serveStatic } from "frog/serve-static";
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
} from "./ui.js";

export const app = new Frog({
  ui: { vars },
  // Supply a Hub to enable frame verification.
  // hub: neynar({ apiKey: 'NEYNAR_FROG_FM' }),
});

app.frame("/coin/:ticker", (context) => {
  const { buttonValue, inputText, status } = context;

  const tickerFromRoute = context.req.param("ticker");

  const dataLabelComponent = (
    label: string,
    value: string,
    align: "left" | "center" | "right"
  ) => (
    <Column width="1/2" justifyContent="center">
      <Text size="14" align={align} color="grey">
        {label}
      </Text>
      <Text size="14" align={align}>
        {value}
      </Text>
    </Column>
  );

  return context.res({
    image: (
      <Box grow alignVertical="center" backgroundColor="white" padding="24">
        <Rows gap="4">
          <Row height="1/7">
            <Columns gap="4">
              {dataLabelComponent("MCAP", "$ 1,267,129,481,042", "left")}

              {dataLabelComponent("24H VOL", "$ 31,727,870,766", "right")}
            </Columns>
          </Row>
          <Row flexDirection="column" justifyContent="center" grow>
            <HStack gap="4">
              <img
                src={`https://assets.coingecko.com/coins/images/1/standard/bitcoin.png`}
                width={42}
                height={42}
                style={{ marginTop: 8 }}
              />
              <Heading size="24">Bitcoin {tickerFromRoute}</Heading>
            </HStack>

            <Heading size="32">$64,463.16</Heading>
          </Row>
          <Row height="1/6">
            <Columns paddingBottom="8">
              <Column
                background="light"
                height="8"
                width="1/1"
                borderRadius="4"
              >
                <Columns>
                  <Column
                    background="gradient"
                    height="8"
                    borderRadius="4"
                    width="28/52"
                  ></Column>
                </Columns>
              </Column>
            </Columns>
            <Columns gap="4">
              <Column width="1/3">
                <Text align="left">$62,923.66</Text>
              </Column>
              <Column width="1/3">
                <Text align="center">24h Range</Text>
              </Column>
              <Column width="1/3">
                <Text align="right">$65,069.02</Text>
              </Column>
            </Columns>
          </Row>
        </Rows>
      </Box>
    ),
    intents: [
      <TextInput placeholder="New ticker" />,
      <Button value="inEth">in ETH</Button>,
      <Button value="inSol">in SOL</Button>,
      <Button value="inBTC">in BTC</Button>,
      <Button value="inUSD">in USD</Button>,
    ],
  });
});

app.use("/*", serveStatic({ root: "./public" }));

devtools(app, { serveStatic });

if (typeof Bun !== "undefined") {
  Bun.serve({
    fetch: app.fetch,
    port: 3000,
  });
  console.log("Server is running on port 3000");
}
