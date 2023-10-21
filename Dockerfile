FROM node:18.18.0

COPY package.json .

RUN yarn install

COPY . .

CMD ["yarn", "start"]