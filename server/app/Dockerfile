FROM node:18

WORKDIR /app

COPY package*.json ./
RUN npm -g install pnpm
RUN pnpm install

COPY . .

RUN pnpm run build

CMD ["node", "./dist/index.js"]