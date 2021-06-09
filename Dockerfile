FROM node:12-alpine
WORKDIR /user/src/app
COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8080

CMD ["node", "app.js"]
