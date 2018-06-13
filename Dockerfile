FROM node:9.11.2-alpine

WORKDIR /app
COPY package.json .
RUN npm install
COPY . .

CMD npm test --reporter min
