FROM node:20-alpine

WORKDIR /app

RUN mkdir -p /app

COPY package.json /app/

RUN npm cache clean \
  rm node_modules/ \
  npm install --frozen-lockfile

COPY . .

EXPOSE 8080

CMD [ "npm", "start" ]