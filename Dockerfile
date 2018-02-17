FROM node:8.9.4
RUN mkdir /factlist-ui
WORKDIR /factlist-ui
ADD package.json ./
ADD yarn.lock ./

COPY . .
RUN yarn install && yarn build

CMD yarn start

EXPOSE 3000