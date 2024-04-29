FROM oven/bun

WORKDIR /usr/src/app

COPY package*.json ./
RUN bun install
COPY . .
ENV NODE_ENV production

CMD ["bun", "run", "src/index.tsx"]
